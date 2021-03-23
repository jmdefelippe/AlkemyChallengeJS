webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./context/operaciones/operacionState.js":
/*!***********************************************!*\
  !*** ./context/operaciones/operacionState.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _operacionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operacionContext */ "./context/operaciones/operacionContext.js");
/* harmony import */ var _operacionReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operacionReducer */ "./context/operaciones/operacionReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\context\\operaciones\\operacionState.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var OperacionState = function OperacionState(props) {
  _s();

  var initialState = {
    operaciones: [],
    nuevaOperacion: false,
    errorformulario: false,
    operacion: null,
    mensaje: null,
    balance: 0,
    ingresos: 0,
    egresos: 0
  }; // dispatch para ejecutar las acciones

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_operacionReducer__WEBPACK_IMPORTED_MODULE_4__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // serie de funciones para el CRUD


  var mostrarFormulario = function mostrarFormulario() {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["FORMULARIO_OPERACION"]
    });
  }; // obtener los operaciones


  var obtenerOperaciones = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var resultado, alerta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].get('/api/operaciones');

            case 3:
              resultado = _context.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OBTENER_OPERACIONES"],
                payload: resultado.data.operaciones
              });
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_ERROR"],
                payload: alerta
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function obtenerOperaciones() {
      return _ref.apply(this, arguments);
    };
  }(); // agregar nueva operacion


  var agregarOperacion = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(operacion) {
      var resultado, alerta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/api/operaciones', operacion);

            case 3:
              resultado = _context2.sent;
              console.log(resultado); // insertar el operacion en el state

              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["AGREGAR_OPERACION"],
                payload: resultado.data
              });
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_ERROR"],
                payload: alerta
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function agregarOperacion(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // validar el formulario por errores


  var mostrarError = function mostrarError() {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["VALIDAR_FORMULARIO"]
    });
  }; // selecciona el operacion que el usuario dio click


  var operacionActual = function operacionActual(operacionId) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_ACTUAL"],
      payload: operacionId
    });
  }; // elimina un operacion


  var eliminarOperacion = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(operacionId) {
      var alerta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"]["delete"]("/api/operaciones/".concat(operacionId));

            case 3:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ELIMINAR_OPERACION"],
                payload: operacionId
              });
              _context3.next = 10;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_ERROR"],
                payload: alerta
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 6]]);
    }));

    return function eliminarOperacion(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // edita o modifica una operacion


  var actualizarOperacion = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(operacion) {
      var resultado;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].put("/api/operaciones/".concat(operacion._id), operacion);

            case 3:
              resultado = _context4.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ACTUALIZAR_OPERACION"],
                payload: resultado.data.operacion
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    return function actualizarOperacion(_x3) {
      return _ref4.apply(this, arguments);
    };
  }(); // elimina la operacion seleccionada


  var limpiarOperacion = function limpiarOperacion() {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["LIMPIAR_OPERACION"]
    });
  };

  var calcularTotalIngresos = function calcularTotalIngresos() {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["TOTAL_INGRESOS"]
    });
  };

  var calcularTotalEgresos = function calcularTotalEgresos() {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["TOTAL_EGRESOS"]
    });
  }; // calcular el balance: total ingresos - total egresos


  var calcularBalance = function calcularBalance() {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["CALCULAR_BALANCE"]
    });
  };

  var obtenerOperacionesCategorias = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(categoria) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return obtenerOperaciones();

            case 2:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACIONES_CATEGORIAS"],
                payload: categoria
              });

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function obtenerOperacionesCategorias(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  return __jsx(_operacionContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      operaciones: state.operaciones,
      formulario: state.formulario,
      errorformulario: state.errorformulario,
      operacion: state.operacion,
      mensaje: state.mensaje,
      balance: state.balance,
      ingresos: state.ingresos,
      egresos: state.egresos,
      mostrarFormulario: mostrarFormulario,
      obtenerOperaciones: obtenerOperaciones,
      agregarOperacion: agregarOperacion,
      mostrarError: mostrarError,
      operacionActual: operacionActual,
      eliminarOperacion: eliminarOperacion,
      actualizarOperacion: actualizarOperacion,
      calcularTotalIngresos: calcularTotalIngresos,
      calcularTotalEgresos: calcularTotalEgresos,
      calcularBalance: calcularBalance,
      obtenerOperacionesCategorias: obtenerOperacionesCategorias
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, props.children);
};

