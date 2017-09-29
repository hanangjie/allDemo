const merge = require('webpack-merge');
const webpack=require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',//实现源码调试
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//热加载
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('develop')
      }
     })//设置环境变量
  ]
});