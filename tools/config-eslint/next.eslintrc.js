/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/next'),
    './.base.eslintrc.js',
    './.jsx.eslintrc.js',
  ],
  overrides: [
    {
      files: [
        'src/app/?(page)?(layout)?(error)?(global-error)?(loading)?(not-found).ts?(x)',
        'src/app/**/?(page)?(layout)?(error)?(global-error)?(loading)?(not-found).ts?(x)',
        'middleware.ts',
        'i18n.ts'
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
