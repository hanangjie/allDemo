/**
 * Created by hzw on 2016/7/29.
 * connect 342782880
 */
function HelloWorldPlugin(options) {
    // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('Hello World!');
    });
};

module.exports = HelloWorldPlugin;