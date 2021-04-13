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
  var ingresos = operacionesContext.ingresos,
      egresos = operacionesContext.egresos,
      balance = operacionesContext.balance,
      calcularTotales = operacionesContext.calcularTotales; //usuario = usuario || {};

  var classBalance = "";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Ingresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, " $", ingresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Egresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, " $", egresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Balance:", __jsx("span", {
    className: classBalance,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JhbGFuY2UuanMiXSwibmFtZXMiOlsiQmFsYW5jZSIsInJvdXRlciIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwidXN1YXJpbyIsInVzdWFyaW9BdXRlbnRpY2FkbyIsIm9wZXJhY2lvbmVzQ29udGV4dCIsIm9wZXJhY2lvbkNvbnRleHQiLCJpbmdyZXNvcyIsImVncmVzb3MiLCJiYWxhbmNlIiwiY2FsY3VsYXJUb3RhbGVzIiwiY2xhc3NCYWxhbmNlIiwidXNlRWZmZWN0IiwiZ2V0Q2xhc3NCYWxhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUVsQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FIa0IsQ0FLbEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFFQyxpRUFBRixDQUE5QjtBQU5rQixNQU9aQyxPQVBZLEdBT29CSCxXQVBwQixDQU9aRyxPQVBZO0FBQUEsTUFPSEMsa0JBUEcsR0FPb0JKLFdBUHBCLENBT0hJLGtCQVBHLEVBU2xCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHSix3REFBVSxDQUFDSyw2RUFBRCxDQUFyQztBQVZrQixNQVdWQyxRQVhVLEdBV3NDRixrQkFYdEMsQ0FXVkUsUUFYVTtBQUFBLE1BV0FDLE9BWEEsR0FXc0NILGtCQVh0QyxDQVdBRyxPQVhBO0FBQUEsTUFXU0MsT0FYVCxHQVdzQ0osa0JBWHRDLENBV1NJLE9BWFQ7QUFBQSxNQVdrQkMsZUFYbEIsR0FXc0NMLGtCQVh0QyxDQVdrQkssZUFYbEIsRUFhbEI7O0FBQ0EsTUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixtQkFBZSxHQURELENBRWQ7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUOztBQUtBLE1BQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0YsWUFBRCxFQUFrQjtBQUN4QyxRQUFJRixPQUFPLEdBQUcsQ0FBZCxFQUFpQjtBQUNmRSxrQkFBWSxHQUFHLGdCQUFmO0FBQ0QsS0FGRCxNQUVPLElBQUlGLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ3RCRSxrQkFBWSxHQUFHLGNBQWY7QUFDRCxLQUZNLE1BRUE7QUFDTEEsa0JBQVksR0FBRyx3QkFBZjtBQUNEOztBQUVELFdBQU9BLFlBQVA7QUFDRCxHQVZEOztBQVlBQSxjQUFZLEdBQUdFLGVBQWUsQ0FBQ0YsWUFBRCxDQUE5QjtBQUdBLFNBRUk7QUFBSyxhQUFTLEVBQUMsd0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLG9EQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0k7QUFBTSxhQUFTLEVBQUMsd0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNENKLFFBQTVDLE1BREosQ0FESixFQUlJO0FBQUcsYUFBUyxFQUFDLG9EQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0k7QUFBTSxhQUFTLEVBQUMsd0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNENDLE9BQTVDLE1BREosQ0FKSixFQU9JO0FBQUcsYUFBUyxFQUFDLCtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0k7QUFBTSxhQUFTLEVBQUVHLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBa0NGLE9BQWxDLE1BREosQ0FQSixDQUZKO0FBZ0JILENBcEREOztHQUFNWixPO1VBR2FFLHFEOzs7S0FIYkYsTztBQXNEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjA4MDlhZmYyNWQzMWJhMjc5ZGE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IE9wZXJhY2lvbiBmcm9tICcuLi9jb21wb25lbnRzL09wZXJhY2lvbic7XHJcblxyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0JztcclxuXHJcbmNvbnN0IEJhbGFuY2UgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIHJvdXRpbmcgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBFeHRyYWVyIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZGVsIFN0b3JhZ2UgXHJcbiAgICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoIGF1dGhDb250ZXh0ICk7XHJcbiAgICBsZXQgeyB1c3VhcmlvLCB1c3VhcmlvQXV0ZW50aWNhZG/CoH0gPSBBdXRoQ29udGV4dDtcclxuXHJcbiAgICAvLyBleHRyYWVyIG9wZXJhY2lvbmVzIGRlIHN0YXRlIGluaWNpYWxcclxuICAgIGNvbnN0IG9wZXJhY2lvbmVzQ29udGV4dCA9IHVzZUNvbnRleHQob3BlcmFjaW9uQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGluZ3Jlc29zLCBlZ3Jlc29zLCBiYWxhbmNlLCBjYWxjdWxhclRvdGFsZXMgfSA9IG9wZXJhY2lvbmVzQ29udGV4dDtcclxuXHJcbiAgICAvL3VzdWFyaW8gPSB1c3VhcmlvIHx8IHt9O1xyXG4gICAgbGV0IGNsYXNzQmFsYW5jZSA9IFwiXCI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY2FsY3VsYXJUb3RhbGVzKCk7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdldENsYXNzQmFsYW5jZSA9IChjbGFzc0JhbGFuY2UpID0+IHtcclxuICAgICAgaWYgKGJhbGFuY2UgPiAwKSB7XHJcbiAgICAgICAgY2xhc3NCYWxhbmNlID0gXCJ0ZXh0LWdyZWVuLTUwMFwiXHJcbiAgICAgIH0gZWxzZSBpZiAoYmFsYW5jZSA8IDApIHtcclxuICAgICAgICBjbGFzc0JhbGFuY2UgPSBcInRleHQtcmVkLTcwMFwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xhc3NCYWxhbmNlID0gXCJmb250LW5vcm1hbCB0ZXh0LWJsYWNrXCJcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsYXNzQmFsYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc0JhbGFuY2UgPSBnZXRDbGFzc0JhbGFuY2UoY2xhc3NCYWxhbmNlKTtcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDp3LTQvNSB4bDp3LTMvNSBteC1hdXRvIG1iLTIgaXRlbXMtY2VudGVyIGJnLWdyYXktMzAwIHJvdW5kZWQtbGcgcHgtNSBweS0yIG1iLTVcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIHRleHQtY2VudGVyIG1iLTJcIj5JbmdyZXNvczpcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIj4gJHtpbmdyZXNvc30gPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBtYi0yXCI+RWdyZXNvczpcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIj4gJHtlZ3Jlc29zfSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIHRleHQtY2VudGVyXCI+QmFsYW5jZTpcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NCYWxhbmNlfT4gJHtiYWxhbmNlfSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==