# Code Style and Conventions

## TypeScript Configuration
- Strict mode enabled
- `noUnusedLocals` and `noUnusedParameters` set to true
- JSX preserved for Next.js processing
- Emotion as JSX import source

## ESLint Configuration
- Uses ESLint 9.x with flat config (eslint.config.mjs)
- Stylistic plugins for consistent formatting
- Next.js specific rules
- React and React Hooks rules
- Import/export rules
- TypeScript-specific rules

## File Structure
- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable React components
- `src/app/api/` - API routes
- `public/` - Static assets

## Naming Conventions
- PascalCase for React components
- camelCase for functions and variables
- kebab-case for file names (where appropriate)
- TypeScript interfaces and types in PascalCase

## Import Style
- Absolute imports using path mapping (`@/*`, `~/*`)
- Group imports: external libraries first, then internal modules