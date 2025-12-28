# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

For general development information, see [AGENTS.md](./AGENTS.md).

This file contains Claude Code-specific guidance and detailed configurations.

## Dependency Management

### Renovate Configuration

- **Validate Renovate config**: `bunx -p renovate renovate-config-validator --strict` (run from project root)
- **Configuration file**: `.github/renovate.json`
- **Base preset**: `config:best-practices` (delegates most settings to Renovate's recommended defaults)
- **Schedule**: Before 5am on Monday (JST) for regular updates
- **Auto-merge**: Enabled by default for all updates except major version updates
- **Lock file maintenance**: Automatically updated on first day of each month (before 3am JST)
- **Custom configurations**:
  - **Major updates**: 7-day minimum release age, auto-merge disabled
  - **Non-major grouping**: devDependencies and dependencies grouped separately for minor/patch updates
  - **dprint WASM plugins**: Custom regex manager for automatic plugin URL updates in dprint.jsonc

## Git Hooks

Lefthook configured for pre-commit workflow (see `lefthook.yml`):

- Automatically runs ESLint fix + dprint on staged `.js/.ts/.jsx/.tsx` files
- Automatically runs dprint on staged `.astro/.md/.json/.yml/.yaml` files
- Fixed files are automatically re-staged
- Skips during merge and rebase operations

## Environment Variables

Astro environment variables (astro:env/server):

- `GITHUB_USERNAME` - GitHub username for contributions API (public)
- `STEAM_API_KEY` - Steam Web API key (secret)
- `STEAM_ID` - Steam user ID (public)

## API Integration Details

### Implementation

All API calls are made at build time in `src/pages/index.astro` using `Promise.all()` for parallel fetching.

### GitHub Contributions

- Fetches merged pull requests via GitHub Search API
- Filters out PRs to own repositories
- Displays recent OSS contributions

### Steam Library

- Uses Steam Web API to fetch owned games
- Shows games sorted by playtime
- Displays game capsule images from Steam CDN

### Spotify

- Embeds Spotify playlist (2024 Top Songs)
- Uses iframe embed with Spotify's generator

## Component Architecture Details

### Props Interface

TypeScript interfaces define expected data shapes for all components.

### Layout System

- Base HTML structure with header, main, and footer grid areas
- Custom grid area utilities for layout management
- Responsive Grid: Utilizes Tailwind's responsive grid system (sm, md, xl breakpoints)

## Build and Deployment

- Static site generation with Astro
- No client-side JavaScript by default (static HTML/CSS)
- Build output in `dist/` directory
- Optimized for deployment to static hosting platforms (Vercel)
