const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack Output",
      }),
    ],
  };