webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Noticias.js":
/*!********************************!*\
  !*** ./components/Noticias.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Noticia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Noticia */ "./components/Noticia.js");
var _jsxFileName = "C:\\Users\\csancser\\Desktop\\React\\bitcoinapp\\components\\Noticias.js";



var Noticias = function Noticias(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.noticias.map(function (noticia) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Noticia__WEBPACK_IMPORTED_MODULE_1__["default"], {
      noticia: noticia,
      key: noticia.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticias);

/***/ })

})
//# sourceMappingURL=index.js.7f5534ed5323fc3334b0.hot-update.js.map