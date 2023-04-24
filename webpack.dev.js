const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "js/[name].bundle.js",
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    hot: true,
    host: "127.0.0.1",
    historyApiFallback: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
