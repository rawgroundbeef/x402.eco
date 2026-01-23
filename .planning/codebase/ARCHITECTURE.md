# Architecture

**Analysis Date:** 2026-01-23

## Pattern Overview

**Overall:** Server-Side Rendering (SSR) Educational/Marketing Site with Client-Side Interactivity

**Key Characteristics:**
- Next.js 16 App Router for routing and rendering
- Single-page marketing website with multiple scrollable sections
- Client-side state management for modal dialogs and feature selection
- Heavy use of Framer Motion for scroll-triggered animations
- Static data layer with interface types for domain objects
- Theme-aware component system with light/dark mode support

## Layers

**Presentation Layer (Components):**
- Purpose: Render UI components with styling and interactivity
- Location: `components/`
- Contains: React components built with TypeScript, styled with Tailwind CSS
- Depends on: Framer Motion, recharts, next-themes, lib/data for types
- Used by: Page component in `app/page.tsx`

**Page/Route Layer:**
- Purpose: Server-side layout and client-side page composition
- Location: `app/layout.tsx`, `app/page.tsx`
- Contains: Root layout with theme provider, main page component with state and sections
- Depends on: Components, lib/data, next-themes
- Used by: Next.js routing system

**Data/Domain Layer:**
- Purpose: Provide type definitions and static data for domain objects
- Location: `lib/data.ts`
- Contains: TypeScript interfaces (Facilitator, Server, Resource, etc.) and exported constants
- Depends on: None (no external APIs)
- Used by: Page component, components for typing and data rendering

**Styling Layer:**
- Purpose: Global styles, theme variables, and CSS utilities
- Location: `app/globals.css`
- Contains: Tailwind CSS configuration via `@theme`, CSS custom properties, animation definitions
- Depends on: Tailwind CSS v4
- Used by: All components via className selectors

## Data Flow

**Main Page Rendering:**

1. User navigates to `/` → Next.js server renders `app/page.tsx`
2. RootLayout wraps the page with ThemeProvider (from next-themes)
3. Main component initializes client-side state:
   - `dialogOpen`: DialogType (which modal is open)
   - `featuredFacilitator`: Currently selected Facilitator object
4. Component renders 6 major sections with static data from `lib/data.ts`
5. FadeIn/FadeInStagger components wrap sections with Framer Motion animations
6. Animations trigger on viewport intersection using whileInView

**Educational Dialog Flow:**

1. User clicks InfoButton with `onClick={() => openDialog("whatIsX402")}`
2. Dialog type sets into `dialogOpen` state
3. EducationalDialog component renders with content from `educationalContent` mapping
4. Dialog uses keyboard event listener for Escape key handling
5. Backdrop click or close button calls `closeDialog()` to clear state

**Chart/Data Visualization Flow:**

1. Static sparkline data generated in `lib/data.ts` using `generateSparkline()` helper
2. Sparkline and FacilitatorChart components receive data as props
3. Components use Recharts to render minimal, responsive area charts
4. Theme colors dynamically applied based on `resolvedTheme` from useTheme hook
5. Mount state ensures colors match after hydration (SSR/CSR mismatch prevention)

**State Management:**
- Page-level state for dialog and featured facilitator
- No global state management (Zustand, Redux, Context) - state stays local to page
- Theme state managed by next-themes at app level

## Key Abstractions

**Component Composition Pattern:**
- Purpose: Modular, reusable UI elements with consistent styling
- Examples: `Logo.tsx`, `InfoButton.tsx`, `ThemeToggle.tsx`, `Sparkline.tsx`
- Pattern: Presentational components that accept props, no internal state (mostly)

**Animation Wrapper Components:**
- Purpose: Centralized animation logic for fade-in effects with stagger timing
- Examples: `FadeIn.tsx`, `FadeInStagger.tsx`, `FadeInStaggerItem.tsx`
- Pattern: Framer Motion motion.div wrappers with predefined animation config
- Variants: Direction control (up/down/left/right), delay, duration customization

**Chart/Visualization Components:**
- Purpose: Data visualization with theme-aware styling
- Examples: `Sparkline.tsx`, `FacilitatorChart.tsx`
- Pattern: Recharts wrappers with dynamic theme colors and responsive sizing
- Theme handling: useTheme hook + mounted state to prevent hydration mismatch

**Theme Provider:**
- Purpose: Wrap app with next-themes for light/dark mode support
- Location: `components/ThemeProvider.tsx`
- Pattern: Simple wrapper around NextThemesProvider with class attribute strategy

**Dialog Component:**
- Purpose: Modal overlay for educational content
- Location: `components/EducationalDialog.tsx`
- Pattern: Portal-like behavior with escape key handling, scrollbar width compensation

## Entry Points

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: All page requests
- Responsibilities: Import fonts, set metadata, wrap with ThemeProvider, render children

**Main Page:**
- Location: `app/page.tsx`
- Triggers: GET / (index route)
- Responsibilities: Initialize state, render 6 sections (hero, servers, facilitators, ecosystem, thesis, get-started), handle dialog/facilitator selection

**CLI/Build:**
- `npm run dev` - Starts dev server on localhost:3000
- `npm run build` - Builds for production
- `npm run start` - Runs production server

## Error Handling

**Strategy:** Graceful degradation with no explicit error boundaries

**Patterns:**
- Dialog escape key handler wrapped in useEffect cleanup
- Mount state check before rendering theme-dependent colors (prevents hydration mismatches)
- Sparkline width/height defaults prevent rendering issues
- Responsive table overflow-x-auto prevents mobile truncation issues

## Cross-Cutting Concerns

**Logging:** Not implemented - educational content is static

**Validation:** No form validation - no user input forms on the page

**Authentication:** Not applicable - marketing/educational site with external links only

**Theme Switching:**
- Implementation: next-themes with class attribute strategy
- Logic in FacilitatorChart and Sparkline: theme-aware color selection
- Theme toggle button provides UI control

**Accessibility:**
- Semantic HTML (nav, header, section, main)
- Keyboard navigation via focus-visible styles
- Dialog escape key and backdrop click handling
- Alt text on SVG icons where needed
- aria-label on close button

---

*Architecture analysis: 2026-01-23*
