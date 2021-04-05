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
    className: "flex-1 font-bold text-blue-500 uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, tipo), __jsx("p", {
    className: "hidden lg:block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, categoria), __jsx("p", {
    className: "flex-1 font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, concepto), __jsx("p", {
    className: "flex-1 font-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "$", monto), __jsx("p", {
    className: "flex-1 italic",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZXJhY2lvbi5qcyJdLCJuYW1lcyI6WyJPcGVyYWNpb24iLCJvcGVyYWNpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVyYWNpb25lc0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwib3BlcmFjaW9uQ29udGV4dCIsIm1lbnNhamUiLCJlbGltaW5hck9wZXJhY2lvbiIsIm9wZXJhY2lvbkFjdHVhbCIsIl9pZCIsImNvbmNlcHRvIiwibW9udG8iLCJ0aXBvIiwiY2F0ZWdvcmlhIiwiZmVjaGEiLCJzdWJzdHJpbmciLCJ1c2VFZmZlY3QiLCJTd2FsIiwiZmlyZSIsInBvc2l0aW9uIiwiaWNvbiIsInRpdGxlIiwibXNnIiwid2lkdGgiLCJ0aW1lciIsImNvbmZpcm1CdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2VsZWNjaW9uYXJPcGVyYWNpb24iLCJwdXNoIiwiY29uZmlybWFyRWxpbWluYXJPcGVyYWNpb24iLCJpZCIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25UZXh0Iiwic2hvd0NsYXNzIiwicG9wdXAiLCJoaWRlQ2xhc3MiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBRWpDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUhpQyxDQUtqQzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0Msd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FBckM7QUFOaUMsTUFPekJDLE9BUHlCLEdBT3dCSCxrQkFQeEIsQ0FPekJHLE9BUHlCO0FBQUEsTUFPaEJDLGlCQVBnQixHQU93Qkosa0JBUHhC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LEtBQThCRyxLQUE5QixDQUxKLEVBT0k7QUFDSSxhQUFTLEVBQUMseUJBRGQ7QUFDd0MsT0FBRyxFQUFDLGFBRDVDO0FBRUksV0FBTyxFQUFHO0FBQUEsYUFBTWEsb0JBQW9CLENBQUNsQixHQUFELENBQTFCO0FBQUEsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFZSTtBQUNJLGFBQVMsRUFBQyxvQkFEZDtBQUNtQyxPQUFHLEVBQUMsZUFEdkMsQ0FFSTtBQUZKO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTW9CLDBCQUEwQixDQUFDcEIsR0FBRCxDQUFoQztBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBRko7QUF1QkgsQ0FyRkQ7O0dBQU1WLFM7VUFHYUcscUQ7OztLQUhiSCxTO0FBdUZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbGlzdGFkby5qcy42Y2ZjZjA2OWJiMjEzNTIwYmRkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVywqB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmltcG9ydCBvcGVyYWNpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uQ29udGV4dCc7XHJcblxyXG5jb25zdCBPcGVyYWNpb24gPSAoeyBvcGVyYWNpb24gfSkgPT4ge1xyXG5cclxuICAgIC8vIE5leHQgcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBvYnRlbmVyIGxhIGZ1bmNpw7NuIGRlbCBjb250ZXh0IGRlIG9wZXJhY2lvbmVzXHJcbiAgICBjb25zdCBvcGVyYWNpb25lc0NvbnRleHQgPSB1c2VDb250ZXh0KG9wZXJhY2lvbkNvbnRleHQpO1xyXG4gICAgY29uc3QgeyBtZW5zYWplLCBlbGltaW5hck9wZXJhY2lvbiwgb3BlcmFjaW9uQWN0dWFsLCB9ID0gb3BlcmFjaW9uZXNDb250ZXh0O1xyXG5cclxuICAgIGNvbnN0IHsgX2lkLCBjb25jZXB0bywgbW9udG8sIHRpcG8sIGNhdGVnb3JpYSB9ID0gb3BlcmFjaW9uO1xyXG4gICAgbGV0IHsgZmVjaGEgfSA9IG9wZXJhY2lvbjtcclxuXHJcbiAgICBmZWNoYSA9IG9wZXJhY2lvbi5mZWNoYS5zdWJzdHJpbmcoMCwxMCk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lbnNhamUuY2F0ZWdvcmlhID09PSAnYWxlcnRhLW9rJykge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lbnNhamUubXNnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzYwQTVGQScsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09rIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lbnNhamVdKTtcclxuXHJcbiAgICAvLyBmdW5jaW9uIHF1ZSByZWRpcmlnZSBkZSBmb3JtYSBwcm9ncmFtYWRhXHJcbiAgICBjb25zdCBzZWxlY2Npb25hck9wZXJhY2lvbiA9IG9wZXJhY2lvbiA9PiB7XHJcbiAgICAgICAgb3BlcmFjaW9uQWN0dWFsKG9wZXJhY2lvbik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9lZGl0YXJvcGVyYWNpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25maXJtYXIgc2kgZGVzZWEgZWxpbWluYXJsb1xyXG4gICAgY29uc3QgY29uZmlybWFyRWxpbWluYXJPcGVyYWNpb24gPSBpZCA9PiB7XHJcbiAgICAgICAgLy8gcHJlZ3VudGFyIGFsIHVzdWFyaW9cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VzdMOhcyBzZWd1cm8/JyxcclxuICAgICAgICAgICAgdGV4dDogXCJVbmEgb3BlcmFjacOzbiBxdWUgc2UgZWxpbWluYSBubyBzZSBwdWVkZSByZWN1cGVyYXJcIixcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjNjBBNUZBJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdTw60sIGVsaW1pbmFyIScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWxhcicsXHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGVDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlT3V0VXAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyT3BlcmFjaW9uKGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG15LTIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSBmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2VcIj57dGlwb308L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9ja1wiPntjYXRlZ29yaWF9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC1ib2xkXCI+e2NvbmNlcHRvfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtbm9ybWFsXCI+JHttb250b308L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSBpdGFsaWNcIj57ZmVjaGF9PC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG1yLTUgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvZWRpdGFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gc2VsZWNjaW9uYXJPcGVyYWNpb24oX2lkKSB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2VsaW1pbmFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9eygpID0+IGVsaW1pbmFyKCkgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybWFyRWxpbWluYXJPcGVyYWNpb24oX2lkKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmFjaW9uOyJdLCJzb3VyY2VSb290IjoiIn0=