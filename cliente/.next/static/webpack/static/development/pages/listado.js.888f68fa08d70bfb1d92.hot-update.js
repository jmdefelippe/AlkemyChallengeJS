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
/* harmony import */ var _context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/operaciones/operacionContext */ "./context/operaciones/operacionContext.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\components\\Operacion.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Operacion = function Operacion(_ref) {
  _s();

  var operacion = _ref.operacion;
  // obtener la función del context de operaciones
  var operacionesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var eliminarOperacion = operacionesContext.eliminarOperacion,
      obtenerOperaciones = operacionesContext.obtenerOperaciones,
      actualizarOperacion = operacionesContext.actualizarOperacion,
      guardarOperacionActual = operacionesContext.guardarOperacionActual;
  var _id = operacion._id,
      concepto = operacion.concepto,
      monto = operacion.monto,
      tipo = operacion.tipo,
      categoria = operacion.categoria;
  var fecha = operacion.fecha;
  fecha = operacion.fecha.substring(0, 10);
  /*    
      const eliminar = () => {
          eliminarOperacion(operacion._id);
      }
  */
  // confirmar si desea eliminarlo

  var confirmarEliminarOperacion = function confirmarEliminarOperacion(id) {
    // preguntar al usuario
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
      title: 'Estás seguro?',
      text: "Una operación que se elimina no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#109DEB',
      cancelButtonColor: '#000000',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(function (result) {
      if (result.isConfirmed) {
        // pasarlo al action
        eliminarOperacion(operacion._id);
      }
    });
  };

  return __jsx("div", {
    className: "flex mb-2 items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "flex-1 font-bold text-blue-500 uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, tipo), __jsx("p", {
    className: "flex-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, categoria), __jsx("p", {
    className: "flex-1 font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, concepto), __jsx("p", {
    className: "flex-1 font-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "$", monto), __jsx("p", {
    className: "flex-1 italic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, fecha), __jsx("img", {
    className: "w-8 mr-5 cursor-pointer",
    src: "/editar.png",
    onClick: function onClick() {
      return editarOperacion();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("img", {
    className: "w-8 cursor-pointer",
    src: "/eliminar.png" //onClick={() => eliminar() }
    ,
    onClick: function onClick() {
      return confirmarEliminarOperacion(_id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }));
};

_s(Operacion, "7OfPeALfxJiaKUjx7v0EWUA3Bno=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZXJhY2lvbi5qcyJdLCJuYW1lcyI6WyJPcGVyYWNpb24iLCJvcGVyYWNpb24iLCJvcGVyYWNpb25lc0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwib3BlcmFjaW9uQ29udGV4dCIsImVsaW1pbmFyT3BlcmFjaW9uIiwib2J0ZW5lck9wZXJhY2lvbmVzIiwiYWN0dWFsaXphck9wZXJhY2lvbiIsImd1YXJkYXJPcGVyYWNpb25BY3R1YWwiLCJfaWQiLCJjb25jZXB0byIsIm1vbnRvIiwidGlwbyIsImNhdGVnb3JpYSIsImZlY2hhIiwic3Vic3RyaW5nIiwiY29uZmlybWFyRWxpbWluYXJPcGVyYWNpb24iLCJpZCIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImVkaXRhck9wZXJhY2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUVqQztBQUNBLE1BQU1DLGtCQUFrQixHQUFHQyx3REFBVSxDQUFDQyw2RUFBRCxDQUFyQztBQUhpQyxNQUl6QkMsaUJBSnlCLEdBSThESCxrQkFKOUQsQ0FJekJHLGlCQUp5QjtBQUFBLE1BSU5DLGtCQUpNLEdBSThESixrQkFKOUQsQ0FJTkksa0JBSk07QUFBQSxNQUljQyxtQkFKZCxHQUk4REwsa0JBSjlELENBSWNLLG1CQUpkO0FBQUEsTUFJbUNDLHNCQUpuQyxHQUk4RE4sa0JBSjlELENBSW1DTSxzQkFKbkM7QUFBQSxNQU16QkMsR0FOeUIsR0FNaUJSLFNBTmpCLENBTXpCUSxHQU55QjtBQUFBLE1BTXBCQyxRQU5vQixHQU1pQlQsU0FOakIsQ0FNcEJTLFFBTm9CO0FBQUEsTUFNVkMsS0FOVSxHQU1pQlYsU0FOakIsQ0FNVlUsS0FOVTtBQUFBLE1BTUhDLElBTkcsR0FNaUJYLFNBTmpCLENBTUhXLElBTkc7QUFBQSxNQU1HQyxTQU5ILEdBTWlCWixTQU5qQixDQU1HWSxTQU5IO0FBQUEsTUFPM0JDLEtBUDJCLEdBT2pCYixTQVBpQixDQU8zQmEsS0FQMkI7QUFTakNBLE9BQUssR0FBR2IsU0FBUyxDQUFDYSxLQUFWLENBQWdCQyxTQUFoQixDQUEwQixDQUExQixFQUE0QixFQUE1QixDQUFSO0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVJOztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQUMsRUFBRSxFQUFJO0FBQ3JDO0FBQ0FDLHNEQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxXQUFLLEVBQUUsZUFERDtBQUVOQyxVQUFJLEVBQUUsb0RBRkE7QUFHTkMsVUFBSSxFQUFFLFNBSEE7QUFJTkMsc0JBQWdCLEVBQUUsSUFKWjtBQUtOQyx3QkFBa0IsRUFBRSxTQUxkO0FBTU5DLHVCQUFpQixFQUFFLFNBTmI7QUFPTkMsdUJBQWlCLEVBQUUsZUFQYjtBQVFOQyxzQkFBZ0IsRUFBRTtBQVJaLEtBQVYsRUFTR0MsSUFUSCxDQVNRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixVQUFJQSxNQUFNLENBQUNDLFdBQVgsRUFBd0I7QUFDcEI7QUFDQXpCLHlCQUFpQixDQUFDSixTQUFTLENBQUNRLEdBQVgsQ0FBakI7QUFDSDtBQUNKLEtBZEQ7QUFlSCxHQWpCRDs7QUFtQkEsU0FDSTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsMENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5REcsSUFBekQsQ0FESixFQUVJO0FBQUcsYUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkMsU0FBdkIsQ0FGSixFQUdJO0FBQUcsYUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNILFFBQWpDLENBSEosRUFJSTtBQUFHLGFBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQW9DQyxLQUFwQyxDQUpKLEVBS0k7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCRyxLQUE5QixDQUxKLEVBT0k7QUFDSSxhQUFTLEVBQUMseUJBRGQ7QUFDd0MsT0FBRyxFQUFDLGFBRDVDO0FBRUksV0FBTyxFQUFFO0FBQUEsYUFBTWlCLGVBQWUsRUFBckI7QUFBQSxLQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVlJO0FBQ0ksYUFBUyxFQUFDLG9CQURkO0FBQ21DLE9BQUcsRUFBQyxlQUR2QyxDQUVJO0FBRko7QUFHSSxXQUFPLEVBQUU7QUFBQSxhQUFNZiwwQkFBMEIsQ0FBQ1AsR0FBRCxDQUFoQztBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBREo7QUFxQkgsQ0ExREQ7O0dBQU1ULFM7O0tBQUFBLFM7QUE0RFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaXN0YWRvLmpzLjg4OGY2OGZhMDhkNzBiZmIxZDkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0JztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuY29uc3QgT3BlcmFjaW9uID0gKHsgb3BlcmFjaW9uIH0pID0+IHtcclxuXHJcbiAgICAvLyBvYnRlbmVyIGxhIGZ1bmNpw7NuIGRlbCBjb250ZXh0IGRlIG9wZXJhY2lvbmVzXHJcbiAgICBjb25zdCBvcGVyYWNpb25lc0NvbnRleHQgPSB1c2VDb250ZXh0KG9wZXJhY2lvbkNvbnRleHQpO1xyXG4gICAgY29uc3QgeyBlbGltaW5hck9wZXJhY2lvbiwgb2J0ZW5lck9wZXJhY2lvbmVzLCBhY3R1YWxpemFyT3BlcmFjaW9uLCBndWFyZGFyT3BlcmFjaW9uQWN0dWFsIH0gPSBvcGVyYWNpb25lc0NvbnRleHQ7XHJcblxyXG4gICAgY29uc3QgeyBfaWQsIGNvbmNlcHRvLCBtb250bywgdGlwbywgY2F0ZWdvcmlhIH0gPSBvcGVyYWNpb247XHJcbiAgICBsZXQgeyBmZWNoYSB9ID0gb3BlcmFjaW9uO1xyXG5cclxuICAgIGZlY2hhID0gb3BlcmFjaW9uLmZlY2hhLnN1YnN0cmluZygwLDEwKTtcclxuXHJcbi8qICAgIFxyXG4gICAgY29uc3QgZWxpbWluYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgZWxpbWluYXJPcGVyYWNpb24ob3BlcmFjaW9uLl9pZCk7XHJcbiAgICB9XHJcbiovXHJcblxyXG4gICAgLy8gY29uZmlybWFyIHNpIGRlc2VhIGVsaW1pbmFybG9cclxuICAgIGNvbnN0IGNvbmZpcm1hckVsaW1pbmFyT3BlcmFjaW9uID0gaWQgPT4ge1xyXG4gICAgICAgIC8vIHByZWd1bnRhciBhbCB1c3VhcmlvXHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFc3TDoXMgc2VndXJvPycsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVW5hIG9wZXJhY2nDs24gcXVlIHNlIGVsaW1pbmEgbm8gc2UgcHVlZGUgcmVjdXBlcmFyXCIsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzEwOURFQicsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnU8OtLCBlbGltaW5hciEnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHBhc2FybG8gYWwgYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hck9wZXJhY2lvbihvcGVyYWNpb24uX2lkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItMiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHVwcGVyY2FzZVwiPnt0aXBvfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xXCI+e2NhdGVnb3JpYX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSBmb250LWJvbGRcIj57Y29uY2VwdG99PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC1ub3JtYWxcIj4ke21vbnRvfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIGl0YWxpY1wiPntmZWNoYX08L3A+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggbXItNSBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9lZGl0YXIucG5nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRhck9wZXJhY2lvbigpIH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvZWxpbWluYXIucG5nXCJcclxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17KCkgPT4gZWxpbWluYXIoKSB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25maXJtYXJFbGltaW5hck9wZXJhY2lvbihfaWQpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhY2lvbjsiXSwic291cmNlUm9vdCI6IiJ9