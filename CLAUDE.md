# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Package Management

- Uses `pnpm` as package manager (version refers from packageManager in package.json)
- Install dependencies: `pnpm install`

### Development Workflow

- **Development server**: `pnpm run dev` (Next.js dev server)
- **Build**: `pnpm run build` (runs clean + parallel build tasks)
- **Production server**: `pnpm run start`
- **Clean**: `pnpm run clean` (removes .next and .swc directories)

### Code Quality

- **Lint**: `pnpm run lint` (runs ESLint + Prettier checks)
- **Format**: `pnpm run format` (formats code with Prettier)
- **Fix**: `pnpm run fix` (auto-fixes ESLint issues + formats)
- **Type check**: `pnpm run typecheck` (TypeScript compiler check)

### Testing

- **Run tests**: `pnpm run test` (Vitest with coverage)
- **Watch mode**: `pnpm run test:watch`
- **Coverage only**: `pnpm run test:vitest`

## Architecture Overview

### Tech Stack

- **Framework**: Next.js 15.3.1 with React 19.1.0
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS + Stitches (@stitches/react)
- **State Management**: SWR for data fetching
- **Validation**: Valibot for environment variables and schemas
- **HTTP Client**: ky library
- **Testing**: Vitest with React Testing Library and happy-dom
- **Mocking**: MSW (Mock Service Worker)

### Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components (Backdrop, PageTitleWrapper)
│   ├── layouts/        # Layout components (Navbar, SideDrawer, FetchErrorBoundary)
│   ├── organisms/      # Complex components (GameInfoList)
│   ├── templates/      # Page templates (Home, Hobbies, BasicLayout)
│   └── ui/            # Reusable UI components
├── hooks/             # Custom React hooks (useFetch)
├── libs/              # Utility libraries and configurations
│   ├── steam/         # Steam API related utilities
│   ├── env.ts         # Environment variable validation
│   ├── fetcher.ts     # HTTP client configuration
│   └── utils.ts       # General utilities
├── mocks/             # MSW mock handlers and data
├── pages/             # Next.js pages (file-based routing)
│   └── api/           # API routes
└── styles/            # Style constants and global CSS
```

### Key Configuration Details

- **File Extensions**: Next.js uses custom extensions (`.page.tsx` for pages, `.api.ts` for API routes)
- **Path Aliases**: `@/*` maps to `src/*`, `$/*` maps to `public/*`
- **Environment**: Requires Steam API configuration (STEAM_API_KEY, STEAM_USER_ID, etc.)
- **Image Optimization**: Configured for Steam CDN images
- **Git Hooks**: Lefthook configured for pre-commit linting and formatting

### Component Architecture

- Follows atomic design principles (atoms → molecules → organisms → templates)
- Uses compound export pattern for component organization
- Leverages React Error Boundaries for API error handling
- Implements responsive design with Tailwind CSS and Stitches breakpoints

### Steam Integration

- Portfolio includes Steam gaming data integration
- Custom utilities for Steam API URL construction, playtime conversion, and game sorting
- Mock data and handlers available for development without API access

### Testing Strategy

- Unit tests with Vitest and React Testing Library
- MSW for API mocking in tests
- Coverage reporting configured (excludes types, mocks, and styles)
- Happy-dom as test environment for better performance than jsdom
