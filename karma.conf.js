// Karma configuration
// Generated on Wed Jan 10 2018 09:56:25 GMT+0100 (CET)
const plugins = [
  require('istanbul-instrumenter-loader'),
  require('karma-babel-preprocessor'),
  require('karma-chai'),
  require('karma-chrome-launcher'),
  require('karma-coverage'),
  require('karma-coveralls'),
  require('karma-mocha'),
  require('karma-mocha-reporter'),
  require('karma-sinon-chai')
];
const coverageReporters = [{ type: 'text-summary' }];
const reporters = ['mocha', 'coverage'];

let browsers = ['Chrome'];
let customLaunchers = {};
let singleRun = false;

if (process.env.TRAVIS) {
  browsers = ['Chrome', 'Chrome_travis_ci'];
  reporters.push('coveralls');
  coverageReporters.push({ type: 'lcov', dir: 'coverage' });
  customLaunchers = {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  };
  singleRun = true;
} else {
  coverageReporters.push({ type: 'html', dir: 'coverage', subdir: '.' });
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai', 'chai'],
    files: ['lib/purejs.min.js', 'test/**/*.js'],
    preprocessors: {
      'lib/purejs.min.js': ['coverage'],
      'test/**/*.js': ['babel']
    },
    babelPreprocessor: {
      options: { presets: ['env'], sourceMap: 'inline' },
      filename: function(file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function(file) {
        return file.originalPath;
      }
    },
    reporters: reporters,
    coverageReporter: { reporters: coverageReporters },
    logLevel: config.LOG_ERROR,
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: browsers,
    singleRun: singleRun,
    concurrency: Infinity,
    client: {
      chai: {
        includeStack: true
      }
    },
    customLaunchers: customLaunchers,
    plugins: plugins
  });
};
