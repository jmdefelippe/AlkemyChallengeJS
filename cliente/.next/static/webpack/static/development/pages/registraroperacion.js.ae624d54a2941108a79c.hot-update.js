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

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, usuario ? __jsx("nav", {
    className: "flex items-center justify-start flex-wrap bg-gray-300 p-6 xl:px-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "block lg:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("button", {
    id: "boton",
    className: "flex items-center px-3 py-2 mr-10 border rounded text-blue-500 border-blue-500 hover:text-black hover:border-black",
    onClick: function onClick() {
      return mostrarMenu();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 122
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 141
    }
  })))), __jsx("div", {
    className: "flex items-center flex-shrink-0 text-white ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("img", {
    onClick: function onClick() {
      return redireccionar();
    },
    className: "w-64 mb-8 md:mb-0 sm:mb-0 cursor-pointer sm:mr-0 md:mr-0 lg:mr-10 xl:mr-20",
    src: "/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  })), __jsx("div", {
    id: "menu",
    className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:flex-grow text-black font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/registraroperacion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: router.pathname === "/registraroperacion" ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400 underline" : "block py-4 lg:inline-block lg:mt-0 mr-10 py-2 hover:text-blue-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, "Registrar Operaci\xF3n")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/listado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: router.pathname === "/listado" ? "block  lg:inline-block mt-0 mr-10  hover:text-blue-400 underline" : "block  lg:inline-block mt-0 mr-10  hover:text-blue-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, "Listado"))), __jsx("div", {
    className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/login",
    className: "bg-blue-400 inline-block text-sm text-white font-bold uppercase px-4 py-2 rounded-lg hover:bg-black mt-4 lg:mt-0 lg:px-5 lg:py-3",
    onClick: function onClick() {
      return cerrarSesion();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, "Cerrar Sesi\xF3n")))) : __jsx("nav", {
    className: "flex items-center justify-between flex-wrap bg-gray-300 p-6 xl:px-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "block lg:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("button", {
    id: "boton",
    className: "flex items-center px-3 py-2 mr-10 border rounded text-blue-500 border-blue-500 hover:text-black hover:border-black",
    onClick: function onClick() {
      return mostrarMenu();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 122
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 141
    }
  })))), __jsx("div", {
    className: "flex items-center flex-shrink-0 text-white ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("img", {
    onClick: function onClick() {
      return redireccionar();
    },
    className: "w-64 mb-8 md:mb-0 sm:mb-0 cursor-pointer sm:mr-0 md:mr-0 lg:mr-10 xl:mr-20",
    src: "/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  })), __jsx("div", {
    id: "menu",
    className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, router.pathname === "/crearcuenta" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "bg-blue-400 inline-block text-sm text-white font-bold uppercase px-4 py-2  rounded-lg hover:bg-black mt-4 lg:mt-0 lg:px-5 lg:py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 37
    }
  }, "Iniciar Sesi\xF3n")) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/crearcuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "bg-blue-400 inline-block text-sm text-white font-bold uppercase px-4 py-2  rounded-lg hover:bg-black mt-4 lg:mt-0 lg:px-5 lg:py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 37
    }
  }, "Crear Cuenta"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJjZXJyYXJTZXNpb24iLCJ1c2VFZmZlY3QiLCJyZWRpcmVjY2lvbmFyIiwicHVzaCIsIm1vc3RyYXJNZW51IiwibWVudSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSGlCLENBS2Y7O0FBQ0YsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFFQyxpRUFBRixDQUE5QjtBQU5pQixNQU9UQyxPQVBTLEdBT3NDSCxXQVB0QyxDQU9URyxPQVBTO0FBQUEsTUFPQUMsa0JBUEEsR0FPc0NKLFdBUHRDLENBT0FJLGtCQVBBO0FBQUEsTUFPcUJDLFlBUHJCLEdBT3NDTCxXQVB0QyxDQU9xQkssWUFQckI7QUFTakJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRixzQkFBa0I7QUFDckIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJULFVBQU0sQ0FBQ1UsSUFBUCxDQUFZLEdBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLFFBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0gsR0FGRDs7QUFJQSxTQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTVQsT0FBTyxHQUVMO0FBQUssYUFBUyxFQUFDLG9FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxNQUFFLEVBQUMsT0FEUDtBQUVJLGFBQVMsRUFBQyxvSEFGZDtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1NLFdBQVcsRUFBakI7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFzQyxXQUFPLEVBQUMsV0FBOUM7QUFBMEQsU0FBSyxFQUFDLDRCQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBN0YsRUFBZ0g7QUFBTSxLQUFDLEVBQUMsNkNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFoSCxDQUxKLENBREosQ0FGSixFQVlJO0FBQUssYUFBUyxFQUFDLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFdBQU8sRUFBRTtBQUFBLGFBQU1GLGFBQWEsRUFBbkI7QUFBQSxLQURiO0FBRUksYUFBUyxFQUFDLDRFQUZkO0FBRTJGLE9BQUcsRUFBQyxXQUYvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FaSixFQW1CSTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsYUFBUyxFQUFDLDBEQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFFVCxNQUFNLENBQUNlLFFBQVAsS0FBb0IscUJBQXBCLEdBQ1IsNkVBRFEsR0FFUixtRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLENBRkosRUFTSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFFZixNQUFNLENBQUNlLFFBQVAsS0FBb0IsVUFBcEIsR0FDUixrRUFEUSxHQUVSLHdEQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQVRKLENBRkosRUFvQkk7QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLFFBQVI7QUFBaUIsYUFBUyxFQUFDLGtJQUEzQjtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1SLFlBQVksRUFBbEI7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosQ0FwQkosQ0FuQkosQ0FGSyxHQXNETDtBQUFLLGFBQVMsRUFBQyxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksTUFBRSxFQUFDLE9BRFA7QUFFSSxhQUFTLEVBQUMsb0hBRmQ7QUFHSSxXQUFPLEVBQUU7QUFBQSxhQUFNSSxXQUFXLEVBQWpCO0FBQUEsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0k7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFDLFdBQTlDO0FBQTBELFNBQUssRUFBQyw0QkFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTdGLEVBQWdIO0FBQU0sS0FBQyxFQUFDLDZDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBaEgsQ0FMSixDQURKLENBREosRUFXSTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxXQUFPLEVBQUU7QUFBQSxhQUFNRixhQUFhLEVBQW5CO0FBQUEsS0FEYjtBQUVJLGFBQVMsRUFBQyw0RUFGZDtBQUUyRixPQUFHLEVBQUMsV0FGL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWEosRUFrQkk7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLGFBQVMsRUFBQywwREFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFDLDBEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1QsTUFBTSxDQUFDZSxRQUFQLEtBQW9CLGNBQXBCLEdBQ0csTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxtSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLENBREgsR0FPRyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLG1JQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosQ0FSUixDQUZKLENBbEJKLENBdkRSLENBRko7QUF5R0gsQ0E5SEQ7O0dBQU1oQixNO1VBR2FFLHFEOzs7S0FIYkYsTTtBQWdJU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlZ2lzdHJhcm9wZXJhY2lvbi5qcy5hZTYyNGQ1NGEyOTQxMTA4YTc5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG4gICAgLy8gcm91dGluZyBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgICAgLy8gRXh0cmFlciBlbCBVc3VhcmlvIGF1dGVudGljYWRvIGRlbCBTdG9yYWdlIFxuICAgIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dCggYXV0aENvbnRleHQgKTtcbiAgICBjb25zdCB7IHVzdWFyaW8sIHVzdWFyaW9BdXRlbnRpY2FkbywgIGNlcnJhclNlc2lvbsKgfSA9IEF1dGhDb250ZXh0O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgcmVkaXJlY2Npb25hciA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3N0cmFyTWVudSA9ICgpID0+IHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IHVzdWFyaW8gPyAoXG5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgZmxleC13cmFwIGJnLWdyYXktMzAwIHAtNiB4bDpweC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYm90b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIG1yLTEwIGJvcmRlciByb3VuZGVkIHRleHQtYmx1ZS01MDAgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOnRleHQtYmxhY2sgaG92ZXI6Ym9yZGVyLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb3N0cmFyTWVudSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtMyB3LTNcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBkPVwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgdGV4dC13aGl0ZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVkaXJlY2Npb25hcigpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTY0IG1iLTggbWQ6bWItMCBzbTptYi0wIGN1cnNvci1wb2ludGVyIHNtOm1yLTAgbWQ6bXItMCBsZzptci0xMCB4bDptci0yMFwiIHNyYz1cIi9sb2dvLnBuZ1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtZW51JyBjbGFzc05hbWU9XCJ3LWZ1bGwgYmxvY2sgZmxleC1ncm93IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXgtZ3JvdyB0ZXh0LWJsYWNrIGZvbnQtYm9sZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RyYXJvcGVyYWNpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3JlZ2lzdHJhcm9wZXJhY2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmxvY2sgcHktNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBtci0xMCBweS0yIGhvdmVyOnRleHQtYmx1ZS00MDAgdW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJibG9jayBweS00IGxnOmlubGluZS1ibG9jayBsZzptdC0wIG1yLTEwIHB5LTIgaG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+UmVnaXN0cmFyIE9wZXJhY2nDs248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9saXN0YWRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9saXN0YWRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibG9jayAgbGc6aW5saW5lLWJsb2NrIG10LTAgbXItMTAgIGhvdmVyOnRleHQtYmx1ZS00MDAgdW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJibG9jayAgbGc6aW5saW5lLWJsb2NrIG10LTAgbXItMTAgIGhvdmVyOnRleHQtYmx1ZS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Pkxpc3RhZG88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmxvY2sgZmxleC1ncm93IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBpbmxpbmUtYmxvY2sgdGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNCBweS0yIHJvdW5kZWQtbGdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctYmxhY2sgbXQtNCBsZzptdC0wIGxnOnB4LTUgbGc6cHktM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjZXJyYXJTZXNpb24oKX0+Q2VycmFyIFNlc2nDs248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICApIDogKFxuXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIGJnLWdyYXktMzAwIHAtNiB4bDpweC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGxnOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdib3RvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgbXItMTAgYm9yZGVyIHJvdW5kZWQgdGV4dC1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAgaG92ZXI6dGV4dC1ibGFjayBob3Zlcjpib3JkZXItYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1vc3RyYXJNZW51KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC0zIHctM1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPk1lbnU8L3RpdGxlPjxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCB0ZXh0LXdoaXRlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWRpcmVjY2lvbmFyKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjQgbWItOCBtZDptYi0wIHNtOm1iLTAgY3Vyc29yLXBvaW50ZXIgc206bXItMCBtZDptci0wIGxnOm1yLTEwIHhsOm1yLTIwXCIgc3JjPVwiL2xvZ28ucG5nXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtZW51JyBjbGFzc05hbWU9XCJ3LWZ1bGwgYmxvY2sgZmxleC1ncm93IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOnctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBibG9jayBmbGV4LWdyb3cgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvY3JlYXJjdWVudGFcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaW5saW5lLWJsb2NrIHRleHQtc20gdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTQgcHktMiAgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJsYWNrIG10LTQgbGc6bXQtMCBsZzpweC01IGxnOnB5LTNcIj5JbmljaWFyIFNlc2nDs248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXJjdWVudGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIGlubGluZS1ibG9jayB0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZSBweC00IHB5LTIgIHJvdW5kZWQtbGdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibGFjayBtdC00IGxnOm10LTAgbGc6cHgtNSBsZzpweS0zXCI+Q3JlYXIgQ3VlbnRhPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuXG5cbiAgICAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9