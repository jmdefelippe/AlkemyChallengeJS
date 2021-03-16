webpackHotUpdate("static\\development\\pages\\login.js",{

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

  return __jsx("header", {
    className: "bg-blue-100  flex flex-col md:flex-row items-center justify-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("img", {
    onClick: function onClick() {
      return redireccionar();
    },
    className: "w-64 mb-8 md:mb-0 cursor-pointer",
    src: "/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/registraroperacion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "bg-blue-400 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Registrar Operaci\xF3n")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/listado",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "bg-blue-400 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Listado")), __jsx("p", {
    className: "px-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Hola usuario.nombre"), __jsx("button", {
    type: "button",
    className: "bg-black px-5 py-3 rounded-lg text-white font-bold uppercase",
    onClick: function onClick() {
      return cerrarSesion();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Cerrar Sesi\xF3n")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJjZXJyYXJTZXNpb24iLCJBcHBDb250ZXh0IiwiYXBwQ29udGV4dCIsImxpbXBpYXJTdGF0ZSIsInVzZUVmZmVjdCIsInJlZGlyZWNjaW9uYXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSGlCLENBS2Y7O0FBQ0YsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFFQyxpRUFBRixDQUE5QjtBQU5pQixNQU9UQyxPQVBTLEdBT3NDSCxXQVB0QyxDQU9URyxPQVBTO0FBQUEsTUFPQUMsa0JBUEEsR0FPc0NKLFdBUHRDLENBT0FJLGtCQVBBO0FBQUEsTUFPcUJDLFlBUHJCLEdBT3NDTCxXQVB0QyxDQU9xQkssWUFQckIsRUFTZjs7QUFDRixNQUFNQyxVQUFVLEdBQUdMLHdEQUFVLENBQUVNLCtEQUFGLENBQTdCO0FBVmlCLE1BV1RDLFlBWFMsR0FXUUYsVUFYUixDQVdURSxZQVhTO0FBYWpCQyx5REFBUyxDQUFDLFlBQU07QUFDWkwsc0JBQWtCO0FBQ3JCLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCWixVQUFNLENBQUNhLElBQVAsQ0FBWSxHQUFaO0FBQ0FILGdCQUFZO0FBQ2YsR0FIRDs7QUFNQSxTQUNJO0FBQVEsYUFBUyxFQUFDLG9FQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxXQUFPLEVBQUU7QUFBQSxhQUFNRSxhQUFhLEVBQW5CO0FBQUEsS0FEYjtBQUVJLGFBQVMsRUFBQyxrQ0FGZDtBQUVpRCxPQUFHLEVBQUMsV0FGckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBT0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLHNFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosQ0FESixFQUlJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsc0VBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBSkosRUFpQkk7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWpCSixFQWtCSTtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksYUFBUyxFQUFDLDhEQUZkO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTUwsWUFBWSxFQUFsQjtBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFsQkosQ0FQSixDQURKO0FBcUNILENBNUREOztHQUFNUixNO1VBR2FFLHFEOzs7S0FIYkYsTTtBQThEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLjcwMGJiM2YyNjY4M2U3N2FlMDU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnO1xuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG4gICAgLy8gcm91dGluZyBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgICAgLy8gRXh0cmFlciBlbCBVc3VhcmlvIGF1dGVudGljYWRvIGRlbCBTdG9yYWdlIFxuICAgIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dCggYXV0aENvbnRleHQgKTtcbiAgICBjb25zdCB7IHVzdWFyaW8sIHVzdWFyaW9BdXRlbnRpY2FkbywgIGNlcnJhclNlc2lvbsKgfSA9IEF1dGhDb250ZXh0O1xuXG4gICAgICAvLyBDb250ZXh0IGRlIGxhIGFwbGljYWNpw7NuXG4gICAgY29uc3QgQXBwQ29udGV4dCA9IHVzZUNvbnRleHQoIGFwcENvbnRleHQgKTtcbiAgICBjb25zdCB7IGxpbXBpYXJTdGF0ZcKgfSA9IEFwcENvbnRleHQ7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHJlZGlyZWNjaW9uYXIgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgIGxpbXBpYXJTdGF0ZSgpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuICggXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctYmx1ZS0xMDAgIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlZGlyZWNjaW9uYXIoKSB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02NCBtYi04IG1kOm1iLTAgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvbG9nby5wbmdcIiBcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0cmFyb3BlcmFjaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIHB4LTUgcHktMyByb3VuZGVkLWxnIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZSBtci0yXCI+UmVnaXN0cmFyIE9wZXJhY2nDs248L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGlzdGFkb1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBweC01IHB5LTMgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2UgbXItMlwiPkxpc3RhZG88L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG57LyogXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiZy1ibGFjayBweC01IHB5LTMgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2UgbXItMlwiPkluaWNpYXIgU2VzacOzbjwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhcmN1ZW50YVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiZy1ibGFjayBweC01IHB5LTMgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5DcmVhciBDdWVudGE8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuKi99XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC01XCI+SG9sYSB1c3VhcmlvLm5vbWJyZXsvKnVzdWFyaW8ubm9tYnJlKi99PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayBweC01IHB5LTMgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjZXJyYXJTZXNpb24oKSB9XG4gICAgICAgICAgICAgICAgPkNlcnJhciBTZXNpw7NuPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=