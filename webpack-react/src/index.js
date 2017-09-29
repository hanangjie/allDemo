import _ from 'lodash';
import Icon from './icon.jpg';
import printMe from './print.js';
import c from './c.js';

function component() {
  if(process.env.NODE_ENV === 'develop'){
    console.log('it\'s develop environment');
  }
  var element = document.createElement('div');
  var btn = document.createElement('button');
  

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  var myIcon = new Image();
      myIcon.src = Icon;
  
  element.appendChild(myIcon);
  btn.innerHTML = 'Click me and check the console!12';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());