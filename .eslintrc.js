module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import', 'prettier'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: true,
    },
  },
  overrides: [
    {
      files: '*.spec.js',
      rules: {
        'no-unused-expressions': 'off',
        'no-undef': 'off',
      },
    },
  ],
  parser: '@babel/eslint-parser',
  globals: {
    document: false,
    escape: false,
    navigator: false,
    unescape: false,
    window: false,
    location: false,
    describe: true,
    before: true,
    after: true,
    it: true,
    expect: true,
    sinon: true,
    purejs: true,
  },
};
