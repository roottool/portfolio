const parser = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: '.',
  },
}

/** @type {import('eslint/lib/shared/types').ConfigData.['settings']} */
const settings = {
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
}

/** @type {import('eslint/lib/shared/types').ConfigData['rules']} */
const rules = {
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
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
    'sort-destructure-keys/sort-destructure-keys': 'warn',
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
}

/** @type {import('eslint/lib/shared/types').ConfigData} */
const config = {
  ...parser,
  ...settings,
  ...rules,
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'react-hooks',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:typescript-sort-keys/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
}

module.exports = config
