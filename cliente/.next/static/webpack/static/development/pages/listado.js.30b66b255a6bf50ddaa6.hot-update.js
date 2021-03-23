webpackHotUpdate("static\\development\\pages\\listado.js",{

/***/ "./pages/listado.js":
/*!**************************!*\
  !*** ./pages/listado.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Alerta */ "./components/Alerta.js");
/* harmony import */ var _components_Operacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Operacion */ "./components/Operacion.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/operaciones/operacionContext */ "./context/operaciones/operacionContext.js");
/* harmony import */ var _context_alertas_alertaContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/alertas/alertaContext */ "./context/alertas/alertaContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\listado.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Listado = function Listado() {
  _s();

  // routing 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])(); // Extraer el Usuario autenticado del Storage 

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var usuario = AuthContext.usuario,
      usuarioAutenticado = AuthContext.usuarioAutenticado; // extraer operaciones de state inicial

  var operacionesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var operaciones = operacionesContext.operaciones,
      mensaje = operacionesContext.mensaje,
      obtenerOperaciones = operacionesContext.obtenerOperaciones,
      obtenerOperacionesCategorias = operacionesContext.obtenerOperacionesCategorias;
  var alertasContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_alertas_alertaContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var alerta = alertasContext.alerta,
      mostrarAlerta = alertasContext.mostrarAlerta; //const [ordenarFecha, setOrdenarFecha] = useState(true);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado();
    } else {
      router.push('/login');
    } // si hay un error


    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerOperaciones(); // eslint-disable-next-line
  }, [mensaje]);

  if (usuario === null) {
    router.push('/login');
    return null;
  } // revisar si operaciones tiene contenido
  //if(operaciones.length === 0) return <p>No hay operaciones</p>;


  var ordenarPorFecha = function ordenarPorFecha() {
    obtenerOperaciones();
  };

  var ordenarPorCategoria = function ordenarPorCategoria(categoria) {
    obtenerOperacionesCategorias(categoria);
  }; // Formulario y validación con formik y Yup


  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_9__["useFormik"])({
    initialValues: {
      orden: '',
      categoria: ''
    },
    onSubmit: function onSubmit(valores) {}
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-5/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Listado de operaciones de", __jsx("span", {
    className: "text-blue-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, " ", usuario.nombre)), __jsx("div", {
    className: "flex gap-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "orden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "Ordenar por:"), __jsx("select", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "orden",
    value: formik.values.orden,
    onChange: function onChange(e) {
      formik.handleChange(e);
      ordenarPorFecha();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "Fecha",
    defaultValue: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  }, "Fecha"), __jsx("option", {
    value: "Categor\xEDa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 27
    }
  }, "Categor\xEDa")), formik.touched.orden && formik.errors.orden ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 27
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 27
    }
  }, formik.errors.orden, " ")) : null), formik.values.orden === 'Categoría' ? __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, "Categoria"), __jsx("select", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "categoria",
    placeholder: "Categoria",
    value: formik.values.categoria,
    onChange: function onChange(e) {
      formik.handleChange(e);
      ordenarPorCategoria(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "",
    defaultValue: true,
    disabled: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 31
    }
  }, "Categor\xEDa"), __jsx("option", {
    value: "Alimentos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 31
    }
  }, "Alimentos"), __jsx("option", {
    value: "Art\xEDculos de limpieza",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 31
    }
  }, "Art\xEDculos de limpieza"), __jsx("option", {
    value: "Impuestos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 31
    }
  }, "Impuestos"), __jsx("option", {
    value: "Donaci\xF3n",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 31
    }
  }, "Donaci\xF3n"), __jsx("option", {
    value: "Sueldo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 31
    }
  }, "Sueldo")), formik.touched.categoria && formik.errors.categoria ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 27
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 31
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 31
    }
  }, formik.errors.categoria, " ")) : null) : null), __jsx("div", {
    className: "bg-gray-300 rounded-lg px-5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, operaciones.map(function (operacion) {
    return __jsx("div", {
      key: operacion._id,
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, " ", __jsx(_components_Operacion__WEBPACK_IMPORTED_MODULE_3__["default"], {
      operacion: operacion,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 58
      }
    }));
  }))));
};

_s(Listado, "dz7bomAtkryvNH+LsnFt7WCIHcU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_9__["useFormik"]];
});

_c = Listado;
/* harmony default export */ __webpack_exports__["default"] = (Listado);

var _c;

