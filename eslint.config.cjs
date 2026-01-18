const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat({
  recommendedConfig: true,
});

const legacy = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {},
};

module.exports = [
  { ignores: ['node_modules/**', 'dist/**', '.cache/**', 'public/**'] },
  ...compat.config(legacy),
];
