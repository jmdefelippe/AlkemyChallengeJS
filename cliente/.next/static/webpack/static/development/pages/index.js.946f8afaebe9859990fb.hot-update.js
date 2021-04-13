webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Balance.js":
/*!*******************************!*\
  !*** ./components/Balance.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/operaciones/operacionContext */ "./context/operaciones/operacionContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\Programaci\xF3n\\Proyectos\\AlkemyReactChallenge\\cliente\\components\\Balance.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Balance = function Balance() {
  _s();

  // extraer operaciones de state inicial
  var operacionesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var ingresos = operacionesContext.ingresos,
      egresos = operacionesContext.egresos,
      balance = operacionesContext.balance,
      calcularTotales = operacionesContext.calcularTotales;
  var classBalance = "";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    calcularTotales(); // eslint-disable-next-line
  }, []);

  var obtenerClassBalance = function obtenerClassBalance(classBalance) {
    if (balance > 0) {
      classBalance = "text-green-500";
    } else if (balance < 0) {
      classBalance = "text-red-700";
    } else {
      classBalance = "font-normal text-black";
    }

    return classBalance;
  };

  classBalance = obtenerClassBalance(classBalance);
  return __jsx("div", {
    className: "grid md:w-4/5 xl:w-3/5 mx-auto mb-2 items-center bg-gray-300 rounded-lg px-5 py-2 mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Ingresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, " $", ingresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Egresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, " $", egresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Balance:", __jsx("span", {
    className: classBalance,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, " $", balance, " ")));
};

_s(Balance, "ETvH5z/xW03oigEnDYL0U7qRBwU=");

_c = Balance;
/* harmony default export */ __webpack_exports__["default"] = (Balance);

var _c;

$RefreshReg$(_c, "Balance");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JhbGFuY2UuanMiXSwibmFtZXMiOlsiQmFsYW5jZSIsIm9wZXJhY2lvbmVzQ29udGV4dCIsInVzZUNvbnRleHQiLCJvcGVyYWNpb25Db250ZXh0IiwiaW5ncmVzb3MiLCJlZ3Jlc29zIiwiYmFsYW5jZSIsImNhbGN1bGFyVG90YWxlcyIsImNsYXNzQmFsYW5jZSIsInVzZUVmZmVjdCIsIm9idGVuZXJDbGFzc0JhbGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFFbEI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0Msd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FBckM7QUFIa0IsTUFJVkMsUUFKVSxHQUlzQ0gsa0JBSnRDLENBSVZHLFFBSlU7QUFBQSxNQUlBQyxPQUpBLEdBSXNDSixrQkFKdEMsQ0FJQUksT0FKQTtBQUFBLE1BSVNDLE9BSlQsR0FJc0NMLGtCQUp0QyxDQUlTSyxPQUpUO0FBQUEsTUFJa0JDLGVBSmxCLEdBSXNDTixrQkFKdEMsQ0FJa0JNLGVBSmxCO0FBTWxCLE1BQUlDLFlBQVksR0FBRyxFQUFuQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWkYsbUJBQWUsR0FESCxDQUVaO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDs7QUFLQSxNQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNGLFlBQUQsRUFBa0I7QUFDMUMsUUFBSUYsT0FBTyxHQUFHLENBQWQsRUFBaUI7QUFDZkUsa0JBQVksR0FBRyxnQkFBZjtBQUNELEtBRkQsTUFFTyxJQUFJRixPQUFPLEdBQUcsQ0FBZCxFQUFpQjtBQUN0QkUsa0JBQVksR0FBRyxjQUFmO0FBQ0QsS0FGTSxNQUVBO0FBQ0xBLGtCQUFZLEdBQUcsd0JBQWY7QUFDRDs7QUFFRCxXQUFPQSxZQUFQO0FBQ0gsR0FWRDs7QUFZQUEsY0FBWSxHQUFHRSxtQkFBbUIsQ0FBQ0YsWUFBRCxDQUFsQztBQUVBLFNBRUk7QUFBSyxhQUFTLEVBQUMsd0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLG9EQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0k7QUFBTSxhQUFTLEVBQUMsd0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNENKLFFBQTVDLE1BREosQ0FESixFQUlJO0FBQUcsYUFBUyxFQUFDLG9EQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0k7QUFBTSxhQUFTLEVBQUMsd0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNENDLE9BQTVDLE1BREosQ0FKSixFQU9JO0FBQUcsYUFBUyxFQUFDLCtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0k7QUFBTSxhQUFTLEVBQUVHLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBa0NGLE9BQWxDLE1BREosQ0FQSixDQUZKO0FBZUgsQ0ExQ0Q7O0dBQU1OLE87O0tBQUFBLE87QUE0Q1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45NDZmOGFmYWViZTk4NTk5OTBmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBvcGVyYWNpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uQ29udGV4dCc7XHJcblxyXG5jb25zdCBCYWxhbmNlID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyBleHRyYWVyIG9wZXJhY2lvbmVzIGRlIHN0YXRlIGluaWNpYWxcclxuICAgIGNvbnN0IG9wZXJhY2lvbmVzQ29udGV4dCA9IHVzZUNvbnRleHQob3BlcmFjaW9uQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGluZ3Jlc29zLCBlZ3Jlc29zLCBiYWxhbmNlLCBjYWxjdWxhclRvdGFsZXMgfSA9IG9wZXJhY2lvbmVzQ29udGV4dDtcclxuICAgIFxyXG4gICAgbGV0IGNsYXNzQmFsYW5jZSA9IFwiXCI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjYWxjdWxhclRvdGFsZXMoKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvYnRlbmVyQ2xhc3NCYWxhbmNlID0gKGNsYXNzQmFsYW5jZSkgPT4ge1xyXG4gICAgICAgIGlmIChiYWxhbmNlID4gMCkge1xyXG4gICAgICAgICAgY2xhc3NCYWxhbmNlID0gXCJ0ZXh0LWdyZWVuLTUwMFwiXHJcbiAgICAgICAgfSBlbHNlIGlmIChiYWxhbmNlIDwgMCkge1xyXG4gICAgICAgICAgY2xhc3NCYWxhbmNlID0gXCJ0ZXh0LXJlZC03MDBcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjbGFzc0JhbGFuY2UgPSBcImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNsYXNzQmFsYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc0JhbGFuY2UgPSBvYnRlbmVyQ2xhc3NCYWxhbmNlKGNsYXNzQmFsYW5jZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDp3LTQvNSB4bDp3LTMvNSBteC1hdXRvIG1iLTIgaXRlbXMtY2VudGVyIGJnLWdyYXktMzAwIHJvdW5kZWQtbGcgcHgtNSBweS0yIG1iLTVcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIHRleHQtY2VudGVyIG1iLTJcIj5JbmdyZXNvczpcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIj4gJHtpbmdyZXNvc30gPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBtYi0yXCI+RWdyZXNvczpcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIj4gJHtlZ3Jlc29zfSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIHRleHQtY2VudGVyXCI+QmFsYW5jZTpcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NCYWxhbmNlfT4gJHtiYWxhbmNlfSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZTsiXSwic291cmNlUm9vdCI6IiJ9