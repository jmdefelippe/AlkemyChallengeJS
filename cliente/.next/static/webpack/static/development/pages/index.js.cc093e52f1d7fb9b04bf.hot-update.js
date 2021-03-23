webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/operaciones/operacionContext */ "./context/operaciones/operacionContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index() {
  _s();

  // routing 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); // Extraer el Usuario autenticado del Storage 

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var usuario = AuthContext.usuario,
      usuarioAutenticado = AuthContext.usuarioAutenticado;
  usuario = usuario || {}; // extraer operaciones de state inicial

  var operacionesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var ingresos = operacionesContext.ingresos,
      egresos = operacionesContext.egresos,
      balance = operacionesContext.balance,
      obtenerOperaciones = operacionesContext.obtenerOperaciones,
      calcularTotalIngresos = operacionesContext.calcularTotalIngresos,
      calcularTotalEgresos = operacionesContext.calcularTotalEgresos,
      calcularBalance = operacionesContext.calcularBalance;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado();
    } else {
      router.push('/login');
    }

    obtenerOperaciones();
    calcularTotalIngresos();
    calcularTotalEgresos();
    calcularBalance(); // eslint-disable-next-line
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, usuario ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 23
    }
  }, __jsx("h3", {
    className: "text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, "Balance de operaciones de", __jsx("span", {
    className: "text-blue-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, " ", usuario.nombre)), __jsx("div", {
    className: "grid md:w-4/5 xl:w-3/5 mx-auto mb-2 items-center bg-gray-300 rounded-lg px-5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, "Ingresos:", __jsx("span", {
    className: "font-normal text-black normal-case",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, " $", ingresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, "Egresos:", __jsx("span", {
    className: "font-normal text-black normal-case",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, " $", egresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "Balance:", __jsx("span", {
    className: "font-normal text-black normal-case",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }, " $", balance, " "))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
};

_s(Index, "m9jVNsLFYMgUcgfYzkk4MOqfXNU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwidXN1YXJpbyIsInVzdWFyaW9BdXRlbnRpY2FkbyIsIm9wZXJhY2lvbmVzQ29udGV4dCIsIm9wZXJhY2lvbkNvbnRleHQiLCJpbmdyZXNvcyIsImVncmVzb3MiLCJiYWxhbmNlIiwib2J0ZW5lck9wZXJhY2lvbmVzIiwiY2FsY3VsYXJUb3RhbEluZ3Jlc29zIiwiY2FsY3VsYXJUb3RhbEVncmVzb3MiLCJjYWxjdWxhckJhbGFuY2UiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwibm9tYnJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVoQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FIZ0IsQ0FLaEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFFQyxpRUFBRixDQUE5QjtBQU5nQixNQU9WQyxPQVBVLEdBT3NCSCxXQVB0QixDQU9WRyxPQVBVO0FBQUEsTUFPREMsa0JBUEMsR0FPc0JKLFdBUHRCLENBT0RJLGtCQVBDO0FBU2xCRCxTQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQixDQVRrQixDQVdoQjs7QUFDQSxNQUFNRSxrQkFBa0IsR0FBR0osd0RBQVUsQ0FBQ0ssNkVBQUQsQ0FBckM7QUFaZ0IsTUFhUkMsUUFiUSxHQWF5R0Ysa0JBYnpHLENBYVJFLFFBYlE7QUFBQSxNQWFFQyxPQWJGLEdBYXlHSCxrQkFiekcsQ0FhRUcsT0FiRjtBQUFBLE1BYVdDLE9BYlgsR0FheUdKLGtCQWJ6RyxDQWFXSSxPQWJYO0FBQUEsTUFhb0JDLGtCQWJwQixHQWF5R0wsa0JBYnpHLENBYW9CSyxrQkFicEI7QUFBQSxNQWF3Q0MscUJBYnhDLEdBYXlHTixrQkFiekcsQ0Fhd0NNLHFCQWJ4QztBQUFBLE1BYStEQyxvQkFiL0QsR0FheUdQLGtCQWJ6RyxDQWErRE8sb0JBYi9EO0FBQUEsTUFhcUZDLGVBYnJGLEdBYXlHUixrQkFiekcsQ0FhcUZRLGVBYnJGO0FBZWhCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFkOztBQUVBLFFBQUdGLEtBQUgsRUFBVTtBQUNSWCx3QkFBa0I7QUFDbkIsS0FGRCxNQUVPO0FBQ0xOLFlBQU0sQ0FBQ29CLElBQVAsQ0FBWSxRQUFaO0FBQ0Q7O0FBRURSLHNCQUFrQjtBQUNsQkMseUJBQXFCO0FBQ3JCQyx3QkFBb0I7QUFDcEJDLG1CQUFlLEdBWkQsQ0FhZDtBQUNELEdBZFEsRUFjTixFQWRNLENBQVQ7QUFnQkEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFWLE9BQU8sR0FDTCxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSSxhQUFTLEVBQUMsOERBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FFSTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWtDQSxPQUFPLENBQUNnQixNQUExQyxDQUZKLENBRkYsRUFRRTtBQUFLLGFBQVMsRUFBQyxtRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsK0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDSTtBQUFNLGFBQVMsRUFBQyxvQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3RFosUUFBeEQsTUFESixDQURKLEVBSUk7QUFBRyxhQUFTLEVBQUMsK0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDSTtBQUFNLGFBQVMsRUFBQyxvQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3REMsT0FBeEQsTUFESixDQUpKLEVBT0k7QUFBRyxhQUFTLEVBQUMsK0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDSTtBQUFNLGFBQVMsRUFBQyxvQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3REMsT0FBeEQsTUFESixDQVBKLENBUkYsQ0FESixDQURLLEdBMkJILGtFQTdCWixDQURKO0FBc0NILENBckVEOztHQUFNWixLO1VBR2FFLHFEOzs7S0FIYkYsSztBQXVFU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmNjMDkzZTUyZjFkN2ZiOWIwNGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcbmltcG9ydCBvcGVyYWNpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gICAgLy8gcm91dGluZyBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIC8vIEV4dHJhZXIgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBkZWwgU3RvcmFnZSBcbiAgICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoIGF1dGhDb250ZXh0ICk7XG4gICAgbGV0IHsgdXN1YXJpbywgdXN1YXJpb0F1dGVudGljYWRvwqB9ID0gQXV0aENvbnRleHQ7XG5cbiAgdXN1YXJpbyA9IHVzdWFyaW8gfHwge307XG5cbiAgICAvLyBleHRyYWVyIG9wZXJhY2lvbmVzIGRlIHN0YXRlIGluaWNpYWxcbiAgICBjb25zdCBvcGVyYWNpb25lc0NvbnRleHQgPSB1c2VDb250ZXh0KG9wZXJhY2lvbkNvbnRleHQpO1xuICAgIGNvbnN0IHsgaW5ncmVzb3MsIGVncmVzb3MsIGJhbGFuY2UsIG9idGVuZXJPcGVyYWNpb25lcywgY2FsY3VsYXJUb3RhbEluZ3Jlc29zLCBjYWxjdWxhclRvdGFsRWdyZXNvcywgY2FsY3VsYXJCYWxhbmNlIH0gPSBvcGVyYWNpb25lc0NvbnRleHQ7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuICAgICAgaWYodG9rZW4pIHtcbiAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICB9XG4gICAgXG4gICAgICBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcbiAgICAgIGNhbGN1bGFyVG90YWxJbmdyZXNvcygpO1xuICAgICAgY2FsY3VsYXJUb3RhbEVncmVzb3MoKTtcbiAgICAgIGNhbGN1bGFyQmFsYW5jZSgpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuICggXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXN1YXJpbyA/IChcbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTQvNSB4bDp3LTMvNSBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNhbnMgZm9udC1ib2xkIHRleHQtYmxhY2stNTAwIHRleHQtY2VudGVyIG15LTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPkJhbGFuY2UgZGUgb3BlcmFjaW9uZXMgZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+IHt1c3VhcmlvLm5vbWJyZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDp3LTQvNSB4bDp3LTMvNSBteC1hdXRvIG1iLTIgaXRlbXMtY2VudGVyIGJnLWdyYXktMzAwIHJvdW5kZWQtbGcgcHgtNSBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIHRleHQtY2VudGVyXCI+SW5ncmVzb3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2sgbm9ybWFsLWNhc2VcIj4gJHtpbmdyZXNvc30gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2UgdGV4dC1jZW50ZXJcIj5FZ3Jlc29zOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWJsYWNrIG5vcm1hbC1jYXNlXCI+ICR7ZWdyZXNvc30gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2UgdGV4dC1jZW50ZXJcIj5CYWxhbmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWJsYWNrIG5vcm1hbC1jYXNlXCI+ICR7YmFsYW5jZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbiAgICBcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==