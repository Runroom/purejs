// Karma configuration
// Generated on Wed Jan 10 2018 09:56:25 GMT+0100 (CET)
// var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: ['lib/purejs.min.js', 'lib/tests.min.js'],
    // files: ['lib/tests.min.js'],
    exclude: ['**/_*.js'],
    preprocessors: {
      'src/**/*.js': ['coverage']
      // 'tests/**/*.spec.js': ['babel']
      // 'template.html': ['html2js']
    },
    webpack: webpackConfig,
    babelPreprocessor: {
      options: { presets: ['env'], sourceMap: 'inline' },
      filename: function(file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function(file) {
        return file.originalPath;
      }
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: { reporters: [{ type: 'html', dir: 'build/coverage' }, { type: 'text-summary', dir: '/' }] },
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    customLaunchers: { PhantomJS_custom: { base: 'PhantomJS', debug: true } },
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      require('istanbul-instrumenter-loader'),
      require('karma-babel-preprocessor'),
      require('karma-chai'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-html2js-preprocessor'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ]
  });
};
