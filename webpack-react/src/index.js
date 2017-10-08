import Icon from './icon.jpg';
import printMe from './print.js';

function getComponent() {
  if(process.env.NODE_ENV === 'develop'){
    console.log('it\'s develop environment1');
  }
         var element = document.createElement('div');
   
        element.innerHTML = _.join(['Hello', 'webpack'], ' 1w');
   
        return element;
   
  
}
function getAnother() {
  return import('./another-module.js').then(a => {
        return a;
   
      }).catch(error => 'An error occurred while loading the component');
  
}
document.body.appendChild(getComponent());