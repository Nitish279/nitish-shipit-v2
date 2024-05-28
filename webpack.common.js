// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     publicPath: "auto",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: [
//           "style-loader",
//           {
//             loader: "css-loader",
//             options: { importLoaders: 1 },
//           },
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 plugins: [
//                   "@csstools/postcss-bundler",
//                   "@csstools/postcss-cascade-layers",
//                 ],
//               },
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/,
//         type: "asset",
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.svg$/,
//         use: ["@svgr/webpack", "url-loader"],
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/,
//         type: "asset/resource",
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//       favicon: "./public/favicon.ico",
//     }),
//   ],
// };

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
};
