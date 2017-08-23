module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'prettier'],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: true
    }
  },
  parser: 'babel-eslint',
  globals: {
    document: false,
    escape: false,
    navigator: false,
    unescape: false,
    window: false,
    location: false,
    describe: true,
    before: true,
    it: true,
    expect: true,
    sinon: true
  }
};
