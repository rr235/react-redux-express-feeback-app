module.exports = {
  extends: ['airbnb', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
  plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
  rules: {
    'prettier/prettier': [
      // customizing prettier rules
      'error',
      {
        singleQuote: true
      }
    ],
    eqeqeq: ['error', 'always'], // adding some custom ESLint rules
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
