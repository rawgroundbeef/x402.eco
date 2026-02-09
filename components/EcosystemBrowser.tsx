"use client";

import { useState } from "react";
import { EcosystemEntry, CategoryMeta } from "@/lib/types/ecosystem";

interface CategoryWithEntries {
  category: CategoryMeta;
  entries: EcosystemEntry[];
}

interface EcosystemBrowserProps {
  categoriesWithEntries: CategoryWithEntries[];
}

const INITIAL_COUNT = 16;
const LOAD_MORE_COUNT = 12;

export function EcosystemBrowser({ categoriesWithEntries }: EcosystemBrowserProps) {
  const [activeCategory, setActiveCategory] = useState(categoriesWithEntries[0]?.category.slug || "");
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    categoriesWithEntries.forEach(({ category }) => {
      counts[category.slug] = INITIAL_COUNT;
    });
    return counts;
  });

  const activeData = categoriesWithEntries.find(
    ({ category }) => category.slug === activeCategory
  );

  const handleShowMore = () => {
    setVisibleCounts((prev) => ({
      ...prev,
      [activeCategory]: prev[activeCategory] + LOAD_MORE_COUNT,
    }));
  };

  if (!activeData) return null;

  const visibleEntries = activeData.entries.slice(0, visibleCounts[activeCategory]);
  const hasMore = visibleCounts[activeCategory] < activeData.entries.length;
  const remaining = activeData.entries.length - visibleCounts[activeCategory];

  return (
    <div>
      {/* Horizontal Pill Tab Row */}
      <div className="relative mb-6">
        {/* Scroll container */}
        <div
          className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {categoriesWithEntries.map(({ category, entries }) => {
            const isActive = activeCategory === category.slug;
            return (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-md text-[11px] tracking-[1.5px] uppercase
                  font-mono transition-all duration-150 cursor-pointer whitespace-nowrap
                  ${isActive
                    ? "bg-accent text-[#1a1a1a] border border-accent font-medium"
                    : "bg-transparent border border-border text-gray hover:border-border-light hover:text-cream"
                  }
                `}
              >
                <span>{category.shortTitle}</span>
                <span className={`ml-1.5 ${isActive ? "opacity-80" : "opacity-60"}`}>
                  {entries.length}
                </span>
              </button>
            );
          })}
        </div>
        {/* Right fade gradient for scroll affordance on mobile */}
        <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-surface-card/50 to-transparent pointer-events-none md:hidden" />
      </div>

      {/* Full-width Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {visibleEntries.map((entry) => (
          <a
            key={entry.name}
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-surface-card border border-border rounded-xl hover:border-accent/50 transition-colors group"
          >
            <div className="flex items-start gap-3">
              {entry.logo ? (
                <img
                  src={entry.logo}
                  alt={`${entry.name} logo`}
                  className="w-10 h-10 rounded-lg object-contain flex-shrink-0 bg-white/5"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-medium text-sm">
                    {entry.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-text group-hover:text-accent transition-colors">
                    {entry.name}
                  </h4>
                  <svg
                    className="w-4 h-4 text-gray-dim group-hover:text-accent transition-colors flex-shrink-0 mt-0.5"
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
                <p className="text-sm text-gray mt-1 line-clamp-2">
                  {entry.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      {hasMore && (
        <button
          onClick={handleShowMore}
          className="mt-4 w-full py-3 text-sm text-gray hover:text-accent border border-border hover:border-accent/50 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Show {Math.min(remaining, LOAD_MORE_COUNT)} more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}
