webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./context/auth/authState.js":
/*!***********************************!*\
  !*** ./context/auth/authState.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authContext */ "./context/auth/authContext.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authReducer */ "./context/auth/authReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
/* harmony import */ var _config_tokenAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/tokenAuth */ "./config/tokenAuth.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\context\\auth\\authState.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var AuthState = function AuthState(_ref) {
  _s();

  var children = _ref.children;
  // Definir un state inicial
  var initialState = {
    token: true ? localStorage.getItem('token') : undefined,
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: null
  }; // Definir el reducer

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_authReducer__WEBPACK_IMPORTED_MODULE_4__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // Registrar nuevos usuarios


  var registrarUsuario = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(datos) {
      var respuesta, alerta, _alerta;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/api/usuarios', datos);

            case 3:
              respuesta = _context.sent;
              alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-ok'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["REGISTRO_EXITOSO"],
                payload: respuesta.data.msg,
                alerta: alerta
              }); // obtener el usuario

              usuarioAutenticado();
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              // console.log(error.response.data.msg);
              _alerta = {
                msg: _context.t0.response.data.msg,
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["REGISTRO_ERROR"],
                payload: _alerta
              });

            case 13:
              // Limpia la alerta después de 3 segundos
              setTimeout(function () {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["OCULTAR_ALERTA"]
                });
              }, 3000);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function registrarUsuario(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // Autenticar Usuarios


  var iniciarSesion = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(datos) {
      var respuesta, alerta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/api/auth', datos);

            case 3:
              respuesta = _context2.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["LOGIN_EXITOSO"],
                payload: respuesta.data.token
              });
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              // console.log(error.response.data.msg);
              alerta = {
                msg: _context2.t0.response.data.msg,
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["LOGIN_ERROR"],
                payload: alerta
              });

            case 11:
              // Limpia la alerta después de 3 segundos
              setTimeout(function () {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["OCULTAR_ALERTA"]
                });
              }, 3000);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function iniciarSesion(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // Retorne el Usuario autenticado en base al JWT


  var usuarioAutenticado = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var token, respuesta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              token = localStorage.getItem('token');

              if (token) {
                Object(_config_tokenAuth__WEBPACK_IMPORTED_MODULE_7__["default"])(token);
              }

              _context3.prev = 2;
              _context3.next = 5;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].get('/api/auth');

            case 5:
              respuesta = _context3.sent;

              if (respuesta.data.usuario) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["USUARIO_AUTENTICADO"],
                  payload: respuesta.data.usuario
                });
              }

              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](2);
              console.log(_context3.t0);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["LOGIN_ERROR"],
                payload: _context3.t0.response.data.msg
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 9]]);
    }));

    return function usuarioAutenticado() {
      return _ref4.apply(this, arguments);
    };
  }(); // Cerrar la sesión


  var cerrarSesion = function cerrarSesion() {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["CERRAR_SESION"]
    });
  };

  return __jsx(_authContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      token: state.token,
      autenticado: state.autenticado,
      usuario: state.usuario,
      mensaje: state.mensaje,
      cargando: state.cargando,
      registrarUsuario: registrarUsuario,
      iniciarSesion: iniciarSesion,
      usuarioAutenticado: usuarioAutenticado,
      cerrarSesion: cerrarSesion
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, children);
};

_s(AuthState, "h4meAN672mISt93ielJXXMKemns=");

_c = AuthState;
/* harmony default export */ __webpack_exports__["default"] = (AuthState);

var _c;

