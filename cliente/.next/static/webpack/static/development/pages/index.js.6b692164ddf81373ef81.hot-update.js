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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Operacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Operacion */ "./components/Operacion.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/operaciones/operacionContext */ "./context/operaciones/operacionContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\Programaci\xF3n\\Proyectos\\AlkemyReactChallenge\\cliente\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index() {
  _s();

  // routing 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // Extraer el Usuario autenticado del Storage 

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var usuario = AuthContext.usuario,
      usuarioAutenticado = AuthContext.usuarioAutenticado; // extraer operaciones de state inicial

  var operacionesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var operaciones = operacionesContext.operaciones,
      ingresos = operacionesContext.ingresos,
      egresos = operacionesContext.egresos,
      balance = operacionesContext.balance,
      calcularTotales = operacionesContext.calcularTotales;
  usuario = usuario || {};
  var classBalance = "";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado();
    } else {
      router.push('/login');
    }

    calcularTotales(); // eslint-disable-next-line
  }, []);

  var getClassBalance = function getClassBalance(classBalance) {
    if (balance > 0) {
      classBalance = "text-green-500";
    } else if (balance < 0) {
      classBalance = "text-red-700";
    } else {
      classBalance = "font-normal text-black";
    }

    return classBalance;
  };

  classBalance = getClassBalance(classBalance);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, usuario ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, __jsx("h3", {
    className: "text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, "Balance de operaciones de", __jsx("span", {
    className: "text-blue-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, " ", usuario.nombre)), __jsx("div", {
    className: "grid md:w-4/5 xl:w-3/5 mx-auto mb-2 items-center bg-gray-300 rounded-lg px-5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, "Ingresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, " $", ingresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, "Egresos:", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, " $", egresos, " ")), __jsx("p", {
    className: "font-bold text-blue-500 uppercase text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "Balance:", __jsx("span", {
    className: classBalance,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, " $", balance, " "))), operaciones.length === 0 ? __jsx("p", {
    className: "text-2xl font-sans font-bold text-blue-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 30
    }
  }, "No hay operaciones") : __jsx("div", {
    className: "bg-gray-300 rounded-lg px-5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, operaciones.map(function (operacion) {
    return __jsx("div", {
      key: operacion._id,
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 39
      }
    }, " ", __jsx(_components_Operacion__WEBPACK_IMPORTED_MODULE_3__["default"], {
      operacion: operacion,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 78
      }
    }));
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
};

