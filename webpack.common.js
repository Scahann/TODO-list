const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const antdModifyVars = {
  "@font-size-base": "16px",
};

module.exports = {
  entry: {
    app: ["./src/index.tsx"],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".less"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader",
      },

      {
        test: /\.less$/i,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: antdModifyVars,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: antdModifyVars,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "App.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
