const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
});