$RefreshReg$(_c, "AuthState");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFN0YXRlLmpzIl0sIm5hbWVzIjpbIkF1dGhTdGF0ZSIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0ZW50aWNhZG8iLCJ1c3VhcmlvIiwibWVuc2FqZSIsImNhcmdhbmRvIiwidXNlUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInJlZ2lzdHJhclVzdWFyaW8iLCJkYXRvcyIsImNsaWVudGVBeGlvcyIsInBvc3QiLCJyZXNwdWVzdGEiLCJhbGVydGEiLCJtc2ciLCJlcnJvciIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGVnb3JpYSIsInR5cGUiLCJSRUdJU1RST19FWElUT1NPIiwicGF5bG9hZCIsInVzdWFyaW9BdXRlbnRpY2FkbyIsIlJFR0lTVFJPX0VSUk9SIiwic2V0VGltZW91dCIsIk9DVUxUQVJfQUxFUlRBIiwiaW5pY2lhclNlc2lvbiIsIkxPR0lOX0VYSVRPU08iLCJMT0dJTl9FUlJPUiIsInRva2VuQXV0aCIsImdldCIsIlVTVUFSSU9fQVVURU5USUNBRE8iLCJjb25zb2xlIiwibG9nIiwiY2VycmFyU2VzaW9uIiwiQ0VSUkFSX1NFU0lPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQVVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZ0I7QUFBQTs7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7QUFFOUI7QUFDQSxNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFNBQUssRUFBRSxPQUFnQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWhDLEdBQWdFLFNBRHREO0FBRWpCQyxlQUFXLEVBQUUsSUFGSTtBQUdqQkMsV0FBTyxFQUFFLElBSFE7QUFJakJDLFdBQU8sRUFBRSxJQUpRO0FBS2pC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O0FBVEcsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUt2QyxRQWJMLENBREo7QUFpQkgsQ0F2SUQ7O0dBQU1ELFM7O0tBQUFBLFM7QUF5SVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjNhZGNlMTI1ZDUzNzY2NmU4ZTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuL2F1dGhDb250ZXh0JztcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGhSZWR1Y2VyJztcblxuXG5pbXBvcnQgeyBcbiAgICBSRUdJU1RST19FWElUT1NPLCBcbiAgICBSRUdJU1RST19FUlJPUixcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMT0dJTl9FWElUT1NPLFxuICAgIExPR0lOX0VSUk9SLFxuICAgIFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgQ0VSUkFSX1NFU0lPTlxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi4vLi4vY29uZmlnL2F4aW9zJztcbmltcG9ydCB0b2tlbkF1dGggZnJvbSAnLi4vLi4vY29uZmlnL3Rva2VuQXV0aCc7XG5cbmNvbnN0IEF1dGhTdGF0ZSA9ICh7Y2hpbGRyZW59KSA9PiB7XG5cbiAgICAvLyBEZWZpbmlyIHVuIHN0YXRlIGluaWNpYWxcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIHRva2VuOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJycsXG4gICAgICAgIGF1dGVudGljYWRvOiBudWxsLFxuICAgICAgICB1c3VhcmlvOiBudWxsLFxuICAgICAgICBtZW5zYWplOiBudWxsLFxuICAgICAgICBjYXJnYW5kbzogbnVsbFxuICAgIH1cblxuICAgIC8vIERlZmluaXIgZWwgcmVkdWNlclxuICAgIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKGF1dGhSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gICAgLy8gUmVnaXN0cmFyIG51ZXZvcyB1c3Vhcmlvc1xuICAgIGNvbnN0IHJlZ2lzdHJhclVzdWFyaW8gPSBhc3luYyBkYXRvcyA9PiB7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvdXN1YXJpb3MnLCBkYXRvcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcbiAgICAgICAgICAgICAgICBtc2c6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLm1zZywgYWxlcnRhXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gb2J0ZW5lciBlbCB1c3VhcmlvXG4gICAgICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcbiAgICAgICAgICAgICAgICBtc2c6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vIEF1dGVudGljYXIgVXN1YXJpb3NcbiAgICBjb25zdCBpbmljaWFyU2VzaW9uID0gYXN5bmMgZGF0b3MgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS9hdXRoJywgZGF0b3MpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VYSVRPU08sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XG4gICAgICAgICAgICAgICAgbXNnOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBSZXRvcm5lIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZW4gYmFzZSBhbCBKV1RcbiAgICBjb25zdCB1c3VhcmlvQXV0ZW50aWNhZG8gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIGlmKHRva2VuKSB7XG4gICAgICAgICAgICB0b2tlbkF1dGgodG9rZW4pXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCgnL2FwaS9hdXRoJyk7XG4gICAgICAgICAgICBpZihyZXNwdWVzdGEuZGF0YS51c3VhcmlvKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS51c3VhcmlvXG4gICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENlcnJhciBsYSBzZXNpw7NuXG4gICAgY29uc3QgY2VycmFyU2VzaW9uID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBDRVJSQVJfU0VTSU9OXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17eyBcbiAgICAgICAgICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHN0YXRlLmF1dGVudGljYWRvLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IHN0YXRlLnVzdWFyaW8sXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcbiAgICAgICAgICAgICAgICBjYXJnYW5kbzogc3RhdGUuY2FyZ2FuZG8sXG4gICAgICAgICAgICAgICAgcmVnaXN0cmFyVXN1YXJpbyxcbiAgICAgICAgICAgICAgICBpbmljaWFyU2VzaW9uLFxuICAgICAgICAgICAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbywgXG4gICAgICAgICAgICAgICAgY2VycmFyU2VzaW9uXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoU3RhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==