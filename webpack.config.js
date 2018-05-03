const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

const libraryName = 'purejs';
const minimizer = [];

let suffix = '';

if (env === 'build') {
  minimizer.push(
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: true,
        ecma: 6,
        mangle: false,
      },
      sourceMap: false,
    }),
  );
  suffix = '.min';
}

const config = {
  entry: {
    purejs: `${__dirname}/index.js`,
  },
  mode: env === 'build' ? 'production' : 'developmet',
  devtool: 'source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: `[name]${suffix}.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.json', '.js'],
  },
  optimization: {
    minimizer: minimizer,
  },
};

module.exports = config;
