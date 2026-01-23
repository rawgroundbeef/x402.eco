# Coding Conventions

**Analysis Date:** 2026-01-23

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `ThemeToggle.tsx`, `FadeIn.tsx`)
- Utilities/helpers: camelCase (e.g., `data.ts`)
- All TypeScript/React files use `.tsx` for components and `.ts` for utilities

**Functions:**
- React components: PascalCase (e.g., `function FadeIn()`, `export function Logo()`)
- Helper functions: camelCase (e.g., `generateSparkline()`, `openDialog()`)
- Event handlers: camelCase with "handle" or action prefix (e.g., `handleEscape()`, `openDialog()`, `closeDialog()`)

**Variables:**
- Local state: camelCase (e.g., `mounted`, `featuredFacilitator`, `dialogOpen`)
- Constants: camelCase (e.g., `directions`, `accentColor`, `scrollbarWidth`)
- React hooks: camelCase (e.g., `setMounted()`, `setDialogOpen()`)

**Types:**
- Interfaces: PascalCase with "Props" suffix for component props (e.g., `FadeInProps`, `InfoButtonProps`, `EducationalDialogProps`)
- Type aliases: PascalCase (e.g., `DialogType`, `Facilitator`, `Server`)
- Exported types use `export interface` or `export type` syntax

## Code Style

**Formatting:**
- No explicit linter configuration beyond ESLint
- Default Next.js + TypeScript formatting conventions
- Line length: Not enforced, but see actual code usage
- Indentation: 2 spaces
- Trailing semicolons: Included consistently

**Linting:**
- Tool: ESLint 9 (modern flat config)
- Config: `eslint.config.mjs`
- Rules: Uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Global ignores: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`
- No custom overrides beyond Next.js defaults

## Import Organization

**Order:**
1. React and Next.js imports (e.g., `import { useState } from "react"`)
2. Third-party packages (e.g., `import { motion } from "framer-motion"`, `import { useTheme } from "next-themes"`)
3. Local relative imports (e.g., `import { FadeIn } from "@/components/FadeIn"`)
4. Type imports (use `import type` syntax)

**Path Aliases:**
- `@/*` maps to root directory (configured in `tsconfig.json`)
- All relative imports from components use `@/components/ComponentName`
- All data imports use `@/lib/data`
- Never use relative paths like `../../../`

**Examples from codebase:**
```typescript
// app/page.tsx
import type { Metadata } from "next";
import { useState } from "react";
import { Sparkline } from "@/components/Sparkline";
import { stats, facilitators } from "@/lib/data";
```

## Error Handling

**Patterns:**
- No try-catch blocks observed in the codebase (educational/UI-focused application)
- Null checks use conditional rendering (e.g., `if (!mounted) return null;`)
- Optional chaining and nullish coalescing are used implicitly in TypeScript
- Dialog state: Controlled via state, with null checks for rendering

**Example from `EducationalDialog.tsx`:**
```typescript
if (!isOpen) return null;  // Guard clause pattern
```

## Logging

**Framework:** `console` (no structured logging library)

**Patterns:**
- No logging observed in the codebase
- This is a frontend educational application with no backend logic
- No debug logs or console statements found

## Comments

**When to Comment:**
- Minimal comments in codebase
- Section headers use ASCII separators for large page sections:
```typescript
{/* ============================================ */}
{/* SECTION 1: HERO */}
{/* ============================================ */}
```
- Comments are primarily for organization and clarity in large files like `page.tsx`

**JSDoc/TSDoc:**
- No JSDoc comments observed
- Props are documented via TypeScript interfaces
- Interface properties have implicit documentation through naming

## Function Design

**Size:**
- Small, focused functions (most under 50 lines)
- Largest component is `page.tsx` with complex layout but organized into sections

**Parameters:**
- Destructured parameters using object syntax
- Props passed as single object parameter with type annotation
- Example: `function Logo({ size = "md", className = "" }: LogoProps)`

**Return Values:**
- Components return JSX elements or null (React.ReactNode)
- Explicit return types via TypeScript inference
- Handler functions return void (onClick handlers, setState callbacks)

## Module Design

**Exports:**
- Named exports for all components and utilities
- Single component per file
- Example: `export function FadeIn({ ... })`
- Data exports as named exports: `export const stats = {...}`
- Type exports use `export interface` or `export type`

**Barrel Files:**
- Not used in this codebase
- Each component imported individually from its file

## TypeScript Patterns

**Strict Mode:** Enabled (`strict: true` in tsconfig.json)

**Key Settings:**
- `"jsx": "react-jsx"` - New JSX transform
- `"moduleResolution": "bundler"` - For path alias support
- `"resolveJsonModule": true` - For importing JSON
- Type-safe import statements required
- All React 19 types available via `@types/react`

## Client vs Server Components

**Client Components:**
- Explicitly marked with `"use client"` directive at top of file
- Required for hooks: `useState`, `useEffect`, `useTheme`
- Required for event handlers: onClick, onChange
- Examples: `ThemeToggle.tsx`, `FadeIn.tsx`, `EducationalDialog.tsx`

**Server Components:**
- No `"use client"` directive (default in Next.js App Router)
- `layout.tsx` is a server component (no state, no hooks)
- Can import and use client components

---

*Convention analysis: 2026-01-23*
