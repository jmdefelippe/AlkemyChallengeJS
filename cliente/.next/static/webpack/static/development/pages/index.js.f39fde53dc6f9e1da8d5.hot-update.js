webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Operacion.js":
/*!*********************************!*\
  !*** ./components/Operacion.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/operaciones/operacionContext */ "./context/operaciones/operacionContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\Programaci\xF3n\\Proyectos\\AlkemyReactChallenge\\cliente\\components\\Operacion.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Operacion = function Operacion(_ref) {
  _s();

  var operacion = _ref.operacion;
  // Next router
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // obtener la función del context de operaciones

  var operacionesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var eliminarOperacion = operacionesContext.eliminarOperacion,
      operacionActual = operacionesContext.operacionActual;
  var _id = operacion._id,
      concepto = operacion.concepto,
      monto = operacion.monto,
      tipo = operacion.tipo,
      categoria = operacion.categoria;
  var fecha = operacion.fecha;
  fecha = operacion.fecha.substring(0, 10); // funcion que redirige de forma programada

  var seleccionarOperacion = function seleccionarOperacion(operacion) {
    operacionActual(operacion);
    router.push('/editaroperacion');
  }; // confirmar si desea eliminarlo


  var confirmarEliminarOperacion = function confirmarEliminarOperacion(id) {
    // preguntar al usuario
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
      title: 'Estás seguro?',
      text: "Una operación que se elimina no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#60A5FA',
      cancelButtonColor: '#000000',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar',
      width: 400,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then(function (result) {
      if (result.isConfirmed) {
        eliminarOperacion(id);
      }
    });
  };

  return __jsx("div", {
    className: "flex flex-wrap my-2 items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "flex-1 font-bold text-blue-500 uppercase text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, tipo), __jsx("p", {
    className: "hidden lg:flex lg:flex-1 text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, categoria), __jsx("p", {
    className: "flex-1 font-bold text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, concepto), __jsx("p", {
    className: "flex-1 font-normal text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "$", monto), __jsx("p", {
    className: "flex-1 italic text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, fecha), __jsx("img", {
    className: "w-6 mr-5 cursor-pointer",
    src: "/editar.png",
    onClick: function onClick() {
      return seleccionarOperacion(_id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("img", {
    className: "w-6 cursor-pointer",
    src: "/eliminar.png" //onClick={() => eliminar() }
    ,
    onClick: function onClick() {
      return confirmarEliminarOperacion(_id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }));
};

_s(Operacion, "/TJTj3E1DKBwk5U+sj4DXSiV9TE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Operacion;
/* harmony default export */ __webpack_exports__["default"] = (Operacion);

var _c;

$RefreshReg$(_c, "Operacion");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZXJhY2lvbi5qcyJdLCJuYW1lcyI6WyJPcGVyYWNpb24iLCJvcGVyYWNpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVyYWNpb25lc0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwib3BlcmFjaW9uQ29udGV4dCIsImVsaW1pbmFyT3BlcmFjaW9uIiwib3BlcmFjaW9uQWN0dWFsIiwiX2lkIiwiY29uY2VwdG8iLCJtb250byIsInRpcG8iLCJjYXRlZ29yaWEiLCJmZWNoYSIsInN1YnN0cmluZyIsInNlbGVjY2lvbmFyT3BlcmFjaW9uIiwicHVzaCIsImNvbmZpcm1hckVsaW1pbmFyT3BlcmFjaW9uIiwiaWQiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ3aWR0aCIsInNob3dDbGFzcyIsInBvcHVwIiwiaGlkZUNsYXNzIiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUVqQztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FIaUMsQ0FLakM7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdDLHdEQUFVLENBQUNDLDZFQUFELENBQXJDO0FBTmlDLE1BT3pCQyxpQkFQeUIsR0FPZUgsa0JBUGYsQ0FPekJHLGlCQVB5QjtBQUFBLE1BT05DLGVBUE0sR0FPZUosa0JBUGYsQ0FPTkksZUFQTTtBQUFBLE1BU3pCQyxHQVR5QixHQVNpQlIsU0FUakIsQ0FTekJRLEdBVHlCO0FBQUEsTUFTcEJDLFFBVG9CLEdBU2lCVCxTQVRqQixDQVNwQlMsUUFUb0I7QUFBQSxNQVNWQyxLQVRVLEdBU2lCVixTQVRqQixDQVNWVSxLQVRVO0FBQUEsTUFTSEMsSUFURyxHQVNpQlgsU0FUakIsQ0FTSFcsSUFURztBQUFBLE1BU0dDLFNBVEgsR0FTaUJaLFNBVGpCLENBU0dZLFNBVEg7QUFBQSxNQVUzQkMsS0FWMkIsR0FVakJiLFNBVmlCLENBVTNCYSxLQVYyQjtBQVlqQ0EsT0FBSyxHQUFHYixTQUFTLENBQUNhLEtBQVYsQ0FBZ0JDLFNBQWhCLENBQTBCLENBQTFCLEVBQTRCLEVBQTVCLENBQVIsQ0FaaUMsQ0FjakM7O0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBZixTQUFTLEVBQUk7QUFDdENPLG1CQUFlLENBQUNQLFNBQUQsQ0FBZjtBQUNBQyxVQUFNLENBQUNlLElBQVAsQ0FBWSxrQkFBWjtBQUNILEdBSEQsQ0FmaUMsQ0FvQmpDOzs7QUFDQSxNQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUFDLEVBQUUsRUFBSTtBQUNyQztBQUNBQyxzREFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsV0FBSyxFQUFFLGVBREQ7QUFFTkMsVUFBSSxFQUFFLG9EQUZBO0FBR05DLFVBQUksRUFBRSxTQUhBO0FBSU5DLHNCQUFnQixFQUFFLElBSlo7QUFLTkMsd0JBQWtCLEVBQUUsU0FMZDtBQU1OQyx1QkFBaUIsRUFBRSxTQU5iO0FBT05DLHVCQUFpQixFQUFFLGVBUGI7QUFRTkMsc0JBQWdCLEVBQUUsVUFSWjtBQVNOQyxXQUFLLEVBQUUsR0FURDtBQVVOQyxlQUFTLEVBQUU7QUFDUEMsYUFBSyxFQUFFO0FBREEsT0FWTDtBQWFOQyxlQUFTLEVBQUU7QUFDUEQsYUFBSyxFQUFFO0FBREE7QUFiTCxLQUFWLEVBaUJHRSxJQWpCSCxDQWlCUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsVUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3BCN0IseUJBQWlCLENBQUNZLEVBQUQsQ0FBakI7QUFDSDtBQUNKLEtBckJEO0FBc0JILEdBeEJEOztBQTBCQSxTQUNJO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQywrREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThFUCxJQUE5RSxDQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsK0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4REMsU0FBOUQsQ0FGSixFQUdJO0FBQUcsYUFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0RILFFBQXRELENBSEosRUFJSTtBQUFHLGFBQVMsRUFBQyx5Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXlEQyxLQUF6RCxDQUpKLEVBS0k7QUFBRyxhQUFTLEVBQUMsb0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtREcsS0FBbkQsQ0FMSixFQU9JO0FBQ0ksYUFBUyxFQUFDLHlCQURkO0FBQ3dDLE9BQUcsRUFBQyxhQUQ1QztBQUVJLFdBQU8sRUFBRztBQUFBLGFBQU1FLG9CQUFvQixDQUFDUCxHQUFELENBQTFCO0FBQUEsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFZSTtBQUNJLGFBQVMsRUFBQyxvQkFEZDtBQUNtQyxPQUFHLEVBQUMsZUFEdkMsQ0FFSTtBQUZKO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTVMsMEJBQTBCLENBQUNULEdBQUQsQ0FBaEM7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixDQURKO0FBcUJILENBcEVEOztHQUFNVCxTO1VBR2FHLHFEOzs7S0FIYkgsUztBQXNFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmYzOWZkZTUzZGM2ZjllMWRhOGQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXLCoH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0JztcclxuXHJcbmNvbnN0IE9wZXJhY2lvbiA9ICh7IG9wZXJhY2lvbiB9KSA9PiB7XHJcblxyXG4gICAgLy8gTmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIG9idGVuZXIgbGEgZnVuY2nDs24gZGVsIGNvbnRleHQgZGUgb3BlcmFjaW9uZXNcclxuICAgIGNvbnN0IG9wZXJhY2lvbmVzQ29udGV4dCA9IHVzZUNvbnRleHQob3BlcmFjaW9uQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGVsaW1pbmFyT3BlcmFjaW9uLCBvcGVyYWNpb25BY3R1YWwsIH0gPSBvcGVyYWNpb25lc0NvbnRleHQ7XHJcblxyXG4gICAgY29uc3QgeyBfaWQsIGNvbmNlcHRvLCBtb250bywgdGlwbywgY2F0ZWdvcmlhIH0gPSBvcGVyYWNpb247XHJcbiAgICBsZXQgeyBmZWNoYSB9ID0gb3BlcmFjaW9uO1xyXG5cclxuICAgIGZlY2hhID0gb3BlcmFjaW9uLmZlY2hhLnN1YnN0cmluZygwLDEwKTtcclxuICAgIFxyXG4gICAgLy8gZnVuY2lvbiBxdWUgcmVkaXJpZ2UgZGUgZm9ybWEgcHJvZ3JhbWFkYVxyXG4gICAgY29uc3Qgc2VsZWNjaW9uYXJPcGVyYWNpb24gPSBvcGVyYWNpb24gPT4ge1xyXG4gICAgICAgIG9wZXJhY2lvbkFjdHVhbChvcGVyYWNpb24pO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZWRpdGFyb3BlcmFjaW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uZmlybWFyIHNpIGRlc2VhIGVsaW1pbmFybG9cclxuICAgIGNvbnN0IGNvbmZpcm1hckVsaW1pbmFyT3BlcmFjaW9uID0gaWQgPT4ge1xyXG4gICAgICAgIC8vIHByZWd1bnRhciBhbCB1c3VhcmlvXHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFc3TDoXMgc2VndXJvPycsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVW5hIG9wZXJhY2nDs24gcXVlIHNlIGVsaW1pbmEgbm8gc2UgcHVlZGUgcmVjdXBlcmFyXCIsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzYwQTVGQScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnU8OtLCBlbGltaW5hciEnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93bidcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZU91dFVwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGltaW5hck9wZXJhY2lvbihpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBteS0yIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIHRleHQtc20gbGc6dGV4dC1iYXNlXCI+e3RpcG99PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBsZzpmbGV4LTEgdGV4dC1zbSBsZzp0ZXh0LWJhc2VcIj57Y2F0ZWdvcmlhfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtYm9sZCB0ZXh0LXNtIGxnOnRleHQtYmFzZVwiPntjb25jZXB0b308L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSBmb250LW5vcm1hbCB0ZXh0LXNtIGxnOnRleHQtYmFzZVwiPiR7bW9udG99PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgaXRhbGljIHRleHQtc20gbGc6dGV4dC1iYXNlXCI+e2ZlY2hhfTwvcD5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBtci01IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2VkaXRhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHNlbGVjY2lvbmFyT3BlcmFjaW9uKF9pZCkgfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9lbGltaW5hci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXsoKSA9PiBlbGltaW5hcigpIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbmZpcm1hckVsaW1pbmFyT3BlcmFjaW9uKF9pZCl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmFjaW9uOyJdLCJzb3VyY2VSb290IjoiIn0=