webpackHotUpdate("static\\development\\pages\\listado.js",{

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
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/app/appContext */ "./context/app/appContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\components\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Header = function Header() {
  _s();

  // routing 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); // Extraer el Usuario autenticado del Storage 

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var usuario = AuthContext.usuario,
      usuarioAutenticado = AuthContext.usuarioAutenticado,
      cerrarSesion = AuthContext.cerrarSesion; // Context de la aplicación

  var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_app_appContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var limpiarState = AppContext.limpiarState;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    usuarioAutenticado();
  }, []);

  var redireccionar = function redireccionar() {
    router.push('/');
    limpiarState();
  };

  var mostrarMenu = function mostrarMenu() {
    menu.classList.toggle('hidden');
  };

  return __jsx("nav", {
    className: "flex items-center justify-between flex-wrap bg-gray-300 p-6 xl:px-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
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
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, usuario ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "block lg:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx("button", {
    id: "boton",
    className: "flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500 hover:text-black hover:border-black",
    onClick: function onClick() {
      return mostrarMenu();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, __jsx("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 126
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 145
    }
  })))), __jsx("div", {
    id: "menu",
    className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "lg:flex-grow text-black font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/registraroperacion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: router.pathname === "/registraroperacion" ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-3 hover:text-blue-400 underline" : "block py-4 lg:inline-block lg:mt-0 mr-10 py-3 hover:text-blue-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, "Registrar Operaci\xF3n")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/listado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: router.pathname === "/listado" ? "block py-4 lg:inline-block lg:mt-0 mr-10 py-3 hover:text-blue-400 underline" : "block py-4 lg:inline-block lg:mt-0 mr-10 py-3 hover:text-blue-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  }, "Listado")), __jsx("a", {
    href: "/login",
    className: "inline-block border rounded-lg hover:bg-black lg:mt-0 bg-blue-400 px-5 py-3 text-white font-bold uppercase",
    onClick: function onClick() {
      return cerrarSesion();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, "Cerrar Sesi\xF3n")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "inline-block border rounded-lg hover:bg-black lg:mt-0 bg-blue-400 mr-3 px-5 py-3 text-white font-bold uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, "Iniciar Sesi\xF3n")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/crearcuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "inline-block border rounded-lg hover:bg-black lg:mt-0 bg-blue-400 px-5 py-3 text-white font-bold uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, "Crear Cuenta")))));
};

