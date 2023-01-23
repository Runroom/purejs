import path from 'path';
import TerserWebpack from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const libraryName = 'purejs';
const plugins = [];
const minimizer = [
  new TerserWebpack({
    parallel: true,
    extractComments: false,
    terserOptions: {
      ecma: 8,
      compress: { warnings: false },
      output: {
        comments: false,
        beautify: false,
      },
    },
  }),
];

const config = {
  entry: {
    purejs: `${__dirname}/src/index.ts`,
    'lib/anchorTo': `${__dirname}/src/lib/anchorTo.ts`,
    'lib/animateTo': `${__dirname}/src/lib/animateTo.ts`,
    'lib/debounce': `${__dirname}/src/lib/debounce.ts`,
    'lib/elementOffsetTop': `${__dirname}/src/lib/elementOffsetTop.ts`,
    'lib/events': `${__dirname}/src/lib/events.ts`,
    'lib/forEach': `${__dirname}/src/lib/forEach.ts`,
    'lib/isExplorer': `${__dirname}/src/lib/isExplorer.ts`,
    'lib/isInt': `${__dirname}/src/lib/isInt.ts`,
    'lib/isNan': `${__dirname}/src/lib/isNan.ts`,
    'lib/safeScrollTop': `${__dirname}/src/lib/safeScrollTop.ts`,
    'lib/scrollDirection': `${__dirname}/src/lib/scrollDirection.ts`,
    'lib/touchable': `${__dirname}/src/lib/touchable.ts`,
  },
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: `${__dirname}`,
    filename: `[name].js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  optimization: {
    minimizer,
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /(\.ts)$/,
        loader: 'ts-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.json', '.ts', '.js'],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return { ...config, plugins };
};
