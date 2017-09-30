import _ from 'lodash';
import numRef from './ref.json';

const webpackNumbers={
  numToWord(num){
    return _.reduce(numRef, (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    }, '');
  },
  wordToNum(word) {
    return _.reduce(numRef, (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
  }
}
export default webpackNumbers;