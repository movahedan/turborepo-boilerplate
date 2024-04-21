/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["../../tools/config-eslint/react.eslintrc.js"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  }
};
