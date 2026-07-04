# AGENTS.md

Guidance for AI coding assistants working in this repository.

This file is an index, not a manual: it holds only the always-applicable constraints, plus a map to the source of truth for everything else. When a detail here conflicts with a referenced file, the referenced file wins.

## Stack Summary

Astro 6.x (`output: 'static'`) · TypeScript (strict) · Tailwind CSS v4 + Visual Kei design system · Bun · Cloudflare Pages

## Core Constraints (always apply)

- **Runtime/package manager is Bun**: `bun install`, `bun run <script>` — never npm/yarn/pnpm
- **Fully static site — no client-side JavaScript**: `client:*` directives are forbidden; components are static HTML/CSS only
- **Visual Kei design system**:
  - Colors only via `var(--vk-*)` custom properties — never raw hex values or Tailwind color utilities (e.g. `text-red-500`)
  - Typography: `"Cinzel Decorative"` (display headings), `"Cormorant SC"` (section labels/metadata, with letter-spacing), `"Cormorant Garamond"` (body)
  - Reuse the utility classes (`card-base`, `vk-section-title`, `vk-divider`, `vk-animate-in`) instead of reinventing surfaces
- **`src/assets/*.json` is auto-updated by scheduled GitHub Actions** — never edit these files manually
- **Local builds need no environment variables** — API secrets exist only in repository/workflow settings
- **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `ci:`)

## Source-of-Truth Map

| Topic                                | Read                                                                                         | Notes                                                                 |
| ------------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Commands (dev/build/lint/fix/format) | `package.json` scripts                                                                       | No standalone `typecheck` — `astro check` runs inside `lint:oxeslint` |
| Formatter split                      | `.oxfmtrc.json` / `dprint.jsonc` / `.editorconfig`                                           | oxfmt: everything except `.astro`; dprint: `.astro` files only        |
| Design tokens & utilities            | `src/styles/global.css`                                                                      | `--vk-*` tokens, `card-base`, `vk-*` classes, `grid-areas-layout`     |
| Component creation guide             | `.claude/skills/new-visual-kei-component/SKILL.md`                                           | Plain Markdown — readable by any agent, not just Claude Code          |
| Reference implementations            | `src/components/GitHubContributions.astro`, `src/components/SteamSummary.astro`              | List + staggered animation + hover accent bar / grid layout           |
| Data update pipelines                | `.github/workflows/update-owned-games.yml`, `.github/workflows/update-oss-contributions.yml` | Weekly schedules (JST); fetch data and open PRs automatically         |
| CI                                   | `.github/workflows/ci.yml`                                                                   | Format checks + lint + build; draft PRs are skipped                   |
| Deployment                           | `wrangler.jsonc`                                                                             | Cloudflare Pages, build output in `dist/`                             |
| Path aliases                         | `tsconfig.json`                                                                              | `@/*` → `src/*`, `$/*` → `public/*`                                   |
| OG image generation                  | `scripts/generate-og.ts`                                                                     | Runs before `astro build` as part of `bun run build`                  |
