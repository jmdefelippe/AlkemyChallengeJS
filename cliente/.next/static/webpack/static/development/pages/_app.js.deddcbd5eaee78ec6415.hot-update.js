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
                msg: respuesta.data.msg,
                categoria: 'alerta-ok'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["REGISTRO_EXITOSO"],
                payload: alerta
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
              }); // obtener el usuario

              usuarioAutenticado();
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
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

            case 12:
              // Limpia la alerta después de 3 segundos
              setTimeout(function () {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["OCULTAR_ALERTA"]
                });
              }, 3000);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
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
      lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFN0YXRlLmpzIl0sIm5hbWVzIjpbIkF1dGhTdGF0ZSIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0ZW50aWNhZG8iLCJ1c3VhcmlvIiwibWVuc2FqZSIsImNhcmdhbmRvIiwidXNlUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInJlZ2lzdHJhclVzdWFyaW8iLCJkYXRvcyIsImNsaWVudGVBeGlvcyIsInBvc3QiLCJyZXNwdWVzdGEiLCJhbGVydGEiLCJtc2ciLCJkYXRhIiwiY2F0ZWdvcmlhIiwidHlwZSIsIlJFR0lTVFJPX0VYSVRPU08iLCJwYXlsb2FkIiwidXN1YXJpb0F1dGVudGljYWRvIiwicmVzcG9uc2UiLCJSRUdJU1RST19FUlJPUiIsInNldFRpbWVvdXQiLCJPQ1VMVEFSX0FMRVJUQSIsImluaWNpYXJTZXNpb24iLCJMT0dJTl9FWElUT1NPIiwiTE9HSU5fRVJST1IiLCJ0b2tlbkF1dGgiLCJnZXQiLCJVU1VBUklPX0FVVEVOVElDQURPIiwiY29uc29sZSIsImxvZyIsImNlcnJhclNlc2lvbiIsIkNFUlJBUl9TRVNJT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFVQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBRTlCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxTQUFLLEVBQUUsT0FBZ0NDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFoQyxHQUFnRSxTQUR0RDtBQUVqQkMsZUFBVyxFQUFFLElBRkk7QUFHakJDLFdBQU8sRUFBRSxJQUhRO0FBSWpCQyxXQUFPLEVBQUUsSUFKUTtBQUtqQkMsWUFBUSxF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QSxLQWFLdEMsUUFiTCxDQURKO0FBaUJILENBeklEOztHQUFNRCxTOztLQUFBQSxTO0FBMklTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5kZWRkY2JkNWVhZWU3OGVjNjQxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi9hdXRoQ29udGV4dCc7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5cblxuaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTywgXG4gICAgUkVHSVNUUk9fRVJST1IsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgTE9HSU5fRVhJVE9TTyxcbiAgICBMT0dJTl9FUlJPUixcbiAgICBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgIENFUlJBUl9TRVNJT05cbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5pbXBvcnQgdG9rZW5BdXRoIGZyb20gJy4uLy4uL2NvbmZpZy90b2tlbkF1dGgnO1xuXG5jb25zdCBBdXRoU3RhdGUgPSAoe2NoaWxkcmVufSkgPT4ge1xuXG4gICAgLy8gRGVmaW5pciB1biBzdGF0ZSBpbmljaWFsXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICB0b2tlbjogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnLFxuICAgICAgICBhdXRlbnRpY2FkbzogbnVsbCxcbiAgICAgICAgdXN1YXJpbzogbnVsbCxcbiAgICAgICAgbWVuc2FqZTogbnVsbCxcbiAgICAgICAgY2FyZ2FuZG86IG51bGxcbiAgICB9XG5cbiAgICAvLyBEZWZpbmlyIGVsIHJlZHVjZXJcbiAgICBjb25zdCBbIHN0YXRlLCBkaXNwYXRjaCBdID0gdXNlUmVkdWNlcihhdXRoUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICAgIC8vIFJlZ2lzdHJhciBudWV2b3MgdXN1YXJpb3NcbiAgICBjb25zdCByZWdpc3RyYXJVc3VhcmlvID0gYXN5bmMgZGF0b3MgPT4ge1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL3VzdWFyaW9zJywgZGF0b3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XG4gICAgICAgICAgICAgICAgbXNnOiByZXNwdWVzdGEuZGF0YS5tc2csXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFJFR0lTVFJPX0VYSVRPU08sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gb2J0ZW5lciBlbCB1c3VhcmlvXG4gICAgICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcbiAgICAgICAgICAgICAgICBtc2c6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vIEF1dGVudGljYXIgVXN1YXJpb3NcbiAgICBjb25zdCBpbmljaWFyU2VzaW9uID0gYXN5bmMgZGF0b3MgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS9hdXRoJywgZGF0b3MpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VYSVRPU08sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBvYnRlbmVyIGVsIHVzdWFyaW9cbiAgICAgICAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xuICAgICAgICAgICAgICAgIG1zZzogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2csXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gUmV0b3JuZSBlbCBVc3VhcmlvIGF1dGVudGljYWRvIGVuIGJhc2UgYWwgSldUXG4gICAgY29uc3QgdXN1YXJpb0F1dGVudGljYWRvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBpZih0b2tlbikge1xuICAgICAgICAgICAgdG9rZW5BdXRoKHRva2VuKVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvYXV0aCcpO1xuICAgICAgICAgICAgaWYocmVzcHVlc3RhLmRhdGEudXN1YXJpbykge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudXN1YXJpb1xuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDZXJyYXIgbGEgc2VzacOzblxuICAgIGNvbnN0IGNlcnJhclNlc2lvbiA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQ0VSUkFSX1NFU0lPTlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3sgXG4gICAgICAgICAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiBzdGF0ZS5hdXRlbnRpY2FkbyxcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBzdGF0ZS51c3VhcmlvLFxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHN0YXRlLm1lbnNhamUsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IHN0YXRlLmNhcmdhbmRvLFxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhclVzdWFyaW8sXG4gICAgICAgICAgICAgICAgaW5pY2lhclNlc2lvbixcbiAgICAgICAgICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8sIFxuICAgICAgICAgICAgICAgIGNlcnJhclNlc2lvblxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=