_s(Index, "m9jVNsLFYMgUcgfYzkk4MOqfXNU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZXJhY2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcGVyYWNpb24iLCJvcGVyYWNpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVyYWNpb25lc0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwib3BlcmFjaW9uQ29udGV4dCIsIm1lbnNhamUiLCJlbGltaW5hck9wZXJhY2lvbiIsIm9wZXJhY2lvbkFjdHVhbCIsIl9pZCIsImNvbmNlcHRvIiwibW9udG8iLCJ0aXBvIiwiY2F0ZWdvcmlhIiwiZmVjaGEiLCJzdWJzdHJpbmciLCJ1c2VFZmZlY3QiLCJTd2FsIiwiZmlyZSIsInBvc2l0aW9uIiwiaWNvbiIsInRpdGxlIiwibXNnIiwid2lkdGgiLCJ0aW1lciIsImNvbmZpcm1CdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0Iiwic2VsZWNjaW9uYXJPcGVyYWNpb24iLCJwdXNoIiwiY29uZmlybWFyRWxpbWluYXJPcGVyYWNpb24iLCJpZCIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25UZXh0Iiwic2hvd0NsYXNzIiwicG9wdXAiLCJoaWRlQ2xhc3MiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJJbmRleCIsIkF1dGhDb250ZXh0IiwiYXV0aENvbnRleHQiLCJ1c3VhcmlvIiwidXN1YXJpb0F1dGVudGljYWRvIiwib3BlcmFjaW9uZXMiLCJpbmdyZXNvcyIsImVncmVzb3MiLCJiYWxhbmNlIiwiY2FsY3VsYXJUb3RhbGVzIiwiY2xhc3NCYWxhbmNlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0Q2xhc3NCYWxhbmNlIiwibm9tYnJlIiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVB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QUFBRyxhQUFTLEVBQUMsNkRBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESCxHQUlNO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsV0FBVyxDQUFDWSxHQUFaLENBQWdCLFVBQUExRCxTQUFTO0FBQUEsV0FDdEI7QUFBSyxTQUFHLEVBQUVBLFNBQVMsQ0FBQ1MsR0FBcEI7QUFBeUIsZUFBUyxFQUFDLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUMsTUFBQyw2REFBRDtBQUFXLGVBQVMsRUFBRVQsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF2QyxDQURzQjtBQUFBLEdBQXpCLENBREgsQ0F4QlYsQ0FESixDQURLLEdBb0NILGtFQXRDWixDQURKO0FBK0NILENBMUZEOztHQUFNeUMsSztVQUdhdkMscUQ7OztLQUhidUMsSztBQTRGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjZiNjkyMTY0ZGRmODEzNzNlZjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXLCoH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0JztcclxuXHJcbmNvbnN0IE9wZXJhY2lvbiA9ICh7IG9wZXJhY2lvbiB9KSA9PiB7XHJcblxyXG4gICAgLy8gTmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIG9idGVuZXIgbGEgZnVuY2nDs24gZGVsIGNvbnRleHQgZGUgb3BlcmFjaW9uZXNcclxuICAgIGNvbnN0IG9wZXJhY2lvbmVzQ29udGV4dCA9IHVzZUNvbnRleHQob3BlcmFjaW9uQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IG1lbnNhamUsIGVsaW1pbmFyT3BlcmFjaW9uLCBvcGVyYWNpb25BY3R1YWwsIH0gPSBvcGVyYWNpb25lc0NvbnRleHQ7XHJcblxyXG4gICAgY29uc3QgeyBfaWQsIGNvbmNlcHRvLCBtb250bywgdGlwbywgY2F0ZWdvcmlhIH0gPSBvcGVyYWNpb247XHJcbiAgICBsZXQgeyBmZWNoYSB9ID0gb3BlcmFjaW9uO1xyXG5cclxuICAgIGZlY2hhID0gb3BlcmFjaW9uLmZlY2hhLnN1YnN0cmluZygwLDEwKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWVuc2FqZS5jYXRlZ29yaWEgPT09ICdhbGVydGEtb2snKSB7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVuc2FqZS5tc2csXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjNjBBNUZBJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2shJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWVuc2FqZV0pO1xyXG5cclxuICAgIC8vIGZ1bmNpb24gcXVlIHJlZGlyaWdlIGRlIGZvcm1hIHByb2dyYW1hZGFcclxuICAgIGNvbnN0IHNlbGVjY2lvbmFyT3BlcmFjaW9uID0gb3BlcmFjaW9uID0+IHtcclxuICAgICAgICBvcGVyYWNpb25BY3R1YWwob3BlcmFjaW9uKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2VkaXRhcm9wZXJhY2lvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbmZpcm1hciBzaSBkZXNlYSBlbGltaW5hcmxvXHJcbiAgICBjb25zdCBjb25maXJtYXJFbGltaW5hck9wZXJhY2lvbiA9IGlkID0+IHtcclxuICAgICAgICAvLyBwcmVndW50YXIgYWwgdXN1YXJpb1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRXN0w6FzIHNlZ3Vybz8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlVuYSBvcGVyYWNpw7NuIHF1ZSBzZSBlbGltaW5hIG5vIHNlIHB1ZWRlIHJlY3VwZXJhclwiLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyM2MEE1RkEnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1PDrSwgZWxpbWluYXIhJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbGFyJyxcclxuICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24nXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGlkZUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVPdXRVcCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJPcGVyYWNpb24oaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXktMiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHVwcGVyY2FzZSB0ZXh0LXNtIGxnOnRleHQtYmFzZVwiPnt0aXBvfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggbGc6ZmxleC0xIHRleHQtc20gbGc6dGV4dC1iYXNlXCI+e2NhdGVnb3JpYX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSBmb250LWJvbGQgdGV4dC1zbSBsZzp0ZXh0LWJhc2VcIj57Y29uY2VwdG99PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC1ub3JtYWwgdGV4dC1zbSBsZzp0ZXh0LWJhc2VcIj4ke21vbnRvfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIGl0YWxpYyB0ZXh0LXNtIGxnOnRleHQtYmFzZVwiPntmZWNoYX08L3A+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXItNSBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9lZGl0YXIucG5nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBzZWxlY2Npb25hck9wZXJhY2lvbihfaWQpIH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvZWxpbWluYXIucG5nXCJcclxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17KCkgPT4gZWxpbWluYXIoKSB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25maXJtYXJFbGltaW5hck9wZXJhY2lvbihfaWQpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVyYWNpb247IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgT3BlcmFjaW9uIGZyb20gJy4uL2NvbXBvbmVudHMvT3BlcmFjaW9uJztcblxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XG5pbXBvcnQgb3BlcmFjaW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvbkNvbnRleHQnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIC8vIHJvdXRpbmcgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvLyBFeHRyYWVyIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZGVsIFN0b3JhZ2UgXG4gICAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KCBhdXRoQ29udGV4dCApO1xuICAgIGxldCB7IHVzdWFyaW8sIHVzdWFyaW9BdXRlbnRpY2Fkb8KgfSA9IEF1dGhDb250ZXh0O1xuXG4gICAgLy8gZXh0cmFlciBvcGVyYWNpb25lcyBkZSBzdGF0ZSBpbmljaWFsXG4gICAgY29uc3Qgb3BlcmFjaW9uZXNDb250ZXh0ID0gdXNlQ29udGV4dChvcGVyYWNpb25Db250ZXh0KTtcbiAgICBjb25zdCB7IG9wZXJhY2lvbmVzLCBpbmdyZXNvcywgZWdyZXNvcywgYmFsYW5jZSwgY2FsY3VsYXJUb3RhbGVzIH0gPSBvcGVyYWNpb25lc0NvbnRleHQ7XG5cbiAgICB1c3VhcmlvID0gdXN1YXJpbyB8fCB7fTtcbiAgICBsZXQgY2xhc3NCYWxhbmNlID0gXCJcIjtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gICAgICBpZih0b2tlbikge1xuICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIGNhbGN1bGFyVG90YWxlcygpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZ2V0Q2xhc3NCYWxhbmNlID0gKGNsYXNzQmFsYW5jZSkgPT4ge1xuICAgICAgaWYgKGJhbGFuY2UgPiAwKSB7XG4gICAgICAgIGNsYXNzQmFsYW5jZSA9IFwidGV4dC1ncmVlbi01MDBcIlxuICAgICAgfSBlbHNlIGlmIChiYWxhbmNlIDwgMCkge1xuICAgICAgICBjbGFzc0JhbGFuY2UgPSBcInRleHQtcmVkLTcwMFwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc0JhbGFuY2UgPSBcImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NCYWxhbmNlO1xuICAgIH1cblxuICAgIGNsYXNzQmFsYW5jZSA9IGdldENsYXNzQmFsYW5jZShjbGFzc0JhbGFuY2UpO1xuXG4gICAgcmV0dXJuICggXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXN1YXJpbyA/IChcbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTQvNSB4bDp3LTMvNSBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1ibGFjay01MDAgdGV4dC1jZW50ZXIgbXktNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+QmFsYW5jZSBkZSBvcGVyYWNpb25lcyBkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj4ge3VzdWFyaW8ubm9tYnJlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOnctNC81IHhsOnctMy81IG14LWF1dG8gbWItMiBpdGVtcy1jZW50ZXIgYmctZ3JheS0zMDAgcm91bmRlZC1sZyBweC01IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgbWItMlwiPkluZ3Jlc29zOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWJsYWNrXCI+ICR7aW5ncmVzb3N9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIHRleHQtY2VudGVyIG1iLTJcIj5FZ3Jlc29zOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWJsYWNrXCI+ICR7ZWdyZXNvc30gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2UgdGV4dC1jZW50ZXJcIj5CYWxhbmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzQmFsYW5jZX0+ICR7YmFsYW5jZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7IChvcGVyYWNpb25lcy5sZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIG15LTRcIj5ObyBoYXkgb3BlcmFjaW9uZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICggIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcm91bmRlZC1sZyBweC01IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BlcmFjaW9uZXMubWFwKG9wZXJhY2lvbiA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29wZXJhY2lvbi5faWR9IGNsYXNzTmFtZT1cIlwiPiA8T3BlcmFjaW9uIG9wZXJhY2lvbj17b3BlcmFjaW9ufS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgPC9kaXY+XG4gICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuICAgIFxuXG4iXSwic291cmNlUm9vdCI6IiJ9