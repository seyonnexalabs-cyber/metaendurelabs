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

## 🛠️ Code Conventions
- Use Next.js 14 App Router conventions (`app/**/page.tsx`, `layout.tsx`).
- Favor modular React functional components in `components/`.
- Ensure all interactive elements include accessible labels and unique identifiers.
- Do not use Tailwind ad-hoc colors when brand variables exist in `app/globals.css`.
