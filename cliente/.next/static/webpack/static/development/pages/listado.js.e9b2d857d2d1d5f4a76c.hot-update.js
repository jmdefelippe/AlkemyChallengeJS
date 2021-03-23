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
    obtenerOperaciones();
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
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-5/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Listado de operaciones de", __jsx("span", {
    className: "text-blue-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, " ", usuario.nombre)), __jsx("div", {
    className: "flex gap-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "orden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "Fecha",
    defaultValue: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 27
    }
  }, "Fecha"), __jsx("option", {
    value: "Categor\xEDa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 27
    }
  }, "Categor\xEDa")), formik.touched.orden && formik.errors.orden ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 27
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 27
    }
  }, formik.errors.orden, " ")) : null), formik.values.orden === 'Categoría' ? __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 124,
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
      lineNumber: 132,
      columnNumber: 31
    }
  }, "Categor\xEDa"), __jsx("option", {
    value: "Alimentos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 31
    }
  }, "Alimentos"), __jsx("option", {
    value: "Art\xEDculos de limpieza",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 31
    }
  }, "Art\xEDculos de limpieza"), __jsx("option", {
    value: "Impuestos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 31
    }
  }, "Impuestos"), __jsx("option", {
    value: "Donaci\xF3n",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 31
    }
  }, "Donaci\xF3n"), __jsx("option", {
    value: "Sueldo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 31
    }
  }, "Sueldo")), formik.touched.categoria && formik.errors.categoria ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 27
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 31
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 31
    }
  }, formik.errors.categoria, " ")) : null) : null), __jsx("div", {
    className: "bg-gray-300 rounded-lg px-5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, operaciones.map(function (operacion) {
    return __jsx("div", {
      key: operacion._id,
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 19
      }
    }, " ", __jsx(_components_Operacion__WEBPACK_IMPORTED_MODULE_3__["default"], {
      operacion: operacion,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0YWRvLmpzIl0sIm5hbWVzIjpbIkxpc3RhZG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJvcGVyYWNpb25lc0NvbnRleHQiLCJvcGVyYWNpb25Db250ZXh0Iiwib3BlcmFjaW9uZXMiLCJtZW5zYWplIiwib2J0ZW5lck9wZXJhY2lvbmVzIiwib2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyIsImFsZXJ0YXNDb250ZXh0IiwiYWxlcnRhQ29udGV4dCIsImFsZXJ0YSIsIm1vc3RyYXJBbGVydGEiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwibXNnIiwiY2F0ZWdvcmlhIiwib3JkZW5hclBvckZlY2hhIiwiY29uc29sZSIsImxvZyIsIm9yZGVuYXJQb3JDYXRlZ29yaWEiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwib3JkZW4iLCJvblN1Ym1pdCIsInZhbG9yZXMiLCJub21icmUiLCJ2YWx1ZXMiLCJlIiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsInRhcmdldCIsInZhbHVlIiwibWFwIiwib3BlcmFjaW9uIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRm9CLENBSXBCOztBQUNBLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBRUMsaUVBQUYsQ0FBOUI7QUFMb0IsTUFNWkMsT0FOWSxHQU1vQkgsV0FOcEIsQ0FN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QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxXQUFXLENBQUNpQyxHQUFaLENBQWdCLFVBQUFDLFNBQVM7QUFBQSxXQUN0QjtBQUFLLFNBQUcsRUFBRUEsU0FBUyxDQUFDQyxHQUFwQjtBQUF5QixlQUFTLEVBQUMsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QyxNQUFDLDZEQUFEO0FBQVcsZUFBUyxFQUFFRCxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXZDLENBRHNCO0FBQUEsR0FBekIsQ0FESCxDQWxGSixDQUZKLENBREY7QUErRkQsQ0EvSkQ7O0dBQU01QyxPO1VBRVdFLHFELEVBa0RGNEIsZ0Q7OztLQXBEVDlCLE87QUFpS1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaXN0YWRvLmpzLmU5YjJkODU3ZDJkMWQ1ZjRhNzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBBbGVydGEgZnJvbSAnLi4vY29tcG9uZW50cy9BbGVydGEnO1xyXG5pbXBvcnQgT3BlcmFjaW9uIGZyb20gJy4uL2NvbXBvbmVudHMvT3BlcmFjaW9uJztcclxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XHJcbmltcG9ydCBvcGVyYWNpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uQ29udGV4dCc7XHJcbmltcG9ydCBhbGVydGFDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYWxlcnRhcy9hbGVydGFDb250ZXh0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcblxyXG5cclxuY29uc3QgTGlzdGFkbyA9ICgpID0+IHtcclxuICAvLyByb3V0aW5nIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBFeHRyYWVyIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZGVsIFN0b3JhZ2UgXHJcbiAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KCBhdXRoQ29udGV4dCApO1xyXG4gIGNvbnN0IHsgdXN1YXJpbywgdXN1YXJpb0F1dGVudGljYWRvwqB9ID0gQXV0aENvbnRleHQ7XHJcbiAgXHJcbiAgLy8gZXh0cmFlciBvcGVyYWNpb25lcyBkZSBzdGF0ZSBpbmljaWFsXHJcbiAgY29uc3Qgb3BlcmFjaW9uZXNDb250ZXh0ID0gdXNlQ29udGV4dChvcGVyYWNpb25Db250ZXh0KTtcclxuICBjb25zdCB7IG9wZXJhY2lvbmVzLCBtZW5zYWplLCBvYnRlbmVyT3BlcmFjaW9uZXMsIG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMgfSA9IG9wZXJhY2lvbmVzQ29udGV4dDtcclxuXHJcbiAgY29uc3QgYWxlcnRhc0NvbnRleHQgPSB1c2VDb250ZXh0KGFsZXJ0YUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgYWxlcnRhLCBtb3N0cmFyQWxlcnRhIH0gPSBhbGVydGFzQ29udGV4dDtcclxuXHJcbiAgLy9jb25zdCBbb3JkZW5hckZlY2hhLCBzZXRPcmRlbmFyRmVjaGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgIGlmKHRva2VuKSB7XHJcbiAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgICAvLyBzaSBoYXkgdW4gZXJyb3JcclxuICAgIGlmIChtZW5zYWplKSB7XHJcbiAgICAgIG1vc3RyYXJBbGVydGEobWVuc2FqZS5tc2csIG1lbnNhamUuY2F0ZWdvcmlhKTtcclxuICAgIH1cclxuXHJcbiAgICBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5cclxuICB9LCBbbWVuc2FqZV0pO1xyXG5cclxuXHJcbiAgLy8gcmV2aXNhciBzaSBvcGVyYWNpb25lcyB0aWVuZSBjb250ZW5pZG9cclxuICAvL2lmKG9wZXJhY2lvbmVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxwPk5vIGhheSBvcGVyYWNpb25lczwvcD47XHJcblxyXG4gIGNvbnN0IG9yZGVuYXJQb3JGZWNoYSA9ICgpID0+IHtcclxuICAgIG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG4gICAgY29uc29sZS5sb2coXCJvcmRlbiBwb3IgZmVjaGFBQUFBQS4uLlwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9yZGVuYXJQb3JDYXRlZ29yaWEgPSBjYXRlZ29yaWEgPT4ge1xyXG4gICAgICBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyhjYXRlZ29yaWEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9yZGVuIHBvciBjYXRlZ29yaWEuLi5cIik7XHJcbiAgfVxyXG5cclxuXHJcbi8vIEZvcm11bGFyaW8geSB2YWxpZGFjacOzbiBjb24gZm9ybWlrIHkgWXVwXHJcbmNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgb3JkZW46ICcnLFxyXG4gICAgY2F0ZWdvcmlhOiAnJ1xyXG4gIH0sXHJcbiAgb25TdWJtaXQ6IHZhbG9yZXMgPT4ge1xyXG5cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbiAgXHJcbiAgcmV0dXJuICggXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy00LzUgeGw6dy01LzUgbXgtYXV0b1wiPlxyXG5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1ibGFjay01MDAgdGV4dC1jZW50ZXIgbXktNFwiXHJcbiAgICAgICAgICAgID5MaXN0YWRvIGRlIG9wZXJhY2lvbmVzIGRlXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+IHt1c3VhcmlvLm5vbWJyZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEwXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwib3JkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgID5PcmRlbmFyIHBvcjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3JkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5vcmRlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyAgZm9ybWlrLmhhbmRsZUNoYW5nZShlKTsgb3JkZW5hclBvckZlY2hhKCkgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZlY2hhXCIgZGVmYXVsdFZhbHVlPkZlY2hhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNhdGVnb3LDrWFcIj5DYXRlZ29yw61hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQub3JkZW4gJiYgZm9ybWlrLmVycm9ycy5vcmRlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5vcmRlbn0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgeyAoZm9ybWlrLnZhbHVlcy5vcmRlbiA9PT0gJ0NhdGVnb3LDrWEnKSA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+Q2F0ZWdvcmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuY2F0ZWdvcmlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyAgZm9ybWlrLmhhbmRsZUNoYW5nZShlKTsgb3JkZW5hclBvckNhdGVnb3JpYShlLnRhcmdldC52YWx1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGVmYXVsdFZhbHVlIGRpc2FibGVkIGhpZGRlbj5DYXRlZ29yw61hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGltZW50b3NcIj5BbGltZW50b3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFydMOtY3Vsb3MgZGUgbGltcGllemFcIj5BcnTDrWN1bG9zIGRlIGxpbXBpZXphPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbXB1ZXN0b3NcIj5JbXB1ZXN0b3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRvbmFjacOzblwiPkRvbmFjacOzbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3VlbGRvXCI+U3VlbGRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5jYXRlZ29yaWEgJiYgZm9ybWlrLmVycm9ycy5jYXRlZ29yaWEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuY2F0ZWdvcmlhfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKCBudWxsICkgfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG57LypcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgaG92ZXI6YmctYmxhY2sgYmctYmx1ZS00MDAgcHgtNSBweS0zIG1yLTUgdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcmRlbmFyUG9yRmVjaGEoKSB9XHJcbiAgICAgICAgICAgICAgICA+UG9yIGZlY2hhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgaG92ZXI6YmctYmxhY2sgYmctYmx1ZS00MDAgcHgtNSBweS0zIHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3JkZW5hclBvckNhdGVnb3JpYSgnSW1wdWVzdG9zJykgfVxyXG4gICAgICAgICAgICAgICAgPlBvciBjYXRlZ29yw61hPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4qL31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCByb3VuZGVkLWxnIHB4LTUgcHktMlwiPlxyXG4gICAgICAgICAgICAgIHtvcGVyYWNpb25lcy5tYXAob3BlcmFjaW9uID0+IFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17b3BlcmFjaW9uLl9pZH0gY2xhc3NOYW1lPVwiXCI+IDxPcGVyYWNpb24gb3BlcmFjaW9uPXtvcGVyYWNpb259Lz48L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMaXN0YWRvO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=