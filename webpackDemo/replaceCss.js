/**
 * Created by hzw on 2016/8/24.
 * connect 342782880
 */
// addStyleTag(css: string) => HTMLStyleElement
var addStyleTag = require("./style");

var element = addStyleTag(".rule { attr: name }");
module.exports = null;

// check if HMR is enabled
if(module.hot) {

    // accept itself
    module.hot.accept();

    // removeStyleTag(element: HTMLStyleElement) => void
    var removeStyleTag = require("./removecss");

    // dispose handler
    module.hot.dispose(function() {
        // revoke the side effect
        removeStyleTag(element);
    });
}