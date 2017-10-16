import Icon from './icon.jpg';
import printMe from './print.js';
import _ from 'lodash';
import webpackNumbers from 'webpack-plugin';

function getComponent() {
  console.log(webpackNumbers.numToWord(2));
  if(process.env.NODE_ENV === 'develop'){
    console.log(`it\'s develop environment1`);
  }
         var element = document.createElement('div');
   
        element.innerHTML = _.join(['Hello', 'webpack'], ' 1w');
   
        return element;
   
  
}
document.body.appendChild(getComponent());