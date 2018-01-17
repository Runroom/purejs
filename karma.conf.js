// Karma configuration
// Generated on Wed Jan 10 2018 09:56:25 GMT+0100 (CET)
var configuration = {
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
  reporters: ['mocha', 'coverage'],
  coverageReporter: { reporters: [{ type: 'html', dir: 'build/coverage' }, { type: 'text-summary', dir: '/' }] },
  port: 9876,
  colors: true,
  autoWatch: true,
  browsers: ['Chrome'],
  singleRun: false,
  concurrency: Infinity,
  client: {
    chai: {
      includeStack: true
    }
  },
  customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  },
  plugins: [
    require('istanbul-instrumenter-loader'),
    require('karma-babel-preprocessor'),
    require('karma-chai'),
    require('karma-chrome-launcher'),
    require('karma-coverage'),
    require('karma-mocha'),
    require('karma-mocha-reporter'),
    require('karma-sinon-chai')
  ]
};

if (process.env.TRAVIS) {
  configuration.browsers = ['Chrome_travis_ci'];
}

module.exports = function(config) {
  configuration.logLevel = config.LOG_ERROR;
  config.set(configuration);
};
