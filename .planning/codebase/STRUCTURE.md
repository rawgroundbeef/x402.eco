# Codebase Structure

**Analysis Date:** 2026-01-23

## Directory Layout

```
x402eco/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx          # Root layout with fonts, metadata, theme provider
│   ├── page.tsx            # Main home page (marketing site)
│   └── globals.css         # Global styles, theme variables, animations
├── components/             # Reusable React components
│   ├── FadeIn.tsx          # Scroll-triggered fade animation components
│   ├── FadeInStagger.tsx   # Staggered animation wrapper
│   ├── ThemeProvider.tsx   # next-themes provider wrapper
│   ├── ThemeToggle.tsx     # Light/dark mode toggle button
│   ├── InfoButton.tsx      # Interactive info icon buttons
│   ├── Logo.tsx            # x402 logo SVG component
│   ├── EducationalDialog.tsx # Modal dialog for educational content
│   ├── Sparkline.tsx       # Minimal area chart (30-day trend)
│   ├── FacilitatorChart.tsx # Larger area chart for selected facilitator
│   └── FlowDiagram.tsx     # Reserved component (not in use)
├── lib/                    # Utilities and data
│   └── data.ts             # Type definitions and static data (facilitators, resources, servers)
├── public/                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .planning/              # GSD planning documents
│   └── codebase/           # Analysis output
├── node_modules/           # Dependencies (pnpm)
├── .git/                   # Git version control
├── package.json            # Project metadata and dependencies
├── pnpm-lock.yaml          # pnpm dependency lockfile
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration for Tailwind
├── eslint.config.mjs       # ESLint configuration
└── README.md               # Project documentation
```

## Directory Purposes

**app/ - Next.js App Router:**
- Purpose: Define routes, layouts, and page components
- Contains: Server and client components, styling, metadata
- Key files: `layout.tsx` (root layout with providers), `page.tsx` (home page), `globals.css` (theme and animations)

**components/ - UI Component Library:**
- Purpose: Reusable React components built with Tailwind CSS and Framer Motion
- Contains: Presentation components, animation wrappers, dialog modals, charts
- Key files: Animation components (FadeIn*, EducationalDialog, Sparkline, FacilitatorChart)

**lib/ - Utilities and Domain Layer:**
- Purpose: TypeScript interfaces, static data, helper functions
- Contains: Type definitions for Facilitator, Server, Resource, EcosystemProject; static data arrays; sparkline generation logic
- Key files: `data.ts` (all types and static content)

**public/ - Static Assets:**
- Purpose: SVG graphics and media files served as-is
- Contains: Logo variants, placeholder graphics
- Committed: Yes, all tracked in git

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root layout - initializes fonts, metadata, ThemeProvider
- `app/page.tsx`: Main page component - renders 6-section marketing site with state management

**Configuration:**
- `tsconfig.json`: TypeScript compiler options, path aliases (`@/*`)
- `next.config.ts`: Next.js settings (currently empty)
- `postcss.config.mjs`: PostCSS/Tailwind setup
- `eslint.config.mjs`: Linting rules
- `package.json`: Dependencies (Next.js, React, Framer Motion, recharts, Tailwind CSS v4, next-themes)

**Core Logic:**
- `lib/data.ts`: All domain types and static data
- `components/FadeIn.tsx`: Reusable animation logic
- `components/EducationalDialog.tsx`: Modal dialog with content rendering

**Styling:**
- `app/globals.css`: Tailwind imports, CSS variables, animations, utility classes
- Component classes: Inline Tailwind via className attributes (no CSS modules)

**Testing:**
- Not applicable - no test files present (no `*.test.ts`, `*.spec.ts`, or test directory)

## Naming Conventions

**Files:**
- PascalCase for component files: `FadeIn.tsx`, `InfoButton.tsx`, `EducationalDialog.tsx`
- camelCase for utility files: `data.ts`
- lowercase for config: `next.config.ts`, `tsconfig.json`

**Directories:**
- lowercase plural or singular: `app`, `components`, `lib`, `public`
- Feature/domain names: None (flat structure for this small app)

**Components:**
- Exported as named exports: `export function ComponentName() { }`
- Props interfaces: `ComponentNameProps` pattern

**Types:**
- Interface names: PascalCase, suffix with `-able` or bare noun: `Facilitator`, `Server`, `Resource`, `EcosystemProject`
- Category type: `EcosystemCategory` for collections

## Where to Add New Code

**New Feature (Page):**
- Primary code: Create route directory in `app/` with `page.tsx`
- Styling: Add to `app/globals.css` or component-level with Tailwind
- Types: Add to `lib/data.ts` if domain-related, otherwise in component file

**New Component/Module:**
- Implementation: `components/ComponentName.tsx` (for reusable UI)
- Or: Inline in `app/page.tsx` if page-specific
- Styling: Use Tailwind className, custom animations in `globals.css` if shared

**Utilities:**
- Shared helpers: `lib/` directory (create subdirectories as needed)
- Animation logic: Extend `components/FadeIn.tsx` or create new animation component
- Data helpers: Add to `lib/data.ts`

**Styling:**
- Global/shared: `app/globals.css` (Tailwind @theme, animations, utility classes)
- Component-scoped: Inline Tailwind classes in JSX
- Dynamic theme colors: Use Tailwind-generated classes with dark mode prefix

**New Static Data:**
- Add to `lib/data.ts`: Define interface, export const array
- Update `app/page.tsx`: Import and render

## Special Directories

**node_modules/:**
- Purpose: Installed npm dependencies via pnpm
- Generated: Yes (run `pnpm install`)
- Committed: No (in .gitignore)

**.next/:**
- Purpose: Next.js build cache and generated types
- Generated: Yes (by `npm run build` or `npm run dev`)
- Committed: No (in .gitignore)

**.planning/:**
- Purpose: GSD (Grand Shared Delivery) planning and codebase analysis documents
- Committed: Yes (user-created planning files)

**.git/:**
- Purpose: Version control metadata
- Committed: Yes (git history)

## Type Paths and Aliases

**Path Aliases (tsconfig.json):**
- `@/*` → `./*` (root directory)

**Usage:**
```typescript
import { Facilitator } from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";
```

## Build and Output

**Development:**
- Run: `npm run dev`
- Output: http://localhost:3000 (hot reload enabled)

**Production:**
- Build: `npm run build`
- Output: `.next/` directory with optimized bundles
- Start: `npm run start` (production server)

**Linting:**
- Run: `npm run lint`
- Config: `eslint.config.mjs`

---

*Structure analysis: 2026-01-23*
