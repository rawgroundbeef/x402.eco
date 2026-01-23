# Technology Stack

**Analysis Date:** 2026-01-23

## Languages

**Primary:**
- TypeScript 5.x - All source code, strict mode enabled
- JavaScript (JSX/TSX) - React components and Next.js pages

**Secondary:**
- CSS 4 - Global styling with Tailwind CSS integration

## Runtime

**Environment:**
- Node.js (version not explicitly specified, compatible with Next.js 16.1.1)

**Package Manager:**
- pnpm - Configured as primary package manager
- Lockfile: `pnpm-lock.yaml` (present)

## Frameworks

**Core:**
- Next.js 16.1.1 - Full-stack React framework for production
- React 19.2.3 - UI library for component development
- React DOM 19.2.3 - React renderer for browser

**UI & Styling:**
- Tailwind CSS 4.x - Utility-first CSS framework
- @tailwindcss/postcss 4.x - PostCSS plugin for Tailwind
- next-themes 0.4.6 - Dark mode management and theme switching

**Visualization:**
- Recharts 3.6.0 - Composable charting library for React (area charts, tooltips, responsive containers)

**Animation:**
- Framer Motion 12.25.0 - Production-ready motion library for animations and transitions

**Testing:**
- No testing framework detected (None configured)

**Build/Dev:**
- PostCSS - CSS transformation (via `postcss.config.mjs`)
- ESLint 9.x - Linting with Next.js configuration
- TypeScript Compiler - For type checking

## Key Dependencies

**Critical:**
- next 16.1.1 - Framework and build tool, handles routing, SSR, optimization
- react 19.2.3 - Component library, UI state management
- typescript 5.x - Type safety and development experience
- tailwindcss 4.x - Styling system (enables responsive design and theme system)

**UI/UX:**
- recharts 3.6.0 - Data visualization for facilitator transaction charts
- framer-motion 12.25.0 - Smooth animations (fade-in effects, transitions)
- next-themes 0.4.6 - Theme persistence and system preference detection

**Development:**
- eslint-config-next 16.1.1 - Next.js ESLint configuration with Core Web Vitals rules
- @types/react 19.x - Type definitions for React
- @types/react-dom 19.x - Type definitions for React DOM
- @types/node 20.x - Type definitions for Node.js APIs

## Configuration

**Environment:**
- Configuration via `next.config.ts` (minimal, uses defaults)
- Environment variables sourced from `.env*` files (ignored by `.gitignore`)
- Path aliases configured in `tsconfig.json`: `@/*` maps to root directory

**Build:**
- PostCSS config: `postcss.config.mjs` - Enables Tailwind CSS processing
- ESLint config: `eslint.config.mjs` - Flat config format with Next.js rules
- Next.js config: `next.config.ts` - Currently minimal, no custom configuration

**TypeScript:**
- Target: ES2017
- Module resolution: bundler (supports import.meta and conditional imports)
- JSX: react-jsx (automatic JSX transformation)
- Strict mode: enabled (strict: true)
- Path aliases enabled for clean imports

**CSS/Styling:**
- Inline theme configuration in `app/globals.css` with Tailwind @theme directive
- CSS custom properties for color system (light and dark mode)
- Base utilities defined as custom classes (.bg-background, .text-text, etc.)

## Platform Requirements

**Development:**
- Node.js runtime (tested with pnpm 8.x+ based on lock file)
- MacOS/Linux/Windows compatible
- Terminal access for `pnpm` commands

**Production:**
- Deployment target: Node.js 18+ (Next.js 16.1.1 requirement)
- Vercel (implied by `.vercel` in gitignore)
- Static export capable (no API routes, pure frontend)
- Can be deployed to any Node.js hosting platform

**Browser Support:**
- Modern browsers (ES2017+ JavaScript)
- Tailwind CSS 4 requires modern CSS support
- Dark mode detection via Prefers Color Scheme media query

---

*Stack analysis: 2026-01-23*
