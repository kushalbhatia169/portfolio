module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // enable additional rules
    "indent": ["warn", 4],
    "linebreak-style": ["warn", "unix"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["warn", "always"],

    // disable rules from base configurations
    "for-direction": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  },
};
