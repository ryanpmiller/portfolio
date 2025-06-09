import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'build', 'node_modules']
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // More relaxed rules for test files and setup files
  {
    files: ['**/*.test.{ts,tsx}', '**/setupTests.ts', '**/test-utils.tsx', '**/reportWebVitals.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
  // Allow context files to export components and constants
  {
    files: ['**/*Context.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
);
