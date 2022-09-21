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
    'dist/purejs': `${__dirname}/src/index.ts`,
    'dist/lib/anchorTo': `${__dirname}/src/lib/anchorTo.ts`,
    'dist/lib/animateTo': `${__dirname}/src/lib/animateTo.ts`,
    'dist/lib/debounce': `${__dirname}/src/lib/debounce.ts`,
    'dist/lib/elementOffsetTop': `${__dirname}/src/lib/elementOffsetTop.ts`,
    'dist/lib/events': `${__dirname}/src/lib/events.ts`,
    'dist/lib/forEach': `${__dirname}/src/lib/forEach.ts`,
    'dist/lib/isExplorer': `${__dirname}/src/lib/isExplorer.ts`,
    'dist/lib/isInt': `${__dirname}/src/lib/isInt.ts`,
    'dist/lib/isNan': `${__dirname}/src/lib/isNan.ts`,
    'dist/lib/safeScrollTop': `${__dirname}/src/lib/safeScrollTop.ts`,
    'dist/lib/scrollDirection': `${__dirname}/src/lib/scrollDirection.ts`,
    'dist/lib/touchable': `${__dirname}/src/lib/touchable.ts`,
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
