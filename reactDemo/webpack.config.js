var path=require('path');

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
  }
}