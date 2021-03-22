webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./context/operaciones/operacionReducer.js":
/*!*************************************************!*\
  !*** ./context/operaciones/operacionReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./types/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_2__["FORMULARIO_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        formulario: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["OBTENER_OPERACIONES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["AGREGAR_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.operaciones), [action.payload]),
        formulario: false,
        errorformulario: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["VALIDAR_FORMULARIO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        errorformulario: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["OPERACION_ACTUAL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operacion: state.operaciones.filter(function (operacion) {
          return operacion._id === action.payload;
        })
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["ELIMINAR_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: state.operaciones.filter(function (operacion) {
          return operacion._id !== action.payload;
        }),
        operacion: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["OPERACION_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["ACTUALIZAR_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: state.operaciones.map(function (operacion) {
          return operacion._id === action.payload._id ? action.payload : operacion;
        })
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["LIMPIAR_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operacion: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["CALCULAR_BALANCE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        balance: state.operaciones.map(function (operacion) {
          return operacion.tipo === 'Ingreso' || operacion.tipo === 'ingreso' ? state.balance += operacion.monto : state.balance -= operacion.monto;
        })
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["OPERACIONES_CATEGORIAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: state.operaciones.filter(function (operacion) {
          return operacion.categoria === action.payload;
        })
      });

    default:
      return state;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblJlZHVjZXIuanMiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiRk9STVVMQVJJT19PUEVSQUNJT04iLCJmb3JtdWxhcmlvIiwiT0JURU5FUl9PUEVSQUNJT05FUyIsIm9wZXJhY2lvbmVzIiwicGF5bG9hZCIsIkFHUkVHQVJfT1BFUkFDSU9OIiwiZXJyb3Jmb3JtdWxhcmlvIiwiVkFMSURBUl9GT1JNVUxBUklPIiwiT1BFUkFDSU9OX0FDVFVBTCIsIm9wZXJhY2lvbiIsImZpbHRlciIsIl9pZCIsIkVMSU1JTkFSX09QRVJBQ0lPTiIsIk9QRVJBQ0lPTl9FUlJPUiIsIm1lbnNhamUiLCJBQ1RVQUxJWkFSX09QRVJBQ0lPTiIsIm1hcCIsIkxJTVBJQVJfT1BFUkFDSU9OIiwiQ0FMQ1VMQVJfQkFMQU5DRSIsImJhbGFuY2UiLCJ0aXBvIiwibW9udG8iLCJPUEVSQUNJT05FU19DQVRFR09SSUFTIiwiY2F0ZWdvcmlhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWNlLHlFQUFDQSxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDOUIsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0MsMkRBQUw7QUFDSSw2Q0FDT0gsS0FEUDtBQUVJSSxrQkFBVSxFQUFFO0FBRmhCOztBQUlKLFNBQUtDLDBEQUFMO0FBQ0ksNkNBQ09MLEtBRFA7QUFFSU0sbUJBQVcsRUFBRUwsTUFBTSxDQUFDTTtBQUZ4Qjs7QUFJSixTQUFLQyx3REFBTDtBQUNJLDZDQUNPUixLQURQO0FBRUlNLG1CQUFXLHlHQUFNTixLQUFLLENBQUNNLFdBQVosSUFBeUJMLE1BQU0sQ0FBQ00sT0FBaEMsRUFGZjtBQUdJSCxrQkFBVSxFQUFFLEtBSGhCO0FBSUlLLHVCQUFlLEVBQUU7QUFKckI7O0FBTUosU0FBS0MseURBQUw7QUFDSSw2Q0FDT1YsS0FEUDtBQUVJUyx1QkFBZSxFQUFFO0FBRnJCOztBQUlKLFNBQUtFLHVEQUFMO0FBQ0ksNkNBQ09YLEtBRFA7QUFFSVksaUJBQVMsRUFBRVosS0FBSyxDQUFDTSxXQUFOLENBQWtCTyxNQUFsQixDQUF5QixVQUFBRCxTQUFTO0FBQUEsaUJBQUlBLFNBQVMsQ0FBQ0UsR0FBVixLQUNqRGIsTUFBTSxDQUFDTSxPQURzQztBQUFBLFNBQWxDO0FBRmY7O0FBS0osU0FBS1EseURBQUw7QUFDSSw2Q0FDT2YsS0FEUDtBQUVJTSxtQkFBVyxFQUFFTixLQUFLLENBQUNNLFdBQU4sQ0FBa0JPLE1BQWxCLENBQXlCLFVBQUFELFNBQVM7QUFBQSxpQkFBSUEsU0FBUyxDQUFDRSxHQUFWLEtBQ25EYixNQUFNLENBQUNNLE9BRHdDO0FBQUEsU0FBbEMsQ0FGakI7QUFJSUssaUJBQVMsRUFBRTtBQUpmOztBQU1KLFNBQUtJLHNEQUFMO0FBQ0ksNkNBQ09oQixLQURQO0FBRUlpQixlQUFPLEVBQUVoQixNQUFNLENBQUNNO0FBRnBCOztBQUlKLFNBQUtXLDJEQUFMO0FBQ0ksNkNBQ09sQixLQURQO0FBRUlNLG1CQUFXLEVBQUVOLEtBQUssQ0FBQ00sV0FBTixDQUFrQmEsR0FBbEIsQ0FBc0IsVUFBQVAsU0FBUztBQUFBLGlCQUFJQSxTQUFTLENBQUNFLEdBQVYsS0FBa0JiLE1BQU0sQ0FBQ00sT0FBUCxDQUFlTyxHQUFqQyxHQUM5Q2IsTUFBTSxDQUFDTSxPQUR1QyxHQUM3QkssU0FEeUI7QUFBQSxTQUEvQjtBQUZqQjs7QUFLSixTQUFLUSx3REFBTDtBQUNJLDZDQUNPcEIsS0FEUDtBQUVJWSxpQkFBUyxFQUFFO0FBRmY7O0FBSUosU0FBS1MsdURBQUw7QUFDSSw2Q0FDT3JCLEtBRFA7QUFFSXNCLGVBQU8sRUFBRXRCLEtBQUssQ0FBQ00sV0FBTixDQUFrQmEsR0FBbEIsQ0FBc0IsVUFBQVAsU0FBUztBQUFBLGlCQUNuQ0EsU0FBUyxDQUFDVyxJQUFWLEtBQW1CLFNBQW5CLElBQWdDWCxTQUFTLENBQUNXLElBQVYsS0FBbUIsU0FBcEQsR0FDTXZCLEtBQUssQ0FBQ3NCLE9BQU4sSUFBaUJWLFNBQVMsQ0FBQ1ksS0FEakMsR0FFTXhCLEtBQUssQ0FBQ3NCLE9BQU4sSUFBaUJWLFNBQVMsQ0FBQ1ksS0FIRztBQUFBLFNBQS9CO0FBRmI7O0FBVUosU0FBS0MsNkRBQUw7QUFDSSw2Q0FDT3pCLEtBRFA7QUFFSU0sbUJBQVcsRUFBRU4sS0FBSyxDQUFDTSxXQUFOLENBQWtCTyxNQUFsQixDQUF5QixVQUFBRCxTQUFTO0FBQUEsaUJBQUlBLFNBQVMsQ0FBQ2MsU0FBVixLQUNuRHpCLE1BQU0sQ0FBQ00sT0FEd0M7QUFBQSxTQUFsQztBQUZqQjs7QUFNSjtBQUNJLGFBQU9QLEtBQVA7QUF2RVI7QUF5RUgsQ0ExRUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZmMzMmY3OGQ2N2VkMTI0ZjBkODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBGT1JNVUxBUklPX09QRVJBQ0lPTixcclxuICAgIE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgIE9QRVJBQ0lPTl9FUlJPUixcclxuICAgIFZBTElEQVJfRk9STVVMQVJJTyxcclxuICAgIE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICBBQ1RVQUxJWkFSX09QRVJBQ0lPTixcclxuICAgIExJTVBJQVJfT1BFUkFDSU9OLFxyXG4gICAgQ0FMQ1VMQVJfQkFMQU5DRSxcclxuICAgIE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVNcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBGT1JNVUxBUklPX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPQlRFTkVSX09QRVJBQ0lPTkVTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUdSRUdBUl9PUEVSQUNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBbLi4uc3RhdGUub3BlcmFjaW9uZXMsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgICAgICAgICAgIGZvcm11bGFyaW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBWQUxJREFSX0ZPUk1VTEFSSU86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPUEVSQUNJT05fQUNUVUFMOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb246IHN0YXRlLm9wZXJhY2lvbmVzLmZpbHRlcihvcGVyYWNpb24gPT4gb3BlcmFjaW9uLl9pZCA9PT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFTElNSU5BUl9PUEVSQUNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcy5maWx0ZXIob3BlcmFjaW9uID0+IG9wZXJhY2lvbi5faWQgIT09XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZCksXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb246IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT1BFUkFDSU9OX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBQ1RVQUxJWkFSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLm1hcChvcGVyYWNpb24gPT4gb3BlcmFjaW9uLl9pZCA9PT0gYWN0aW9uLnBheWxvYWQuX2lkXHJcbiAgICAgICAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkIDogb3BlcmFjaW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMSU1QSUFSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENBTENVTEFSX0JBTEFOQ0U6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IHN0YXRlLm9wZXJhY2lvbmVzLm1hcChvcGVyYWNpb24gPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgKG9wZXJhY2lvbi50aXBvID09PSAnSW5ncmVzbycgfHwgb3BlcmFjaW9uLnRpcG8gPT09ICdpbmdyZXNvJykgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3RhdGUuYmFsYW5jZSArPSBvcGVyYWNpb24ubW9udG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5iYWxhbmNlIC09IG9wZXJhY2lvbi5tb250b1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPUEVSQUNJT05FU19DQVRFR09SSUFTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMuZmlsdGVyKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uY2F0ZWdvcmlhID09PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==