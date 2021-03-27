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

  return __jsx("nav", {
    "class": "flex items-center justify-between flex-wrap bg-gray-300 p-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }
  }, __jsx("div", {
    "class": "flex items-center flex-shrink-0 text-white mr-20",
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
    "class": "font-semibold text-xl text-black tracking-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "ALKEMY")), __jsx("div", {
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
    className: router.pathname === "/registraroperacion" ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400 underline" : "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400",
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
    className: router.pathname === "/listado" ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400 underline" : "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJjZXJyYXJTZXNpb24iLCJ1c2VFZmZlY3QiLCJyZWRpcmVjY2lvbmFyIiwicHVzaCIsIm1vc3RyYXJNZW51IiwibWVudSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSGlCLENBS2Y7O0FBQ0YsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFFQyxpRUFBRixDQUE5QjtBQU5pQixNQU9UQyxPQVBTLEdBT3NDSCxXQVB0QyxDQU9URyxPQVBTO0FBQUEsTUFPQUMsa0JBUEEsR0FPc0NKLFdBUHRDLENBT0FJLGtCQVBBO0FBQUEsTUFPcUJDLFlBUHJCLEdBT3NDTCxXQVB0QyxDQU9xQkssWUFQckI7QUFTakJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRixzQkFBa0I7QUFDckIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJULFVBQU0sQ0FBQ1UsSUFBUCxDQUFZLEdBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLFFBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0gsR0FGRDs7QUFJQSxTQUVKO0FBQUssYUFBTSw2REFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFNLGtEQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUTtBQUFLLGFBQU0sMkJBQVg7QUFBdUMsU0FBSyxFQUFDLElBQTdDO0FBQWtELFVBQU0sRUFBQyxJQUF6RDtBQUE4RCxXQUFPLEVBQUMsV0FBdEU7QUFBa0YsU0FBSyxFQUFDLDRCQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFIO0FBQU0sS0FBQyxFQUFDLHFWQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBckgsQ0FEUixFQUVRO0FBQU0sYUFBTSxpREFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlIsQ0FGSixFQU9JO0FBQUssYUFBTSxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxNQUFFLEVBQUMsT0FBWDtBQUFtQixhQUFNLDhHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFNLHNCQUFYO0FBQWtDLFdBQU8sRUFBQyxXQUExQztBQUFzRCxTQUFLLEVBQUMsNEJBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF6RixFQUE0RztBQUFNLEtBQUMsRUFBQyw2Q0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTVHLENBREEsQ0FESixDQVBKLEVBYUk7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLGFBQU0sMERBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQU0sbUNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFFZCxNQUFNLENBQUNlLFFBQVAsS0FBb0IscUJBQXBCLEdBQ1IsNkVBRFEsR0FFUixtRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLENBSEosRUFVSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFFZixNQUFNLENBQUNlLFFBQVAsS0FBb0IsVUFBcEIsR0FDUiw2RUFEUSxHQUVSLG1FQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQVZKLENBRkosRUE0Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLFFBQVI7QUFBaUIsYUFBUyxFQUFDLG1JQUEzQjtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1SLFlBQVksRUFBbEI7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosQ0E1QkosQ0FiSixDQUZJO0FBNkRILENBbEZEOztHQUFNUixNO1VBR2FFLHFEOzs7S0FIYkYsTTtBQW9GU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjZjNWZhZWJhYTdmZmE2ZDU3MzdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cbiAgICAvLyByb3V0aW5nIFxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgICAvLyBFeHRyYWVyIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZGVsIFN0b3JhZ2UgXG4gICAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KCBhdXRoQ29udGV4dCApO1xuICAgIGNvbnN0IHsgdXN1YXJpbywgdXN1YXJpb0F1dGVudGljYWRvLCAgY2VycmFyU2VzaW9uwqB9ID0gQXV0aENvbnRleHQ7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCByZWRpcmVjY2lvbmFyID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cblxuICAgIGNvbnN0IG1vc3RyYXJNZW51ID0gKCkgPT4ge1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbjxuYXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIGJnLWdyYXktMzAwIHAtNlwiPlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIHRleHQtd2hpdGUgbXItMjBcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJmaWxsLWN1cnJlbnQgaC04IHctOCBtci0yXCIgd2lkdGg9XCI1NFwiIGhlaWdodD1cIjU0XCIgdmlld0JveD1cIjAgMCA1NCA1NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzLjUgMjIuMWMxLjgtNy4yIDYuMy0xMC44IDEzLjUtMTAuOCAxMC44IDAgMTIuMTUgOC4xIDE3LjU1IDkuNDUgMy42LjkgNi43NS0uNDUgOS40NS00LjA1LTEuOCA3LjItNi4zIDEwLjgtMTMuNSAxMC44LTEwLjggMC0xMi4xNS04LjEtMTcuNTUtOS40NS0zLjYtLjktNi43NS40NS05LjQ1IDQuMDV6TTAgMzguM2MxLjgtNy4yIDYuMy0xMC44IDEzLjUtMTAuOCAxMC44IDAgMTIuMTUgOC4xIDE3LjU1IDkuNDUgMy42LjkgNi43NS0uNDUgOS40NS00LjA1LTEuOCA3LjItNi4zIDEwLjgtMTMuNSAxMC44LTEwLjggMC0xMi4xNS04LjEtMTcuNTUtOS40NS0zLjYtLjktNi43NS40NS05LjQ1IDQuMDV6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ibGFjayB0cmFja2luZy10aWdodFwiPkFMS0VNWTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgbGc6aGlkZGVuXCI+XG4gICAgICAgIDxidXR0b24gaWQ9J2JvdG9uJyBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCB0ZXh0LXRlYWwtMjAwIGJvcmRlci10ZWFsLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiZmlsbC1jdXJyZW50IGgtMyB3LTNcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBkPVwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiLz48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBpZD0nbWVudScgY2xhc3M9XCJ3LWZ1bGwgYmxvY2sgZmxleC1ncm93IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOnctYXV0b1wiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxnOmZsZXgtZ3JvdyB0ZXh0LWJsYWNrIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0cmFyb3BlcmFjaW9uXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3JlZ2lzdHJhcm9wZXJhY2lvblwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJibG9jayBweS00IGxnOmlubGluZS1ibG9jayBsZzptdC0wIG1yLTEwIHB5LTIgaG92ZXI6dGV4dC1ibHVlLTQwMCB1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmxvY2sgcHktNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBtci0xMCBweS0yIGhvdmVyOnRleHQtYmx1ZS00MDBcIlxuICAgICAgICAgICAgICAgIH0+UmVnaXN0cmFyIE9wZXJhY2nDs248L2E+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGlzdGFkb1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9saXN0YWRvXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJsb2NrIHB5LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgbXItMTAgcHktMiBob3Zlcjp0ZXh0LWJsdWUtNDAwIHVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJibG9jayBweS00IGxnOmlubGluZS1ibG9jayBsZzptdC0wIG1yLTEwIHB5LTIgaG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgfT5MaXN0YWRvPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaW5saW5lLWJsb2NrIHRleHQtc20gdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTQgcHktMiAgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibGFjayBtdC00IGxnOm10LTAgbGc6cHgtNSBsZzpweS0zXCJcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2VycmFyU2VzaW9uKCl9PkNlcnJhciBTZXNpw7NuPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcblxuICAgIDwvZGl2PlxuXG48L25hdj5cblxuXG5cblxuXG4gICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==