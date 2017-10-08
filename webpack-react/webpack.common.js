var path = require("path");
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor:[
       'lodash',
       './src/print.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
           'file-loader'
         ]
      }
    ]
  }
};