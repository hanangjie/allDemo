
entry部分

```
//一个入口
entry: {
    app: './src/index.js'
},

//多个入口
entry: {
    app: './src/index.js',
    index:'./src/index.js'
},


entry: {
    app: './src/index.js',
    vendor:[
       'lodash',
       './src/print.js'
    ]
},
```
output部分

var path = require("path");

output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')//路径
  }

//添加hash
output: {
    filename: '[name].bundle[chunkhash].js',
    path: path.resolve(__dirname, 'dist')//路径
  }
module部分

module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
           'file-loader'
         ]
      },
      {
        test: /\.css$/,
        use: [
           'style-loader',
           'css-loader'
         ]
      }
    ]
  }

/*rules规则
*{ include: Condition }：匹配条件。约定了提供一个字符串或字符串数组，但不是强制的。
*{ exclude: Condition }：不能匹配条件。约定了提供一个字符串或字符串数组，但不是强制的。
*{ and: [Condition] }：匹配所有条件
*{ or: [Condition] }：匹配任何条件
*{ not: Condition }：不能匹配条件
*/
loader的使用 
Loading CSS
Loading Images
Loading Fonts
Loading Data
辅助属性

devtool:'inline-source-map',//源码调试
devServer：{
    contentBase:'./dist',//设置热加载的文件访问路径
},
externals: {
     lodash: {
       commonjs: 'lodash',
       commonjs2: 'lodash',
       amd: 'lodash',
       root: '_'
     }
},//不对相应的模块进行打包

//多个模块不打包
externals: [
  'library/one',
  'library/two',
  // Everything that starts with "library/"
  /^library\/.+$/
]
网页打包的模板
plugins: [
      new HtmlWebpackPlugin({
         template: './index.html'
      }),//网页打包的模板
]
使用devtool属性让浏览器可以调试源码。而不是编译后的代码。
{
   devtool: 'inline-source-map'
}
使用webpack-merge实现多环境不同配置
npm i --save-dev webpack-merge
本地安装webpack 启动需要调用将命令配置到package.json中的script属性中
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.prod.js",
    "start": "webpack-dev-server --open --config webpack.dev.js"
  }
分布加载组件chunkFilename 无法和webpack.optimize.CommonsChunkPlugin(自动打包公用模块)共用
output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',//动态调用
    path: path.resolve(__dirname, 'dist')
  },
chunkFilename 的作用 有待证实，不加也是会打包出已id为开头的0.bundle.js
指定打包引用
entry: {
    app: './src/index.js'
    ,vendor: [
       'lodash'
    ]
  },
externals属性 不打包
externals:{
     lodash:{
       commonjs: 'lodash',
       commonjs2: 'lodash',
       amd: 'lodash',
       root: '_'
     }
   }

externals: [
  'library/one',
  'library/two',
  // Everything that starts with "library/"
  /^library\/.+$/
]
shimming:可以使用不支持amd或者cmd的模块引入。

tips:
     全局的webpack会影响安装包内部的webpack。如果遇到打包或者热加载问题，建议卸载全局的webpack版本。
   打包的js 无论内部的import是否执行 都会打包例如
//不执行也会打包
function getAnother() {
  return import('./another-module.js').then(a => {
        return a;
   
      }).catch(error => 'An error occurred while loading the component');
  
}
