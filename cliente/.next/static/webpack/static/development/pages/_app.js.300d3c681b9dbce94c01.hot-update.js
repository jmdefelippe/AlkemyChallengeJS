webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./context/alertas/alertaState.js":
/*!****************************************!*\
  !*** ./context/alertas/alertaState.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alertaReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alertaReducer */ "./context/alertas/alertaReducer.js");
/* harmony import */ var _alertaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertaContext */ "./context/alertas/alertaContext.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\context\\alertas\\alertaState.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var AlertaState = function AlertaState(props) {
  _s();

  var initialState = {
    alerta: null
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_alertaReducer__WEBPACK_IMPORTED_MODULE_1__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // funciones


  var mostrarAlerta = function mostrarAlerta(msg, categoria) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["MOSTRAR_ALERTA"],
      payload: {
        msg: msg,
        categoria: categoria
      }
    }); // después de 3 segundos limpiar alerta

    setTimeout(function () {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  };

  return __jsx(_alertaContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      alerta: state.alerta,
      mostrarAlerta: mostrarAlerta
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, props.children);
};

_s(AlertaState, "h4meAN672mISt93ielJXXMKemns=");

_c = AlertaState;
/* harmony default export */ __webpack_exports__["default"] = (AlertaState);

var _c;

$RefreshReg$(_c, "AlertaState");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FsZXJ0YXMvYWxlcnRhU3RhdGUuanMiXSwibmFtZXMiOlsiQWxlcnRhU3RhdGUiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImFsZXJ0YSIsInVzZVJlZHVjZXIiLCJhbGVydGFSZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsIm1vc3RyYXJBbGVydGEiLCJtc2ciLCJjYXRlZ29yaWEiLCJ0eXBlIiwiTU9TVFJBUl9BTEVSVEEiLCJwYXlsb2FkIiwic2V0VGltZW91dCIsIk9DVUxUQVJfQUxFUlRBIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN6QixNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFVBQU0sRUFBRTtBQURTLEdBQXJCOztBQUR5QixvQkFLR0Msd0RBQVUsQ0FBQ0Msc0RBQUQsRUFBZ0JILFlBQWhCLENBTGI7QUFBQSxNQUtqQkksS0FMaUI7QUFBQSxNQUtWQyxRQUxVLG1CQU96Qjs7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxHQUFELEVBQU1DLFNBQU4sRUFBb0I7QUFDdENILFlBQVEsQ0FBQztBQUNMSSxVQUFJLEVBQUVDLHFEQUREO0FBRUxDLGFBQU8sRUFBRTtBQUNMSixXQUFHLEVBQUhBLEdBREs7QUFFTEMsaUJBQVMsRUFBVEE7QUFGSztBQUZKLEtBQUQsQ0FBUixDQURzQyxDQVN0Qzs7QUFDQUksY0FBVSxDQUFDLFlBQU07QUFDYlAsY0FBUSxDQUFDO0FBQ0xJLFlBQUksRUFBRUkscURBQWNBO0FBRGYsT0FBRCxDQUFSO0FBR0gsS0FKUyxFQUlQLElBSk8sQ0FBVjtBQUtILEdBZkQ7O0FBaUJBLFNBQ0ksTUFBQyxzREFBRCxDQUFlLFFBQWY7QUFDSSxTQUFLLEVBQUU7QUFDSFosWUFBTSxFQUFFRyxLQUFLLENBQUNILE1BRFg7QUFFSEssbUJBQWEsRUFBYkE7QUFGRyxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNS1AsS0FBSyxDQUFDZSxRQU5YLENBREo7QUFXSCxDQXBDRDs7R0FBTWhCLFc7O0tBQUFBLFc7QUFzQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjMwMGQzYzY4MWI5ZGJjZTk0YzAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFsZXJ0YVJlZHVjZXIgZnJvbSAnLi9hbGVydGFSZWR1Y2VyJztcclxuaW1wb3J0IGFsZXJ0YUNvbnRleHQgZnJvbSAnLi9hbGVydGFDb250ZXh0JztcclxuXHJcbmltcG9ydCB7IE1PU1RSQVJfQUxFUlRBLCBPQ1VMVEFSX0FMRVJUQSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IEFsZXJ0YVN0YXRlID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIGFsZXJ0YTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKGFsZXJ0YVJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gZnVuY2lvbmVzXHJcbiAgICBjb25zdCBtb3N0cmFyQWxlcnRhID0gKG1zZywgY2F0ZWdvcmlhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBNT1NUUkFSX0FMRVJUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbXNnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZGVzcHXDqXMgZGUgMyBzZWd1bmRvcyBsaW1waWFyIGFsZXJ0YVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFsZXJ0YUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGFsZXJ0YTogc3RhdGUuYWxlcnRhLFxyXG4gICAgICAgICAgICAgICAgbW9zdHJhckFsZXJ0YVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvYWxlcnRhQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0YVN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=