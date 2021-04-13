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
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\Programaci\xF3n\\Proyectos\\AlkemyReactChallenge\\cliente\\context\\operaciones\\operacionState.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var OperacionState = function OperacionState(props) {
  _s();

  var initialState = {
    operaciones: [],
    operacion: [{}],
    mensaje: {},
    balance: 0,
    ingresos: 0,
    egresos: 0
  };
  var timeOut = 2000; // dispatch para ejecutar las acciones

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_operacionReducer__WEBPACK_IMPORTED_MODULE_4__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // obtener los operaciones


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
      var resultado, alerta, _alerta;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post('/api/operaciones', operacion);

            case 3:
              resultado = _context2.sent;
              alerta = {
                msg: 'Operación agregada exitosamente',
                categoria: 'alerta-ok'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_EXITOSA"],
                payload: alerta
              }); // insertar el operacion en el state

              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["AGREGAR_OPERACION"],
                payload: resultado.data
              });
              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              _alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_ERROR"],
                payload: _alerta
              });

            case 13:
              // Limpia la alerta después de 3 segundos
              setTimeout(function () {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["OCULTAR_ALERTA"]
                });
              }, timeOut);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function agregarOperacion(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // selecciona el operacion que el usuario dio click


  var operacionActual = function operacionActual(operacionId) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_ACTUAL"],
      payload: operacionId
    });
  }; // edita o modifica una operacion


  var actualizarOperacion = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(operacion) {
      var resultado, alerta, _alerta2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].put("/api/operaciones/".concat(operacion._id), operacion);

            case 3:
              resultado = _context3.sent;
              alerta = {
                msg: 'Operación editada exitosamente',
                categoria: 'alerta-ok'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_EXITOSA"],
                payload: alerta
              });
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ACTUALIZAR_OPERACION"],
                payload: resultado.data.operacion
              });
              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              _alerta2 = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_ERROR"],
                payload: _alerta2
              });

            case 13:
              // Limpia la alerta después de 3 segundos
              setTimeout(function () {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["OCULTAR_ALERTA"]
                });
              }, timeOut);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    return function actualizarOperacion(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // elimina un operacion


  var eliminarOperacion = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(operacionId) {
      var alerta, _alerta3;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"]["delete"]("/api/operaciones/".concat(operacionId));

            case 3:
              alerta = {
                msg: 'Operación eliminada exitosamente',
                categoria: 'alerta-ok'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_EXITOSA"],
                payload: alerta
              });
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ELIMINAR_OPERACION"],
                payload: operacionId
              });
              _context4.next = 12;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              _alerta3 = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OPERACION_ERROR"],
                payload: _alerta3
              });

            case 12:
              // Limpia la alerta después de 3 segundos
              setTimeout(function () {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["OCULTAR_ALERTA"]
                });
              }, timeOut);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    return function eliminarOperacion(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

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
      operacion: state.operacion,
      mensaje: state.mensaje,
      balance: state.balance,
      ingresos: state.ingresos,
      egresos: state.egresos,
      obtenerOperaciones: obtenerOperaciones,
      agregarOperacion: agregarOperacion,
      operacionActual: operacionActual,
      actualizarOperacion: actualizarOperacion,
      eliminarOperacion: eliminarOperacion,
      calcularTotalIngresos: calcularTotalIngresos,
      calcularTotalEgresos: calcularTotalEgresos,
      calcularBalance: calcularBalance,
      obtenerOperacionesCategorias: obtenerOperacionesCategorias,
      calcularTotales: calcularTotales
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblN0YXRlLmpzIl0sIm5hbWVzIjpbIk9wZXJhY2lvblN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJvcGVyYWNpb25lcyIsIm9wZXJhY2lvbiIsIm1lbnNhamUiLCJiYWxhbmNlIiwiaW5ncmVzb3MiLCJlZ3Jlc29zIiwidGltZU91dCIsInVzZVJlZHVjZXIiLCJvcGVyYWNpb25SZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsIm9idGVuZXJPcGVyYWNpb25lcyIsImNsaWVudGVBeGlvcyIsImdldCIsInJlc3VsdGFkbyIsInR5cGUiLCJPQlRFTkVSX09QRVJBQ0lPTkVTIiwicGF5bG9hZCIsImRhdGEiLCJhbGVydGEiLCJtc2ciLCJjYXRlZ29yaWEiLCJPUEVSQUNJT05fRVJST1IiLCJhZ3JlZ2FyT3BlcmFjaW9uIiwicG9zdCIsIk9QRVJBQ0lPTl9FWElUT1NBIiwiQUdSRUdBUl9PUEVSQUNJT04iLCJzZXRUaW1lb3V0IiwiT0NVTFRBUl9BTEVSVEEiLCJvcGVyYWNpb25BY3R1YWwiLCJvcGVyYWNpb25JZCIsIk9QRVJBQ0lPTl9BQ1RVQUwiLCJhY3R1YWxpemFyT3BlcmFjaW9uIiwicHV0IiwiX2lkIiwiQUNUVUFMSVpBUl9PUEVSQUNJT04iLCJlbGltaW5hck9wZXJhY2lvbiIsIkVMSU1JTkFSX09QRVJBQ0lPTiIsImNhbGN1bGFyVG90YWxJbmdyZXNvcyIsIlRPVEFMX0lOR1JFU09TIiwiY2FsY3VsYXJUb3RhbEVncmVzb3MiLCJUT1RBTF9FR1JFU09TIiwiY2FsY3VsYXJCYWxhbmNlIiwiQ0FMQ1VMQVJfQkFMQU5DRSIsImNhbGN1bGFyVG90YWxlcyIsIm9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMiLCJPUEVSQUNJT05FU19DQVRFR09SSUFTIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FB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aEI7QUFFSEMsZUFBUyxFQUFFUSxLQUFLLENBQUNSLFNBRmQ7QUFHSEMsYUFBTyxFQUFFTyxLQUFLLENBQUNQLE9BSFo7QUFJSEMsYUFBTyxFQUFFTSxLQUFLLENBQUNOLE9BSlo7QUFLSEMsY0FBUSxFQUFFSyxLQUFLLENBQUNMLFFBTGI7QUFNSEMsYUFBTyxFQUFFSSxLQUFLLENBQUNKLE9BTlo7QUFPSE0sd0JBQWtCLEVBQWxCQSxrQkFQRztBQVFIWSxzQkFBZ0IsRUFBaEJBLGdCQVJHO0FBU0hNLHFCQUFlLEVBQWZBLGVBVEc7QUFVSEcseUJBQW1CLEVBQW5CQSxtQkFWRztBQVdISSx1QkFBaUIsRUFBakJBLGlCQVhHO0FBWUhFLDJCQUFxQixFQUFyQkEscUJBWkc7QUFhSEUsMEJBQW9CLEVBQXBCQSxvQkFiRztBQWNIRSxxQkFBZSxFQUFmQSxlQWRHO0FBZUhHLGtDQUE0QixFQUE1QkEsNEJBZkc7QUFnQkhELHFCQUFlLEVBQWZBO0FBaEJHLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW9CSzlDLEtBQUssQ0FBQ2lELFFBcEJYLENBREo7QUF3QkgsQ0E5TkQ7O0dBQU1sRCxjOztLQUFBQSxjO0FBZ09TQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy40YjVhMDBmMjRlOGIyZmYyYjY4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgb3BlcmFjaW9uQ29udGV4dCBmcm9tICcuL29wZXJhY2lvbkNvbnRleHQnO1xyXG5pbXBvcnQgb3BlcmFjaW9uUmVkdWNlciBmcm9tICcuL29wZXJhY2lvblJlZHVjZXInO1xyXG5pbXBvcnQge1xyXG4gICAgT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgIEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgT1BFUkFDSU9OX0VYSVRPU0EsXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBPQ1VMVEFSX0FMRVJUQSxcclxuICAgIE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICBBQ1RVQUxJWkFSX09QRVJBQ0lPTixcclxuICAgIENBTENVTEFSX0JBTEFOQ0UsXHJcbiAgICBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgVE9UQUxfSU5HUkVTT1MsXHJcbiAgICBUT1RBTF9FR1JFU09TXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xyXG5cclxuY29uc3QgT3BlcmFjaW9uU3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIG9wZXJhY2lvbmVzIDogW10sXHJcbiAgICAgICAgb3BlcmFjaW9uOiBbe31dLFxyXG4gICAgICAgIG1lbnNhamU6IHt9LFxyXG4gICAgICAgIGJhbGFuY2U6IDAsXHJcbiAgICAgICAgaW5ncmVzb3M6IDAsXHJcbiAgICAgICAgZWdyZXNvczogMFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbWVPdXQgPSAyMDAwO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoIHBhcmEgZWplY3V0YXIgbGFzIGFjY2lvbmVzXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIob3BlcmFjaW9uUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyBvYnRlbmVyIGxvcyBvcGVyYWNpb25lc1xyXG4gICAgY29uc3Qgb2J0ZW5lck9wZXJhY2lvbmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvb3BlcmFjaW9uZXMnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YS5vcGVyYWNpb25lc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGFncmVnYXIgbnVldmEgb3BlcmFjaW9uXHJcbiAgICBjb25zdCBhZ3JlZ2FyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvb3BlcmFjaW9uZXMnLCBvcGVyYWNpb24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnT3BlcmFjacOzbiBhZ3JlZ2FkYSBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVhJVE9TQSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gaW5zZXJ0YXIgZWwgb3BlcmFjaW9uIGVuIGVsIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIHRpbWVPdXQpOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY2Npb25hIGVsIG9wZXJhY2lvbiBxdWUgZWwgdXN1YXJpbyBkaW8gY2xpY2tcclxuICAgIGNvbnN0IG9wZXJhY2lvbkFjdHVhbCA9IG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0YSBvIG1vZGlmaWNhIHVuYSBvcGVyYWNpb25cclxuICAgIGNvbnN0IGFjdHVhbGl6YXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb24gPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wdXQoYC9hcGkvb3BlcmFjaW9uZXMvJHtvcGVyYWNpb24uX2lkfWAsIG9wZXJhY2lvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdPcGVyYWNpw7NuIGVkaXRhZGEgZXhpdG9zYW1lbnRlJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VYSVRPU0EsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCB0aW1lT3V0KTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWxpbWluYSB1biBvcGVyYWNpb25cclxuICAgIGNvbnN0IGVsaW1pbmFyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uSWQgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBjbGllbnRlQXhpb3MuZGVsZXRlKGAvYXBpL29wZXJhY2lvbmVzLyR7b3BlcmFjaW9uSWR9YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdPcGVyYWNpw7NuIGVsaW1pbmFkYSBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVhJVE9TQSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogb3BlcmFjaW9uSWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCB0aW1lT3V0KTsgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbEluZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfSU5HUkVTT1NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxFZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfRUdSRVNPU1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsY3VsYXIgZWwgYmFsYW5jZTogdG90YWwgaW5ncmVzb3MgLSB0b3RhbCBlZ3Jlc29zXHJcbiAgICBjb25zdCBjYWxjdWxhckJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBDQUxDVUxBUl9CQUxBTkNFXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxjdWxhclRvdGFsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgb2J0ZW5lck9wZXJhY2lvbmVzKCk7XHJcbiAgICAgICAgY2FsY3VsYXJUb3RhbEluZ3Jlc29zKCk7XHJcbiAgICAgICAgY2FsY3VsYXJUb3RhbEVncmVzb3MoKTtcclxuICAgICAgICBjYWxjdWxhckJhbGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzID0gYXN5bmMgY2F0ZWdvcmlhID0+IHtcclxuICAgICAgICBhd2FpdCBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBjYXRlZ29yaWFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG9wZXJhY2lvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcyxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogc3RhdGUub3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IHN0YXRlLmJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICBpbmdyZXNvczogc3RhdGUuaW5ncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBlZ3Jlc29zOiBzdGF0ZS5lZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbkFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGFjdHVhbGl6YXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxJbmdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxFZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXJCYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxlc1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvb3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmFjaW9uU3RhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==