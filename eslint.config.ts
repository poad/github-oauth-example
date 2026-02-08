import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
// @ts-expect-error ignore type error
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import stylistic from '@stylistic/eslint-plugin';

import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default defineConfig(
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'src/tsconfig.json',
      'src/stories',
      '**/*.css',
      'node_modules/**/*',
      './.next/*',
      'out',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  // ...compat.config({
  //   extends: ['next'],
  //   settings: {
  //     next: {
  //       rootDir: '.',
  //     },
  //   },
  // }),
  reactHooks.configs.flat.recommended,
  {
    files: ['src/**/*.{jsx,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      '@stylistic': stylistic,
    },
    extends: [
      ...compat.config(jsxA11yPlugin.configs.recommended),
    ],
    settings: {
      react: {
        version: 'detect',
      },
      formComponents: ['Form'],
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' },
      ],
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
    },
  },
);