_s(OperacionState, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = OperacionState;
/* harmony default export */ __webpack_exports__["default"] = (OperacionState);

var _c;

$RefreshReg$(_c, "OperacionState");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblN0YXRlLmpzIl0sIm5hbWVzIjpbIk9wZXJhY2lvblN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJvcGVyYWNpb25lcyIsIm51ZXZhT3BlcmFjaW9uIiwiZXJyb3Jmb3JtdWxhcmlvIiwib3BlcmFjaW9uIiwibWVuc2FqZSIsImJhbGFuY2UiLCJpbmdyZXNvcyIsImVncmVzb3MiLCJ1c2VSZWR1Y2VyIiwib3BlcmFjaW9uUmVkdWNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJtb3N0cmFyRm9ybXVsYXJpbyIsInR5cGUiLCJGT1JNVUxBUklPX09QRVJBQ0lPTiIsIm9idGVuZXJPcGVyYWNpb25lcyIsImNsaWVudGVBeGlvcyIsImdldCIsInJlc3VsdGFkbyIsIk9CVEVORVJfT1BFUkFDSU9ORVMiLCJwYXlsb2FkIiwiZGF0YSIsImFsZXJ0YSIsIm1zZyIsImNhdGVnb3JpYSIsIk9QRVJBQ0lPTl9FUlJPUiIsImFncmVnYXJPcGVyYWNpb24iLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIkFHUkVHQVJfT1BFUkFDSU9OIiwibW9zdHJhckVycm9yIiwiVkFMSURBUl9GT1JNVUxBUklPIiwib3BlcmFjaW9uQWN0dWFsIiwib3BlcmFjaW9uSWQiLCJPUEVSQUNJT05fQUNUVUFMIiwiZWxpbWluYXJPcGVyYWNpb24iLCJFTElNSU5BUl9PUEVSQUNJT04iLCJhY3R1YWxpemFyT3BlcmFjaW9uIiwicHV0IiwiX2lkIiwiQUNUVUFMSVpBUl9PUEVSQUNJT04iLCJsaW1waWFyT3BlcmFjaW9uIiwiTElNUElBUl9PUEVSQUNJT04iLCJjYWxjdWxhclRvdGFsSW5ncmVzb3MiLCJUT1RBTF9JTkdSRVNPUyIsImNhbGN1bGFyVG90YWxFZ3Jlc29zIiwiVE9UQUxfRUdSRVNPUyIsImNhbGN1bGFyQmFsYW5jZSIsIkNBTENVTEFSX0JBTEFOQ0UiLCJvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFz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LEVBQUU7QUFDSGxELGlCQUFXLEVBQUVVLEtBQUssQ0FBQ1YsV0FEaEI7QUFFSG9ELGdCQUFVLEVBQUUxQyxLQUFLLENBQUMwQyxVQUZmO0FBR0hsRCxxQkFBZSxFQUFFUSxLQUFLLENBQUNSLGVBSHBCO0FBSUhDLGVBQVMsRUFBRU8sS0FBSyxDQUFDUCxTQUpkO0FBS0hDLGFBQU8sRUFBRU0sS0FBSyxDQUFDTixPQUxaO0FBTUhDLGFBQU8sRUFBRUssS0FBSyxDQUFDTCxPQU5aO0FBT0hDLGNBQVEsRUFBRUksS0FBSyxDQUFDSixRQVBiO0FBUUhDLGFBQU8sRUFBRUcsS0FBSyxDQUFDSCxPQVJaO0FBU0hLLHVCQUFpQixFQUFqQkEsaUJBVEc7QUFVSEcsd0JBQWtCLEVBQWxCQSxrQkFWRztBQVdIVyxzQkFBZ0IsRUFBaEJBLGdCQVhHO0FBWUhLLGtCQUFZLEVBQVpBLFlBWkc7QUFhSEUscUJBQWUsRUFBZkEsZUFiRztBQWNIRyx1QkFBaUIsRUFBakJBLGlCQWRHO0FBZUhFLHlCQUFtQixFQUFuQkEsbUJBZkc7QUFnQkhNLDJCQUFxQixFQUFyQkEscUJBaEJHO0FBaUJIRSwwQkFBb0IsRUFBcEJBLG9CQWpCRztBQWtCSEUscUJBQWUsRUFBZkEsZUFsQkc7QUFtQkhFLGtDQUE0QixFQUE1QkE7QUFuQkcsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdUJLcEQsS0FBSyxDQUFDdUQsUUF2QlgsQ0FESjtBQTJCSCxDQXRMRDs7R0FBTXhELGM7O0tBQUFBLGM7QUF3TFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjA5ZjAwMDlmMzBkY2FkYTQ5ZDdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBvcGVyYWNpb25Db250ZXh0IGZyb20gJy4vb3BlcmFjaW9uQ29udGV4dCc7XHJcbmltcG9ydCBvcGVyYWNpb25SZWR1Y2VyIGZyb20gJy4vb3BlcmFjaW9uUmVkdWNlcic7XHJcbmltcG9ydCB7XHJcbiAgICBGT1JNVUxBUklPX09QRVJBQ0lPTixcclxuICAgIE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgIE9QRVJBQ0lPTl9FUlJPUixcclxuICAgIFZBTElEQVJfRk9STVVMQVJJTyxcclxuICAgIE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX1NUQVRFLFxyXG4gICAgQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX09QRVJBQ0lPTixcclxuICAgIENBTENVTEFSX0JBTEFOQ0UsXHJcbiAgICBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgVE9UQUxfSU5HUkVTT1MsXHJcbiAgICBUT1RBTF9FR1JFU09TXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xyXG5cclxuY29uc3QgT3BlcmFjaW9uU3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIG9wZXJhY2lvbmVzIDogW10sXHJcbiAgICAgICAgbnVldmFPcGVyYWNpb24gOiBmYWxzZSxcclxuICAgICAgICBlcnJvcmZvcm11bGFyaW86IGZhbHNlLFxyXG4gICAgICAgIG9wZXJhY2lvbjogbnVsbCxcclxuICAgICAgICBtZW5zYWplOiBudWxsLFxyXG4gICAgICAgIGJhbGFuY2U6IDAsXHJcbiAgICAgICAgaW5ncmVzb3M6IDAsXHJcbiAgICAgICAgZWdyZXNvczogMFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpc3BhdGNoIHBhcmEgZWplY3V0YXIgbGFzIGFjY2lvbmVzXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIob3BlcmFjaW9uUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyBzZXJpZSBkZSBmdW5jaW9uZXMgcGFyYSBlbCBDUlVEXHJcbiAgICBjb25zdCBtb3N0cmFyRm9ybXVsYXJpbyA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPUk1VTEFSSU9fT1BFUkFDSU9OXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBvYnRlbmVyIGxvcyBvcGVyYWNpb25lc1xyXG4gICAgY29uc3Qgb2J0ZW5lck9wZXJhY2lvbmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvb3BlcmFjaW9uZXMnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YS5vcGVyYWNpb25lc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGFncmVnYXIgbnVldmEgb3BlcmFjaW9uXHJcbiAgICBjb25zdCBhZ3JlZ2FyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvb3BlcmFjaW9uZXMnLCBvcGVyYWNpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRhZG8pO1xyXG4gICAgICAgICAgICAvLyBpbnNlcnRhciBlbCBvcGVyYWNpb24gZW4gZWwgc3RhdGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUdSRUdBUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdmFsaWRhciBlbCBmb3JtdWxhcmlvIHBvciBlcnJvcmVzXHJcbiAgICBjb25zdCBtb3N0cmFyRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBWQUxJREFSX0ZPUk1VTEFSSU9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjY2lvbmEgZWwgb3BlcmFjaW9uIHF1ZSBlbCB1c3VhcmlvIGRpbyBjbGlja1xyXG4gICAgY29uc3Qgb3BlcmFjaW9uQWN0dWFsID0gb3BlcmFjaW9uSWQgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0FDVFVBTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogb3BlcmFjaW9uSWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsaW1pbmEgdW4gb3BlcmFjaW9uXHJcbiAgICBjb25zdCBlbGltaW5hck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBjbGllbnRlQXhpb3MuZGVsZXRlKGAvYXBpL29wZXJhY2lvbmVzLyR7b3BlcmFjaW9uSWR9YCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEVMSU1JTkFSX09QRVJBQ0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXRhIG8gbW9kaWZpY2EgdW5hIG9wZXJhY2lvblxyXG4gICAgY29uc3QgYWN0dWFsaXphck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbiA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnB1dChgL2FwaS9vcGVyYWNpb25lcy8ke29wZXJhY2lvbi5faWR9YCwgb3BlcmFjaW9uKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YS5vcGVyYWNpb25cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsaW1pbmEgbGEgb3BlcmFjaW9uIHNlbGVjY2lvbmFkYVxyXG4gICAgY29uc3QgbGltcGlhck9wZXJhY2lvbiA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJTVBJQVJfT1BFUkFDSU9OXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxjdWxhclRvdGFsSW5ncmVzb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBUT1RBTF9JTkdSRVNPU1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbEVncmVzb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBUT1RBTF9FR1JFU09TXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY2FsY3VsYXIgZWwgYmFsYW5jZTogdG90YWwgaW5ncmVzb3MgLSB0b3RhbCBlZ3Jlc29zXHJcbiAgICBjb25zdCBjYWxjdWxhckJhbGFuY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBDQUxDVUxBUl9CQUxBTkNFXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzID0gYXN5bmMgY2F0ZWdvcmlhID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBjYXRlZ29yaWFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8b3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogc3RhdGUuZm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogc3RhdGUuZXJyb3Jmb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBzdGF0ZS5vcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogc3RhdGUuYmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGluZ3Jlc29zOiBzdGF0ZS5pbmdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGVncmVzb3M6IHN0YXRlLmVncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyRm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJPcGVyYWNpb25lcyxcclxuICAgICAgICAgICAgICAgIGFncmVnYXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25BY3R1YWwsXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGFjdHVhbGl6YXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsSW5ncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsRWdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXNcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L29wZXJhY2lvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhY2lvblN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=