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
  }, [mensaje]); // revisar si operaciones tiene contenido
  //if(operaciones.length === 0) return <p>No hay operaciones</p>;

  var ordenarPorFecha = function ordenarPorFecha() {
    obtenerOperaciones();
    console.log("orden por fechaAAAAA...");
  };

  var ordenarPorCategoria = function ordenarPorCategoria(categoria) {
    obtenerOperacionesCategorias(categoria);
    console.log("orden por categoria...");
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
    onChange: formik.handleChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0YWRvLmpzIl0sIm5hbWVzIjpbIkxpc3RhZG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJvcGVyYWNpb25lc0NvbnRleHQiLCJvcGVyYWNpb25Db250ZXh0Iiwib3BlcmFjaW9uZXMiLCJtZW5zYWplIiwib2J0ZW5lck9wZXJhY2lvbmVzIiwib2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyIsImFsZXJ0YXNDb250ZXh0IiwiYWxlcnRhQ29udGV4dCIsImFsZXJ0YSIsIm1vc3RyYXJBbGVydGEiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwibXNnIiwiY2F0ZWdvcmlhIiwib3JkZW5hclBvckZlY2hhIiwiY29uc29sZSIsImxvZyIsIm9yZGVuYXJQb3JDYXRlZ29yaWEiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwib3JkZW4iLCJvblN1Ym1pdCIsInZhbG9yZXMiLCJub21icmUiLCJ2YWx1ZXMiLCJlIiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsIm1hcCIsIm9wZXJhY2lvbiIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUZvQixDQUlwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUVDLGlFQUFGLENBQTlCO0FBTG9CLE1BTVpDLE9BTlksR0FNb0JILFdBTnBCLENBTVpHLE9BTlk7QUFBQSxNQU1I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QUNDLEdBQXBCO0FBQXlCLGVBQVMsRUFBQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVDLE1BQUMsNkRBQUQ7QUFBVyxlQUFTLEVBQUVELFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBdkMsQ0FEc0I7QUFBQSxHQUF6QixDQURILENBbEZKLENBRkosQ0FERjtBQStGRCxDQTlKRDs7R0FBTTFDLE87VUFFV0UscUQsRUFpREY0QixnRDs7O0tBbkRUOUIsTztBQWdLU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3RhZG8uanMuYTUzYTQyMTFlN2E3OTAzY2E3MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSc7XHJcbmltcG9ydCBPcGVyYWNpb24gZnJvbSAnLi4vY29tcG9uZW50cy9PcGVyYWNpb24nO1xyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0JztcclxuaW1wb3J0IGFsZXJ0YUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hbGVydGFzL2FsZXJ0YUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuXHJcblxyXG5jb25zdCBMaXN0YWRvID0gKCkgPT4ge1xyXG4gIC8vIHJvdXRpbmcgXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIEV4dHJhZXIgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBkZWwgU3RvcmFnZSBcclxuICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoIGF1dGhDb250ZXh0ICk7XHJcbiAgY29uc3QgeyB1c3VhcmlvLCB1c3VhcmlvQXV0ZW50aWNhZG/CoH0gPSBBdXRoQ29udGV4dDtcclxuICBcclxuICAvLyBleHRyYWVyIG9wZXJhY2lvbmVzIGRlIHN0YXRlIGluaWNpYWxcclxuICBjb25zdCBvcGVyYWNpb25lc0NvbnRleHQgPSB1c2VDb250ZXh0KG9wZXJhY2lvbkNvbnRleHQpO1xyXG4gIGNvbnN0IHsgb3BlcmFjaW9uZXMsIG1lbnNhamUsIG9idGVuZXJPcGVyYWNpb25lcywgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyB9ID0gb3BlcmFjaW9uZXNDb250ZXh0O1xyXG5cclxuICBjb25zdCBhbGVydGFzQ29udGV4dCA9IHVzZUNvbnRleHQoYWxlcnRhQ29udGV4dCk7XHJcbiAgY29uc3QgeyBhbGVydGEsIG1vc3RyYXJBbGVydGEgfSA9IGFsZXJ0YXNDb250ZXh0O1xyXG5cclxuICAvL2NvbnN0IFtvcmRlbmFyRmVjaGEsIHNldE9yZGVuYXJGZWNoYV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgaWYodG9rZW4pIHtcclxuICAgICAgdXN1YXJpb0F1dGVudGljYWRvKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICAgIC8vIHNpIGhheSB1biBlcnJvclxyXG4gICAgaWYgKG1lbnNhamUpIHtcclxuICAgICAgbW9zdHJhckFsZXJ0YShtZW5zYWplLm1zZywgbWVuc2FqZS5jYXRlZ29yaWEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcblxyXG4gIH0sIFttZW5zYWplXSk7XHJcblxyXG5cclxuICAvLyByZXZpc2FyIHNpIG9wZXJhY2lvbmVzIHRpZW5lIGNvbnRlbmlkb1xyXG4gIC8vaWYob3BlcmFjaW9uZXMubGVuZ3RoID09PSAwKSByZXR1cm4gPHA+Tm8gaGF5IG9wZXJhY2lvbmVzPC9wPjtcclxuXHJcbiAgY29uc3Qgb3JkZW5hclBvckZlY2hhID0gKCkgPT4ge1xyXG4gICAgb2J0ZW5lck9wZXJhY2lvbmVzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9yZGVuIHBvciBmZWNoYUFBQUFBLi4uXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3JkZW5hclBvckNhdGVnb3JpYSA9IGNhdGVnb3JpYSA9PiB7XHJcbiAgICAgIG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMoY2F0ZWdvcmlhKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvcmRlbiBwb3IgY2F0ZWdvcmlhLi4uXCIpO1xyXG4gIH1cclxuXHJcblxyXG4vLyBGb3JtdWxhcmlvIHkgdmFsaWRhY2nDs24gY29uIGZvcm1payB5IFl1cFxyXG5jb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgIG9yZGVuOiAnJyxcclxuICAgIGNhdGVnb3JpYTogJydcclxuICB9LFxyXG4gIG9uU3VibWl0OiB2YWxvcmVzID0+IHtcclxuXHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4gIFxyXG4gIHJldHVybiAoIFxyXG4gICAgPExheW91dD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNC81IHhsOnctNS81IG14LWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNhbnMgZm9udC1ib2xkIHRleHQtYmxhY2stNTAwIHRleHQtY2VudGVyIG15LTRcIlxyXG4gICAgICAgICAgICA+TGlzdGFkbyBkZSBvcGVyYWNpb25lcyBkZVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPiB7dXN1YXJpby5ub21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9yZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICA+T3JkZW5hciBwb3I6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9yZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3JkZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgIGZvcm1pay5oYW5kbGVDaGFuZ2UoZSk7IG9yZGVuYXJQb3JGZWNoYSgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGZWNoYVwiIGRlZmF1bHRWYWx1ZT5GZWNoYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXRlZ29yw61hXCI+Q2F0ZWdvcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLm9yZGVuICYmIGZvcm1pay5lcnJvcnMub3JkZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMub3JkZW59IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHsgKGZvcm1pay52YWx1ZXMub3JkZW4gPT09ICdDYXRlZ29yw61hJykgPyAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPkNhdGVnb3JpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNhdGVnb3JpYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkZWZhdWx0VmFsdWUgZGlzYWJsZWQgaGlkZGVuPkNhdGVnb3LDrWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsaW1lbnRvc1wiPkFsaW1lbnRvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXJ0w61jdWxvcyBkZSBsaW1waWV6YVwiPkFydMOtY3Vsb3MgZGUgbGltcGllemE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkltcHVlc3Rvc1wiPkltcHVlc3Rvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRG9uYWNpw7NuXCI+RG9uYWNpw7NuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdWVsZG9cIj5TdWVsZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmNhdGVnb3JpYSAmJiBmb3JtaWsuZXJyb3JzLmNhdGVnb3JpYSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5jYXRlZ29yaWF9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICkgOiAoIG51bGwgKSB9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbnsvKlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibGFjayBiZy1ibHVlLTQwMCBweC01IHB5LTMgbXItNSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9yZGVuYXJQb3JGZWNoYSgpIH1cclxuICAgICAgICAgICAgICAgID5Qb3IgZmVjaGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibGFjayBiZy1ibHVlLTQwMCBweC01IHB5LTMgdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcmRlbmFyUG9yQ2F0ZWdvcmlhKCdJbXB1ZXN0b3MnKSB9XHJcbiAgICAgICAgICAgICAgICA+UG9yIGNhdGVnb3LDrWE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiovfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHJvdW5kZWQtbGcgcHgtNSBweS0yXCI+XHJcbiAgICAgICAgICAgICAge29wZXJhY2lvbmVzLm1hcChvcGVyYWNpb24gPT4gXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtvcGVyYWNpb24uX2lkfSBjbGFzc05hbWU9XCJcIj4gPE9wZXJhY2lvbiBvcGVyYWNpb249e29wZXJhY2lvbn0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L0xheW91dD5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RhZG87XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==