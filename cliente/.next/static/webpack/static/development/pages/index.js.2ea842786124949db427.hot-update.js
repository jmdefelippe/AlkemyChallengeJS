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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Operacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Operacion */ "./components/Operacion.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/operaciones/operacionContext */ "./context/operaciones/operacionContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\Programaci\xF3n\\Proyectos\\AlkemyReactChallenge\\cliente\\components\\Balance.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Balance = function Balance() {
  _s();

  // routing 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // Extraer el Usuario autenticado del Storage 

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var usuario = AuthContext.usuario,
      usuarioAutenticado = AuthContext.usuarioAutenticado; // extraer operaciones de state inicial

  var operacionesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var operaciones = operacionesContext.operaciones,
      ingresos = operacionesContext.ingresos,
      egresos = operacionesContext.egresos,
      balance = operacionesContext.balance,
      calcularTotales = operacionesContext.calcularTotales;
  usuario = usuario || {};
  var classBalance = "";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado();
    } else {
      router.push('/login');
    }

    calcularTotales(); // eslint-disable-next-line
  }, []);

  var getClassBalance = function getClassBalance(classBalance) {
    if (balance > 0) {
      classBalance = "text-green-500";
    } else if (balance < 0) {
      classBalance = "text-red-700";
    } else {
      classBalance = "font-normal text-black";
    }

    return classBalance;
  };

  classBalance = getClassBalance(classBalance);
  return __jsx("div", {
    className: "grid md:w-4/5 xl:w-3/5 mx-auto mb-2 items-center bg-gray-300 rounded-lg px-5 py-2 mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Ingresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, " $", ingresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Egresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, " $", egresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Balance:", __jsx("span", {
    className: classBalance,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, " $", balance, " ")));
};

_s(Balance, "m9jVNsLFYMgUcgfYzkk4MOqfXNU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Operacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Operacion */ "./components/Operacion.js");
/* harmony import */ var _components_Balance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Balance */ "./components/Balance.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/operaciones/operacionContext */ "./context/operaciones/operacionContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\Programaci\xF3n\\Proyectos\\AlkemyReactChallenge\\cliente\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Index = function Index() {
  _s();

  // routing 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // Extraer el Usuario autenticado del Storage 

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var usuario = AuthContext.usuario,
      usuarioAutenticado = AuthContext.usuarioAutenticado; // extraer operaciones de state inicial

  var operacionesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var operaciones = operacionesContext.operaciones,
      ingresos = operacionesContext.ingresos,
      egresos = operacionesContext.egresos,
      balance = operacionesContext.balance,
      calcularTotales = operacionesContext.calcularTotales;
  usuario = usuario || {};
  var classBalance = "";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado();
    } else {
      router.push('/login');
    }

    calcularTotales(); // eslint-disable-next-line
  }, []);

  var getClassBalance = function getClassBalance(classBalance) {
    if (balance > 0) {
      classBalance = "text-green-500";
    } else if (balance < 0) {
      classBalance = "text-red-700";
    } else {
      classBalance = "font-normal text-black";
    }

    return classBalance;
  };

  classBalance = getClassBalance(classBalance);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, usuario ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-4/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, __jsx("h3", {
    className: "text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "Balance de operaciones de", __jsx("span", {
    className: "text-blue-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, " ", usuario.nombre)), __jsx("div", {
    className: "grid md:w-4/5 xl:w-3/5 mx-auto mb-2 items-center bg-gray-300 rounded-lg px-5 py-2 mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Ingresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, " $", ingresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, "Egresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, " $", egresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, "Balance:", __jsx("span", {
    className: classBalance,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, " $", balance, " "))), __jsx("h3", {
    className: "text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, "Operaciones recientes"), operaciones.length === 0 ? __jsx("p", {
    className: "text-2xl font-sans font-bold text-blue-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 30
    }
  }, "No hay operaciones") : __jsx("div", {
    className: "bg-gray-300 rounded-lg px-5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, operaciones.map(function (operacion) {
    return __jsx("div", {
      key: operacion._id,
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 39
      }
    }, " ", __jsx(_components_Operacion__WEBPACK_IMPORTED_MODULE_3__["default"], {
      operacion: operacion,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 78
      }
    }));
  }).slice(0, 10)))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
};

