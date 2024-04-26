const { resolve } = require('node:path');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['.eslintrc.js', 'node_modules/', 'dist/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: resolve(process.cwd(), 'tsconfig.json'),
    tsconfigRootDir: process.cwd(),
    extraFileExtensions: ['.json'],
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['only-warn'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/node'),
    'eslint-config-turbo',
    './.i18n.eslintrc.js',
    './.base.envs.eslintrc.js',
    './.base.import.eslintrc.js',
  ],
  rules: {
    'prettier/prettier': ['error', require('@vercel/style-guide/prettier')],
    'no-console': ['error', { allow: ['error', 'info'] }],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
    ],
    // off rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-extraneous-dependencies': 'off'
  },
  overrides: [
    {
      files: ['turbo/**', '*.d.ts', '*.config.ts', '*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.test.ts?(x)'],
      rules: {
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
