const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const libraryName = 'purejs';
const plugins = [];

let suffix = '';

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  suffix = '.min';
}

const config = {
  entry: {
    purejs: `${__dirname}/index.js`,
  },
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
  plugins,
};

module.exports = config;
