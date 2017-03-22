/**
 * Created by hzw on 2016/7/25.
 * connect 342782880
 */
var webpack=require("webpack")
var path = require("path");
//var proxy = require('http-proxy-middleware');
module.exports = {
    entry: {
        app: ["./entry2.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        hot: true,
        proxy: {
            '/imgUrl/*': {
                target: 'http://localhost:3003',
              /*  rewrite: function(req) {
                    req.url = req.url.replace(/^\/imgUrl/, '');
                    console.log("replace:"+req.url)
                },*///无效
                pathRewrite:{ '/imgUrl1/':"/imgUrl/"},
                secure: false,
                bypass: function(req, res, proxyOptions) {
                        console.log(req.url+'Skipping proxy for browser request.');
                }
            },
            '/dispatchAdmin/*':{
                target: 'http://10.7.15.24/'
            }
        }
    }
};

/*
var webpack=require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path=require("path")
var HelloWorldPlugin = require('./hello-world');
var MyPlungin=require("./complier")
module.exports = {
    entry: {
        entry: ["./entry","webpack/hot/dev-server"]
       // entry2: "./entry2",
        //vendor: ["jquery", "underscore"]
    },
    output: {
        path: "./dist/",
        filename: "[name].js",
        chunkFilename: "[id].js"
    },

    resolve:{
        alias:{
            xyz:'./content2.js'
        }
    },
    //不会打包进来，需要 额外引入script
    /!*externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },*!/
   module: {
        loaders: [
            //{ test: /\.css$/, loader:ExtractTextPlugin.extract("style-loader", "css-loader") }
            {test:/\.css/,loaders: ["style","css"], exclude: /node_modules/}
        ]
    },
    //watch:true,
   // devtool: "eval",//最高效，还有其他方式
    // eval-cheap-module-source-map
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
      /!*  new webpack.dependencies.LabeledModulesPlugin(),
        new HelloWorldPlugin({options: true}),
        //会根据引用 给需要的打包
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new MyPlungin({options:"nada"})*!/
       /!* function() {
            this.plugin("done", function(stats) {
                require("fs").writeFileSync(
                    //"stats.json",
                    path.join(__dirname, "..", "stats.json"),
                    JSON.stringify(stats.toJson()));
            });
        }*!/
        //new ExtractTextPlugin("[name].css")
       /!* new ExtractTextPlugin("style.css", {
            allChunks: true
        })*!/
       //new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
      /!*  new ExtractTextPlugin("a.css", {
            allChunks: true
        })*!/
       // new webpack.optimize.DedupePlugin()
      /!*  new webpack.optimize.LimitChunkCountPlugin({maxChunks: 3}),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 1})*!/
       // new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js")
    ]
};*/
/*module.exports = {
    entry: {
        app: "./entry.js",
        b:"./entry2.js",
       // vendor: ["jquery", "underscore"]
    },
    output: {
        path: "./dist/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
       // new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js")
        new webpack.optimize.CommonsChunkPlugin("init.js")
    ]
};*/
