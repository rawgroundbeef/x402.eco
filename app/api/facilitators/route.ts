import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

interface AlliumRow {
  ts: string;
  chain: string;
  facilitator: string;
  transactions: number;
  volume: number;
}

interface AlliumResponse {
  data: AlliumRow[];
}

interface CachedData {
  data: AlliumResponse;
  timestamp: number;
}

const CACHE_KEY = 'facilitators-data';
const CACHE_TTL = 60 * 60; // 1 hour in seconds

const ALLIUM_ENDPOINT = 'https://api.allium.so/api/v1/explorer/queries/tZrCe3GI79Yym6eG0glp/run';

// Initialize Redis client (lazy - only if env vars are set)
function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }
  return new Redis({ url, token });
}

// In-memory fallback cache (for local dev or if Redis unavailable)
let memoryCache: CachedData | null = null;

export async function GET() {
  const redis = getRedis();

  // Try to get from Redis cache first
  if (redis) {
    try {
      const cached = await redis.get<CachedData>(CACHE_KEY);
      if (cached && Date.now() - cached.timestamp < CACHE_TTL * 1000) {
        return NextResponse.json(cached.data, {
          headers: {
            'X-Cache': 'HIT',
            'X-Cache-Source': 'redis',
            'X-Cache-Age': String(Math.floor((Date.now() - cached.timestamp) / 1000)),
          },
        });
      }
    } catch (e) {
      console.error('Redis read error:', e);
    }
  }

  // Fallback to memory cache
  if (memoryCache && Date.now() - memoryCache.timestamp < CACHE_TTL * 1000) {
    return NextResponse.json(memoryCache.data, {
      headers: {
        'X-Cache': 'HIT',
        'X-Cache-Source': 'memory',
        'X-Cache-Age': String(Math.floor((Date.now() - memoryCache.timestamp) / 1000)),
      },
    });
  }

  const apiKey = process.env.ALLIUM_API_KEY;

  if (!apiKey) {
    console.error('ALLIUM_API_KEY environment variable is not set');
    // Return stale cache if available
    if (memoryCache) {
      return NextResponse.json(memoryCache.data, {
        headers: {
          'X-Cache': 'STALE',
          'X-Cache-Reason': 'missing-api-key',
        },
      });
    }
    return NextResponse.json(
      { error: 'API configuration error' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(ALLIUM_ENDPOINT, {
      method: 'POST',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!res.ok) {
      throw new Error(`Allium API error: ${res.status} ${res.statusText}`);
    }

    const data = (await res.json()) as AlliumResponse;

    // Validate response structure
    if (!data || !Array.isArray(data.data)) {
      throw new Error('Invalid response structure from Allium API');
    }

    const cacheEntry: CachedData = { data, timestamp: Date.now() };

    // Store in Redis
    if (redis) {
      try {
        await redis.set(CACHE_KEY, cacheEntry, { ex: CACHE_TTL });
      } catch (e) {
        console.error('Redis write error:', e);
      }
    }

    // Also store in memory as fallback
    memoryCache = cacheEntry;

    return NextResponse.json(data, {
      headers: {
        'X-Cache': 'MISS',
      },
    });
  } catch (error) {
    console.error('Failed to fetch from Allium:', error);

    // Try Redis stale cache
    if (redis) {
      try {
        const stale = await redis.get<CachedData>(CACHE_KEY);
        if (stale) {
          return NextResponse.json(stale.data, {
            headers: {
              'X-Cache': 'STALE',
              'X-Cache-Source': 'redis',
              'X-Cache-Reason': 'fetch-error',
            },
          });
        }
      } catch (e) {
        console.error('Redis stale read error:', e);
      }
    }

    // Fallback to memory stale cache
    if (memoryCache) {
      return NextResponse.json(memoryCache.data, {
        headers: {
          'X-Cache': 'STALE',
          'X-Cache-Source': 'memory',
          'X-Cache-Reason': 'fetch-error',
        },
      });
    }

    return NextResponse.json(
      { error: 'Failed to fetch facilitator data' },
      { status: 500 }
    );
  }
}
