import path from "path";
import TerserWebpack from "terser-webpack-plugin";

const libraryName = "purejs";
const plugins = [];
const minimizer = [
  new TerserWebpack({
    cache: true,
    parallel: true,
    extractComments: false,
    terserOptions: {
      ecma: 8,
      compress: { warnings: false },
      output: {
        comments: false,
        beautify: false
      }
    }
  })
];

const config = {
  entry: {
    purejs: `${__dirname}/src/index.ts`
  },
  mode: "production",
  devtool: "source-map",
  output: {
    path: `${__dirname}`,
    filename: `[name].min.js`,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.ts)$/,
        loader: "ts-loader",
        exclude: /(node_modules)/
      }
    ]
  },
  resolveLoader: {
    modules: ["node_modules"]
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
    extensions: [".json", ".ts", ".js"]
  },
  optimization: {
    minimizer
  },
  plugins
};

module.exports = config;
