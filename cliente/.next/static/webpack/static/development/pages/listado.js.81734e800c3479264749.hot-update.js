webpackHotUpdate("static\\development\\pages\\listado.js",{

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
  var mensaje = operacionesContext.mensaje,
      eliminarOperacion = operacionesContext.eliminarOperacion,
      operacionActual = operacionesContext.operacionActual;
  var _id = operacion._id,
      concepto = operacion.concepto,
      monto = operacion.monto,
      tipo = operacion.tipo,
      categoria = operacion.categoria;
  var fecha = operacion.fecha;
  fecha = operacion.fecha.substring(0, 10);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mensaje.categoria === 'alerta-ok') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        position: 'center',
        icon: 'success',
        title: mensaje.msg,
        width: 400,
        timer: 3000,
        confirmButtonColor: '#60A5FA',
        confirmButtonText: 'Ok!'
      });
    }
  }, [mensaje]); // funcion que redirige de forma programada

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
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "flex-1 font-bold text-blue-500 uppercase text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, tipo), __jsx("p", {
    className: "hidden lg:flex lg:flex-1 text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, categoria), __jsx("p", {
    className: "flex-1 font-bold text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, concepto), __jsx("p", {
    className: "flex-1 font-normal text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "$", monto), __jsx("p", {
    className: "flex-1 italic text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 79,
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
      lineNumber: 84,
      columnNumber: 13
    }
  }));
};

