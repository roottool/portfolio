# AGENTS.md

This file provides guidance to AI coding assistants when working with code in this repository.

## Tech Stack

- **Framework**: Astro 5.x (static site generator)
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with custom utility system
- **Runtime**: Bun (JavaScript runtime and package manager)

## Development Commands

### Package Management

- Uses `bun` as package manager and runtime
- Install dependencies: `bun install`

### Development Workflow

- **Development server**: `bun run dev` (Astro dev server)
- **Build**: `bun run build` (Astro static site build)
- **Production preview**: `bun run preview` (Preview production build locally)

### Code Quality

- **Lint**: `bun run lint` (runs ESLint + dprint checks in sequence)
  - `bun run lint:dprint` - dprint format check
  - `bun run lint:eslint` - ESLint check
- **Format**: `bun run format` (formats code with dprint)
- **Fix**: `bun run fix` (auto-fixes ESLint issues + formats with dprint)
- **Type check**: `bun run typecheck` (runs both Astro check and TypeScript compiler)
  - `bun run typecheck:astro` - Astro check (TypeScript + template validation)
  - `bun run typecheck:tsc` - TypeScript compiler check

## Project Structure

```text
src/
├── components/     # Astro components (GitHubContributions, SteamSummary, SpotifyRecent)
├── layouts/        # Layout components (Layout.astro)
├── pages/          # Astro pages with file-based routing (index.astro)
└── styles/         # Global CSS and Tailwind configuration (global.css)
```

## Key Configuration

- **File Extensions**: Astro components use `.astro` extension
- **Path Aliases**: `@/*` maps to `src/*`, `$/*` maps to `public/*`
- **Output**: Static site generation (`output: 'static'` in astro.config.mjs)

## Architecture Overview

### Component Architecture

- **Layout Component**: Base HTML structure with header, main, and footer grid areas
- **Feature Components**: Self-contained Astro components for each data source
- **Props Interface**: TypeScript interfaces define expected data shapes
- **Responsive Grid**: Utilizes Tailwind's responsive grid system (sm, md, xl breakpoints)

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

### Build and Deployment

- Static site generation with Astro
- No client-side JavaScript by default (static HTML/CSS)
- Build output in `dist/` directory
- Optimized for deployment to static hosting platforms (Vercel)