_s(Index, "m9jVNsLFYMgUcgfYzkk4MOqfXNU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JhbGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFsYW5jZSIsInJvdXRlciIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwidXN1YXJpbyIsInVzdWFyaW9BdXRlbnRpY2FkbyIsIm9wZXJhY2lvbmVzQ29udGV4dCIsIm9wZXJhY2lvbkNvbnRleHQiLCJvcGVyYWNpb25lcyIsImluZ3Jlc29zIiwiZWdyZXNvcyIsImJhbGFuY2UiLCJjYWxjdWxhclRvdGFsZXMiLCJjbGFzc0JhbGFuY2UiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiZ2V0Q2xhc3NCYWxhbmNlIiwiSW5kZXgiLCJub21icmUiLCJsZW5ndGgiLCJtYXAiLCJvcGVyYWNpb24iLCJfaWQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFFbEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSGtCLENBS2xCOztBQUNBLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBRUMsaUVBQUYsQ0FBOUI7QUFOa0IsTUFPWkMsT0FQWSxHQU9vQkgsV0FQcEIsQ0FPWkcsT0FQWTtBQUFBLE1BT0hDLGtCQVBHLEdBT29CSixXQVBwQixDQU9ISSxrQkFQRyxFQVNsQjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0osd0RBQVUsQ0FBQ0ssNkVBQUQsQ0FBckM7QUFWa0IsTUFXVkMsV0FYVSxHQVdtREYsa0JBWG5ELENBV1ZFLFdBWFU7QUFBQSxNQVdHQyxRQVhILEdBV21ESCxrQkFYbkQsQ0FXR0csUUFYSDtBQUFBLE1BV2FDLE9BWGIsR0FX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QUE7QUFBQTtBQUFBO0FBQUEsWUFBdUMsTUFBQyw2REFBRDtBQUFXLGVBQVMsRUFBRUQsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF2QyxDQURzQjtBQUFBLEdBQXpCLEVBRUNFLEtBRkQsQ0FFTyxDQUZQLEVBRVUsRUFGVixDQURILENBNUJWLENBREosQ0FESyxHQXdDSCxrRUExQ1osQ0FESjtBQW1ESCxDQTlGRDs7R0FBTU4sSztVQUdhcEIscUQ7OztLQUhib0IsSztBQWdHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjJlYTg0Mjc4NjEyNDk0OWRiNDI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IE9wZXJhY2lvbiBmcm9tICcuLi9jb21wb25lbnRzL09wZXJhY2lvbic7XHJcblxyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0JztcclxuXHJcbmNvbnN0IEJhbGFuY2UgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIHJvdXRpbmcgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBFeHRyYWVyIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZGVsIFN0b3JhZ2UgXHJcbiAgICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoIGF1dGhDb250ZXh0ICk7XHJcbiAgICBsZXQgeyB1c3VhcmlvLCB1c3VhcmlvQXV0ZW50aWNhZG/CoH0gPSBBdXRoQ29udGV4dDtcclxuXHJcbiAgICAvLyBleHRyYWVyIG9wZXJhY2lvbmVzIGRlIHN0YXRlIGluaWNpYWxcclxuICAgIGNvbnN0IG9wZXJhY2lvbmVzQ29udGV4dCA9IHVzZUNvbnRleHQob3BlcmFjaW9uQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IG9wZXJhY2lvbmVzLCBpbmdyZXNvcywgZWdyZXNvcywgYmFsYW5jZSwgY2FsY3VsYXJUb3RhbGVzIH0gPSBvcGVyYWNpb25lc0NvbnRleHQ7XHJcblxyXG4gICAgdXN1YXJpbyA9IHVzdWFyaW8gfHwge307XHJcbiAgICBsZXQgY2xhc3NCYWxhbmNlID0gXCJcIjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgICAgaWYodG9rZW4pIHtcclxuICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBjYWxjdWxhclRvdGFsZXMoKTtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2xhc3NCYWxhbmNlID0gKGNsYXNzQmFsYW5jZSkgPT4ge1xyXG4gICAgICBpZiAoYmFsYW5jZSA+IDApIHtcclxuICAgICAgICBjbGFzc0JhbGFuY2UgPSBcInRleHQtZ3JlZW4tNTAwXCJcclxuICAgICAgfSBlbHNlIGlmIChiYWxhbmNlIDwgMCkge1xyXG4gICAgICAgIGNsYXNzQmFsYW5jZSA9IFwidGV4dC1yZWQtNzAwXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbGFzc0JhbGFuY2UgPSBcImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIlxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2xhc3NCYWxhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzQmFsYW5jZSA9IGdldENsYXNzQmFsYW5jZShjbGFzc0JhbGFuY2UpO1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOnctNC81IHhsOnctMy81IG14LWF1dG8gbWItMiBpdGVtcy1jZW50ZXIgYmctZ3JheS0zMDAgcm91bmRlZC1sZyBweC01IHB5LTIgbWItNVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgbWItMlwiPkluZ3Jlc29zOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ibGFja1wiPiAke2luZ3Jlc29zfSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIHRleHQtY2VudGVyIG1iLTJcIj5FZ3Jlc29zOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ibGFja1wiPiAke2VncmVzb3N9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2UgdGV4dC1jZW50ZXJcIj5CYWxhbmNlOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0JhbGFuY2V9PiAke2JhbGFuY2V9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBPcGVyYWNpb24gZnJvbSAnLi4vY29tcG9uZW50cy9PcGVyYWNpb24nO1xuaW1wb3J0IEJhbGFuY2UgZnJvbSAnLi4vY29tcG9uZW50cy9CYWxhbmNlJztcblxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XG5pbXBvcnQgb3BlcmFjaW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvbkNvbnRleHQnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIC8vIHJvdXRpbmcgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvLyBFeHRyYWVyIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZGVsIFN0b3JhZ2UgXG4gICAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KCBhdXRoQ29udGV4dCApO1xuICAgIGxldCB7IHVzdWFyaW8sIHVzdWFyaW9BdXRlbnRpY2Fkb8KgfSA9IEF1dGhDb250ZXh0O1xuXG4gICAgLy8gZXh0cmFlciBvcGVyYWNpb25lcyBkZSBzdGF0ZSBpbmljaWFsXG4gICAgY29uc3Qgb3BlcmFjaW9uZXNDb250ZXh0ID0gdXNlQ29udGV4dChvcGVyYWNpb25Db250ZXh0KTtcbiAgICBjb25zdCB7IG9wZXJhY2lvbmVzLCBpbmdyZXNvcywgZWdyZXNvcywgYmFsYW5jZSwgY2FsY3VsYXJUb3RhbGVzIH0gPSBvcGVyYWNpb25lc0NvbnRleHQ7XG5cbiAgICB1c3VhcmlvID0gdXN1YXJpbyB8fCB7fTtcbiAgICBsZXQgY2xhc3NCYWxhbmNlID0gXCJcIjtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gICAgICBpZih0b2tlbikge1xuICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGNhbGN1bGFyVG90YWxlcygpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZ2V0Q2xhc3NCYWxhbmNlID0gKGNsYXNzQmFsYW5jZSkgPT4ge1xuICAgICAgaWYgKGJhbGFuY2UgPiAwKSB7XG4gICAgICAgIGNsYXNzQmFsYW5jZSA9IFwidGV4dC1ncmVlbi01MDBcIlxuICAgICAgfSBlbHNlIGlmIChiYWxhbmNlIDwgMCkge1xuICAgICAgICBjbGFzc0JhbGFuY2UgPSBcInRleHQtcmVkLTcwMFwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc0JhbGFuY2UgPSBcImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NCYWxhbmNlO1xuICAgIH1cblxuICAgIGNsYXNzQmFsYW5jZSA9IGdldENsYXNzQmFsYW5jZShjbGFzc0JhbGFuY2UpO1xuXG4gICAgcmV0dXJuICggXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXN1YXJpbyA/IChcbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTQvNSB4bDp3LTQvNSBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1ibGFjay01MDAgdGV4dC1jZW50ZXIgbXktNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+QmFsYW5jZSBkZSBvcGVyYWNpb25lcyBkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj4ge3VzdWFyaW8ubm9tYnJlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOnctNC81IHhsOnctMy81IG14LWF1dG8gbWItMiBpdGVtcy1jZW50ZXIgYmctZ3JheS0zMDAgcm91bmRlZC1sZyBweC01IHB5LTIgbWItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBtYi0yXCI+SW5ncmVzb3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIj4gJHtpbmdyZXNvc30gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgbWItMlwiPkVncmVzb3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIj4gJHtlZ3Jlc29zfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHVwcGVyY2FzZSB0ZXh0LWNlbnRlclwiPkJhbGFuY2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NCYWxhbmNlfT4gJHtiYWxhbmNlfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1ibGFjay01MDAgdGV4dC1jZW50ZXIgbXktNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+T3BlcmFjaW9uZXMgcmVjaWVudGVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7IChvcGVyYWNpb25lcy5sZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIG15LTRcIj5ObyBoYXkgb3BlcmFjaW9uZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICggIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcm91bmRlZC1sZyBweC01IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BlcmFjaW9uZXMubWFwKG9wZXJhY2lvbiA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29wZXJhY2lvbi5faWR9IGNsYXNzTmFtZT1cIlwiPiA8T3BlcmFjaW9uIG9wZXJhY2lvbj17b3BlcmFjaW9ufS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zbGljZSgwLCAxMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbiAgICBcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==