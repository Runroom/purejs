// Karma configuration
// Generated on Wed Jan 10 2018 09:56:25 GMT+0100 (CET)
const puppeteer = require('puppeteer');

const plugins = [
  'istanbul-instrumenter-loader',
  'karma-coverage-istanbul-reporter',
  'karma-babel-preprocessor',
  'karma-chai',
  'karma-chrome-launcher',
  'karma-coverage',
  'karma-coveralls',
  'karma-mocha',
  'karma-mocha-reporter',
  'karma-sinon-chai',
  'karma-webpack'
];
const coverageReporters = [{ type: 'text-summary' }];
const reporters = ['coverage-istanbul', 'mocha', 'coverage'];
process.env.CHROME_BIN = puppeteer.executablePath();

let browsers = ['ChromeHeadless'];
let customLaunchers = {};

if (process.env.TRAVIS) {
  browsers = ['Chrome_travis_ci'];
  reporters.push('coveralls');
  coverageReporters.push({ type: 'lcov', dir: 'coverage' });
  customLaunchers = {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  };
} else {
  coverageReporters.push({ type: 'html', dir: 'coverage', subdir: '.' });
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai', 'chai'],
    files: ['purejs.min.js', 'test/**/*.js'],
    preprocessors: {
      'purejs.min.js': ['coverage'],
      'test/**/*.js': ['webpack']
    },
    webpack: {
      mode: 'development'
    },
    webpackMiddleware: {
      stats: 'minimal'
    },
    reporters,
    coverageReporter: { reporters: coverageReporters },
    logLevel: config.LOG_ERROR,
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers,
    singleRun: true,
    concurrency: Infinity,
    client: {
      chai: {
        includeStack: true
      }
    },
    customLaunchers,
    plugins
  });
};
