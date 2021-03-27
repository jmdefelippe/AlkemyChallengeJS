webpackHotUpdate("static\\development\\pages\\registraroperacion.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\components\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Header = function Header() {
  _s();

  // routing 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(); // Extraer el Usuario autenticado del Storage 

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var usuario = AuthContext.usuario,
      usuarioAutenticado = AuthContext.usuarioAutenticado,
      cerrarSesion = AuthContext.cerrarSesion;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    usuarioAutenticado();
  }, []);

  var redireccionar = function redireccionar() {
    router.push('/');
  };

  var mostrarMenu = function mostrarMenu() {
    menu.classList.toggle('hidden');
  };

  return __jsx("nav", {
    "class": "flex items-center justify-between flex-wrap bg-gray-300 p-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }
  }, __jsx("div", {
    "class": "flex items-center flex-shrink-0 text-white mr-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("svg", {
    "class": "fill-current h-8 w-8 mr-2",
    width: "54",
    height: "54",
    viewBox: "0 0 54 54",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 130
    }
  })), __jsx("span", {
    "class": "font-semibold text-xl tracking-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Tailwind CSS")), __jsx("div", {
    "class": "block lg:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("button", {
    id: "boton",
    "class": "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("svg", {
    "class": "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 98
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 117
    }
  })))), __jsx("div", {
    id: "menu",
    "class": "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": "lg:flex-grow text-black font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/registraroperacion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: router.pathname === "/registraroperacion" ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-3 hover:text-blue-400 underline" : "block py-4 lg:inline-block lg:mt-0 mr-10 py-3 hover:text-blue-4004",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Registrar Operaci\xF3n")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/listado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: router.pathname === "/listado" ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-3 hover:text-blue-400 underline" : "block py-4 lg:inline-block lg:mt-0 mr-10 py-3 hover:text-blue-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Listado"))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/login",
    className: "bg-blue-400 inline-block text-sm text-white font-bold uppercase px-4 py-2  rounded-lg hover:bg-black mt-4 lg:mt-0 lg:px-5 lg:py-3",
    onClick: function onClick() {
      return cerrarSesion();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Cerrar Sesi\xF3n"))));
};

