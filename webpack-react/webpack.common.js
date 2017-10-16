var path = require("path");
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor:[
      'lodash'
    ]
  },
  devtool:'inline-source-map',//源码调试
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')//路径
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'out',
      src:'./index.html'
    })
  ]
  ,module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
           'file-loader'
         ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};