$RefreshReg$(_c, "Listado");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0YWRvLmpzIl0sIm5hbWVzIjpbIkxpc3RhZG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJvcGVyYWNpb25lc0NvbnRleHQiLCJvcGVyYWNpb25Db250ZXh0Iiwib3BlcmFjaW9uZXMiLCJtZW5zYWplIiwib2J0ZW5lck9wZXJhY2lvbmVzIiwib2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyIsImFsZXJ0YXNDb250ZXh0IiwiYWxlcnRhQ29udGV4dCIsImFsZXJ0YSIsIm1vc3RyYXJBbGVydGEiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwibXNnIiwiY2F0ZWdvcmlhIiwib3JkZW5hclBvckZlY2hhIiwib3JkZW5hclBvckNhdGVnb3JpYSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJvcmRlbiIsIm9uU3VibWl0IiwidmFsb3JlcyIsIm5vbWJyZSIsInZhbHVlcyIsImUiLCJoYW5kbGVDaGFuZ2UiLCJ0b3VjaGVkIiwiZXJyb3JzIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJvcGVyYWNpb24iLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FGb0IsQ0FJcEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFFQyxpRUFBRixDQUE5QjtBQUxvQixNQU1aQyxPQU5ZLEdBTW9CSCxXQU5wQixDQU1aRyxPQU5ZO0FBQUEsTUFN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UyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsV0FBVyxDQUFDK0IsR0FBWixDQUFnQixVQUFBQyxTQUFTO0FBQUEsV0FDdEI7QUFBSyxTQUFHLEVBQUVBLFNBQVMsQ0FBQ0MsR0FBcEI7QUFBeUIsZUFBUyxFQUFDLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUMsTUFBQyw2REFBRDtBQUFXLGVBQVMsRUFBRUQsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF2QyxDQURzQjtBQUFBLEdBQXpCLENBREgsQ0FsRkosQ0FGSixDQURGO0FBK0ZELENBOUpEOztHQUFNMUMsTztVQUVXRSxxRCxFQW1EQTBCLGdEOzs7S0FyRFg1QixPO0FBZ0tTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbGlzdGFkby5qcy4zMGI2NmIyNTVhNmJmNTBkZGFhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQWxlcnRhIGZyb20gJy4uL2NvbXBvbmVudHMvQWxlcnRhJztcclxuaW1wb3J0IE9wZXJhY2lvbiBmcm9tICcuLi9jb21wb25lbnRzL09wZXJhY2lvbic7XHJcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnO1xyXG5pbXBvcnQgb3BlcmFjaW9uQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvbkNvbnRleHQnO1xyXG5pbXBvcnQgYWxlcnRhQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2FsZXJ0YXMvYWxlcnRhQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5cclxuXHJcbmNvbnN0IExpc3RhZG8gPSAoKSA9PiB7XHJcbiAgLy8gcm91dGluZyBcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gRXh0cmFlciBlbCBVc3VhcmlvIGF1dGVudGljYWRvIGRlbCBTdG9yYWdlIFxyXG4gIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dCggYXV0aENvbnRleHQgKTtcclxuICBjb25zdCB7IHVzdWFyaW8sIHVzdWFyaW9BdXRlbnRpY2Fkb8KgfSA9IEF1dGhDb250ZXh0O1xyXG4gIFxyXG4gIC8vIGV4dHJhZXIgb3BlcmFjaW9uZXMgZGUgc3RhdGUgaW5pY2lhbFxyXG4gIGNvbnN0IG9wZXJhY2lvbmVzQ29udGV4dCA9IHVzZUNvbnRleHQob3BlcmFjaW9uQ29udGV4dCk7XHJcbiAgY29uc3QgeyBvcGVyYWNpb25lcywgbWVuc2FqZSwgb2J0ZW5lck9wZXJhY2lvbmVzLCBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzIH0gPSBvcGVyYWNpb25lc0NvbnRleHQ7XHJcblxyXG4gIGNvbnN0IGFsZXJ0YXNDb250ZXh0ID0gdXNlQ29udGV4dChhbGVydGFDb250ZXh0KTtcclxuICBjb25zdCB7IGFsZXJ0YSwgbW9zdHJhckFsZXJ0YSB9ID0gYWxlcnRhc0NvbnRleHQ7XHJcblxyXG4gIC8vY29uc3QgW29yZGVuYXJGZWNoYSwgc2V0T3JkZW5hckZlY2hhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcbiAgICBpZih0b2tlbikge1xyXG4gICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gICAgLy8gc2kgaGF5IHVuIGVycm9yXHJcbiAgICBpZiAobWVuc2FqZSkge1xyXG4gICAgICBtb3N0cmFyQWxlcnRhKG1lbnNhamUubXNnLCBtZW5zYWplLmNhdGVnb3JpYSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2J0ZW5lck9wZXJhY2lvbmVzKCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuXHJcbiAgfSwgW21lbnNhamVdKTtcclxuXHJcbiAgaWYgKHVzdWFyaW8gPT09IG51bGwpIHtcclxuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gIFxyXG5cclxuICAvLyByZXZpc2FyIHNpIG9wZXJhY2lvbmVzIHRpZW5lIGNvbnRlbmlkb1xyXG4gIC8vaWYob3BlcmFjaW9uZXMubGVuZ3RoID09PSAwKSByZXR1cm4gPHA+Tm8gaGF5IG9wZXJhY2lvbmVzPC9wPjtcclxuXHJcbiAgY29uc3Qgb3JkZW5hclBvckZlY2hhID0gKCkgPT4ge1xyXG4gICAgb2J0ZW5lck9wZXJhY2lvbmVzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcmRlbmFyUG9yQ2F0ZWdvcmlhID0gY2F0ZWdvcmlhID0+IHtcclxuICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyhjYXRlZ29yaWEpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIEZvcm11bGFyaW8geSB2YWxpZGFjacOzbiBjb24gZm9ybWlrIHkgWXVwXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgb3JkZW46ICcnLFxyXG4gICAgICBjYXRlZ29yaWE6ICcnXHJcbiAgICB9LFxyXG4gICAgb25TdWJtaXQ6IHZhbG9yZXMgPT4ge1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICByZXR1cm4gKCBcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTQvNSB4bDp3LTUvNSBteC1hdXRvXCI+XHJcblxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTUwMCB0ZXh0LWNlbnRlciBteS00XCJcclxuICAgICAgICAgICAgPkxpc3RhZG8gZGUgb3BlcmFjaW9uZXMgZGVcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj4ge3VzdWFyaW8ubm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMTBcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvcmRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPk9yZGVuYXIgcG9yOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvcmRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm9yZGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7ICBmb3JtaWsuaGFuZGxlQ2hhbmdlKGUpOyBvcmRlbmFyUG9yRmVjaGEoKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVjaGFcIiBkZWZhdWx0VmFsdWU+RmVjaGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2F0ZWdvcsOtYVwiPkNhdGVnb3LDrWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5vcmRlbiAmJiBmb3JtaWsuZXJyb3JzLm9yZGVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLm9yZGVufSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB7IChmb3JtaWsudmFsdWVzLm9yZGVuID09PSAnQ2F0ZWdvcsOtYScpID8gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5DYXRlZ29yaWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXRlZ29yaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7ICBmb3JtaWsuaGFuZGxlQ2hhbmdlKGUpOyBvcmRlbmFyUG9yQ2F0ZWdvcmlhKGUudGFyZ2V0LnZhbHVlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkZWZhdWx0VmFsdWUgZGlzYWJsZWQgaGlkZGVuPkNhdGVnb3LDrWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsaW1lbnRvc1wiPkFsaW1lbnRvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXJ0w61jdWxvcyBkZSBsaW1waWV6YVwiPkFydMOtY3Vsb3MgZGUgbGltcGllemE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkltcHVlc3Rvc1wiPkltcHVlc3Rvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRG9uYWNpw7NuXCI+RG9uYWNpw7NuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdWVsZG9cIj5TdWVsZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmNhdGVnb3JpYSAmJiBmb3JtaWsuZXJyb3JzLmNhdGVnb3JpYSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5jYXRlZ29yaWF9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICkgOiAoIG51bGwgKSB9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbnsvKlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibGFjayBiZy1ibHVlLTQwMCBweC01IHB5LTMgbXItNSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9yZGVuYXJQb3JGZWNoYSgpIH1cclxuICAgICAgICAgICAgICAgID5Qb3IgZmVjaGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibGFjayBiZy1ibHVlLTQwMCBweC01IHB5LTMgdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcmRlbmFyUG9yQ2F0ZWdvcmlhKCdJbXB1ZXN0b3MnKSB9XHJcbiAgICAgICAgICAgICAgICA+UG9yIGNhdGVnb3LDrWE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiovfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHJvdW5kZWQtbGcgcHgtNSBweS0yXCI+XHJcbiAgICAgICAgICAgICAge29wZXJhY2lvbmVzLm1hcChvcGVyYWNpb24gPT4gXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtvcGVyYWNpb24uX2lkfSBjbGFzc05hbWU9XCJcIj4gPE9wZXJhY2lvbiBvcGVyYWNpb249e29wZXJhY2lvbn0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L0xheW91dD5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RhZG87XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==