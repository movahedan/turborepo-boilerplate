/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['*.test.ts?(x)'],
      extends: [require.resolve('@vercel/style-guide/eslint/jest-react')],
      env: {
        node: true,
        browser: true,
        jest: true,
      },
    },
  ],
};
