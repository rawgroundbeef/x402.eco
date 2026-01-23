/**
 * Ecosystem Entry Types
 *
 * Type definitions for file-based ecosystem entries.
 * Each ecosystem project is stored as a JSON file in data/ecosystem/{category}/
 */

/**
 * Category slug - matches directory names in data/ecosystem/
 */
export type CategorySlug =
  | "client-integrations"
  | "services-endpoints"
  | "infrastructure-tooling"
  | "facilitators"
  | "learning-community";

/**
 * A single ecosystem entry (e.g., a project, tool, or resource)
 */
export interface EcosystemEntry {
  /** Display name of the project */
  name: string;
  /** Brief description of what the project does */
  description: string;
  /** Primary URL (website, repo, or documentation) */
  url: string;
  /** Category this entry belongs to */
  category: CategorySlug;
  /** Optional logo path relative to public/ (e.g., "/logos/project-name.png") */
  logo?: string | null;
  /** Optional tags for filtering and search */
  tags?: string[];
}

/**
 * Category metadata for display purposes
 */
export interface CategoryMeta {
  /** URL-friendly slug matching directory name */
  slug: CategorySlug;
  /** Human-readable title for display */
  title: string;
  /** Brief description of the category */
  description: string;
}

/**
 * All ecosystem categories with display metadata
 */
export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "client-integrations",
    title: "Client-Side Integrations",
    description:
      "Libraries and SDKs for integrating x402 payments into applications",
  },
  {
    slug: "services-endpoints",
    title: "Services & Endpoints",
    description: "APIs and services that accept x402 payments",
  },
  {
    slug: "infrastructure-tooling",
    title: "Infrastructure & Tooling",
    description: "Tools for building and operating x402-enabled services",
  },
  {
    slug: "facilitators",
    title: "Facilitators",
    description: "Payment verification and settlement services for x402",
  },
  {
    slug: "learning-community",
    title: "Learning & Community",
    description: "Documentation, tutorials, and community resources",
  },
];
