const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output:{
    publicPath: './'
  },//输出的js前缀
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })//压缩
  ]
});