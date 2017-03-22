/**
 * Created by hzw on 2016/7/25.
 * connect 342782880
 */

//var jQuery=require("jquery");
require("./style.css");
require.include("./content2")
require.ensure([], function(require) {
    require("expose?Xm!./content");
    var d=require("xyz")
    d.aFunction()
    var id=require.resolve("xyz")
   // a(answer);
    var _=require("underscore")
    _.map([1, 2, 312], function(num){console.log(num * 3); });
});

require.ensure([], function(require) {
    var a=require("./content2");
    var b=require("./content");
    console.log(b+1)
});
