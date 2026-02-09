/**
 * Ecosystem Data Loader
 *
 * Functions to load ecosystem entries from JSON files at build time.
 * Uses synchronous fs methods since this runs during static generation.
 */

import fs from "fs";
import path from "path";
import {
  EcosystemEntry,
  CategorySlug,
  CATEGORIES,
} from "./types/ecosystem";

/**
 * Get the path to the ecosystem data directory
 */
function getEcosystemDataPath(): string {
  return path.join(process.cwd(), "data", "ecosystem");
}

/**
 * Load all ecosystem entries for a specific category
 *
 * @param category - The category slug to load entries for
 * @returns Array of EcosystemEntry objects for that category
 */
export function getEntriesByCategory(category: CategorySlug): EcosystemEntry[] {
  const categoryPath = path.join(getEcosystemDataPath(), category);

  // If directory doesn't exist, return empty array
  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const entries: EcosystemEntry[] = [];

  try {
    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      // Skip non-JSON files (like .gitkeep)
      if (!file.endsWith(".json")) {
        continue;
      }

      const filePath = path.join(categoryPath, file);

      try {
        const content = fs.readFileSync(filePath, "utf-8");
        const entry = JSON.parse(content) as EcosystemEntry;
        entries.push(entry);
      } catch (parseError) {
        console.warn(`Warning: Failed to parse ${filePath}:`, parseError);
        // Skip malformed files
      }
    }
  } catch (readError) {
    console.warn(`Warning: Failed to read directory ${categoryPath}:`, readError);
    return [];
  }

  // Sort alphabetically by name
  return entries.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Load all ecosystem entries across all categories
 *
 * @returns Array of all EcosystemEntry objects
 */
export function getAllEntries(): EcosystemEntry[] {
  const allEntries: EcosystemEntry[] = [];

  for (const categoryMeta of CATEGORIES) {
    const categoryEntries = getEntriesByCategory(categoryMeta.slug);
    allEntries.push(...categoryEntries);
  }

  return allEntries;
}

/**
 * Get all ecosystem entries organized by category
 *
 * @returns Map with category slugs as keys and entry arrays as values
 */
export function getEcosystemByCategory(): Map<CategorySlug, EcosystemEntry[]> {
  const result = new Map<CategorySlug, EcosystemEntry[]>();

  for (const categoryMeta of CATEGORIES) {
    const entries = getEntriesByCategory(categoryMeta.slug);
    result.set(categoryMeta.slug, entries);
  }

  return result;
}
