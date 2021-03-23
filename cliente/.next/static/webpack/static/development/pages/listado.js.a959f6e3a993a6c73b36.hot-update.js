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
      ordenarPorCategoria(formik.values.categoria);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0YWRvLmpzIl0sIm5hbWVzIjpbIkxpc3RhZG8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJhdXRoQ29udGV4dCIsInVzdWFyaW8iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJvcGVyYWNpb25lc0NvbnRleHQiLCJvcGVyYWNpb25Db250ZXh0Iiwib3BlcmFjaW9uZXMiLCJtZW5zYWplIiwib2J0ZW5lck9wZXJhY2lvbmVzIiwib2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyIsImFsZXJ0YXNDb250ZXh0IiwiYWxlcnRhQ29udGV4dCIsImFsZXJ0YSIsIm1vc3RyYXJBbGVydGEiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwibXNnIiwiY2F0ZWdvcmlhIiwib3JkZW5hclBvckZlY2hhIiwiY29uc29sZSIsImxvZyIsIm9yZGVuYXJQb3JDYXRlZ29yaWEiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwib3JkZW4iLCJvblN1Ym1pdCIsInZhbG9yZXMiLCJub21icmUiLCJ2YWx1ZXMiLCJlIiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsIm1hcCIsIm9wZXJhY2lvbiIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUZvQixDQUlwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUVDLGlFQUFGLENBQTlCO0FBTG9CLE1BTVpDLE9BTlksR0FNb0JILFdBTnBCLENBTVpHLE9BTlk7QUFBQSxNQU1I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Rkk7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxXQUFXLENBQUMrQixHQUFaLENBQWdCLFVBQUFDLFNBQVM7QUFBQSxXQUN0QjtBQUFLLFNBQUcsRUFBRUEsU0FBUyxDQUFDQyxHQUFwQjtBQUF5QixlQUFTLEVBQUMsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QyxNQUFDLDZEQUFEO0FBQVcsZUFBUyxFQUFFRCxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXZDLENBRHNCO0FBQUEsR0FBekIsQ0FESCxDQWxGSixDQUZKLENBREY7QUErRkQsQ0E5SkQ7O0dBQU0xQyxPO1VBRVdFLHFELEVBaURGNEIsZ0Q7OztLQW5EVDlCLE87QUFnS1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaXN0YWRvLmpzLmE5NTlmNmUzYTk5M2E2YzczYjM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBBbGVydGEgZnJvbSAnLi4vY29tcG9uZW50cy9BbGVydGEnO1xyXG5pbXBvcnQgT3BlcmFjaW9uIGZyb20gJy4uL2NvbXBvbmVudHMvT3BlcmFjaW9uJztcclxuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XHJcbmltcG9ydCBvcGVyYWNpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uQ29udGV4dCc7XHJcbmltcG9ydCBhbGVydGFDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYWxlcnRhcy9hbGVydGFDb250ZXh0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcblxyXG5cclxuY29uc3QgTGlzdGFkbyA9ICgpID0+IHtcclxuICAvLyByb3V0aW5nIFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBFeHRyYWVyIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZGVsIFN0b3JhZ2UgXHJcbiAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KCBhdXRoQ29udGV4dCApO1xyXG4gIGNvbnN0IHsgdXN1YXJpbywgdXN1YXJpb0F1dGVudGljYWRvwqB9ID0gQXV0aENvbnRleHQ7XHJcbiAgXHJcbiAgLy8gZXh0cmFlciBvcGVyYWNpb25lcyBkZSBzdGF0ZSBpbmljaWFsXHJcbiAgY29uc3Qgb3BlcmFjaW9uZXNDb250ZXh0ID0gdXNlQ29udGV4dChvcGVyYWNpb25Db250ZXh0KTtcclxuICBjb25zdCB7IG9wZXJhY2lvbmVzLCBtZW5zYWplLCBvYnRlbmVyT3BlcmFjaW9uZXMsIG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMgfSA9IG9wZXJhY2lvbmVzQ29udGV4dDtcclxuXHJcbiAgY29uc3QgYWxlcnRhc0NvbnRleHQgPSB1c2VDb250ZXh0KGFsZXJ0YUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgYWxlcnRhLCBtb3N0cmFyQWxlcnRhIH0gPSBhbGVydGFzQ29udGV4dDtcclxuXHJcbiAgLy9jb25zdCBbb3JkZW5hckZlY2hhLCBzZXRPcmRlbmFyRmVjaGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgIGlmKHRva2VuKSB7XHJcbiAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgICAvLyBzaSBoYXkgdW4gZXJyb3JcclxuICAgIGlmIChtZW5zYWplKSB7XHJcbiAgICAgIG1vc3RyYXJBbGVydGEobWVuc2FqZS5tc2csIG1lbnNhamUuY2F0ZWdvcmlhKTtcclxuICAgIH1cclxuXHJcbiAgICBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG5cclxuICB9LCBbbWVuc2FqZV0pO1xyXG5cclxuXHJcbiAgLy8gcmV2aXNhciBzaSBvcGVyYWNpb25lcyB0aWVuZSBjb250ZW5pZG9cclxuICAvL2lmKG9wZXJhY2lvbmVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxwPk5vIGhheSBvcGVyYWNpb25lczwvcD47XHJcblxyXG4gIGNvbnN0IG9yZGVuYXJQb3JGZWNoYSA9ICgpID0+IHtcclxuICAgIG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG4gICAgY29uc29sZS5sb2coXCJvcmRlbiBwb3IgZmVjaGFBQUFBQS4uLlwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9yZGVuYXJQb3JDYXRlZ29yaWEgPSBjYXRlZ29yaWEgPT4ge1xyXG4gICAgICBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzKGNhdGVnb3JpYSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib3JkZW4gcG9yIGNhdGVnb3JpYS4uLlwiKTtcclxuICB9XHJcblxyXG5cclxuLy8gRm9ybXVsYXJpbyB5IHZhbGlkYWNpw7NuIGNvbiBmb3JtaWsgeSBZdXBcclxuY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICBvcmRlbjogJycsXHJcbiAgICBjYXRlZ29yaWE6ICcnXHJcbiAgfSxcclxuICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XHJcblxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuICBcclxuICByZXR1cm4gKCBcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTQvNSB4bDp3LTUvNSBteC1hdXRvXCI+XHJcblxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTUwMCB0ZXh0LWNlbnRlciBteS00XCJcclxuICAgICAgICAgICAgPkxpc3RhZG8gZGUgb3BlcmFjaW9uZXMgZGVcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj4ge3VzdWFyaW8ubm9tYnJlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMTBcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJvcmRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPk9yZGVuYXIgcG9yOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvcmRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm9yZGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7ICBmb3JtaWsuaGFuZGxlQ2hhbmdlKGUpOyBvcmRlbmFyUG9yRmVjaGEoKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVjaGFcIiBkZWZhdWx0VmFsdWU+RmVjaGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2F0ZWdvcsOtYVwiPkNhdGVnb3LDrWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5vcmRlbiAmJiBmb3JtaWsuZXJyb3JzLm9yZGVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLm9yZGVufSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB7IChmb3JtaWsudmFsdWVzLm9yZGVuID09PSAnQ2F0ZWdvcsOtYScpID8gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5DYXRlZ29yaWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXRlZ29yaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7ICBmb3JtaWsuaGFuZGxlQ2hhbmdlKGUpOyBjb25zb2xlLmxvZyhlKSA7IG9yZGVuYXJQb3JDYXRlZ29yaWEoZm9ybWlrLnZhbHVlcy5jYXRlZ29yaWEpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRlZmF1bHRWYWx1ZSBkaXNhYmxlZCBoaWRkZW4+Q2F0ZWdvcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxpbWVudG9zXCI+QWxpbWVudG9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcnTDrWN1bG9zIGRlIGxpbXBpZXphXCI+QXJ0w61jdWxvcyBkZSBsaW1waWV6YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW1wdWVzdG9zXCI+SW1wdWVzdG9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEb25hY2nDs25cIj5Eb25hY2nDs248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN1ZWxkb1wiPlN1ZWxkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuY2F0ZWdvcmlhICYmIGZvcm1pay5lcnJvcnMuY2F0ZWdvcmlhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLmNhdGVnb3JpYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6ICggbnVsbCApIH1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuey8qXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIGhvdmVyOmJnLWJsYWNrIGJnLWJsdWUtNDAwIHB4LTUgcHktMyBtci01IHRleHQtd2hpdGUgZm9udC1ib2xkIHVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3JkZW5hclBvckZlY2hhKCkgfVxyXG4gICAgICAgICAgICAgICAgPlBvciBmZWNoYTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIGhvdmVyOmJnLWJsYWNrIGJnLWJsdWUtNDAwIHB4LTUgcHktMyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9yZGVuYXJQb3JDYXRlZ29yaWEoJ0ltcHVlc3RvcycpIH1cclxuICAgICAgICAgICAgICAgID5Qb3IgY2F0ZWdvcsOtYTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKi99XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcm91bmRlZC1sZyBweC01IHB5LTJcIj5cclxuICAgICAgICAgICAgICB7b3BlcmFjaW9uZXMubWFwKG9wZXJhY2lvbiA9PiBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29wZXJhY2lvbi5faWR9IGNsYXNzTmFtZT1cIlwiPiA8T3BlcmFjaW9uIG9wZXJhY2lvbj17b3BlcmFjaW9ufS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTGlzdGFkbztcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9