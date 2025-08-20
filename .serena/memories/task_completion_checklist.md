# Task Completion Checklist

## Before Committing Code
1. **Lint the code**: `pnpm lint` - Fix any linting errors
2. **Build the project**: `pnpm build` - Ensure no TypeScript errors
3. **Test locally**: `pnpm dev` - Verify functionality works
4. **Check git status**: `git status` - Review changed files

## Code Quality Checks
- Ensure no unused variables or imports (TypeScript strict mode)
- Follow established naming conventions
- Add proper TypeScript types
- Update documentation if needed

## Deployment Preparation
- Run `pnpm all` for complete workflow (install, lint, build)
- Verify environment variables are properly configured
- Test authentication flow if changes affect auth

## Git Workflow
- Create meaningful commit messages
- Consider creating feature branches for significant changes
- Review changes before committing: `git diff`