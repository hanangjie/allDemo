import _ from 'lodash';
import Icon from './icon.jpg';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  var myIcon = new Image();
      myIcon.src = Icon;
  
  element.appendChild(myIcon);
  btn.innerHTML = 'Click me and check the console!111';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());