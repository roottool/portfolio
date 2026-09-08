# AGENTS.md

Guidance for AI coding assistants working in this repository.

This file is an index, not a manual: it holds only the always-applicable constraints, plus a map to the source of truth for everything else. When a detail here conflicts with a referenced file, the referenced file wins.

## Stack Summary

Astro (`output: 'static'`) · TypeScript (strict) · Tailwind CSS v4 + Visual Kei design system · Bun · Cloudflare Pages

## Core Constraints (always apply)

- **Runtime/package manager is Bun**: `bun install`, `bun run <script>` — never npm/yarn/pnpm
- **Fully static site — no client-side JavaScript**: `client:*` directives are forbidden; components are static HTML/CSS only. Interactivity is CSS-only (`:hover`, `:focus-visible`, `:focus-within`)
- **Visual Kei design system**:
  - Colors only via `var(--vk-*)` custom properties — never Tailwind color utilities (e.g. `text-red-500`). Raw `rgba()` is allowed **only** for one-off alpha values that no token provides (see `src/layouts/Layout.astro`); a raw value that duplicates an existing token is a bug
  - Typography: see the table below — do not introduce a font that is not already imported in `src/styles/global.css`
  - Reuse the utility classes (`card-base`, `vk-section-title`, `vk-divider`, `vk-animate-in`) instead of reinventing surfaces
- **`src/assets/*.json` is auto-updated by scheduled GitHub Actions** — never edit these files manually
- **Local builds need no environment variables** — API secrets exist only in repository/workflow settings
- **No new dependencies** without being asked — Renovate owns the lockfile
- **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `ci:`)
- **Personal-info guard**: the site identifies the author by the handle `roottool` only. Never add a real name, employer, job title, or other career/personal identifiers (see the comment in `src/layouts/Layout.astro`)

## Typography (exact usage — do not generalize)

| Family                    | Where it is actually used                                                                                       | Do not                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `"Cinzel Decorative"` 700 | Site title only: `src/layouts/Layout.astro`, `src/pages/404.astro`, `scripts/generate-og.ts`                    | Use it in components — it is a wordmark face, not a heading face |
| `"Cormorant SC"`          | All `h1/h2/h3` (set globally in `global.css`), section labels, metadata — with `letter-spacing`                 | Re-declare it on a heading unless you also need `letter-spacing` |
| `"Cormorant Garamond"`    | Body text and descriptions (set on `body`), often `font-style: italic`                                          | —                                                                |
| `"Noto Serif JP"`         | **Always second in the stack** for any text that can contain Japanese: `"Cormorant SC", "Noto Serif JP", serif` | Omit it from text rendered from external data                    |

## Accessibility Contract (easy to break silently)

- `global.css` neutralizes `vk-fade-in`, `vk-flicker`, and `vk-glitch` under `@media (prefers-reduced-motion: reduce)`. **Any new `@keyframes` must be added to that block too**, or it bypasses the guard.
- Interactive elements need a visible `:focus-visible` state. `card-base` already provides one; if you set `outline: none`, replace it with something visible.
- Decorative-only elements carry `aria-hidden="true"`.

## Definition of Done

Run both, in this order, and fix what they report:

```bash
bun run format   # oxfmt (everything except .astro) + dprint (.astro only)
bun run lint     # dprint check, oxfmt check, astro check + oxlint + eslint, markuplint
```

`bun run lint:markuplint` catches HTML-validity errors in `.astro` that nothing else does — do not skip it after touching markup. There is no standalone `typecheck` script; `astro check` runs inside `lint:oxeslint`.

## Source-of-Truth Map

| Topic                                | Read                                                                                         | Notes                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Commands (dev/build/lint/fix/format) | `package.json` scripts                                                                       | See Definition of Done above                                           |
| Formatter split                      | `.oxfmtrc.json` / `dprint.jsonc` / `.editorconfig`                                           | oxfmt: everything except `.astro` (incl. `.md`); dprint: `.astro` only |
| Design tokens & utilities            | `src/styles/global.css`                                                                      | `--vk-*` tokens, `card-base`, `vk-*` classes, `grid-areas-layout`      |
| Component creation guide             | `.claude/skills/new-visual-kei-component/SKILL.md`                                           | Plain Markdown — readable by any agent, not just Claude Code           |
| Reference implementations            | `src/components/GitHubContributions.astro`, `src/components/SteamSummary.astro`              | List + staggered animation + hover accent bar / grid layout            |
| Page composition & grid              | `src/pages/index.astro`, `src/layouts/Layout.astro`                                          | New sections must be wired into `index.astro` inside `<Layout>`        |
| Data update pipelines                | `.github/workflows/update-owned-games.yml`, `.github/workflows/update-oss-contributions.yml` | Weekly schedules (JST); fetch data and open PRs automatically          |
| CI                                   | `.github/workflows/ci.yml`                                                                   | Format checks + lint + build; draft PRs are skipped                    |
| Deployment                           | `wrangler.jsonc`                                                                             | Cloudflare Pages, build output in `dist/`                              |
| Path aliases                         | `tsconfig.json`                                                                              | `@/*` → `src/*`, `$/*` → `public/*`                                    |
| OG image generation                  | `scripts/generate-og.ts`                                                                     | Runs before `astro build` as part of `bun run build`                   |
