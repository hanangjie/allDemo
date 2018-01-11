var path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  entry:{
    app:'./src/js/index.js'
  },
  output:{
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),//路径
  },
  devtool:'inline-source-map',//源码调试
  devServer:{
      contentBase:'./dist',//设置热加载的文件访问路径
      port:9999//端口
  },    
  plugins: [
        new HtmlWebpackPlugin({
          template: './src/view/index.html'
        }),//网页打包的模板
  ]
  ,module:{
    rules:[{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
      loader: 'babel-loader',
      }
    }]
  }
}