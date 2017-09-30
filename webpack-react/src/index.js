import Icon from './icon.jpg';
import printMe from './print.js';
import _ from 'lodash';

function getComponent() {
  if(process.env.NODE_ENV === 'develop'){
    console.log('it\'s develop environment');
  }
  return import('lodash').then(_ => {
         var element = document.createElement('div');
   
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
        return element;
   
      }).catch(error => 'An error occurred while loading the component');
  
}
function getAnother() {
  return import('./another-module.js').then(a => {
        return a;
   
      }).catch(error => 'An error occurred while loading the component');
  
}
getComponent().then(component => {
    document.body.appendChild(component);
    getAnother().then(c=>{
      c.default()
    })
})