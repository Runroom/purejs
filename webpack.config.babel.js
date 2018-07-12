import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { argv } from 'yargs';

const { env } = argv;
const libraryName = 'purejs';
const plugins = [];
const minimizer = [];

let suffix = '';
let mode = 'development';

if (env === 'build') {
  minimizer.push(
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
  );
  mode = 'production';
  suffix = '.min';
}

const config = {
  entry: {
    purejs: `${__dirname}/index.js`
  },
  mode,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: `[name]${suffix}.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /(\.jsx|\.js)$/,
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
