/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/react'),
    'plugin:jsx-a11y/recommended',
    'plugin:tailwind/recommended',
    './.jsx.jest.eslintrc.js'
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
      },
    },
  ],
};
