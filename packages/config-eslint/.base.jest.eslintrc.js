/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['*.test.ts?(x)'],
      extends: [require.resolve('@vercel/style-guide/eslint/jest')],
      env: {
        node: true,
        jest: true,
      },
    },
  ],
};
