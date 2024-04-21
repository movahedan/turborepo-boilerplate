/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    './.base.eslintrc.js',
    './.jsx.eslintrc.js',
  ]
};
