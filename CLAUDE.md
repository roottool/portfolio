# CLAUDE.md

Claude Code (claude.ai/code) specific guidance for this repository.

Shared guidance for all AI coding assistants is imported from @AGENTS.md

## Claude Code Resources

| Resource                             | Use it when                                                                   | Do not use it when                                                          |
| ------------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `new-visual-kei-component` **skill** | Creating a new `src/components/*.astro` section, card list, grid, or embed    | Editing an existing component — read that file and match it instead         |
| `visual-kei-reviewer` **agent**      | After creating or modifying any `.astro` component or `src/styles/global.css` | For TypeScript in `src/features/**` or `scripts/**` — it only checks design |

The reviewer agent is read-only and does not run the linters. It complements `bun run lint`, it does not replace it — run both.
