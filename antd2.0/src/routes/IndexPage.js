import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title} >Yay! Welcome to dva!</h1>
      <div className={styles.welcome} id='a'/>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}


IndexPage.propTypes = {
};
setTimeout(()=> {
var rAF = window.requestAnimationFrame;
var div = document.getElementById('a');
var degrees = 0;
function update() {
  div.style.transform = "rotate(" + degrees + "deg)";
  console.log('updated to degrees ' + degrees);
  degrees = degrees + 1;
  rAF(update);
}
rAF(update);

},2000)

export default connect()(IndexPage);
