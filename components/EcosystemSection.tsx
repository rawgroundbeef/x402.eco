import Image from "next/image";
import { getEntriesByCategory } from "@/lib/ecosystem";
import { CATEGORIES, CategorySlug, EcosystemEntry } from "@/lib/types/ecosystem";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";

/**
 * EcosystemSection - Server Component
 *
 * Loads ecosystem entries from JSON files at build time and renders
 * them in a grid organized by category.
 */
export function EcosystemSection() {
  // Load entries for each category at build time
  const categoriesWithEntries = CATEGORIES.map((categoryMeta) => ({
    category: categoryMeta,
    entries: getEntriesByCategory(categoryMeta.slug),
  })).filter(({ entries }) => entries.length > 0); // Filter out empty categories

  return (
    <section id="ecosystem" className="py-16 md:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl text-text mb-3">
              Who&apos;s Building
            </h2>
            <p className="text-text-muted max-w-xl">
              A growing ecosystem of tools, services, and infrastructure
              enabling the x402 economy.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {categoriesWithEntries.map(({ category, entries }) => (
            <FadeInStaggerItem key={category.slug}>
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {entries.map((entry) => (
                  <a
                    key={entry.name}
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-card border border-border rounded-xl card-hover group"
                  >
                    <div className="flex items-start gap-3">
                      {/* Logo or fallback */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-card/50 border border-border flex items-center justify-center overflow-hidden">
                        {entry.logo ? (
                          <Image
                            src={entry.logo}
                            alt={`${entry.name} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-lg font-semibold text-text-muted">
                            {entry.name.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-text group-hover:text-accent transition-colors">
                            {entry.name}
                          </h4>
                          <svg
                            className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-text-muted mt-1">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://x402.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View Full Directory
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
