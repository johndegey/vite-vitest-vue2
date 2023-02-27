module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue-scoped-css/recommended',
  ],
  overrides: [
    {
      files: ['tests/*.{j,t}s?(x)', 'tests/**/*.spec.{j,t}s?(x)'],
      extends: ['plugin:vitest-globals/recommended'],
      env: {'vitest-globals/env': true},
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {},
};
