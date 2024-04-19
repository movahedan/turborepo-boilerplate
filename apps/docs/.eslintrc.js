/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["../../packages/config-eslint/next.eslintrc.js"],
  parserOptions: {
    project: true,
  },
};
