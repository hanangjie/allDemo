 /**
 * Created by hzw on 2016/8/23.
 * connect 342782880
 */


 var webpack=require("webpack")
 var WebpackDevServer=require("webpack-dev-server")
 var config = require("./webpack.config.js");
 config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
 var compiler = webpack(config);
 var server = new WebpackDevServer(compiler, {
     hot: true,
    proxy: {
     '/imgUrl/*': {
      target: 'http://localhost:3003',
         rewrite: function(req) {
             req.url = req.url.replace(/^\/imgUrl/, '');
             console.log("replace:"+req.url)
         },
     }
    }
 });
 server.listen(8080);
/*
 document.write("Open the javascript console1s!");
 var context = require.context("./sd", false, /\.js$/);
 var modules = {};
 context.keys().forEach(function (key) {
  var module = context(key);
  modules[key] = module;
  customReloadLogic(key, module, false);
 })

 if (module.hot) {
  module.hot.accept(context.id, function () {
   //You can't use context here. You _need_ to call require.context again to
   //get the new version. Otherwise you might get errors about using disposed
   //modules
   var reloadedContext = require.context("./sd", false, /\.js$/);
   //To find out what module was changed you just compare the result of the
   //require call with the version stored in the modules hash using strict
   //equality. Equal means it is unchanged.
   var changedModules = reloadedContext.keys()
       .map(function (key) {
        return [key, reloadedContext(key)];
       })
       .filter(function (reloadedModule) {
        return modules[reloadedModule[0]] !== reloadedModule[1];
       });
   changedModules.forEach(function (module) {
    modules[module[0]] = module[1];
    customReloadLogic(module[0], module[1], true);
   });
  });
 }

 function customReloadLogic(name, module, isReload) {
  console.log("module " + name + (isReload ? " re" : " ") + "loaded");
 }*/
