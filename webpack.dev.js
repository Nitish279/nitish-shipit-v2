const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
  },
});
