# External Integrations

**Analysis Date:** 2026-01-23

## APIs & External Services

**GitHub:**
- x402-fetch SDK - Drop-in fetch wrapper with automatic 402 payment handling
  - SDK/Client: Referenced but not installed as dependency
  - Repository: https://github.com/anthropics/x402-fetch
  - Auth: None (documentation/reference only)

**Google Fonts:**
- DM Serif Display - Serif font for headers
  - Loaded via `next/font/google` in `app/layout.tsx`
  - Display strategy: swap (shows fallback immediately)
- Source Sans 3 - Primary sans-serif font for body text
  - Loaded via `next/font/google` in `app/layout.tsx`
  - Display strategy: swap
  - Weights: 400, 500, 600

## Data Storage

**Databases:**
- None detected - This is a static educational website
- All data is hardcoded in `lib/data.ts` (stats, facilitators, servers, resources, educational content)
- No ORM or database client present

**File Storage:**
- Local static assets only
- Public directory: `public/` (contains favicon.ico)
- Generated static build output: `.next/` (in gitignore)

**Caching:**
- Client-side state management via React hooks (useState)
- No caching libraries or Redis integration detected
- Next.js built-in caching for static assets and images

## Authentication & Identity

**Auth Provider:**
- None - Website is publicly accessible
- No authentication mechanism implemented
- No auth middleware or protected routes

**Authorization:**
- Not applicable (public educational site)

## Monitoring & Observability

**Error Tracking:**
- None detected
- No Sentry, DataDog, or similar error tracking service integrated

**Logs:**
- Console logging only (implicit via browser console)
- No structured logging or log aggregation
- Development mode logging via Next.js dev server

**Analytics:**
- None detected
- No Google Analytics, Mixpanel, or similar tracking integrated

## CI/CD & Deployment

**Hosting:**
- Vercel (implied by `.vercel` in `.gitignore` and Next.js framework choice)
- Can be deployed to any Node.js hosting platform
- No Docker configuration present

**CI Pipeline:**
- None detected - No GitHub Actions, GitLab CI, or similar workflows
- Vercel auto-deployment on git push (if configured in Vercel dashboard)

**Build Output:**
- Static HTML/CSS/JS generation via Next.js build
- Output directory: `.next/` (during build)

## Environment Configuration

**Required env vars:**
- None required for this static site
- Environment variables are read but not used in current codebase
- `.env*` files are in gitignore (not committed)

**Secrets location:**
- No secrets currently managed
- Should use `.env.local` (local-only, not committed) for any future secrets
- Vercel Environment Variables for production secrets (if needed)

## Webhooks & Callbacks

**Incoming:**
- None - This is a static site with no backend APIs

**Outgoing:**
- None - No external service calls from the application
- Educational links point to external GitHub repositories (no webhooks)

## Third-Party Libraries Integration

**Theme Management:**
- next-themes via `ThemeProvider` component in `app/layout.tsx`
- Detects system preference, allows manual toggle
- Persists selection to localStorage
- No API calls to third-party theme service

**Data Visualization:**
- Recharts for transaction volume charts in facilitator section
- Uses local component state and hardcoded data from `lib/data.ts`
- No external data source

**Motion/Animation:**
- Framer Motion for fade-in animations and stagger effects
- Client-side animation (no server dependency)
- Uses React hooks for animation control

## Font Delivery

**Font Hosting:**
- Google Fonts API (automatic via next/font/google)
- Fonts are downloaded at build time and self-hosted by Vercel/deployment platform
- No external font CDN requests at runtime
- WOFF2 format for optimal performance

## External Documentation & References

**GitHub Repositories (referenced, not integrated):**
- https://github.com/anthropics/x402-fetch - Referenced in educational content
- No direct SDK integration currently
- Provides context for the x402 payment protocol being explained

---

*Integration audit: 2026-01-23*
