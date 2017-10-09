var path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
      library: 'webpackNumbers',
      libraryTarget: 'umd'
    },
   externals:{
     lodash:{
       commonjs: 'lodash1',
       commonjs2: 'lodash2',
       amd: 'lodash3',
       root: '_'
     }
   }
};