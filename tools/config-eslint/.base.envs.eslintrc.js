/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.test.ts?(x)'],
      extends: [require.resolve('@vercel/style-guide/eslint/jest')],
      plugins: ['jest', 'jest-dom', 'testing-library'],
      env: {
        node: true,
        jest: true,
      },
    },
    {
      files: ['*.test.tsx'],
      extends: [require.resolve('@vercel/style-guide/eslint/jest-react')],
      env: {
        browser: true,
      },
    }
  ]
};
