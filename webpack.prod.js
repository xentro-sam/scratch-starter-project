const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

process.env["NODE_ENV"] = "production";

module.exports = merge([
  common,
  {
    mode: "production",
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: "./build",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html'),
      }),
      new CopyWebpackPlugin({ // Add the CopyWebpackPlugin
        patterns: [
          {
            from: path.resolve(__dirname, 'public/icons'), // Source directory
            to: path.resolve(__dirname, 'build/icons'), // Destination directory in the build folder
          },
        ],
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new CssMinimizerPlugin(),
      ],
    },
  },
]);
