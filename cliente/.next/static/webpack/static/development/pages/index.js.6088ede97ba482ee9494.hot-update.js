webpackHotUpdate("static\\development\\pages\\index.js",{

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

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, usuario ? __jsx("nav", {
    "class": "flex items-center justify-between flex-wrap bg-gray-300 p-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "flex items-center flex-shrink-0 text-white mr-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
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
      lineNumber: 35,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 146
    }
  })), __jsx("span", {
    "class": "font-semibold text-xl text-black tracking-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "ALKEMY")), __jsx("div", {
    "class": "block lg:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("button", {
    id: "boton",
    "class": "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("svg", {
    "class": "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 114
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 133
    }
  })))), __jsx("div", {
    id: "menu",
    "class": "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "lg:flex-grow text-black font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/registraroperacion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: router.pathname === "/registraroperacion" ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400 underline" : "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, "Registrar Operaci\xF3n")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/listado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: router.pathname === "/listado" ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400 underline" : "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, "Listado"))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
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
      lineNumber: 66,
      columnNumber: 29
    }
  }, "Cerrar Sesi\xF3n")))) : __jsx("nav", {
    className: "flex items-center justify-between flex-wrap bg-gray-300 p-6 xl:px-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 1
    }
  }, __jsx("img", {
    onClick: function onClick() {
      return redireccionar();
    },
    className: "w-64 mb-8 md:mb-0 cursor-pointer lg:mr-10 xl:mr-20",
    src: "/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, router.pathname === "/crearcuenta" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "bg-blue-400 inline-block text-sm text-white font-bold uppercase px-4 py-2  rounded-lg hover:bg-black mt-4 lg:mt-0 lg:px-5 lg:py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "Iniciar Sesi\xF3n")) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/crearcuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "bg-blue-400 inline-block text-sm text-white font-bold uppercase px-4 py-2  rounded-lg hover:bg-black mt-4 lg:mt-0 lg:px-5 lg:py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, "Crear Cuenta")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJjZXJyYXJTZXNpb24iLCJ1c2VFZmZlY3QiLCJyZWRpcmVjY2lvbmFyIiwicHVzaCIsIm1vc3RyYXJNZW51IiwibWVudSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSGlCLENBS2Y7O0FBQ0YsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFFQyxpRUFBRixDQUE5QjtBQU5pQixNQU9UQyxPQVBTLEdBT3NDSCxXQVB0QyxDQU9URyxPQVBTO0FBQUEsTUFPQUMsa0JBUEEsR0FPc0NKLFdBUHRDLENBT0FJLGtCQVBBO0FBQUEsTUFPcUJDLFlBUHJCLEdBT3NDTCxXQVB0QyxDQU9xQkssWUFQckI7QUFTakJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRixzQkFBa0I7QUFDckIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJULFVBQU0sQ0FBQ1UsSUFBUCxDQUFZLEdBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLFFBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0gsR0FGRDs7QUFJQSxTQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTVQsT0FBTyxHQUVM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QUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLG1JQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosQ0FESCxHQU9HLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsbUlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixDQVJSLENBTkosQ0FuRFEsQ0FGSjtBQXdGSCxDQTdHRDs7R0FBTWhCLE07VUFHYUUscUQ7OztLQUhiRixNO0FBK0dTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjA4OGVkZTk3YmE0ODJlZTk0OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblxuICAgIC8vIHJvdXRpbmcgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAgIC8vIEV4dHJhZXIgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBkZWwgU3RvcmFnZSBcbiAgICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoIGF1dGhDb250ZXh0ICk7XG4gICAgY29uc3QgeyB1c3VhcmlvLCB1c3VhcmlvQXV0ZW50aWNhZG8sICBjZXJyYXJTZXNpb27CoH0gPSBBdXRoQ29udGV4dDtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHJlZGlyZWNjaW9uYXIgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbW9zdHJhck1lbnUgPSAoKSA9PiB7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyB1c3VhcmlvID8gKFxuXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgYmctZ3JheS0zMDAgcC02XCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCB0ZXh0LXdoaXRlIG1yLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZpbGwtY3VycmVudCBoLTggdy04IG1yLTJcIiB3aWR0aD1cIjU0XCIgaGVpZ2h0PVwiNTRcIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTMuNSAyMi4xYzEuOC03LjIgNi4zLTEwLjggMTMuNS0xMC44IDEwLjggMCAxMi4xNSA4LjEgMTcuNTUgOS40NSAzLjYuOSA2Ljc1LS40NSA5LjQ1LTQuMDUtMS44IDcuMi02LjMgMTAuOC0xMy41IDEwLjgtMTAuOCAwLTEyLjE1LTguMS0xNy41NS05LjQ1LTMuNi0uOS02Ljc1LjQ1LTkuNDUgNC4wNXpNMCAzOC4zYzEuOC03LjIgNi4zLTEwLjggMTMuNS0xMC44IDEwLjggMCAxMi4xNSA4LjEgMTcuNTUgOS40NSAzLjYuOSA2Ljc1LS40NSA5LjQ1LTQuMDUtMS44IDcuMi02LjMgMTAuOC0xMy41IDEwLjgtMTAuOCAwLTEyLjE1LTguMS0xNy41NS05LjQ1LTMuNi0uOS02Ljc1LjQ1LTkuNDUgNC4wNXpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ibGFjayB0cmFja2luZy10aWdodFwiPkFMS0VNWTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgbGc6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdib3RvbicgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgdGV4dC10ZWFsLTIwMCBib3JkZXItdGVhbC00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJmaWxsLWN1cnJlbnQgaC0zIHctM1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nbWVudScgY2xhc3M9XCJ3LWZ1bGwgYmxvY2sgZmxleC1ncm93IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGc6ZmxleC1ncm93IHRleHQtYmxhY2sgZm9udC1ib2xkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdHJhcm9wZXJhY2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcmVnaXN0cmFyb3BlcmFjaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibG9jayBweS00IGxnOmlubGluZS1ibG9jayBsZzptdC0wIG1yLTEwIHB5LTIgaG92ZXI6dGV4dC1ibHVlLTQwMCB1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJsb2NrIHB5LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgbXItMTAgcHktMiBob3Zlcjp0ZXh0LWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5SZWdpc3RyYXIgT3BlcmFjacOzbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xpc3RhZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xpc3RhZG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsb2NrIHB5LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgbXItMTAgcHktMiBob3Zlcjp0ZXh0LWJsdWUtNDAwIHVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmxvY2sgcHktNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBtci0xMCBweS0yIGhvdmVyOnRleHQtYmx1ZS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Pkxpc3RhZG88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaW5saW5lLWJsb2NrIHRleHQtc20gdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTQgcHktMiAgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibGFjayBtdC00IGxnOm10LTAgbGc6cHgtNSBsZzpweS0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNlcnJhclNlc2lvbigpfT5DZXJyYXIgU2VzacOzbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFxuXG5cblxuPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIGJnLWdyYXktMzAwIHAtNiB4bDpweC0yMFwiPlxuICAgIDxpbWcgXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJlZGlyZWNjaW9uYXIoKSB9XG4gICAgICAgIGNsYXNzTmFtZT1cInctNjQgbWItOCBtZDptYi0wIGN1cnNvci1wb2ludGVyIGxnOm1yLTEwIHhsOm1yLTIwXCIgc3JjPVwiL2xvZ28ucG5nXCIgXG4gICAgLz5cblxuICAgIDxkaXY+XG4gICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2NyZWFyY3VlbnRhXCIgPyAoXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaW5saW5lLWJsb2NrIHRleHQtc20gdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTQgcHktMiAgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibGFjayBtdC00IGxnOm10LTAgbGc6cHgtNSBsZzpweS0zXCI+SW5pY2lhciBTZXNpw7NuPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhcmN1ZW50YVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIGlubGluZS1ibG9jayB0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZSBweC00IHB5LTIgIHJvdW5kZWQtbGdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctYmxhY2sgbXQtNCBsZzptdC0wIGxnOnB4LTUgbGc6cHktM1wiPkNyZWFyIEN1ZW50YTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG5cbiAgICA8L2Rpdj5cbjwvbmF2PlxuXG5cblxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuXG5cbiAgICAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9