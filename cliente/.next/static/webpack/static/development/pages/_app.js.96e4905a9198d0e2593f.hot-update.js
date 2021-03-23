webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./context/operaciones/operacionState.js":
/*!***********************************************!*\
  !*** ./context/operaciones/operacionState.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _operacionContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operacionContext */ "./context/operaciones/operacionContext.js");
/* harmony import */ var _operacionReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operacionReducer */ "./context/operaciones/operacionReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\context\\operaciones\\operacionState.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






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

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_operacionReducer__WEBPACK_IMPORTED_MODULE_5__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // serie de funciones para el CRUD


  var mostrarFormulario = function mostrarFormulario() {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_6__["FORMULARIO_OPERACION"]
    });
  }; // obtener los operaciones


  var obtenerOperaciones = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var resultado, alerta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_7__["default"].get('/api/operaciones');

            case 3:
              resultado = _context.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_6__["OBTENER_OPERACIONES"],
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
                type: _types__WEBPACK_IMPORTED_MODULE_6__["OPERACION_ERROR"],
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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(operacion) {
      var resultado, alerta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_7__["default"].post('/api/operaciones', operacion);

            case 3:
              resultado = _context2.sent;
              console.log(resultado); // insertar el operacion en el state

              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_6__["AGREGAR_OPERACION"],
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
                type: _types__WEBPACK_IMPORTED_MODULE_6__["OPERACION_ERROR"],
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
      type: _types__WEBPACK_IMPORTED_MODULE_6__["VALIDAR_FORMULARIO"]
    });
  }; // selecciona el operacion que el usuario dio click


  var operacionActual = function operacionActual(operacionId) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_6__["OPERACION_ACTUAL"],
      payload: operacionId
    });
  }; // elimina un operacion


  var eliminarOperacion = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(operacionId) {
      var alerta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_7__["default"]["delete"]("/api/operaciones/".concat(operacionId));

            case 3:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_6__["ELIMINAR_OPERACION"],
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
                type: _types__WEBPACK_IMPORTED_MODULE_6__["OPERACION_ERROR"],
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
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(operacion) {
      var resultado;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_7__["default"].put("/api/operaciones/".concat(operacion._id), operacion);

            case 3:
              resultado = _context4.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_6__["ACTUALIZAR_OPERACION"],
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
      type: _types__WEBPACK_IMPORTED_MODULE_6__["LIMPIAR_OPERACION"]
    });
  };

  var calcularTotalIngresos = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_6__["TOTAL_INGRESOS"]
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
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_6__["TOTAL_EGRESOS"]
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
    var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_6__["CALCULAR_BALANCE"]
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
    var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
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
    var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(categoria) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return obtenerOperaciones();

            case 2:
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_6__["OPERACIONES_CATEGORIAS"],
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

  return __jsx(_operacionContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    }, "calcularBalance", calcularBalance),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblN0YXRlLmpzIl0sIm5hbWVzIjpbIk9wZXJhY2lvblN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJvcGVyYWNpb25lcyIsIm51ZXZhT3BlcmFjaW9uIiwiZXJyb3Jmb3JtdWxhcmlvIiwib3BlcmFjaW9uIiwibWVuc2FqZSIsImJhbGFuY2UiLCJpbmdyZXNvcyIsImVncmVzb3MiLCJ1c2VSZWR1Y2VyIiwib3BlcmFjaW9uUmVkdWNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJtb3N0cmFyRm9ybXVsYXJpbyIsInR5cGUiLCJGT1JNVUxBUklPX09QRVJBQ0lPTiIsIm9idGVuZXJPcGVyYWNpb25lcyIsImNsaWVudGVBeGlvcyIsImdldCIsInJlc3VsdGFkbyIsIk9CVEVORVJfT1BFUkFDSU9ORVMiLCJwYXlsb2FkIiwiZGF0YSIsImFsZXJ0YSIsIm1zZyIsImNhdGVnb3JpYSIsIk9QRVJBQ0lPTl9FUlJPUiIsImFncmVnYXJPcGVyYWNpb24iLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIkFHUkVHQVJfT1BFUkFDSU9OIiwibW9zdHJhckVycm9yIiwiVkFMSURBUl9GT1JNVUxBUklPIiwib3BlcmFjaW9uQWN0dWFsIiwib3BlcmFjaW9uSWQiLCJPUEVSQUNJT05fQUNUVUFMIiwiZWxpbWluYXJPcGVyYWNpb24iLCJFTElNSU5BUl9PUEVSQUNJT04iLCJhY3R1YWxpemFyT3BlcmFjaW9uIiwicHV0IiwiX2lkIiwiQUNUVUFMSVpBUl9PUEVSQUNJT04iLCJsaW1waWFyT3BlcmFjaW9uIiwiTElNUElBUl9PUEVSQUNJT04iLCJjYWxjdWxhclRvdGFsSW5ncmVzb3MiLCJUT1RBTF9JTkdSRVNPUyIsImNhbGN1bGFyVG90YWxFZ3Jlc29zIiwiVE9UQUxfRUdSRVNPUyIsImNhbGN1bGFyQmFsYW5jZSIsIkNBTENVTEFSX0JBTEFOQ0UiLCJjYWxjdWxhclRvdGFsZXMiLCJvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzIiwiT1BFUkFDSU9ORVNfQ0FURUdPUklBUyIsImZvcm11bGFyaW8iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFpQkE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFFNUIsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxlQUFXLEVBQUcsRUFERztBQUVqQkMsa0JBQWMsRUFBRyxLQUZBO0FBR2pCQyxtQkFBZSxFQUFFLEtBSEE7QUFJakJDLGFBQVMsRUFBRSxJQUpNO0FBS2pCQyxXQUFPLEVBQUUsSUFMUTtBQU1qQkMsV0FBTyxFQUFFLENBTlE7QUFPakJDLFlBQVEsRUFBRSxDQVBPO0FBUWpCQyxXQUFPLEVBQUU7QUFSUSxHQUFyQixDQUY0QixDQWE1Qjs7QUFiNEIsb0JBY0ZDLHdEQUFVLENBQUNDLHlEQUFELEVBQW1CVixZQUFuQixDQWRSO0FBQUEsTUFjckJXLEtBZHFCO0FBQUEsTUFjZEMsUUFkYyxtQkFnQjVCOzs7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUJELFlBQVEsQ0FBQztBQUNMRSxVQUFJLEVBQUVDLDJEQUFvQkE7QUFEckIsS0FBRCxDQUFSO0FBR0gsR0FKRCxDQWpCNEIsQ0F1QjVCOzs7QUFDQSxNQUFNQyxrQkFBa0I7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUtDLHFEQUFZLENBQUNDLEdBQWIsQ0FBaUIsa0JBQWpCLENBRkw7O0FBQUE7QUFFYkMsdUJBRmE7QUFJbkJQLHNCQUFRLENBQUM7QUFDTEUsb0JBQUksRUFBRU0sMERBREQ7QUFFTEMsdUJBQU8sRUFBRUYsU0FBUyxDQUFDRyxJQUFWLENBQWVyQjtBQUZuQixlQUFELENBQVI7QUFKbUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTYnNCLG9CQVRh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QUFlREUseUJBQW1CLEVBQW5CQSxtQkFmQztBQWdCRE0sMkJBQXFCLEVBQXJCQSxxQkFoQkM7QUFpQkRFLDBCQUFvQixFQUFwQkEsb0JBakJDO0FBa0JERSxxQkFBZSxFQUFmQSxlQWxCQztBQW1CREcsa0NBQTRCLEVBQTVCQTtBQW5CQywwQkFvQkRILGVBcEJDLENBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXdCS2xELEtBQUssQ0FBQ3dELFFBeEJYLENBREo7QUE0QkgsQ0EvTEQ7O0dBQU16RCxjOztLQUFBQSxjO0FBaU1TQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy45NmU0OTA1YTkxOThkMGUyNTkzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgb3BlcmFjaW9uQ29udGV4dCBmcm9tICcuL29wZXJhY2lvbkNvbnRleHQnO1xyXG5pbXBvcnQgb3BlcmFjaW9uUmVkdWNlciBmcm9tICcuL29wZXJhY2lvblJlZHVjZXInO1xyXG5pbXBvcnQge1xyXG4gICAgRk9STVVMQVJJT19PUEVSQUNJT04sXHJcbiAgICBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgQUdSRUdBUl9PUEVSQUNJT04sXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBWQUxJREFSX0ZPUk1VTEFSSU8sXHJcbiAgICBPUEVSQUNJT05fQUNUVUFMLFxyXG4gICAgRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgTElNUElBUl9TVEFURSxcclxuICAgIEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgTElNUElBUl9PUEVSQUNJT04sXHJcbiAgICBDQUxDVUxBUl9CQUxBTkNFLFxyXG4gICAgT1BFUkFDSU9ORVNfQ0FURUdPUklBUyxcclxuICAgIFRPVEFMX0lOR1JFU09TLFxyXG4gICAgVE9UQUxfRUdSRVNPU1xyXG59IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi4vLi4vY29uZmlnL2F4aW9zJztcclxuXHJcbmNvbnN0IE9wZXJhY2lvblN0YXRlID0gcHJvcHMgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBvcGVyYWNpb25lcyA6IFtdLFxyXG4gICAgICAgIG51ZXZhT3BlcmFjaW9uIDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBmYWxzZSxcclxuICAgICAgICBvcGVyYWNpb246IG51bGwsXHJcbiAgICAgICAgbWVuc2FqZTogbnVsbCxcclxuICAgICAgICBiYWxhbmNlOiAwLFxyXG4gICAgICAgIGluZ3Jlc29zOiAwLFxyXG4gICAgICAgIGVncmVzb3M6IDBcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXNwYXRjaCBwYXJhIGVqZWN1dGFyIGxhcyBhY2Npb25lc1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG9wZXJhY2lvblJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gc2VyaWUgZGUgZnVuY2lvbmVzIHBhcmEgZWwgQ1JVRFxyXG4gICAgY29uc3QgbW9zdHJhckZvcm11bGFyaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBGT1JNVUxBUklPX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsb3Mgb3BlcmFjaW9uZXNcclxuICAgIGNvbnN0IG9idGVuZXJPcGVyYWNpb25lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL29wZXJhY2lvbmVzJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBhZ3JlZ2FyIG51ZXZhIG9wZXJhY2lvblxyXG4gICAgY29uc3QgYWdyZWdhck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbiA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL29wZXJhY2lvbmVzJywgb3BlcmFjaW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0YWRvKTtcclxuICAgICAgICAgICAgLy8gaW5zZXJ0YXIgZWwgb3BlcmFjaW9uIGVuIGVsIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHZhbGlkYXIgZWwgZm9ybXVsYXJpbyBwb3IgZXJyb3Jlc1xyXG4gICAgY29uc3QgbW9zdHJhckVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVkFMSURBUl9GT1JNVUxBUklPXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY2Npb25hIGVsIG9wZXJhY2lvbiBxdWUgZWwgdXN1YXJpbyBkaW8gY2xpY2tcclxuICAgIGNvbnN0IG9wZXJhY2lvbkFjdHVhbCA9IG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIHVuIG9wZXJhY2lvblxyXG4gICAgY29uc3QgZWxpbWluYXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb25JZCA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgY2xpZW50ZUF4aW9zLmRlbGV0ZShgL2FwaS9vcGVyYWNpb25lcy8ke29wZXJhY2lvbklkfWApO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBvcGVyYWNpb25JZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0YSBvIG1vZGlmaWNhIHVuYSBvcGVyYWNpb25cclxuICAgIGNvbnN0IGFjdHVhbGl6YXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb24gPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wdXQoYC9hcGkvb3BlcmFjaW9uZXMvJHtvcGVyYWNpb24uX2lkfWAsIG9wZXJhY2lvbik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIGxhIG9wZXJhY2lvbiBzZWxlY2Npb25hZGFcclxuICAgIGNvbnN0IGxpbXBpYXJPcGVyYWNpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbEluZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfSU5HUkVTT1NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxFZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfRUdSRVNPU1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNhbGN1bGFyIGVsIGJhbGFuY2U6IHRvdGFsIGluZ3Jlc29zIC0gdG90YWwgZWdyZXNvc1xyXG4gICAgY29uc3QgY2FsY3VsYXJCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0FMQ1VMQVJfQkFMQU5DRVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG5cclxuICAgICAgICBjYWxjdWxhclRvdGFsSW5ncmVzb3MoKTtcclxuICAgICAgICBjYWxjdWxhclRvdGFsRWdyZXNvcygpO1xyXG4gICAgICAgIGNhbGN1bGFyQmFsYW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMgPSBhc3luYyBjYXRlZ29yaWEgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVMsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGNhdGVnb3JpYVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxvcGVyYWNpb25Db250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMsXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiBzdGF0ZS5mb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBzdGF0ZS5lcnJvcmZvcm11bGFyaW8sXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb246IHN0YXRlLm9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHN0YXRlLm1lbnNhamUsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiBzdGF0ZS5iYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgaW5ncmVzb3M6IHN0YXRlLmluZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgZWdyZXNvczogc3RhdGUuZWdyZXNvcyxcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJGb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJFcnJvcixcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbkFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyT3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsaXphck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxJbmdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxFZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXJCYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyQmFsYW5jZVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvb3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmFjaW9uU3RhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==