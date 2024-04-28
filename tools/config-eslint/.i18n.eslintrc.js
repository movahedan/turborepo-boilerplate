/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["package.json", "tsconfig*.json", "project.inlang"],
  extends: [
    'plugin:json/recommended',
  ],
  plugins: ["i18next"],
  rules: {
    "i18next/no-literal-string": "error"
  },
  overrides: [
    {
      files: ['*.test.ts?(x)'],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ]
};
