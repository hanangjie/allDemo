const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  output:{
    publicPath: './'
  },//输出的js前缀
  plugins: [
    new CleanWebpackPlugin(['dist']),//删除原有的dist
    new UglifyJSPlugin({
      sourceMap: true
    })//压缩
  ]
});