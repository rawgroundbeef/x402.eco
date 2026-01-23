# x402.eco

## What This Is

An educational and ecosystem discovery site for the x402 payment protocol. It explains what x402 is, showcases the ecosystem of tools/services/facilitators, and helps developers find resources to build with x402. The site is designed to be community-maintained via GitHub PRs.

## Core Value

Help developers discover and understand the x402 ecosystem so they can start building payment-enabled applications.

## Current Milestone: v1.0 PR-Submittable Ecosystem

**Goal:** Transform hardcoded static data into a PR-friendly ecosystem directory that anyone can contribute to.

**Target features:**
- JSON/YAML-based ecosystem entries (one file per project)
- 4 ecosystem categories: Client-Side Integrations, Services & Endpoints, Infrastructure & Tooling, Learning & Community
- Local logo storage in public/logos/
- All ~80 entries from x402.org populated
- Keep facilitators section with fake charts separate
- Servers section with fake data retained for now

## Requirements

### Validated

- Educational content explaining x402, resources, servers, facilitators
- Theme switching (light/dark mode)
- Responsive design with Tailwind CSS
- Framer Motion animations

### Active

- [ ] PR-submittable ecosystem directory
- [ ] JSON/YAML file format for entries
- [ ] 4 ecosystem categories
- [ ] Local logo storage
- [ ] Population of all x402.org entries

### Out of Scope

- Real-time data from APIs (keeping fake charts/stats for now)
- User authentication
- Server-side data fetching
- Facilitator metrics from live sources
- Mobile app

## Context

- Existing codebase: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- Current data: Hardcoded in lib/data.ts
- Reference sites: x402.org/ecosystem, solana.com/x402
- ~80 ecosystem entries to migrate from x402.org

## Constraints

- **Tech stack**: Next.js, React, TypeScript, Tailwind (existing)
- **Data format**: JSON or YAML files for easy PR submissions
- **Logos**: Must be committed to repo (public/logos/)
- **No backend**: Static site generation only

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| JSON/YAML files per entry | Easier PR reviews, less merge conflicts | — Pending |
| Keep facilitators separate | Current design works well, charts add value | — Pending |
| Local logos only | Ensures availability, no external dependencies | — Pending |
| Populate all x402.org entries | Comprehensive starting point | — Pending |

---
*Last updated: 2026-01-23 after initialization*
