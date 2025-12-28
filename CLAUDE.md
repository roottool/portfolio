# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

For general development information, see [AGENTS.md](./AGENTS.md).

This file contains Claude Code-specific guidance and detailed configurations.

## Dependency Management

### Renovate Configuration

- **Validate Renovate config**: `bunx -p renovate renovate-config-validator --strict` (run from project root)
- **Configuration file**: `.github/renovate.json`
- **Schedule**: Before 3am every weekday and Sunday (JST)
- **Security-first approach**: Vulnerability alerts automatically merged with priority
- **Lock file maintenance**: Automatically updated on first day of each month
- **Stability periods**:
  - Non-patch updates: 3-day minimum release age
  - Major updates: 7-day minimum release age
- **Package grouping strategy**: Related packages grouped for efficient updates
  - Non-major devDependencies: Auto-merge minor/patch updates
  - Non-major dependencies: Auto-merge minor/patch updates
  - ESLint/dprint tools: Auto-merge with 3-day minimum age
  - Astro packages: Auto-merge all updates
  - Type definitions: Auto-merge with 3-day minimum age
  - dprint plugins (via custom regex manager): Auto-update plugin URLs in dprint.jsonc
- **GitHub Actions**:
  - Common first-party actions (actions/_, github/_): Auto-merge with digest pinning
  - Other actions: Auto-merge with 3-day minimum age and digest pinning
- **Runtime constraints**: Node.js major version updates disabled to prevent compatibility issues

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
