import _ from 'lodash';
import webpackNumbers from 'webpack-plugin';

export default function a(){
  console.log(webpackNumbers.numToWord(2));
  console.log(
    _.join(['Another', 'module', 'loaded!'], ' ')
  );
}