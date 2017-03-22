/**
 * Created by hzw on 2016/8/19.
 * connect 342782880
 */

function MyPlugin(options) {
    // Configure your plugin with options...
}

MyPlugin.prototype.apply = function(compiler) {
    compiler.plugin("compile", function(params) {
        console.log("The compiler is starting to compile...");
    });

    compiler.plugin("compilation", function(compilation) {
        console.log("The compiler is starting a new compilation...");

        compilation.plugin("optimize", function() {
            console.log("The compilation is starting to optimize files...");
        });
    });

    compiler.plugin("emit", function(compilation, callback) {
        console.log("The compilation is going to emit files...");
        callback();
    });
};

module.exports = MyPlugin;