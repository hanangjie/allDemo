const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack=require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  output:{
    publicPath: './'
  },//输出的js前缀
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
});