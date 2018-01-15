// Karma configuration
// Generated on Wed Jan 10 2018 09:56:25 GMT+0100 (CET)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai', 'chai'],
    files: ['lib/purejs.min.js', 'tests/**/*.spec.js'],
    exclude: ['**/_*.js'],
    preprocessors: {
      'lib/purejs.min.js': ['coverage'],
      'tests/**/*.spec.js': ['babel']
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
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    client: {
      chai: {
        includeStack: true
      }
    },
    plugins: [
      require('istanbul-instrumenter-loader'),
      require('karma-babel-preprocessor'),
      require('karma-chai'),
      // require('karma-chai-spies'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-sinon-chai')
    ]
  });
};
