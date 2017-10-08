var path = require("path");
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
    ,vendor: [
      'lodash',
       './src/print.js'
    ]
    //,print:'./src/print.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
      }),//网页打包的模板
    new webpack.optimize.CommonsChunkPlugin({
           name: 'vendor' 
    })
    ,new webpack.HashedModuleIdsPlugin()//打包输出显示hashid
    ,new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })//自动打包公告模块
  ],

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