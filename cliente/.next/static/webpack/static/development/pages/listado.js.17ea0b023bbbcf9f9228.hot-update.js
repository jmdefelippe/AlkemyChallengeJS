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
    }

    if (usuario === null) {
      router.push('/login');
      return null;
    } // si hay un error


    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerOperaciones(); // eslint-disable-next-line
  }, [mensaje]); // revisar si operaciones tiene contenido
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
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-5/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, "Listado de operaciones de", __jsx("span", {
    className: "text-blue-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, " ", usuario.nombre)), __jsx("div", {
    className: "flex gap-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "orden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 97,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "Fecha",
    defaultValue: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 27
    }
  }, "Fecha"), __jsx("option", {
    value: "Categor\xEDa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 27
    }
  }, "Categor\xEDa")), formik.touched.orden && formik.errors.orden ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 27
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 27
    }
  }, formik.errors.orden, " ")) : null), formik.values.orden === 'Categoría' ? __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 125,
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
      lineNumber: 133,
      columnNumber: 31
    }
  }, "Categor\xEDa"), __jsx("option", {
    value: "Alimentos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 31
    }
  }, "Alimentos"), __jsx("option", {
    value: "Art\xEDculos de limpieza",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 31
    }
  }, "Art\xEDculos de limpieza"), __jsx("option", {
    value: "Impuestos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 31
    }
  }, "Impuestos"), __jsx("option", {
    value: "Donaci\xF3n",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 31
    }
  }, "Donaci\xF3n"), __jsx("option", {
    value: "Sueldo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 31
    }
  }, "Sueldo")), formik.touched.categoria && formik.errors.categoria ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 27
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 31
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 31
    }
  }, formik.errors.categoria, " ")) : null) : null), __jsx("div", {
    className: "bg-gray-300 rounded-lg px-5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, operaciones.map(function (operacion) {
    return __jsx("div", {
      key: operacion._id,
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 19
      }
    }, " ", __jsx(_components_Operacion__WEBPACK_IMPORTED_MODULE_3__["default"], {
      operacion: operacion,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0YWRvLmpzIl0sIm5hbWVzIjpbIkxpc3RhZG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJvcGVyYWNpb25lc0NvbnRleHQiLCJvcGVyYWNpb25Db250ZXh0Iiwib3BlcmFjaW9uZXMiLCJtZW5zYWplIiwib2J0ZW5lck9wZXJhY2lvbmVzIiwib2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyIsImFsZXJ0YXNDb250ZXh0IiwiYWxlcnRhQ29udGV4dCIsImFsZXJ0YSIsIm1vc3RyYXJBbGVydGEiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwibXNnIiwiY2F0ZWdvcmlhIiwib3JkZW5hclBvckZlY2hhIiwib3JkZW5hclBvckNhdGVnb3JpYSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJvcmRlbiIsIm9uU3VibWl0IiwidmFsb3JlcyIsIm5vbWJyZSIsInZhbHVlcyIsImUiLCJoYW5kbGVDaGFuZ2UiLCJ0b3VjaGVkIiwiZXJyb3JzIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJvcGVyYWNpb24iLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FGb0IsQ0FJcEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFFQyxpRUFBRixDQUE5QjtBQUxvQixNQU1aQyxPQU5ZLEdBTW9CSCxXQU5wQixDQU1aRyxPQU5ZO0FBQUEsTUFN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QVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dkLFdBQVcsQ0FBQytCLEdBQVosQ0FBZ0IsVUFBQUMsU0FBUztBQUFBLFdBQ3RCO0FBQUssU0FBRyxFQUFFQSxTQUFTLENBQUNDLEdBQXBCO0FBQXlCLGVBQVMsRUFBQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVDLE1BQUMsNkRBQUQ7QUFBVyxlQUFTLEVBQUVELFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBdkMsQ0FEc0I7QUFBQSxHQUF6QixDQURILENBbEZKLENBRkosQ0FERjtBQStGRCxDQWhLRDs7R0FBTTFDLE87VUFFV0UscUQsRUFxREEwQixnRDs7O0tBdkRYNUIsTztBQWtLU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3RhZG8uanMuMTdlYTBiMDIzYmJiY2Y5ZjkyMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSc7XHJcbmltcG9ydCBPcGVyYWNpb24gZnJvbSAnLi4vY29tcG9uZW50cy9PcGVyYWNpb24nO1xyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0JztcclxuaW1wb3J0IGFsZXJ0YUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hbGVydGFzL2FsZXJ0YUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuXHJcblxyXG5jb25zdCBMaXN0YWRvID0gKCkgPT4ge1xyXG4gIC8vIHJvdXRpbmcgXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIEV4dHJhZXIgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBkZWwgU3RvcmFnZSBcclxuICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoIGF1dGhDb250ZXh0ICk7XHJcbiAgY29uc3QgeyB1c3VhcmlvLCB1c3VhcmlvQXV0ZW50aWNhZG/CoH0gPSBBdXRoQ29udGV4dDtcclxuICBcclxuICAvLyBleHRyYWVyIG9wZXJhY2lvbmVzIGRlIHN0YXRlIGluaWNpYWxcclxuICBjb25zdCBvcGVyYWNpb25lc0NvbnRleHQgPSB1c2VDb250ZXh0KG9wZXJhY2lvbkNvbnRleHQpO1xyXG4gIGNvbnN0IHsgb3BlcmFjaW9uZXMsIG1lbnNhamUsIG9idGVuZXJPcGVyYWNpb25lcywgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyB9ID0gb3BlcmFjaW9uZXNDb250ZXh0O1xyXG5cclxuICBjb25zdCBhbGVydGFzQ29udGV4dCA9IHVzZUNvbnRleHQoYWxlcnRhQ29udGV4dCk7XHJcbiAgY29uc3QgeyBhbGVydGEsIG1vc3RyYXJBbGVydGEgfSA9IGFsZXJ0YXNDb250ZXh0O1xyXG5cclxuICAvL2NvbnN0IFtvcmRlbmFyRmVjaGEsIHNldE9yZGVuYXJGZWNoYV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgaWYodG9rZW4pIHtcclxuICAgICAgdXN1YXJpb0F1dGVudGljYWRvKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXN1YXJpbyA9PT0gbnVsbCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBcclxuXHJcbiAgICAvLyBzaSBoYXkgdW4gZXJyb3JcclxuICAgIGlmIChtZW5zYWplKSB7XHJcbiAgICAgIG1vc3RyYXJBbGVydGEobWVuc2FqZS5tc2csIG1lbnNhamUuY2F0ZWdvcmlhKTtcclxuICAgIH1cclxuXHJcbiAgICBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5cclxuICB9LCBbbWVuc2FqZV0pO1xyXG4gXHJcblxyXG4gIC8vIHJldmlzYXIgc2kgb3BlcmFjaW9uZXMgdGllbmUgY29udGVuaWRvXHJcbiAgLy9pZihvcGVyYWNpb25lcy5sZW5ndGggPT09IDApIHJldHVybiA8cD5ObyBoYXkgb3BlcmFjaW9uZXM8L3A+O1xyXG5cclxuICBjb25zdCBvcmRlbmFyUG9yRmVjaGEgPSAoKSA9PiB7XHJcbiAgICBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9yZGVuYXJQb3JDYXRlZ29yaWEgPSBjYXRlZ29yaWEgPT4ge1xyXG4gICAgICBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzKGNhdGVnb3JpYSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gRm9ybXVsYXJpbyB5IHZhbGlkYWNpw7NuIGNvbiBmb3JtaWsgeSBZdXBcclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBvcmRlbjogJycsXHJcbiAgICAgIGNhdGVnb3JpYTogJydcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiAoIFxyXG4gICAgPExheW91dD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNC81IHhsOnctNS81IG14LWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNhbnMgZm9udC1ib2xkIHRleHQtYmxhY2stNTAwIHRleHQtY2VudGVyIG15LTRcIlxyXG4gICAgICAgICAgICA+TGlzdGFkbyBkZSBvcGVyYWNpb25lcyBkZVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPiB7dXN1YXJpby5ub21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9yZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICA+T3JkZW5hciBwb3I6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9yZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3JkZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgIGZvcm1pay5oYW5kbGVDaGFuZ2UoZSk7IG9yZGVuYXJQb3JGZWNoYSgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGZWNoYVwiIGRlZmF1bHRWYWx1ZT5GZWNoYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXRlZ29yw61hXCI+Q2F0ZWdvcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLm9yZGVuICYmIGZvcm1pay5lcnJvcnMub3JkZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMub3JkZW59IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHsgKGZvcm1pay52YWx1ZXMub3JkZW4gPT09ICdDYXRlZ29yw61hJykgPyAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPkNhdGVnb3JpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNhdGVnb3JpYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgIGZvcm1pay5oYW5kbGVDaGFuZ2UoZSk7IG9yZGVuYXJQb3JDYXRlZ29yaWEoZS50YXJnZXQudmFsdWUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRlZmF1bHRWYWx1ZSBkaXNhYmxlZCBoaWRkZW4+Q2F0ZWdvcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxpbWVudG9zXCI+QWxpbWVudG9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcnTDrWN1bG9zIGRlIGxpbXBpZXphXCI+QXJ0w61jdWxvcyBkZSBsaW1waWV6YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW1wdWVzdG9zXCI+SW1wdWVzdG9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEb25hY2nDs25cIj5Eb25hY2nDs248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN1ZWxkb1wiPlN1ZWxkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuY2F0ZWdvcmlhICYmIGZvcm1pay5lcnJvcnMuY2F0ZWdvcmlhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLmNhdGVnb3JpYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6ICggbnVsbCApIH1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuey8qXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIGhvdmVyOmJnLWJsYWNrIGJnLWJsdWUtNDAwIHB4LTUgcHktMyBtci01IHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3JkZW5hclBvckZlY2hhKCkgfVxyXG4gICAgICAgICAgICAgICAgPlBvciBmZWNoYTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIGhvdmVyOmJnLWJsYWNrIGJnLWJsdWUtNDAwIHB4LTUgcHktMyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9yZGVuYXJQb3JDYXRlZ29yaWEoJ0ltcHVlc3RvcycpIH1cclxuICAgICAgICAgICAgICAgID5Qb3IgY2F0ZWdvcsOtYTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKi99XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcm91bmRlZC1sZyBweC01IHB5LTJcIj5cclxuICAgICAgICAgICAgICB7b3BlcmFjaW9uZXMubWFwKG9wZXJhY2lvbiA9PiBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29wZXJhY2lvbi5faWR9IGNsYXNzTmFtZT1cIlwiPiA8T3BlcmFjaW9uIG9wZXJhY2lvbj17b3BlcmFjaW9ufS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTGlzdGFkbztcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9