_s(Header, "likBWLhb2UkwK439/2KdI22GlRU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJjZXJyYXJTZXNpb24iLCJ1c2VFZmZlY3QiLCJyZWRpcmVjY2lvbmFyIiwicHVzaCIsIm1vc3RyYXJNZW51IiwibWVudSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSGlCLENBS2Y7O0FBQ0YsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFFQyxpRUFBRixDQUE5QjtBQU5pQixNQU9UQyxPQVBTLEdBT3NDSCxXQVB0QyxDQU9URyxPQVBTO0FBQUEsTUFPQUMsa0JBUEEsR0FPc0NKLFdBUHRDLENBT0FJLGtCQVBBO0FBQUEsTUFPcUJDLFlBUHJCLEdBT3NDTCxXQVB0QyxDQU9xQkssWUFQckI7QUFTakJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRixzQkFBa0I7QUFDckIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJULFVBQU0sQ0FBQ1UsSUFBUCxDQUFZLEdBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLFFBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0gsR0FGRDs7QUFJQSxTQUVKO0FBQUssYUFBTSw2REFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFNLGlEQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUTtBQUFLLGFBQU0sMkJBQVg7QUFBdUMsU0FBSyxFQUFDLElBQTdDO0FBQWtELFVBQU0sRUFBQyxJQUF6RDtBQUE4RCxXQUFPLEVBQUMsV0FBdEU7QUFBa0YsU0FBSyxFQUFDLDRCQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFIO0FBQU0sS0FBQyxFQUFDLHFWQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBckgsQ0FEUixFQUVRO0FBQU0sYUFBTSxzQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZSLENBRkosRUFPSTtBQUFLLGFBQU0saUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsTUFBRSxFQUFDLE9BQVg7QUFBbUIsYUFBTSw4R0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBTSxzQkFBWDtBQUFrQyxXQUFPLEVBQUMsV0FBMUM7QUFBc0QsU0FBSyxFQUFDLDRCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBekYsRUFBNEc7QUFBTSxLQUFDLEVBQUMsNkNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE1RyxDQURBLENBREosQ0FQSixFQWFJO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBZSxhQUFNLDBEQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFNLG1DQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBRWQsTUFBTSxDQUFDZSxRQUFQLEtBQW9CLHFCQUFwQixHQUNSLDZFQURRLEdBRVIsb0VBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixDQUhKLEVBVUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBRWYsTUFBTSxDQUFDZSxRQUFQLEtBQW9CLFVBQXBCLEdBQ1IsNkVBRFEsR0FFUixtRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosQ0FWSixDQUZKLEVBNEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFFBQUksRUFBQyxRQUFSO0FBQWlCLGFBQVMsRUFBQyxtSUFBM0I7QUFHSSxXQUFPLEVBQUU7QUFBQSxhQUFNUixZQUFZLEVBQWxCO0FBQUEsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLENBNUJKLENBYkosQ0FGSTtBQTZESCxDQWxGRDs7R0FBTVIsTTtVQUdhRSxxRDs7O0tBSGJGLE07QUFvRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3RyYXJvcGVyYWNpb24uanMuNDk2NGJlYjQ3MDU1ZWE4ZWRkOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblxuICAgIC8vIHJvdXRpbmcgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAgIC8vIEV4dHJhZXIgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBkZWwgU3RvcmFnZSBcbiAgICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoIGF1dGhDb250ZXh0ICk7XG4gICAgY29uc3QgeyB1c3VhcmlvLCB1c3VhcmlvQXV0ZW50aWNhZG8sICBjZXJyYXJTZXNpb27CoH0gPSBBdXRoQ29udGV4dDtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHJlZGlyZWNjaW9uYXIgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbW9zdHJhck1lbnUgPSAoKSA9PiB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuPG5hdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgYmctZ3JheS0zMDAgcC02XCI+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgdGV4dC13aGl0ZSBtci02XCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZmlsbC1jdXJyZW50IGgtOCB3LTggbXItMlwiIHdpZHRoPVwiNTRcIiBoZWlnaHQ9XCI1NFwiIHZpZXdCb3g9XCIwIDAgNTQgNTRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMy41IDIyLjFjMS44LTcuMiA2LjMtMTAuOCAxMy41LTEwLjggMTAuOCAwIDEyLjE1IDguMSAxNy41NSA5LjQ1IDMuNi45IDYuNzUtLjQ1IDkuNDUtNC4wNS0xLjggNy4yLTYuMyAxMC44LTEzLjUgMTAuOC0xMC44IDAtMTIuMTUtOC4xLTE3LjU1LTkuNDUtMy42LS45LTYuNzUuNDUtOS40NSA0LjA1ek0wIDM4LjNjMS44LTcuMiA2LjMtMTAuOCAxMy41LTEwLjggMTAuOCAwIDEyLjE1IDguMSAxNy41NSA5LjQ1IDMuNi45IDYuNzUtLjQ1IDkuNDUtNC4wNS0xLjggNy4yLTYuMyAxMC44LTEzLjUgMTAuOC0xMC44IDAtMTIuMTUtOC4xLTE3LjU1LTkuNDUtMy42LS45LTYuNzUuNDUtOS40NSA0LjA1elwiLz48L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRyYWNraW5nLXRpZ2h0XCI+VGFpbHdpbmQgQ1NTPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJibG9jayBsZzpoaWRkZW5cIj5cbiAgICAgICAgPGJ1dHRvbiBpZD0nYm90b24nIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIHRleHQtdGVhbC0yMDAgYm9yZGVyLXRlYWwtNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJmaWxsLWN1cnJlbnQgaC0zIHctM1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIvPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGlkPSdtZW51JyBjbGFzcz1cInctZnVsbCBibG9jayBmbGV4LWdyb3cgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvXCI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwibGc6ZmxleC1ncm93IHRleHQtYmxhY2sgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RyYXJvcGVyYWNpb25cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcmVnaXN0cmFyb3BlcmFjaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJsb2NrIHB5LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgbXItMTAgcHktMyBob3Zlcjp0ZXh0LWJsdWUtNDAwIHVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJibG9jayBweS00IGxnOmlubGluZS1ibG9jayBsZzptdC0wIG1yLTEwIHB5LTMgaG92ZXI6dGV4dC1ibHVlLTQwMDRcIlxuICAgICAgICAgICAgICAgIH0+UmVnaXN0cmFyIE9wZXJhY2nDs248L2E+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGlzdGFkb1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9saXN0YWRvXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJsb2NrIHB5LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgbXItMTAgcHktMyBob3Zlcjp0ZXh0LWJsdWUtNDAwIHVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJibG9jayBweS00IGxnOmlubGluZS1ibG9jayBsZzptdC0wIG1yLTEwIHB5LTMgaG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgfT5MaXN0YWRvPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaW5saW5lLWJsb2NrIHRleHQtc20gdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTQgcHktMiAgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibGFjayBtdC00IGxnOm10LTAgbGc6cHgtNSBsZzpweS0zXCJcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2VycmFyU2VzaW9uKCl9PkNlcnJhciBTZXNpw7NuPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcblxuICAgIDwvZGl2PlxuXG48L25hdj5cblxuXG5cblxuXG4gICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==