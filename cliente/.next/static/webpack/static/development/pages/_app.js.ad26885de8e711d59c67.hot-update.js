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
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACIONES_CATEGORIAS"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblN0YXRlLmpzIl0sIm5hbWVzIjpbIk9wZXJhY2lvblN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJvcGVyYWNpb25lcyIsIm51ZXZhT3BlcmFjaW9uIiwiZXJyb3Jmb3JtdWxhcmlvIiwib3BlcmFjaW9uIiwibWVuc2FqZSIsImJhbGFuY2UiLCJpbmdyZXNvcyIsImVncmVzb3MiLCJ1c2VSZWR1Y2VyIiwib3BlcmFjaW9uUmVkdWNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJtb3N0cmFyRm9ybXVsYXJpbyIsInR5cGUiLCJGT1JNVUxBUklPX09QRVJBQ0lPTiIsIm9idGVuZXJPcGVyYWNpb25lcyIsImNsaWVudGVBeGlvcyIsImdldCIsInJlc3VsdGFkbyIsIk9CVEVORVJfT1BFUkFDSU9ORVMiLCJwYXlsb2FkIiwiZGF0YSIsImFsZXJ0YSIsIm1zZyIsImNhdGVnb3JpYSIsIk9QRVJBQ0lPTl9FUlJPUiIsImFncmVnYXJPcGVyYWNpb24iLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIkFHUkVHQVJfT1BFUkFDSU9OIiwibW9zdHJhckVycm9yIiwiVkFMSURBUl9GT1JNVUxBUklPIiwib3BlcmFjaW9uQWN0dWFsIiwib3BlcmFjaW9uSWQiLCJPUEVSQUNJT05fQUNUVUFMIiwiZWxpbWluYXJPcGVyYWNpb24iLCJFTElNSU5BUl9PUEVSQUNJT04iLCJhY3R1YWxpemFyT3BlcmFjaW9uIiwicHV0IiwiX2lkIiwiQUNUVUFMSVpBUl9PUEVSQUNJT04iLCJsaW1waWFyT3BlcmFjaW9uIiwiTElNUElBUl9PUEVSQUNJT04iLCJjYWxjdWxhclRvdGFsSW5ncmVzb3MiLCJUT1RBTF9JTkdSRVNPUyIsImNhbGN1bGFyVG90YWxFZ3Jlc29zIiwiVE9UQUxfRUdSRVNPUyIsImNhbGN1bGFyQmFsYW5jZSIsIkNBTENVTEFSX0JBTEFOQ0UiLCJvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFz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VyxFQUFFVSxLQUFLLENBQUNWLFdBRGhCO0FBRUhvRCxnQkFBVSxFQUFFMUMsS0FBSyxDQUFDMEMsVUFGZjtBQUdIbEQscUJBQWUsRUFBRVEsS0FBSyxDQUFDUixlQUhwQjtBQUlIQyxlQUFTLEVBQUVPLEtBQUssQ0FBQ1AsU0FKZDtBQUtIQyxhQUFPLEVBQUVNLEtBQUssQ0FBQ04sT0FMWjtBQU1IQyxhQUFPLEVBQUVLLEtBQUssQ0FBQ0wsT0FOWjtBQU9IQyxjQUFRLEVBQUVJLEtBQUssQ0FBQ0osUUFQYjtBQVFIQyxhQUFPLEVBQUVHLEtBQUssQ0FBQ0gsT0FSWjtBQVNISyx1QkFBaUIsRUFBakJBLGlCQVRHO0FBVUhHLHdCQUFrQixFQUFsQkEsa0JBVkc7QUFXSFcsc0JBQWdCLEVBQWhCQSxnQkFYRztBQVlISyxrQkFBWSxFQUFaQSxZQVpHO0FBYUhFLHFCQUFlLEVBQWZBLGVBYkc7QUFjSEcsdUJBQWlCLEVBQWpCQSxpQkFkRztBQWVIRSx5QkFBbUIsRUFBbkJBLG1CQWZHO0FBZ0JITSwyQkFBcUIsRUFBckJBLHFCQWhCRztBQWlCSEUsMEJBQW9CLEVBQXBCQSxvQkFqQkc7QUFrQkhFLHFCQUFlLEVBQWZBLGVBbEJHO0FBbUJIRSxrQ0FBNEIsRUFBNUJBO0FBbkJHLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXVCS3BELEtBQUssQ0FBQ3VELFFBdkJYLENBREo7QUEyQkgsQ0F0TEQ7O0dBQU14RCxjOztLQUFBQSxjO0FBd0xTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5hZDI2ODg1ZGU4ZTcxMWQ1OWM2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgb3BlcmFjaW9uQ29udGV4dCBmcm9tICcuL29wZXJhY2lvbkNvbnRleHQnO1xyXG5pbXBvcnQgb3BlcmFjaW9uUmVkdWNlciBmcm9tICcuL29wZXJhY2lvblJlZHVjZXInO1xyXG5pbXBvcnQge1xyXG4gICAgRk9STVVMQVJJT19PUEVSQUNJT04sXHJcbiAgICBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgQUdSRUdBUl9PUEVSQUNJT04sXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBWQUxJREFSX0ZPUk1VTEFSSU8sXHJcbiAgICBPUEVSQUNJT05fQUNUVUFMLFxyXG4gICAgRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgTElNUElBUl9TVEFURSxcclxuICAgIEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgTElNUElBUl9PUEVSQUNJT04sXHJcbiAgICBDQUxDVUxBUl9CQUxBTkNFLFxyXG4gICAgT1BFUkFDSU9ORVNfQ0FURUdPUklBUyxcclxuICAgIFRPVEFMX0lOR1JFU09TLFxyXG4gICAgVE9UQUxfRUdSRVNPU1xyXG59IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi4vLi4vY29uZmlnL2F4aW9zJztcclxuXHJcbmNvbnN0IE9wZXJhY2lvblN0YXRlID0gcHJvcHMgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBvcGVyYWNpb25lcyA6IFtdLFxyXG4gICAgICAgIG51ZXZhT3BlcmFjaW9uIDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBmYWxzZSxcclxuICAgICAgICBvcGVyYWNpb246IG51bGwsXHJcbiAgICAgICAgbWVuc2FqZTogbnVsbCxcclxuICAgICAgICBiYWxhbmNlOiAwLFxyXG4gICAgICAgIGluZ3Jlc29zOiAwLFxyXG4gICAgICAgIGVncmVzb3M6IDBcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXNwYXRjaCBwYXJhIGVqZWN1dGFyIGxhcyBhY2Npb25lc1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG9wZXJhY2lvblJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gc2VyaWUgZGUgZnVuY2lvbmVzIHBhcmEgZWwgQ1JVRFxyXG4gICAgY29uc3QgbW9zdHJhckZvcm11bGFyaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBGT1JNVUxBUklPX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsb3Mgb3BlcmFjaW9uZXNcclxuICAgIGNvbnN0IG9idGVuZXJPcGVyYWNpb25lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL29wZXJhY2lvbmVzJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBhZ3JlZ2FyIG51ZXZhIG9wZXJhY2lvblxyXG4gICAgY29uc3QgYWdyZWdhck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbiA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL29wZXJhY2lvbmVzJywgb3BlcmFjaW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0YWRvKTtcclxuICAgICAgICAgICAgLy8gaW5zZXJ0YXIgZWwgb3BlcmFjaW9uIGVuIGVsIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHZhbGlkYXIgZWwgZm9ybXVsYXJpbyBwb3IgZXJyb3Jlc1xyXG4gICAgY29uc3QgbW9zdHJhckVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVkFMSURBUl9GT1JNVUxBUklPXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY2Npb25hIGVsIG9wZXJhY2lvbiBxdWUgZWwgdXN1YXJpbyBkaW8gY2xpY2tcclxuICAgIGNvbnN0IG9wZXJhY2lvbkFjdHVhbCA9IG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIHVuIG9wZXJhY2lvblxyXG4gICAgY29uc3QgZWxpbWluYXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb25JZCA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgY2xpZW50ZUF4aW9zLmRlbGV0ZShgL2FwaS9vcGVyYWNpb25lcy8ke29wZXJhY2lvbklkfWApO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBvcGVyYWNpb25JZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0YSBvIG1vZGlmaWNhIHVuYSBvcGVyYWNpb25cclxuICAgIGNvbnN0IGFjdHVhbGl6YXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb24gPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wdXQoYC9hcGkvb3BlcmFjaW9uZXMvJHtvcGVyYWNpb24uX2lkfWAsIG9wZXJhY2lvbik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIGxhIG9wZXJhY2lvbiBzZWxlY2Npb25hZGFcclxuICAgIGNvbnN0IGxpbXBpYXJPcGVyYWNpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbEluZ3Jlc29zID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfSU5HUkVTT1NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxFZ3Jlc29zID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfRUdSRVNPU1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNhbGN1bGFyIGVsIGJhbGFuY2U6IHRvdGFsIGluZ3Jlc29zIC0gdG90YWwgZWdyZXNvc1xyXG4gICAgY29uc3QgY2FsY3VsYXJCYWxhbmNlID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0FMQ1VMQVJfQkFMQU5DRVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyA9IGFzeW5jIGNhdGVnb3JpYSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgb2J0ZW5lck9wZXJhY2lvbmVzKCk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9ORVNfQ0FURUdPUklBU1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8b3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogc3RhdGUuZm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogc3RhdGUuZXJyb3Jmb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBzdGF0ZS5vcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogc3RhdGUuYmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGluZ3Jlc29zOiBzdGF0ZS5pbmdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGVncmVzb3M6IHN0YXRlLmVncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyRm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJPcGVyYWNpb25lcyxcclxuICAgICAgICAgICAgICAgIGFncmVnYXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25BY3R1YWwsXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGFjdHVhbGl6YXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsSW5ncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsRWdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXNcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L29wZXJhY2lvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhY2lvblN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=