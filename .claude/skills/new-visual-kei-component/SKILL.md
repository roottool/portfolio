---
name: new-visual-kei-component
description: Create a new Astro component for this portfolio's Visual Kei design system. Use when adding a section, card list, image grid, stat panel, or third-party embed under src/components/.
---

# New Visual Kei Component

Create `src/components/<ComponentName>.astro` following the Visual Kei design system, then wire it into the page.

**In scope**: a new section component and its `index.astro` wiring.
**Out of scope**: editing existing components (read the file and match it instead), data fetching (`src/features/**`), and `src/assets/*.json` (auto-generated — never edit).

## Steps

1. **Read `src/styles/global.css`** — tokens and utilities live there. Do not re-declare what already exists.
2. **Create the component** from the skeleton below, following the pattern closest to what you're building — see Reference Implementations.
3. **Wire it into `src/pages/index.astro`** inside `<Layout>`. The layout grid is `sm:grid-cols-2 xl:grid-cols-[3fr_2fr]` with `xl:overflow-hidden` — a wide section goes in the left column, a narrow one joins the right-hand `flex flex-col gap-8` stack. A scrollable section needs `min-h-0` on itself and `xl:overflow-y-auto` on its inner list.
4. **Verify** — see Definition of Done.

## Color Tokens (`src/styles/global.css`, all 15)

| Token              | Value                                                     | Use                                                       |
| ------------------ | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `--vk-bg`          | `#060008`                                                   | Page background (already on `body`)                       |
| `--vk-surface`     | `rgba(10, 2, 16, 0.92)`                                     | Card/panel background — resting                            |
| `--vk-surface-h`   | `rgba(18, 4, 26, 0.96)`                                     | Card background — hover/focus (`card-base` applies this)  |
| `--vk-crimson`     | `#c8002e`                                                   | Strong accent: focused borders, icon hover                 |
| `--vk-crimson-dim` | `#7a0019`                                                   | **Most-used accent** — bars, gradients, divider lines      |
| `--vk-gold`        | `#c9a84c`                                                   | Section-heading glyph, highlights                          |
| `--vk-gold-dim`    | `#7a6020`                                                   | Muted gold, secondary ornament                              |
| `--vk-silver`      | `#cac4d8`                                                   | Corner ornaments on hover                                   |
| `--vk-silver-dim`  | `#9d96b0`                                                   | Corner ornaments at rest, small labels                      |
| `--vk-text`        | `#e8dff2`                                                   | Primary text                                                |
| `--vk-muted`       | `#9890ac`                                                   | Metadata, timestamps, descriptions                          |
| `--vk-border`      | `rgba(200, 0, 46, 0.32)`                                    | Default border                                              |
| `--vk-border-h`    | `rgba(200, 0, 46, 0.75)`                                    | Border on hover/focus                                       |
| `--vk-glow`        | crimson box-shadow (two layers)                             | Hover glow (already inside `card-base`)                     |
| `--vk-glow-gold`   | gold box-shadow                                             | Glow for gold-accented elements                              |

Rule of thumb: `*-dim` is the resting state, the plain token is the emphasis state. Never use Tailwind color utilities (`text-red-500`). Raw `rgba()` only for an alpha value no token provides — never duplicate an existing token's value.

## Utility Classes (use these, don't reinvent)

- **`card-base`** — Surface card: `--vk-surface` background, `--vk-border` border, 8px L-shaped corner ornaments, and a hover/`:focus-visible` state that swaps to `--vk-surface-h` / `--vk-border-h` / `--vk-glow`. It sets `outline: none` and replaces it with the glow — don't add your own outline reset. `position: relative`, so absolutely-positioned children (accent bars, overlays) work without extra setup.
- **`vk-section-title`** — Section heading: flex row, `"Cormorant SC"`, uppercase, `letter-spacing: 0.15em`, with **one trailing** crimson-dim gradient line via `::after`. There is no leading line — don't add one.
- **`vk-divider`** — Horizontal divider with a crimson-dim gradient line on **both** sides of its content.
- **`vk-animate-in`** — `vk-fade-in 0.8s ease both`, no delay. For a single element; staggered lists use the inline form (see Rules §5).

## Typography

- Headings: **do not set `font-family`** — `global.css` already gives `h1/h2/h3` `"Cormorant SC", "Noto Serif JP", serif`. Re-declare it only when you also need `letter-spacing`.
- Labels/metadata: `"Cormorant SC", serif` + `letter-spacing: 0.03–0.1em`
- Body/descriptions: `"Cormorant Garamond", serif`, often `font-style: italic`
- **Any text that can contain Japanese** (external data, titles) must include `"Noto Serif JP"` as the second family, e.g. `"Cormorant SC", "Noto Serif JP", serif`.
- `"Cinzel Decorative"` is the site wordmark only (`Layout.astro`, `404.astro`) — never use it in a component.

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

1. Colors via `var(--vk-*)` only.
2. `card-base` for every elevated or interactive surface.
3. Section headings use `<h2 class="vk-section-title">` with **one gold glyph** chosen to fit the section (`⚜` Contributions, `⚔` The Archive, `♪` Soundtrack — pick your own if none fits). The glyph must be `var(--vk-gold)` at `font-size: 1rem`.
4. Hover: crimson glow (free with `card-base`) or a left accent bar using `--vk-crimson-dim`. Pair every `:hover` with `:focus-within`/`:focus-visible` — the site is keyboard-navigable.
5. Animations:
   - single element → `class="vk-animate-in"`
   - list/grid → inline `style={`animation: vk-fade-in 0.6s ${0.05 * i}s ease both;`}` (`0.04 * i` for dense grids)
   - **a new `@keyframes` must also be neutralized in the `@media (prefers-reduced-motion: reduce)` block in `global.css`**, or it bypasses that guard
6. No client-side JavaScript. No `client:*` directives. Interactivity is CSS-only (`:hover`, `:focus-visible`, `:focus-within`).
7. Decorative elements get `aria-hidden="true"`; images need real `alt`, `width`, `height`, and `loading`/`decoding`; an `<iframe>` needs a `title`; external links need `rel="noopener noreferrer"`.
8. Validate props in the frontmatter and `throw` on bad input (see `GitHubContributions.astro`).

## Reference Implementations

Read the closest match before writing new CSS — most patterns already exist:

- `src/components/GitHubContributions.astro` — staggered list, hover accent bar via `--vk-crimson-dim`, props validation
- `src/components/SteamSummary.astro` — image grid, desaturate-at-rest/saturate-on-hover treatment, `fetchpriority` on first rows
- `src/components/SpotifyRecent.astro` — third-party `<iframe>` embed with corner ornaments (can't use `card-base` directly — the pseudo-elements get clipped by the iframe)

## Definition of Done

```bash
bun run format
bun run lint
```

`lint:markuplint` catches HTML-validity errors nothing else does — don't skip it after touching markup. Then have the `visual-kei-reviewer` agent review the new file.
