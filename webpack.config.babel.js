import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { argv } from 'yargs';

const { env } = argv;
const libraryName = 'purejs';
const plugins = [];
const minimizer = [
  new UglifyJsPlugin({
    cache: false,
    parallel: true,
    uglifyOptions: {
      compress: true,
      ecma: 6,
      mangle: false
    },
    sourceMap: false
  })
];

const config = {
  entry: {
    purejs: `${__dirname}/src/index.js`
  },
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: `${__dirname}`,
    filename: `[name].min.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules']
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.json', '.js']
  },
  optimization: {
    minimizer
  },
  plugins
};

module.exports = config;
