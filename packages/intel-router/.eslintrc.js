/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["../../tools/config-eslint/library.eslintrc.js"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-unsafe-return': 'off',
    'eslint-comments/require-description': 'off'
  },
  overrides: [
    {
      files: "i18n.ts", 
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ]
};
