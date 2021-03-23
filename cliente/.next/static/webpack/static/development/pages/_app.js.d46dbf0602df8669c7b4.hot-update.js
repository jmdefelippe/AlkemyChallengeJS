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

  var calcularTotalIngresos = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["TOTAL_INGRESOS"]
              });

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function calcularTotalIngresos() {
      return _ref5.apply(this, arguments);
    };
  }();

  var calcularTotalEgresos = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["TOTAL_EGRESOS"]
              });

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function calcularTotalEgresos() {
      return _ref6.apply(this, arguments);
    };
  }(); // calcular el balance: total ingresos - total egresos


  var calcularBalance = /*#__PURE__*/function () {
    var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["CALCULAR_BALANCE"]
              });

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function calcularBalance() {
      return _ref7.apply(this, arguments);
    };
  }();

  var calcularTotales = /*#__PURE__*/function () {
    var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return obtenerOperaciones();

            case 2:
              calcularTotalIngresos();
              calcularTotalEgresos();
              calcularBalance();

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function calcularTotales() {
      return _ref8.apply(this, arguments);
    };
  }();

  var obtenerOperacionesCategorias = /*#__PURE__*/function () {
    var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(categoria) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return obtenerOperaciones();

            case 2:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACIONES_CATEGORIAS"],
                payload: categoria
              });

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function obtenerOperacionesCategorias(_x4) {
      return _ref9.apply(this, arguments);
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
      obtenerOperacionesCategorias: obtenerOperacionesCategorias,
      calcularTotales: calcularTotales
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblN0YXRlLmpzIl0sIm5hbWVzIjpbIk9wZXJhY2lvblN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJvcGVyYWNpb25lcyIsIm51ZXZhT3BlcmFjaW9uIiwiZXJyb3Jmb3JtdWxhcmlvIiwib3BlcmFjaW9uIiwibWVuc2FqZSIsImJhbGFuY2UiLCJpbmdyZXNvcyIsImVncmVzb3MiLCJ1c2VSZWR1Y2VyIiwib3BlcmFjaW9uUmVkdWNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJtb3N0cmFyRm9ybXVsYXJpbyIsInR5cGUiLCJGT1JNVUxBUklPX09QRVJBQ0lPTiIsIm9idGVuZXJPcGVyYWNpb25lcyIsImNsaWVudGVBeGlvcyIsImdldCIsInJlc3VsdGFkbyIsIk9CVEVORVJfT1BFUkFDSU9ORVMiLCJwYXlsb2FkIiwiZGF0YSIsImFsZXJ0YSIsIm1zZyIsImNhdGVnb3JpYSIsIk9QRVJBQ0lPTl9FUlJPUiIsImFncmVnYXJPcGVyYWNpb24iLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIkFHUkVHQVJfT1BFUkFDSU9OIiwibW9zdHJhckVycm9yIiwiVkFMSURBUl9GT1JNVUxBUklPIiwib3BlcmFjaW9uQWN0dWFsIiwib3BlcmFjaW9uSWQiLCJPUEVSQUNJT05fQUNUVUFMIiwiZWxpbWluYXJPcGVyYWNpb24iLCJFTElNSU5BUl9PUEVSQUNJT04iLCJhY3R1YWxpemFyT3BlcmFjaW9uIiwicHV0IiwiX2lkIiwiQUNUVUFMSVpBUl9PUEVSQUNJT04iLCJsaW1waWFyT3BlcmFjaW9uIiwiTElNUElBUl9PUEVSQUNJT04iLCJjYWxjdWxhclRvdGFsSW5ncmVzb3MiLCJUT1RBTF9JTkdSRVNPUyIsImNhbGN1bGFyVG90YWxFZ3Jlc29zIiwiVE9UQUxfRUdSRVNPUyIsImNhbGN1bGFyQmFsYW5jZSIsIkNBTENVTEFSX0JBTEFOQ0UiLCJjYWxjdWxhclRvdGFsZXMiLCJvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzIiwiT1BFUkFDSU9ORVNfQ0FURUdPUklBUyIsImZvcm11bGFyaW8iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBaUJBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBRTVCLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsZUFBVyxFQUFHLEVBREc7QUFFakJDLGtCQUFjLEVBQUcsS0FGQTtBQUdqQkMsbUJBQWUsRUFBRSxLQUhBO0FBSWpCQyxhQUFTLEVBQUUsSUFKTTtBQUtqQkMsV0FBTyxFQUFFLElBTFE7QUFNakJDLFdBQU8sRUFBRSxDQU5RO0FBT2pCQyxZQUFRLEVBQUUsQ0FQTztBQVFqQkMsV0FBTyxFQUFFO0FBUlEsR0FBckIsQ0FGNEIsQ0FhNUI7O0FBYjRCLG9CQWNGQyx3REFBVSxDQUFDQyx5REFBRCxFQUFtQlYsWUFBbkIsQ0FkUjtBQUFBLE1BY3JCVyxLQWRxQjtBQUFBLE1BY2RDLFFBZGMsbUJBZ0I1Qjs7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCRCxZQUFRLENBQUM7QUFDTEUsVUFBSSxFQUFFQywyREFBb0JBO0FBRHJCLEtBQUQsQ0FBUjtBQUdILEdBSkQsQ0FqQjRCLENBdUI1Qjs7O0FBQ0EsTUFBTUMsa0JBQWtCO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVLQyxxREFBWSxDQUFDQyxHQUFiLENBQWlCLGtCQUFqQixDQUZMOztBQUFBO0FBRWJDLHVCQUZhO0FBSW5CUCxzQkFBUSxDQUFDO0FBQ0xFLG9CQUFJLEVBQUVNLDBEQUREO0FBRUxDLHVCQUFPLEVBQUVGLFNBQVMsQ0FBQ0csSUFBVixDQUFlckI7QUFGbkIsZUFBRCxDQUFSO0FBSm1CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU2JzQixvQkFUYSxH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O0FBZUhFLHlCQUFtQixFQUFuQkEsbUJBZkc7QUFnQkhNLDJCQUFxQixFQUFyQkEscUJBaEJHO0FBaUJIRSwwQkFBb0IsRUFBcEJBLG9CQWpCRztBQWtCSEUscUJBQWUsRUFBZkEsZUFsQkc7QUFtQkhHLGtDQUE0QixFQUE1QkEsNEJBbkJHO0FBb0JIRCxxQkFBZSxFQUFmQTtBQXBCRyxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F3QktwRCxLQUFLLENBQUN3RCxRQXhCWCxDQURKO0FBNEJILENBL0xEOztHQUFNekQsYzs7S0FBQUEsYztBQWlNU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZDQ2ZGJmMDYwMmRmODY2OWM3YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi9vcGVyYWNpb25Db250ZXh0JztcclxuaW1wb3J0IG9wZXJhY2lvblJlZHVjZXIgZnJvbSAnLi9vcGVyYWNpb25SZWR1Y2VyJztcclxuaW1wb3J0IHtcclxuICAgIEZPUk1VTEFSSU9fT1BFUkFDSU9OLFxyXG4gICAgT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgIEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgVkFMSURBUl9GT1JNVUxBUklPLFxyXG4gICAgT1BFUkFDSU9OX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX09QRVJBQ0lPTixcclxuICAgIExJTVBJQVJfU1RBVEUsXHJcbiAgICBBQ1RVQUxJWkFSX09QRVJBQ0lPTixcclxuICAgIExJTVBJQVJfT1BFUkFDSU9OLFxyXG4gICAgQ0FMQ1VMQVJfQkFMQU5DRSxcclxuICAgIE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVMsXHJcbiAgICBUT1RBTF9JTkdSRVNPUyxcclxuICAgIFRPVEFMX0VHUkVTT1NcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcblxyXG5jb25zdCBPcGVyYWNpb25TdGF0ZSA9IHByb3BzID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgb3BlcmFjaW9uZXMgOiBbXSxcclxuICAgICAgICBudWV2YU9wZXJhY2lvbiA6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yZm9ybXVsYXJpbzogZmFsc2UsXHJcbiAgICAgICAgb3BlcmFjaW9uOiBudWxsLFxyXG4gICAgICAgIG1lbnNhamU6IG51bGwsXHJcbiAgICAgICAgYmFsYW5jZTogMCxcclxuICAgICAgICBpbmdyZXNvczogMCxcclxuICAgICAgICBlZ3Jlc29zOiAwXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGlzcGF0Y2ggcGFyYSBlamVjdXRhciBsYXMgYWNjaW9uZXNcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihvcGVyYWNpb25SZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICAgIC8vIHNlcmllIGRlIGZ1bmNpb25lcyBwYXJhIGVsIENSVURcclxuICAgIGNvbnN0IG1vc3RyYXJGb3JtdWxhcmlvID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogRk9STVVMQVJJT19PUEVSQUNJT05cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9idGVuZXIgbG9zIG9wZXJhY2lvbmVzXHJcbiAgICBjb25zdCBvYnRlbmVyT3BlcmFjaW9uZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCgnL2FwaS9vcGVyYWNpb25lcycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhLm9wZXJhY2lvbmVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gYWdyZWdhciBudWV2YSBvcGVyYWNpb25cclxuICAgIGNvbnN0IGFncmVnYXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb24gPT4ge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS9vcGVyYWNpb25lcycsIG9wZXJhY2lvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdGFkbyk7XHJcbiAgICAgICAgICAgIC8vIGluc2VydGFyIGVsIG9wZXJhY2lvbiBlbiBlbCBzdGF0ZVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB2YWxpZGFyIGVsIGZvcm11bGFyaW8gcG9yIGVycm9yZXNcclxuICAgIGNvbnN0IG1vc3RyYXJFcnJvciA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFZBTElEQVJfRk9STVVMQVJJT1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWNjaW9uYSBlbCBvcGVyYWNpb24gcXVlIGVsIHVzdWFyaW8gZGlvIGNsaWNrXHJcbiAgICBjb25zdCBvcGVyYWNpb25BY3R1YWwgPSBvcGVyYWNpb25JZCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fQUNUVUFMLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBvcGVyYWNpb25JZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWxpbWluYSB1biBvcGVyYWNpb25cclxuICAgIGNvbnN0IGVsaW1pbmFyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uSWQgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudGVBeGlvcy5kZWxldGUoYC9hcGkvb3BlcmFjaW9uZXMvJHtvcGVyYWNpb25JZH1gKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogb3BlcmFjaW9uSWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdGEgbyBtb2RpZmljYSB1bmEgb3BlcmFjaW9uXHJcbiAgICBjb25zdCBhY3R1YWxpemFyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucHV0KGAvYXBpL29wZXJhY2lvbmVzLyR7b3BlcmFjaW9uLl9pZH1gLCBvcGVyYWNpb24pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBQ1RVQUxJWkFSX09QRVJBQ0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhLm9wZXJhY2lvblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWxpbWluYSBsYSBvcGVyYWNpb24gc2VsZWNjaW9uYWRhXHJcbiAgICBjb25zdCBsaW1waWFyT3BlcmFjaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTElNUElBUl9PUEVSQUNJT05cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxJbmdyZXNvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFRPVEFMX0lOR1JFU09TXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxjdWxhclRvdGFsRWdyZXNvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFRPVEFMX0VHUkVTT1NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjYWxjdWxhciBlbCBiYWxhbmNlOiB0b3RhbCBpbmdyZXNvcyAtIHRvdGFsIGVncmVzb3NcclxuICAgIGNvbnN0IGNhbGN1bGFyQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENBTENVTEFSX0JBTEFOQ0VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuXHJcbiAgICAgICAgY2FsY3VsYXJUb3RhbEluZ3Jlc29zKCk7XHJcbiAgICAgICAgY2FsY3VsYXJUb3RhbEVncmVzb3MoKTtcclxuICAgICAgICBjYWxjdWxhckJhbGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzID0gYXN5bmMgY2F0ZWdvcmlhID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBjYXRlZ29yaWFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8b3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogc3RhdGUuZm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogc3RhdGUuZXJyb3Jmb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBzdGF0ZS5vcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogc3RhdGUuYmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGluZ3Jlc29zOiBzdGF0ZS5pbmdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGVncmVzb3M6IHN0YXRlLmVncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyRm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJPcGVyYWNpb25lcyxcclxuICAgICAgICAgICAgICAgIGFncmVnYXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25BY3R1YWwsXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGFjdHVhbGl6YXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsSW5ncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsRWdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMsXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsZXNcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L29wZXJhY2lvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhY2lvblN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=