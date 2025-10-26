# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Package Management

- Uses `bun` as package manager and runtime
- Install dependencies: `bun install`

### Development Workflow

- **Development server**: `bun run dev` (Astro dev server)
- **Build**: `bun run build` (Astro static site build)
- **Production preview**: `bun run preview` (Preview production build locally)

### Code Quality

- **Lint**: `bun run lint` (runs ESLint + Prettier + Astro checks)
  - `bun run lint:prettier` - Prettier format check
  - `bun run lint:eslint` - ESLint check
  - `bun run lint:astro` - Astro check (TypeScript + template validation)
- **Format**: `bun run format` (formats code with Prettier)
- **Fix**: `bun run fix` (auto-fixes ESLint issues + formats)
- **Type check**: `bun run typecheck` (TypeScript compiler check)

### Dependency Management

- **Validate Renovate config**: `bunx -p renovate renovate-config-validator --strict` (run from project root)
- **Configuration file**: `.github/renovate.json`
- **Schedule**: Before 3am every weekday and Sunday (JST)
- **Security-first approach**: Security updates receive highest priority (10) with automatic merging
- **Stability periods**: Non-patch updates wait 3 days, major updates wait 7 days
- **Package grouping**: Related packages grouped for efficient updates:
  - ESLint/Prettier tools: 2-day minimum age
  - Testing frameworks: 3-day minimum age
  - Build tools: 5-day minimum age
- **GitHub Actions**: Trust-based handling with first-party actions auto-merged, third-party requiring manual review
- **Runtime constraints**: Major runtime updates disabled to prevent compatibility issues

## Architecture Overview

### Tech Stack

- **Framework**: Astro 5.x (static site generator)
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with custom utility system
- **Runtime**: Bun (JavaScript runtime and package manager)

### Project Structure

```text
src/
├── components/     # Astro components (GitHubContributions, SteamSummary, SpotifyRecent)
├── layouts/        # Layout components (Layout.astro)
├── pages/          # Astro pages with file-based routing (index.astro)
└── styles/         # Global CSS and Tailwind configuration (global.css)
```

### Key Configuration Details

- **File Extensions**: Astro components use `.astro` extension
- **Path Aliases**: `@/*` maps to `src/*`, `$/*` maps to `public/*`
- **Environment**: Astro environment variables (astro:env/server):
  - `GITHUB_USERNAME` - GitHub username for contributions API (public)
  - `STEAM_API_KEY` - Steam Web API key (secret)
  - `STEAM_ID` - Steam user ID (public)
- **Output**: Static site generation (`output: 'static'` in astro.config.mjs)
- **Git Hooks**: Lefthook configured for pre-commit linting and formatting
- **Renovate Configuration**: Comprehensive dependency management with security-first approach

### Styling System

- Uses Tailwind CSS v4 with custom utilities defined in `src/styles/global.css`
- Custom grid area utilities for layout management:
  - `grid-areas-layout` - Defines header/main/footer grid template
  - `grid-area-{name}` - Assigns elements to named grid areas
- Dark theme with neutral color palette (neutral-900, neutral-800, etc.)
- Responsive design with mobile-first approach

### API Integrations

The portfolio displays data from three external sources:

1. **GitHub Contributions**
   - Fetches merged pull requests via GitHub Search API
   - Filters out PRs to own repositories
   - Displays recent OSS contributions

2. **Steam Library**
   - Uses Steam Web API to fetch owned games
   - Shows games sorted by playtime
   - Displays game capsule images from Steam CDN

3. **Spotify**
   - Embeds Spotify playlist (2024 Top Songs)
   - Uses iframe embed with Spotify's generator

All API calls are made at build time in `src/pages/index.astro` using `Promise.all()` for parallel fetching.

### Component Architecture

- **Layout Component**: Base HTML structure with header, main, and footer grid areas
- **Feature Components**: Self-contained Astro components for each data source
- **Props Interface**: TypeScript interfaces define expected data shapes
- **Responsive Grid**: Utilizes Tailwind's responsive grid system (sm, md, xl breakpoints)

### Build and Deployment

- Static site generation with Astro
- No client-side JavaScript by default (static HTML/CSS)
- Build output in `dist/` directory
- Optimized for deployment to static hosting platforms (Vercel)
