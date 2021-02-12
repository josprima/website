module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: {
      globals: true,
    },
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@lib', './src/lib'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
