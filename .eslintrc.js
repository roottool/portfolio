// @ts-check

/** @type {import('eslint/lib/shared/types').ConfigData} */
const config = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'react',
    'react-hooks',
    '@next/next',
    'import',
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'object'],
        'newlines-between': 'always',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['jest.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['jest.setup.js', 'src/test/**/*', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
      env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
    },
  ],
}

module.exports = config
