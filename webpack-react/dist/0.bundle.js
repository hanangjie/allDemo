webpackJsonp([0],{

/***/ "GBSk":
/***/ (function(module, exports) {

module.exports = [{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]

/***/ }),

/***/ "No2o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("89vk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ref_json__ = __webpack_require__("GBSk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ref_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ref_json__);



const webpackNumbers={
  numToWord(num){
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.reduce(__WEBPACK_IMPORTED_MODULE_1__ref_json___default.a, (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    }, '');
  },
  wordToNum(word) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.reduce(__WEBPACK_IMPORTED_MODULE_1__ref_json___default.a, (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
  }
}
/* harmony default export */ __webpack_exports__["a"] = (webpackNumbers);

/***/ }),

/***/ "ytZv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = a;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("89vk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_webpack_plugin__ = __webpack_require__("No2o");



function a(){
  console.log(__WEBPACK_IMPORTED_MODULE_1_webpack_plugin__["a" /* default */].numToWord(2));
  console.log(
    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Another', 'module', 'loaded!'], ' ')
  );
}

/***/ })

});