---
name: pm-systems
description: >
  Context and conventions for building on the pm-systems PM portfolio site.
  Invoke when adding projects, modifying the dashboard, or extending the design system.
---

# PM Systems — Product Context

## What It Is

A personal product manager portfolio built as a single-page React app. It presents real PM case studies in a dark, terminal-aesthetic UI. Each project is a standalone detail page with its own narrative structure (problem → solution → metrics).

The site is gated — most projects are locked and only visible to users with an access code. Unlocked projects include full case study pages.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS (utility-first, no component library) |
| Routing | React Router v6 |
| Icons | Lucide React |
| 3D / Canvas | Three.js (`PixelVoyagerCanvas` hero) |
| Animation | CSS keyframes, IntersectionObserver scroll reveals |

---

## Design System

### Visual Language

- **Dark terminal / cyberpunk aesthetic** — black backgrounds (`#050505`), monospace fonts, neon accents
- **Grid overlay** — subtle 40px CSS grid on all full-bleed sections
- **Scanline animation** — 2px neon line that sweeps the hero vertically (CSS `@keyframes scan`)
- **HUD corners** — thin L-shaped brackets rendered via `::before` / `::after` pseudoelements (`hud-border-top` class)
- **Scroll-reveal** — elements fade+slide up on intersection (`scroll-reveal` → `.active` class toggle)
- **Glitch animations** — `animate-glitch`, `animate-glitch-in` keyframes for headings

### Color Tokens (CSS Variables)

```css
--neon-green:  #39FF14   /* primary accent, active state */
--crimson:     #FF3131   /* danger / problem indicators */
--cyber-blue:  #0EA5E9   /* secondary accent, infra projects */
--bg:          #050505   /* page background */
```

Named Tailwind classes that wrap these:
- `.text-neon` — neon green with glow shadow
- `.text-crimson` — red with glow shadow
- `.text-cyber` — blue accent
- `.mono` — JetBrains Mono font-family

### Typography

- Headings: `font-black tracking-tighter uppercase` — brutalist, large, compressed
- Body: `text-[#d1d1d1]` on `#050505` — muted white-gray
- Labels / metadata: `text-[10px] font-mono uppercase tracking-[0.4em]` — tiny spaced mono

### Interactive States

- Hover effects: border color transitions to `--neon-green`, text opacity shifts
- Active sections: neon underline or neon border-left indicators

---

## Project Structure

```
src/
├── App.tsx                         # Root: dashboard + routing shell
├── components/
│   └── ui/
│       └── pixel-rocket-voyager.tsx  # Three.js hero canvas
├── pages/
│   └── projects/
│       ├── registry.ts             # Central project index + lazy imports
│       ├── ProjectGate.tsx         # Access code lock screen
│       ├── P1/GeetaAI.tsx          # ✅ Unlocked — AI content factory case study
│       ├── P2/Adhyayan.tsx         # ✅ Unlocked — gamified LMS case study
│       ├── P3/Locked.tsx           # Generic locked placeholder
│       ├── P4/NanoSkills.tsx       # D2C growth
│       ├── P8/MathVertical.tsx     # EdTech math vertical
│       ├── P14/UnifiedCore.tsx     # Platform infra merger case study
│       └── P5–P13/Locked.tsx       # Locked stubs
```

### Registry (`registry.ts`)

Defines two exports:

1. **`PROJECTS`** — ordered array of `{ id, title, category }` used to render dashboard tiles
2. **`PROJECT_PAGE_MAP`** — maps each `ProjectId` to a lazy-loaded React component

To add a new project: add entry to `PROJECTS`, create the page component, and register it in `PROJECT_PAGE_MAP`.

---

## Case Study Page Anatomy

Every unlocked project page follows the same narrative arc:

```
1. Header / Hero        — Project title, category tag, nav links (← back, next project →)
2. Problem Section      — 3 rotating "problem cards" with icons + TERMINAL_STYLE titles
3. Solution Section     — Architecture diagram or pipeline description
4. Metrics / Impact     — Key numbers in HUD-bordered stat blocks
5. Stack / Tools        — Mono-styled chip list
6. Back-to-Top button   — Fixed bottom-right, appears after 500px scroll
```

### Problem Cards Pattern

```tsx
const problemPoints = [
  { title: "SCREAMING_SNAKE_CASE", icon: <IconComponent size={18} />, desc: "..." },
  ...
];
const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
// Prev/Next buttons cycle through problemPoints
```

---

## Dashboard (App.tsx)

The dashboard renders all projects as a grid of tiles. Each tile shows:
- Icon (Lucide)
- `title` (SCREAMING_SNAKE with underscore style)
- `type` (category label)
- `desc` (one-line impact summary)
- `stack` (comma-separated tech string)
- `metrics` (2-item array of highlight stats)
- Color overrides (`color`, `border`) per project

Routing: projects live at `/p/:id` (e.g. `/p/P1`). `ProjectGate.tsx` wraps all project routes and enforces the access code.

---

## Conventions

- All section heading text uses `UPPER_SNAKE_CASE` to match the terminal aesthetic
- Avoid external UI libraries — all components are hand-built with Tailwind
- No component abstraction unless used in 3+ places
- New projects should reuse the `scroll-reveal`, `hud-border-top`, `grid-overlay`, and `scanline` CSS classes
- Project IDs are sequential (`P1`–`P14`); new additions increment from the current max
- The `Locked` component at `P3/Locked.tsx` is the reusable placeholder for gated projects
