/**
 * Created by hzw on 2016/7/25.
 * connect 342782880
 */
require("style-loader!css-loader!./style.css");
require("style-loader!css-loader!./style2.css");
/*
require.ensure(["./content2"], function(require) {
    require("./content");
    b()
});
function b(){
    alert(1)
    require.ensure([], function(require) {
        setTimeout(function(){
            var a=require("./content");
            var $=require("jquery")
           $("body").append(a);
        },4002)
    });
}*/
var a=require("./content");
var $=require("jquery");
setTimeout(function(){
    $("body").append(a+"asasas");
},2012)

$.ajax({
    url:"/imgUrl1/img?name=3",
    method:"post"
}).done(function(d){
    console.log(d)
})


$.ajax({
    url:"/dispatchAdmin/dispatchownercs/selectDispatchOwnerListByDispatchSysRight",
    method:"get"
}).done(function(d){
    console.log(d)
})