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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFN0YXRlLmpzIl0sIm5hbWVzIjpbIkF1dGhTdGF0ZSIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0ZW50aWNhZG8iLCJ1c3VhcmlvIiwibWVuc2FqZSIsImNhcmdhbmRvIiwidXNlUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsInJlZ2lzdHJhclVzdWFyaW8iLCJkYXRvcyIsImNsaWVudGVBeGlvcyIsInBvc3QiLCJyZXNwdWVzdGEiLCJhbGVydGEiLCJtc2ciLCJkYXRhIiwiY2F0ZWdvcmlhIiwidHlwZSIsIlJFR0lTVFJPX0VYSVRPU08iLCJwYXlsb2FkIiwidXN1YXJpb0F1dGVudGljYWRvIiwicmVzcG9uc2UiLCJSRUdJU1RST19FUlJPUiIsInNldFRpbWVvdXQiLCJPQ1VMVEFSX0FMRVJUQSIsImluaWNpYXJTZXNpb24iLCJMT0dJTl9FWElUT1NPIiwiTE9HSU5fRVJST1IiLCJ0b2tlbkF1dGgiLCJnZXQiLCJVU1VBUklPX0FVVEVOVElDQURPIiwiY29uc29sZSIsImxvZyIsImNlcnJhclNlc2lvbiIsIkNFUlJBUl9TRVNJT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFVQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBRTlCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxTQUFLLEVBQUUsT0FBZ0NDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFoQyxHQUFnRSxTQUR0RDtBQUVqQkMsZUFBVyxFQUFFLElBRkk7QUFHakJDLFdBQU8sRUFBRSxJQUhRO0FBSWpCQyxXQUFPLEVBQUUsSUFKUTtBQUtqQkMsWUFBUSxF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QXZJRDs7R0FBTUQsUzs7S0FBQUEsUztBQXlJU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNDBlNjE3OWIwMGI4YWQ4NDFkMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4vYXV0aENvbnRleHQnO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuXG5cbmltcG9ydCB7IFxuICAgIFJFR0lTVFJPX0VYSVRPU08sIFxuICAgIFJFR0lTVFJPX0VSUk9SLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExPR0lOX0VYSVRPU08sXG4gICAgTE9HSU5fRVJST1IsXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICBDRVJSQVJfU0VTSU9OXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuaW1wb3J0IHRva2VuQXV0aCBmcm9tICcuLi8uLi9jb25maWcvdG9rZW5BdXRoJztcblxuY29uc3QgQXV0aFN0YXRlID0gKHtjaGlsZHJlbn0pID0+IHtcblxuICAgIC8vIERlZmluaXIgdW4gc3RhdGUgaW5pY2lhbFxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgdG9rZW46IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJyxcbiAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgIHVzdWFyaW86IG51bGwsXG4gICAgICAgIG1lbnNhamU6IG51bGwsXG4gICAgICAgIGNhcmdhbmRvOiBudWxsXG4gICAgfVxuXG4gICAgLy8gRGVmaW5pciBlbCByZWR1Y2VyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoYXV0aFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBSZWdpc3RyYXIgbnVldm9zIHVzdWFyaW9zXG4gICAgY29uc3QgcmVnaXN0cmFyVXN1YXJpbyA9IGFzeW5jIGRhdG9zID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS91c3VhcmlvcycsIGRhdG9zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xuICAgICAgICAgICAgICAgIG1zZzogcmVzcHVlc3RhLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIG9idGVuZXIgZWwgdXN1YXJpb1xuICAgICAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XG4gICAgICAgICAgICAgICAgbXNnOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVHSVNUUk9fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICAvLyBBdXRlbnRpY2FyIFVzdWFyaW9zXG4gICAgY29uc3QgaW5pY2lhclNlc2lvbiA9IGFzeW5jIGRhdG9zID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvYXV0aCcsIGRhdG9zKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnRva2VuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xuICAgICAgICAgICAgICAgIG1zZzogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2csXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gUmV0b3JuZSBlbCBVc3VhcmlvIGF1dGVudGljYWRvIGVuIGJhc2UgYWwgSldUXG4gICAgY29uc3QgdXN1YXJpb0F1dGVudGljYWRvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBpZih0b2tlbikge1xuICAgICAgICAgICAgdG9rZW5BdXRoKHRva2VuKVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvYXV0aCcpO1xuICAgICAgICAgICAgaWYocmVzcHVlc3RhLmRhdGEudXN1YXJpbykge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudXN1YXJpb1xuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDZXJyYXIgbGEgc2VzacOzblxuICAgIGNvbnN0IGNlcnJhclNlc2lvbiA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQ0VSUkFSX1NFU0lPTlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3sgXG4gICAgICAgICAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiBzdGF0ZS5hdXRlbnRpY2FkbyxcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBzdGF0ZS51c3VhcmlvLFxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHN0YXRlLm1lbnNhamUsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IHN0YXRlLmNhcmdhbmRvLFxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhclVzdWFyaW8sXG4gICAgICAgICAgICAgICAgaW5pY2lhclNlc2lvbixcbiAgICAgICAgICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8sIFxuICAgICAgICAgICAgICAgIGNlcnJhclNlc2lvblxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=