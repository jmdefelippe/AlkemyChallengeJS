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
    onChange: function onChange(e) {
      formik.handleChange(e);
      console.log(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0YWRvLmpzIl0sIm5hbWVzIjpbIkxpc3RhZG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJvcGVyYWNpb25lc0NvbnRleHQiLCJvcGVyYWNpb25Db250ZXh0Iiwib3BlcmFjaW9uZXMiLCJtZW5zYWplIiwib2J0ZW5lck9wZXJhY2lvbmVzIiwib2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyIsImFsZXJ0YXNDb250ZXh0IiwiYWxlcnRhQ29udGV4dCIsImFsZXJ0YSIsIm1vc3RyYXJBbGVydGEiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwibXNnIiwiY2F0ZWdvcmlhIiwib3JkZW5hclBvckZlY2hhIiwiY29uc29sZSIsImxvZyIsIm9yZGVuYXJQb3JDYXRlZ29yaWEiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwib3JkZW4iLCJvblN1Ym1pdCIsInZhbG9yZXMiLCJub21icmUiLCJ2YWx1ZXMiLCJlIiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsInRhcmdldCIsInZhbHVlIiwibWFwIiwib3BlcmFjaW9uIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRm9CLENBSXBCOztBQUNBLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBRUMsaUVBQUYsQ0FBOUI7QUFMb0IsTUFNWkMsT0FOWSxHQU1vQkgsV0FOcEIsQ0FN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QkksSUEzRFYsQ0FQSixFQWtGSTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dkLFdBQVcsQ0FBQ2lDLEdBQVosQ0FBZ0IsVUFBQUMsU0FBUztBQUFBLFdBQ3RCO0FBQUssU0FBRyxFQUFFQSxTQUFTLENBQUNDLEdBQXBCO0FBQXlCLGVBQVMsRUFBQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVDLE1BQUMsNkRBQUQ7QUFBVyxlQUFTLEVBQUVELFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBdkMsQ0FEc0I7QUFBQSxHQUF6QixDQURILENBbEZKLENBRkosQ0FERjtBQStGRCxDQTlKRDs7R0FBTTVDLE87VUFFV0UscUQsRUFpREY0QixnRDs7O0tBbkRUOUIsTztBQWdLU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpc3RhZG8uanMuNzEzYTg0NWQ2YmFlOTY3OTQ0YmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSc7XHJcbmltcG9ydCBPcGVyYWNpb24gZnJvbSAnLi4vY29tcG9uZW50cy9PcGVyYWNpb24nO1xyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0JztcclxuaW1wb3J0IGFsZXJ0YUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hbGVydGFzL2FsZXJ0YUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuXHJcblxyXG5jb25zdCBMaXN0YWRvID0gKCkgPT4ge1xyXG4gIC8vIHJvdXRpbmcgXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIEV4dHJhZXIgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBkZWwgU3RvcmFnZSBcclxuICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoIGF1dGhDb250ZXh0ICk7XHJcbiAgY29uc3QgeyB1c3VhcmlvLCB1c3VhcmlvQXV0ZW50aWNhZG/CoH0gPSBBdXRoQ29udGV4dDtcclxuICBcclxuICAvLyBleHRyYWVyIG9wZXJhY2lvbmVzIGRlIHN0YXRlIGluaWNpYWxcclxuICBjb25zdCBvcGVyYWNpb25lc0NvbnRleHQgPSB1c2VDb250ZXh0KG9wZXJhY2lvbkNvbnRleHQpO1xyXG4gIGNvbnN0IHsgb3BlcmFjaW9uZXMsIG1lbnNhamUsIG9idGVuZXJPcGVyYWNpb25lcywgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyB9ID0gb3BlcmFjaW9uZXNDb250ZXh0O1xyXG5cclxuICBjb25zdCBhbGVydGFzQ29udGV4dCA9IHVzZUNvbnRleHQoYWxlcnRhQ29udGV4dCk7XHJcbiAgY29uc3QgeyBhbGVydGEsIG1vc3RyYXJBbGVydGEgfSA9IGFsZXJ0YXNDb250ZXh0O1xyXG5cclxuICAvL2NvbnN0IFtvcmRlbmFyRmVjaGEsIHNldE9yZGVuYXJGZWNoYV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgaWYodG9rZW4pIHtcclxuICAgICAgdXN1YXJpb0F1dGVudGljYWRvKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICAgIC8vIHNpIGhheSB1biBlcnJvclxyXG4gICAgaWYgKG1lbnNhamUpIHtcclxuICAgICAgbW9zdHJhckFsZXJ0YShtZW5zYWplLm1zZywgbWVuc2FqZS5jYXRlZ29yaWEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcblxyXG4gIH0sIFttZW5zYWplXSk7XHJcblxyXG5cclxuICAvLyByZXZpc2FyIHNpIG9wZXJhY2lvbmVzIHRpZW5lIGNvbnRlbmlkb1xyXG4gIC8vaWYob3BlcmFjaW9uZXMubGVuZ3RoID09PSAwKSByZXR1cm4gPHA+Tm8gaGF5IG9wZXJhY2lvbmVzPC9wPjtcclxuXHJcbiAgY29uc3Qgb3JkZW5hclBvckZlY2hhID0gKCkgPT4ge1xyXG4gICAgb2J0ZW5lck9wZXJhY2lvbmVzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9yZGVuIHBvciBmZWNoYUFBQUFBLi4uXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3JkZW5hclBvckNhdGVnb3JpYSA9IGNhdGVnb3JpYSA9PiB7XHJcbiAgICAgIG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMoY2F0ZWdvcmlhKTtcclxuICAgICAgY29uc29sZS5sb2coXCJvcmRlbiBwb3IgY2F0ZWdvcmlhLi4uXCIpO1xyXG4gIH1cclxuXHJcblxyXG4vLyBGb3JtdWxhcmlvIHkgdmFsaWRhY2nDs24gY29uIGZvcm1payB5IFl1cFxyXG5jb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgIG9yZGVuOiAnJyxcclxuICAgIGNhdGVnb3JpYTogJydcclxuICB9LFxyXG4gIG9uU3VibWl0OiB2YWxvcmVzID0+IHtcclxuXHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4gIFxyXG4gIHJldHVybiAoIFxyXG4gICAgPExheW91dD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNC81IHhsOnctNS81IG14LWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNhbnMgZm9udC1ib2xkIHRleHQtYmxhY2stNTAwIHRleHQtY2VudGVyIG15LTRcIlxyXG4gICAgICAgICAgICA+TGlzdGFkbyBkZSBvcGVyYWNpb25lcyBkZVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPiB7dXN1YXJpby5ub21icmV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm9yZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICA+T3JkZW5hciBwb3I6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9yZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMub3JkZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgIGZvcm1pay5oYW5kbGVDaGFuZ2UoZSk7IG9yZGVuYXJQb3JGZWNoYSgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGZWNoYVwiIGRlZmF1bHRWYWx1ZT5GZWNoYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXRlZ29yw61hXCI+Q2F0ZWdvcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLm9yZGVuICYmIGZvcm1pay5lcnJvcnMub3JkZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMub3JkZW59IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHsgKGZvcm1pay52YWx1ZXMub3JkZW4gPT09ICdDYXRlZ29yw61hJykgPyAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPkNhdGVnb3JpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNhdGVnb3JpYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgIGZvcm1pay5oYW5kbGVDaGFuZ2UoZSk7IGNvbnNvbGUubG9nKGUpIDsgb3JkZW5hclBvckNhdGVnb3JpYShlLnRhcmdldC52YWx1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGVmYXVsdFZhbHVlIGRpc2FibGVkIGhpZGRlbj5DYXRlZ29yw61hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGltZW50b3NcIj5BbGltZW50b3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFydMOtY3Vsb3MgZGUgbGltcGllemFcIj5BcnTDrWN1bG9zIGRlIGxpbXBpZXphPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbXB1ZXN0b3NcIj5JbXB1ZXN0b3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRvbmFjacOzblwiPkRvbmFjacOzbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3VlbGRvXCI+U3VlbGRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5jYXRlZ29yaWEgJiYgZm9ybWlrLmVycm9ycy5jYXRlZ29yaWEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuY2F0ZWdvcmlhfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKCBudWxsICkgfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG57LypcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgaG92ZXI6YmctYmxhY2sgYmctYmx1ZS00MDAgcHgtNSBweS0zIG1yLTUgdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcmRlbmFyUG9yRmVjaGEoKSB9XHJcbiAgICAgICAgICAgICAgICA+UG9yIGZlY2hhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgaG92ZXI6YmctYmxhY2sgYmctYmx1ZS00MDAgcHgtNSBweS0zIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3JkZW5hclBvckNhdGVnb3JpYSgnSW1wdWVzdG9zJykgfVxyXG4gICAgICAgICAgICAgICAgPlBvciBjYXRlZ29yw61hPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4qL31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCByb3VuZGVkLWxnIHB4LTUgcHktMlwiPlxyXG4gICAgICAgICAgICAgIHtvcGVyYWNpb25lcy5tYXAob3BlcmFjaW9uID0+IFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17b3BlcmFjaW9uLl9pZH0gY2xhc3NOYW1lPVwiXCI+IDxPcGVyYWNpb24gb3BlcmFjaW9uPXtvcGVyYWNpb259Lz48L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMaXN0YWRvO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=