_s(Operacion, "BhgafFqtcSCKah8zVRzNQX2LM10=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZXJhY2lvbi5qcyJdLCJuYW1lcyI6WyJPcGVyYWNpb24iLCJvcGVyYWNpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVyYWNpb25lc0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwib3BlcmFjaW9uQ29udGV4dCIsIm1lbnNhamUiLCJlbGltaW5hck9wZXJhY2lvbiIsIm9wZXJhY2lvbkFjdHVhbCIsIl9pZCIsImNvbmNlcHRvIiwibW9udG8iLCJ0aXBvIiwiY2F0ZWdvcmlhIiwiZmVjaGEiLCJzdWJzdHJpbmciLCJ1c2VFZmZlY3QiLCJTd2FsIiwiZmlyZSIsInBvc2l0aW9uIiwiaWNvbiIsInRpdGxlIiwibXNnIiwid2lkdGgiLCJ0aW1lciIsImNvbmZpcm1CdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2VsZWNjaW9uYXJPcGVyYWNpb24iLCJwdXNoIiwiY29uZmlybWFyRWxpbWluYXJPcGVyYWNpb24iLCJpZCIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25UZXh0Iiwic2hvd0NsYXNzIiwicG9wdXAiLCJoaWRlQ2xhc3MiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBRWpDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUhpQyxDQUtqQzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0Msd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FBckM7QUFOaUMsTUFPekJDLE9BUHlCLEdBT3dCSCxrQkFQeEIsQ0FPekJHLE9BUHlCO0FBQUEsTUFPaEJDLGlCQVBnQixHQU93Qkosa0JBUHhCLENBT2hCSSxpQkFQZ0I7QUFBQSxNQU9HQyxlQVBILEdBT3dCTCxrQkFQeEIsQ0FPR0ssZUFQSDtBQUFBLE1BU3pCQyxHQVR5QixHQVNpQlQsU0FUakIsQ0FTekJTLEdBVHlCO0FBQUEsTUFTcEJDLFFBVG9CLEdBU2lCVixTQVRqQixDQVNwQlUsUUFUb0I7QUFBQSxNQVNWQyxLQVRVLEdBU2lCWCxTQVRqQixDQVNWVyxLQVRVO0FBQUEsTUFTSEMsSUFURyxHQVNpQlosU0FUakIsQ0FTSFksSUFURztBQUFBLE1BU0dDLFNBVEgsR0FTaUJiLFNBVGpCLENBU0dhLFNBVEg7QUFBQSxNQVUzQkMsS0FWMkIsR0FVakJkLFNBVmlCLENBVTNCYyxLQVYyQjtBQVlqQ0EsT0FBSyxHQUFHZCxTQUFTLENBQUNjLEtBQVYsQ0FBZ0JDLFNBQWhCLENBQTBCLENBQTFCLEVBQTRCLEVBQTVCLENBQVI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVYsT0FBTyxDQUFDTyxTQUFSLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ25DSSx3REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsZ0JBQVEsRUFBRSxRQURKO0FBRU5DLFlBQUksRUFBRSxTQUZBO0FBR05DLGFBQUssRUFBRWYsT0FBTyxDQUFDZ0IsR0FIVDtBQUlOQyxhQUFLLEVBQUUsR0FKRDtBQUtOQyxhQUFLLEVBQUUsSUFMRDtBQU1OQywwQkFBa0IsRUFBRSxTQU5kO0FBT05DLHlCQUFpQixFQUFFO0FBUGIsT0FBVjtBQVNIO0FBQ0osR0FaUSxFQVlOLENBQUNwQixPQUFELENBWk0sQ0FBVCxDQWRpQyxDQTRCakM7O0FBQ0EsTUFBTXFCLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQTNCLFNBQVMsRUFBSTtBQUN0Q1EsbUJBQWUsQ0FBQ1IsU0FBRCxDQUFmO0FBQ0FDLFVBQU0sQ0FBQzJCLElBQVAsQ0FBWSxrQkFBWjtBQUNILEdBSEQsQ0E3QmlDLENBa0NqQzs7O0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixDQUFBQyxFQUFFLEVBQUk7QUFDckM7QUFDQWIsc0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05HLFdBQUssRUFBRSxlQUREO0FBRU5VLFVBQUksRUFBRSxvREFGQTtBQUdOWCxVQUFJLEVBQUUsU0FIQTtBQUlOWSxzQkFBZ0IsRUFBRSxJQUpaO0FBS05QLHdCQUFrQixFQUFFLFNBTGQ7QUFNTlEsdUJBQWlCLEVBQUUsU0FOYjtBQU9OUCx1QkFBaUIsRUFBRSxlQVBiO0FBUU5RLHNCQUFnQixFQUFFLFVBUlo7QUFTTlgsV0FBSyxFQUFFLEdBVEQ7QUFVTlksZUFBUyxFQUFFO0FBQ1BDLGFBQUssRUFBRTtBQURBLE9BVkw7QUFhTkMsZUFBUyxFQUFFO0FBQ1BELGFBQUssRUFBRTtBQURBO0FBYkwsS0FBVixFQWlCR0UsSUFqQkgsQ0FpQlEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLFVBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUNwQmpDLHlCQUFpQixDQUFDdUIsRUFBRCxDQUFqQjtBQUNIO0FBQ0osS0FyQkQ7QUF1QkgsR0F6QkQ7O0FBMkJBLFNBRUk7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLCtEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEVsQixJQUE5RSxDQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsK0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4REMsU0FBOUQsQ0FGSixFQUdJO0FBQUcsYUFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0RILFFBQXRELENBSEosRUFJSTtBQUFHLGFBQVMsRUFBQyx5Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXlEQyxLQUF6RCxDQUpKLEVBS0k7QUFBRyxhQUFTLEVBQUMsb0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtREcsS0FBbkQsQ0FMSixFQU9JO0FBQ0ksYUFBUyxFQUFDLHlCQURkO0FBQ3dDLE9BQUcsRUFBQyxhQUQ1QztBQUVJLFdBQU8sRUFBRztBQUFBLGFBQU1hLG9CQUFvQixDQUFDbEIsR0FBRCxDQUExQjtBQUFBLEtBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBWUk7QUFDSSxhQUFTLEVBQUMsb0JBRGQ7QUFDbUMsT0FBRyxFQUFDLGVBRHZDLENBRUk7QUFGSjtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1vQiwwQkFBMEIsQ0FBQ3BCLEdBQUQsQ0FBaEM7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixDQUZKO0FBdUJILENBckZEOztHQUFNVixTO1VBR2FHLHFEOzs7S0FIYkgsUztBQXVGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3RhZG8uanMuODE3MzRlODAwYzM0NzkyNjQ3NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlcsKgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5pbXBvcnQgb3BlcmFjaW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvbkNvbnRleHQnO1xyXG5cclxuY29uc3QgT3BlcmFjaW9uID0gKHsgb3BlcmFjaW9uIH0pID0+IHtcclxuXHJcbiAgICAvLyBOZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsYSBmdW5jacOzbiBkZWwgY29udGV4dCBkZSBvcGVyYWNpb25lc1xyXG4gICAgY29uc3Qgb3BlcmFjaW9uZXNDb250ZXh0ID0gdXNlQ29udGV4dChvcGVyYWNpb25Db250ZXh0KTtcclxuICAgIGNvbnN0IHsgbWVuc2FqZSwgZWxpbWluYXJPcGVyYWNpb24sIG9wZXJhY2lvbkFjdHVhbCwgfSA9IG9wZXJhY2lvbmVzQ29udGV4dDtcclxuXHJcbiAgICBjb25zdCB7IF9pZCwgY29uY2VwdG8sIG1vbnRvLCB0aXBvLCBjYXRlZ29yaWEgfSA9IG9wZXJhY2lvbjtcclxuICAgIGxldCB7IGZlY2hhIH0gPSBvcGVyYWNpb247XHJcblxyXG4gICAgZmVjaGEgPSBvcGVyYWNpb24uZmVjaGEuc3Vic3RyaW5nKDAsMTApO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZW5zYWplLmNhdGVnb3JpYSA9PT0gJ2FsZXJ0YS1vaycpIHtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZW5zYWplLm1zZyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyM2MEE1RkEnLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPayEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFttZW5zYWplXSk7XHJcblxyXG4gICAgLy8gZnVuY2lvbiBxdWUgcmVkaXJpZ2UgZGUgZm9ybWEgcHJvZ3JhbWFkYVxyXG4gICAgY29uc3Qgc2VsZWNjaW9uYXJPcGVyYWNpb24gPSBvcGVyYWNpb24gPT4ge1xyXG4gICAgICAgIG9wZXJhY2lvbkFjdHVhbChvcGVyYWNpb24pO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZWRpdGFyb3BlcmFjaW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uZmlybWFyIHNpIGRlc2VhIGVsaW1pbmFybG9cclxuICAgIGNvbnN0IGNvbmZpcm1hckVsaW1pbmFyT3BlcmFjaW9uID0gaWQgPT4ge1xyXG4gICAgICAgIC8vIHByZWd1bnRhciBhbCB1c3VhcmlvXHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFc3TDoXMgc2VndXJvPycsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVW5hIG9wZXJhY2nDs24gcXVlIHNlIGVsaW1pbmEgbm8gc2UgcHVlZGUgcmVjdXBlcmFyXCIsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzYwQTVGQScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnU8OtLCBlbGltaW5hciEnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93bidcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZU91dFVwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGltaW5hck9wZXJhY2lvbihpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBteS0yIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIHRleHQtc20gbGc6dGV4dC1iYXNlXCI+e3RpcG99PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBsZzpmbGV4LTEgdGV4dC1zbSBsZzp0ZXh0LWJhc2VcIj57Y2F0ZWdvcmlhfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtYm9sZCB0ZXh0LXNtIGxnOnRleHQtYmFzZVwiPntjb25jZXB0b308L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSBmb250LW5vcm1hbCB0ZXh0LXNtIGxnOnRleHQtYmFzZVwiPiR7bW9udG99PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgaXRhbGljIHRleHQtc20gbGc6dGV4dC1iYXNlXCI+e2ZlY2hhfTwvcD5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBtci01IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2VkaXRhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHNlbGVjY2lvbmFyT3BlcmFjaW9uKF9pZCkgfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9lbGltaW5hci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXsoKSA9PiBlbGltaW5hcigpIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbmZpcm1hckVsaW1pbmFyT3BlcmFjaW9uKF9pZCl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhY2lvbjsiXSwic291cmNlUm9vdCI6IiJ9