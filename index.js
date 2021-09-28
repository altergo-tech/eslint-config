module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },

  env: {
    es2021: true,
    node: true,
  },

  plugins: [
    '@typescript-eslint',
    'import',
    'node',
    'promise',
  ],
};
