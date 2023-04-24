const common = require("./webpack.common.js");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-source-map",
  stats: "minimal",
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({})],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].bundle.js",
    publicPath: "/",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [],
  },
});