_s(Header, "Q9HzjOwvO3BuraGtNWNQ+9K/iLY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJjZXJyYXJTZXNpb24iLCJBcHBDb250ZXh0IiwiYXBwQ29udGV4dCIsImxpbXBpYXJTdGF0ZSIsInVzZUVmZmVjdCIsInJlZGlyZWNjaW9uYXIiLCJwdXNoIiwibW9zdHJhck1lbnUiLCJtZW51IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUVqQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FIaUIsQ0FLZjs7QUFDRixNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUVDLGlFQUFGLENBQTlCO0FBTmlCLE1BT1RDLE9BUFMsR0FPc0NILFdBUHRDLENBT1RHLE9BUFM7QUFBQSxNQU9BQyxrQkFQQSxHQU9zQ0osV0FQdEMsQ0FPQUksa0JBUEE7QUFBQSxNQU9xQkMsWUFQckIsR0FPc0NMLFdBUHRDLENBT3FCSyxZQVByQixFQVNmOztBQUNGLE1BQU1DLFVBQVUsR0FBR0wsd0RBQVUsQ0FBRU0sK0RBQUYsQ0FBN0I7QUFWaUIsTUFXVEMsWUFYUyxHQVdRRixVQVhSLENBV1RFLFlBWFM7QUFhakJDLHlEQUFTLENBQUMsWUFBTTtBQUNaTCxzQkFBa0I7QUFDckIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJaLFVBQU0sQ0FBQ2EsSUFBUCxDQUFZLEdBQVo7QUFDQUgsZ0JBQVk7QUFDZixHQUhEOztBQUtBLE1BQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLFFBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0gsR0FGRDs7QUFJQSxTQUdJO0FBQUssYUFBUyxFQUFDLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFdBQU8sRUFBRTtBQUFBLGFBQU1MLGFBQWEsRUFBbkI7QUFBQSxLQURiO0FBRUksYUFBUyxFQUFDLG9EQUZkO0FBRW1FLE9BQUcsRUFBQyxXQUZ2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFQLE9BQU8sR0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksTUFBRSxFQUFDLE9BRFA7QUFFSSxhQUFTLEVBQUMsOEdBRmQ7QUFHSSxXQUFPLEVBQUU7QUFBQSxhQUFNUyxXQUFXLEVBQWpCO0FBQUEsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0E7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFDLFdBQTlDO0FBQTBELFNBQUssRUFBQyw0QkFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTdGLEVBQWdIO0FBQU0sS0FBQyxFQUFDLDZDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBaEgsQ0FMQSxDQURKLENBREosRUFXSTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsYUFBUyxFQUFDLDBEQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFFZCxNQUFNLENBQUNrQixRQUFQLEtBQW9CLHFCQUFwQixHQUNSLDZFQURRLEdBRVIsbUVBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixDQURKLEVBUUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBRWxCLE1BQU0sQ0FBQ2tCLFFBQVAsS0FBb0IsVUFBcEIsR0FDUiw2RUFEUSxHQUVSLG1FQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQVJKLEVBbUJJO0FBQUcsUUFBSSxFQUFDLFFBQVI7QUFBaUIsYUFBUyxFQUFDLDRHQUEzQjtBQUNJLFdBQU8sRUFBRTtBQUFBLGFBQU1YLFlBQVksRUFBbEI7QUFBQSxLQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBbkJKLENBREosQ0FYSixDQURHLEdBMENILG1FQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsaUhBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixDQURKLEVBSUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyw0R0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLENBSkosQ0E1Q1osQ0FOSixDQUhKO0FBMEVILENBcEdEOztHQUFNUixNO1VBR2FFLHFEOzs7S0FIYkYsTTtBQXNHU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3RhZG8uanMuMzY1ZjhjMTIyZjVjYzRiNGNjODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XG5pbXBvcnQgYXBwQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2FwcC9hcHBDb250ZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG4gICAgLy8gcm91dGluZyBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgICAgLy8gRXh0cmFlciBlbCBVc3VhcmlvIGF1dGVudGljYWRvIGRlbCBTdG9yYWdlIFxuICAgIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dCggYXV0aENvbnRleHQgKTtcbiAgICBjb25zdCB7IHVzdWFyaW8sIHVzdWFyaW9BdXRlbnRpY2FkbywgIGNlcnJhclNlc2lvbsKgfSA9IEF1dGhDb250ZXh0O1xuXG4gICAgICAvLyBDb250ZXh0IGRlIGxhIGFwbGljYWNpw7NuXG4gICAgY29uc3QgQXBwQ29udGV4dCA9IHVzZUNvbnRleHQoIGFwcENvbnRleHQgKTtcbiAgICBjb25zdCB7IGxpbXBpYXJTdGF0ZcKgfSA9IEFwcENvbnRleHQ7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCByZWRpcmVjY2lvbmFyID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICBsaW1waWFyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3N0cmFyTWVudSA9ICgpID0+IHtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIGJnLWdyYXktMzAwIHAtNiB4bDpweC0yMFwiPlxuICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWRpcmVjY2lvbmFyKCkgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjQgbWItOCBtZDptYi0wIGN1cnNvci1wb2ludGVyIGxnOm1yLTEwIHhsOm1yLTIwXCIgc3JjPVwiL2xvZ28ucG5nXCIgXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJib3RvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQgdGV4dC1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAgaG92ZXI6dGV4dC1ibGFjayBob3Zlcjpib3JkZXItYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW9zdHJhck1lbnUoKSB9ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtMyB3LTNcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjx0aXRsZT5NZW51PC90aXRsZT48cGF0aCBkPVwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWVudVwiIGNsYXNzTmFtZT1cInctZnVsbCBibG9jayBmbGV4LWdyb3cgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleC1ncm93IHRleHQtYmxhY2sgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdHJhcm9wZXJhY2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9yZWdpc3RyYXJvcGVyYWNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmxvY2sgcHktNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBtci0xMCBweS0zIGhvdmVyOnRleHQtYmx1ZS00MDAgdW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJsb2NrIHB5LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgbXItMTAgcHktMyBob3Zlcjp0ZXh0LWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlJlZ2lzdHJhciBPcGVyYWNpw7NuPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xpc3RhZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvbGlzdGFkb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibG9jayBweS00IGxnOmlubGluZS1ibG9jayBsZzptdC0wIG1yLTEwIHB5LTMgaG92ZXI6dGV4dC1ibHVlLTQwMCB1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmxvY2sgcHktNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBtci0xMCBweS0zIGhvdmVyOnRleHQtYmx1ZS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+TGlzdGFkbzwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZzpmbGV4LWdyb3cgdGV4dC1ibGFjayBmb250LWJvbGQgYmxvY2sgcHktNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBtci0xMCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9sYSB7dXN1YXJpby5ub21icmV9ISA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfSAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJvcmRlciByb3VuZGVkLWxnIGhvdmVyOmJnLWJsYWNrIGxnOm10LTAgYmctYmx1ZS00MDAgcHgtNSBweS0zIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2VycmFyU2VzaW9uKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DZXJyYXIgU2VzacOzblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYm9yZGVyIHJvdW5kZWQtbGcgaG92ZXI6YmctYmxhY2sgbGc6bXQtMCBiZy1ibHVlLTQwMCBtci0zIHB4LTUgcHktMyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5JbmljaWFyIFNlc2nDs248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXJjdWVudGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJvcmRlciByb3VuZGVkLWxnIGhvdmVyOmJnLWJsYWNrIGxnOm10LTAgYmctYmx1ZS00MDAgcHgtNSBweS0zIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZVwiPkNyZWFyIEN1ZW50YTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgXG5cblxuXG5cbiAgICAgICAgPC9uYXY+XG4gICAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==