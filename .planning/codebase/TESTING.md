# Testing Patterns

**Analysis Date:** 2026-01-23

## Test Framework

**Runner:**
- Not configured
- No testing framework installed (Jest, Vitest, etc.)

**Assertion Library:**
- Not applicable

**Run Commands:**
```bash
npm run lint              # Run ESLint only
npm run dev              # Development server (useful for manual testing)
npm run build            # Production build verification
```

**Note:** This is an educational frontend application without automated tests. Testing would be manual or via E2E frameworks like Playwright/Cypress if implemented.

## Test File Organization

**Current Status:**
- No test files exist in the codebase
- No `.test.ts`, `.spec.ts`, `.test.tsx`, or `.spec.tsx` files present

**Recommended Structure (if tests were added):**
- Co-locate test files with source files
- Pattern: `ComponentName.tsx` and `ComponentName.test.tsx` in same directory
- Or separate `__tests__` directory per feature

**Example recommended structure:**
```
components/
├── ThemeToggle.tsx
├── ThemeToggle.test.tsx
├── FadeIn.tsx
├── FadeIn.test.tsx
└── ...
```

## Test Structure

**If Tests Were to Be Implemented:**

Recommended framework: Vitest (lightweight, TypeScript-first)
Alternative: Jest with TypeScript preset

Typical test structure would be:
```typescript
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Test implementation
  });

  it('should handle user interactions', () => {
    // Test implementation
  });
});
```

## Mocking

**Framework:** Not applicable (no tests)

**What Should Be Mocked (if tests were added):**
- `useTheme()` hook from `next-themes` - mock `theme` and `setTheme`
- `next/font/google` - mock font loading
- `framer-motion` - mock animation libraries
- `recharts` - mock chart components if testing non-chart logic

**What Should NOT Be Mocked:**
- React hooks (`useState`, `useEffect`)
- DOM/HTML elements
- TypeScript types and interfaces

## Fixtures and Factories

**Test Data Patterns (if tests were added):**

Sample data exists in `lib/data.ts` that could be used for testing:

```typescript
// From lib/data.ts
export const facilitators: Facilitator[] = [
  {
    id: "coinbase",
    name: "Coinbase Facilitator",
    volume: "$1.2M",
    volumeNum: 1200000,
    // ... more properties
  },
];
```

**Recommended Pattern:**
- Reuse data from `lib/data.ts` for component tests
- Create lightweight test fixtures for edge cases
- Location: `lib/testData.ts` or `__fixtures__/data.ts`

## Coverage

**Requirements:** Not enforced

**Current Status:** No coverage tooling configured

**Recommendations if Tests Were Added:**
- Target minimum 80% coverage for critical components
- View coverage: `npm run test -- --coverage` (if testing framework added)

## Test Types

**Unit Tests (if implemented):**
- Test individual React components in isolation
- Mock external dependencies (hooks, libraries)
- Scope: Single component behavior
- Examples: `ThemeToggle.test.tsx`, `InfoButton.test.tsx`, `Logo.test.tsx`

**Integration Tests (if implemented):**
- Test component interactions and data flow
- Examples: Dialog opening/closing flow, theme switching across components
- Would test multiple components working together

**E2E Tests:**
- Not currently configured
- Could be added with Playwright, Cypress, or Next.js native testing
- Would test full user workflows (navigation, form submission, etc.)

## Common Patterns to Support

**Client Component Testing Pattern (if tests were added):**

For components with `"use client"` directive:
```typescript
// Example: ThemeToggle.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from './ThemeToggle';

describe('ThemeToggle', () => {
  it('should toggle theme on click', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByLabelText('Toggle theme');
    fireEvent.click(button);

    // Assert theme changed
  });
});
```

**Hook Testing Pattern (if tests were added):**

For components using `useEffect`:
```typescript
// Example: Testing mounted state pattern
import { renderHook, waitFor } from '@testing-library/react';

describe('Component with useEffect', () => {
  it('should set mounted to true after mount', async () => {
    const { result } = renderHook(() => {
      const [mounted, setMounted] = useState(false);
      useEffect(() => setMounted(true), []);
      return mounted;
    });

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });
});
```

**State Management Pattern (if tests were added):**

Many components manage dialog/selection state:
```typescript
// Example: EducationalDialog state flow
it('should open and close dialog', () => {
  const { getByRole, queryByRole } = render(
    <EducationalDialog
      isOpen={true}
      onClose={jest.fn()}
      title="Test"
      content="Test content"
    />
  );

  expect(getByRole('dialog')).toBeInTheDocument();

  // Click close button
  fireEvent.click(getByRole('button', { name: 'Close' }));
});
```

## Dependencies for Testing (if to be added)

**Recommended packages:**
```json
{
  "devDependencies": {
    "@testing-library/react": "^15.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/user-event": "^14.0.0",
    "vitest": "^1.0.0",
    "jsdom": "^23.0.0"
  }
}
```

## Current Validation

**Build-time validation:**
- TypeScript strict mode catches type errors
- ESLint validates code patterns
- Next.js build verifies component validity

**What's Validated:**
- TypeScript type safety
- ESLint rules (Next.js core-web-vitals, React best practices)
- Component import paths via module resolution
- No runtime test validation

---

*Testing analysis: 2026-01-23*
