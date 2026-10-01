# MetaEndure Labs - Workspace Agent Guidelines

Welcome to **MetaEndure Labs** (`metaendurelabs`). This document provides architectural guardrails, coding standards, and persona instructions for AI pair programmers working on this repository.

---

## 🎯 Workspace Mission & Scope

MetaEndure Labs is a specialized high-performance sports platform covering:
1. **Public Brand Experience**: Modern, high-trust presentation of endurance coaching, sports science, HYROX simulation, and community events.
2. **Athlete Portal (`/dashboard`)**: Daily training workouts, biometrics (VO2, HRV, heart rate zones), TrainingPeaks integration, and checkout.
3. **Coach / Admin Command Center (`/admin`)**: Wave occupancy, athlete roster management, master scheduling, and benchmark leaderboards.

---

## 🎨 Theme & Styling Standards

### 1. Dual-Theme Polarity (Pure Light & Pure Dark)
- **Light Mode is the DEFAULT** across the entire application.
- **Pure Light Mode**: Surfaces must be crisp white (`#ffffff`), with soft `#e5e7eb` borders and rich dark charcoal typography (`#0a0e0a` and `#2e3b2f`). Never use muddy brown or beige tints.
- **Pure Dark Mode**: Surfaces must be pitch black (`#000000`), with obsidian cards (`#080c09`) and `#76C043` luminescence. Never use washed-out slate gray.
- **Header**: Screen-width fill fixed edge-to-edge with `backdrop-blur-xl`.

### 2. Role Theme Differentiation
- **Athlete Portal (`/dashboard`)**: Styled in **Public Page Brand Green (`#76C043`)**. Active navigation pills, workout badges, and zone markers use `#76C043` / `#8ff346` / `#2e7d32`.
- **Admin Command Center (`/admin`)**: Styled in **High-Tech Sapphire Blue (`#2563eb` / `#3b82f6`)**. Active navigation pills, command alerts, and wave indicators use blue accents.

### 3. Typography Rules
- Every primary top-level heading (`h1`) MUST use the **`Baumans`** font (`font-display`).
- Section titles and card headers (`h2`, `h3`, `h4`) use **`Outfit`** (`font-heading`).
- Paragraph and descriptions use **`Inter`** (`font-body`).
- Telemetry, metrics, and timestamps use **`JetBrains Mono`** (`font-mono`).

---

## 🧭 Navigation & Routing Rules
- **Public Navigation**: Controlled via `components/navigation/PublicTopNav.tsx`.
- **Athlete Navigation**: Controlled via `components/navigation/AthleteSidebar.tsx`.
- **Admin Navigation**: Controlled via `components/navigation/AdminSidebar.tsx`.
- **Auth Traversal**: `/auth` provides 1-click bypass buttons (`⚡ Demo Athlete Login` and `🛡️ Demo Coach / Admin`) to facilitate testing before full auth backend integration.
- **Checkout Location**: The Checkout flow is strictly restricted to the Athlete Dashboard (`/dashboard/checkout`) to protect commercial exclusivity.

---

## 🛠️ Code Conventions & Architectural Rules

### 1. Next.js 14 App Router & Server Components
- **Public Routes as Server Components**: All marketing routes (`app/(public)/**/page.tsx`) must remain **Server Components** that export static `Metadata` (OpenGraph, Twitter cards, meta descriptions) for optimal SEO and instant initial page load.
- **Client Islands**: Only leaf components requiring interactive React state, hooks, or browser event listeners (e.g., booking selectors, filters, modals) should declare `'use client'`.
- Interactive components should be placed in domain folders (e.g., `components/schedule/ScheduleClient.tsx`) or `components/shared/`.

### 2. Single Source of Truth for Data (`lib/constants.ts`)
- **Single Constants File**: All shared data, pricing, coaches, partners, disciplines, and navigation items belong in [lib/constants.ts](file:///d:/seyon_nexa_labs/projects/metaendurelabs/lib/constants.ts). Do not create fragmented sub-constants files unless explicitly structured.
- **Lean Domain Types (`lib/types.ts`)**: Keep [lib/types.ts](file:///d:/seyon_nexa_labs/projects/metaendurelabs/lib/types.ts) focused strictly on core reusable domain entities (`Coach`, `Partner`, `TrainingSession`, `PricingTier`, `HyroxStation`). Avoid duplicating single-use presentation types.
- **Slide References**: Never show internal `Slide #` labels to end-users on public page UI badges. Keep slide references documented as comments inside [lib/constants.ts](file:///d:/seyon_nexa_labs/projects/metaendurelabs/lib/constants.ts) and component section headers for developer traceability.

### 3. Motion & Animation Standards (100% Free-Tier GSAP)
- **Engine**: Use `gsap`, `ScrollTrigger`, and `@gsap/react` (`useGSAP`).
- **Free-Tier Strictness**: Only use standard, non-commercial GSAP core features. Never import paid Club GreenSock plugins (such as `SplitText`, `MorphSVG`, or `InertiaPlugin`).
- **Reusable Wrappers**:
  - Use [ScrollReveal.tsx](file:///d:/seyon_nexa_labs/projects/metaendurelabs/components/shared/ScrollReveal.tsx) for viewport scroll reveals (`fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom-in`, `fade-in`).
  - Use [ScrollProgressBar.tsx](file:///d:/seyon_nexa_labs/projects/metaendurelabs/components/shared/ScrollProgressBar.tsx) for page-level laser reading progress.
  - Use [AnimatedCounter.tsx](file:///d:/seyon_nexa_labs/projects/metaendurelabs/components/shared/AnimatedCounter.tsx) for kinetic number count-ups on hero metrics and stats.
- Keep animations crisp, lightweight, and hardware-accelerated (`transform`, `opacity`) with clean lifecycle teardowns via `useGSAP`.

### 4. Accessibility & Build Health
- Ensure all interactive elements include accessible labels and unique descriptive IDs.
- Do not use Tailwind ad-hoc colors when brand variables exist in `app/globals.css`.
- Always verify zero-error builds (`npx next build`) after making architectural changes.

