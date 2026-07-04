---
name: new-visual-kei-component
description: Create a new Astro component that follows the Visual Kei design system of this portfolio. Use when adding a new section or feature component.
---

# New Visual Kei Component

Create a new Astro component at `src/components/<ComponentName>.astro` that strictly follows the Visual Kei design system.

## Design Token Reference (`src/styles/global.css`)

| Token | Value | Use |
|-------|-------|-----|
| `--vk-bg` | `#060008` | Page background |
| `--vk-surface` | `rgba(10, 2, 16, 0.92)` | Card/panel background |
| `--vk-crimson` | `#c8002e` | Accent color, borders, glows |
| `--vk-gold` | `#c9a84c` | Section icons, highlights |
| `--vk-silver` | `#cac4d8` | Secondary text |
| `--vk-text` | `#e8dff2` | Primary text |
| `--vk-muted` | `#9890ac` | Metadata, timestamps |
| `--vk-border` | `rgba(200,0,46,0.32)` | Default border |
| `--vk-glow` | crimson box-shadow | Hover glow effect |

## Utility Classes (use these, don't reinvent)

- **`card-base`** — Surface card with crimson border, hover glow, and pseudo-element decorations
- **`vk-section-title`** — Section heading with crimson side lines
- **`vk-divider`** — Horizontal divider with crimson gradient
- **`vk-animate-in`** — Fade-in animation on mount

## Typography

- Headings: `"Cinzel Decorative"` (display only, weight 700)
- Section labels / metadata: `"Cormorant SC"` (small caps, letter-spacing: 0.05–0.1em)
- Body / descriptions: `"Cormorant Garamond"` (400 or italic)

## Component Skeleton

```astro
---
export interface Props {
  // Define props here
}

const { } = Astro.props;
---

<section class="flex flex-col gap-4">
  <h2 class="vk-section-title">
    <span style="color: var(--vk-gold); font-size: 1rem">⚜</span>
    Section Title
  </h2>

  <div class="card-base p-4 vk-animate-in">
    <!-- content -->
  </div>
</section>
```

## Rules

1. Never use raw colors — always use `var(--vk-*)` tokens
2. Use `card-base` for any interactive or elevated surface
3. Section headings must use `vk-section-title` with a gold `⚜` icon
4. Hover interactions: crimson glow via `var(--vk-glow)` or left accent bar pattern (see GitHubContributions.astro)
5. Animations: use `vk-fade-in` keyframe with staggered delay for lists (`0.05 * i` seconds)
6. No client-side JavaScript — Astro components are static by default

## Reference Implementations

- `src/components/GitHubContributions.astro` — list with staggered animations + hover accent bar
- `src/components/SteamSummary.astro` — grid layout
- `src/components/SpotifyRecent.astro` — iframe embed
