const { resolve } = require('node:path');
const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['import'],
  settings: {
    'import/internal-regex': '^(?:@repo/)',
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project,
      },
    },
  },
  rules: {
    'import/first': 'error',
    'import/no-cycle': 'error',
    'import/namespace': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-self-import': 'error',
    'import/no-default-export': 'error',
    'import/no-unused-modules': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/newline-after-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/named': 'error',
    'import/export': 'error',
    'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'import/max-dependencies': ['error', { max: 15, ignoreTypeImports: true }],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
        ],
        pathGroups: [
          {
            pattern: '@repo/ui/*',
            group: 'internal',
            position: 'after',
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'external'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: false },
        warnOnUnassignedImports: false,
      },
    ],
  },
};
