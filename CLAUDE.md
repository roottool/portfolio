# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

For general development information, see [@AGENTS.md](./AGENTS.md).

This file contains Claude Code-specific guidance and detailed configurations.

## Build Gotchas

- `bun run build` runs `scripts/generate-og.ts` before `astro build` — OG image is generated statically at build time

## Environment Variables

Astro environment variables (astro:env/server):

- `GITHUB_USERNAME` - GitHub username for contributions API (public)
- `STEAM_API_KEY` - Steam Web API key (secret)
- `STEAM_ID` - Steam user ID (public)
