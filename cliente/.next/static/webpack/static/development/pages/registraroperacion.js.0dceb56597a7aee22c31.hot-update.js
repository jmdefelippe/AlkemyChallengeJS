webpackHotUpdate("static\\development\\pages\\registraroperacion.js",{

/***/ "./pages/registraroperacion.js":
/*!*************************************!*\
  !*** ./pages/registraroperacion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/operaciones/operacionContext */ "./context/operaciones/operacionContext.js");
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Alerta */ "./components/Alerta.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\registraroperacion.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var RegistrarOperacion = function RegistrarOperacion() {
  _s();

  // Next router
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])(); // Acceder al state

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var mensaje = AuthContext.mensaje,
      usuarioAutenticado = AuthContext.usuarioAutenticado;
  var OperacionContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_operaciones_operacionContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var agregarOperacion = OperacionContext.agregarOperacion;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = localStorage.getItem('token');

    if (token) {
      usuarioAutenticado();
    } else {
      router.push('/login');
    } // eslint-disable-next-line

  }, []); // Formulario y validación con formik y Yup

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      concepto: '',
      monto: '',
      fecha: '',
      tipo: '',
      categoria: '',
      usuario: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
      concepto: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El concepto es obligatorio'),
      monto: yup__WEBPACK_IMPORTED_MODULE_3__["number"]().required('El monto es obligatorio'),
      fecha: yup__WEBPACK_IMPORTED_MODULE_3__["date"]().required('La fecha es obligatoria'),
      tipo: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El tipo es obligatorio'),
      categoria: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('La categoría es obligatoria')
    }),
    onSubmit: function onSubmit(valores) {
      agregarOperacion(valores); // mostrar mensaje ok

      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        position: 'center',
        icon: 'success',
        title: 'Operación agregada correctamente',
        width: 400,
        height: 400,
        timer: 2000,
        confirmButtonColor: '#60A5FA',
        confirmButtonText: 'Ok!'
      });
      router.push('/listado'); // reiniciar el form
    }
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Registrar Operaci\xF3n"), mensaje && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 24
    }
  }), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "concepto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 27
    }
  }, "Concepto"), __jsx("input", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "concepto",
    placeholder: "Concepto",
    value: formik.values.concepto,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 27
    }
  }), formik.touched.concepto && formik.errors.concepto ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, formik.errors.concepto, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "monto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 27
    }
  }, "Monto"), __jsx("input", {
    type: "number",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "monto",
    placeholder: "Monto",
    value: formik.values.monto,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 27
    }
  }), formik.touched.monto && formik.errors.monto ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, formik.errors.monto, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "fecha",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 27
    }
  }, "Fecha"), __jsx("input", {
    type: "date",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "fecha",
    placeholder: "Fecha",
    value: formik.values.fecha,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 27
    }
  }), formik.touched.fecha && formik.errors.fecha ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 33
    }
  }, formik.errors.fecha, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "tipo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 27
    }
  }, "Tipo"), __jsx("select", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "tipo",
    placeholder: "Tipo",
    value: formik.values.tipo,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 27
    }
  }, __jsx("option", {
    value: "",
    defaultValue: true,
    disabled: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 33
    }
  }, "Tipo"), __jsx("option", {
    value: "Ingreso",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 33
    }
  }, "Ingreso"), __jsx("option", {
    value: "Egreso",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 33
    }
  }, "Egreso")), formik.touched.tipo && formik.errors.tipo ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 33
    }
  }, formik.errors.tipo, " ")) : null), formik.values.tipo === 'Ingreso' || formik.values.tipo === 'ingreso' ? __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 31
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
      lineNumber: 191,
      columnNumber: 31
    }
  }, __jsx("option", {
    value: "",
    defaultValue: true,
    disabled: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 37
    }
  }, "Categor\xEDa"), __jsx("option", {
    value: "Sueldo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 37
    }
  }, "Sueldo"), __jsx("option", {
    value: "Donaci\xF3n",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 37
    }
  }, "Donaci\xF3n")), formik.touched.categoria && formik.errors.categoria ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 37
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 37
    }
  }, formik.errors.categoria, " ")) : null) : null, formik.values.tipo === 'Egreso' || formik.values.tipo === 'egreso' ? __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 31
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
      lineNumber: 223,
      columnNumber: 31
    }
  }, __jsx("option", {
    value: "",
    defaultValue: true,
    disabled: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 37
    }
  }, "Categor\xEDa"), __jsx("option", {
    value: "Alimentos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 37
    }
  }, "Alimentos"), __jsx("option", {
    value: "Impuestos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 37
    }
  }, "Impuestos"), __jsx("option", {
    value: "Art\xEDculos de limpieza",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 37
    }
  }, "Art\xEDculos de limpieza")), formik.touched.categoria && formik.errors.categoria ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 37
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 37
    }
  }, formik.errors.categoria, " ")) : null) : null, __jsx("input", {
    type: "submit",
    className: "bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold",
    value: "Registrar Operaci\xF3n",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 23
    }
  }))))));
};

_s(RegistrarOperacion, "dl7/KIVhijpPP5wBk4lNVbL5Ix0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"]];
});

_c = RegistrarOperacion;
/* harmony default export */ __webpack_exports__["default"] = (RegistrarOperacion);

var _c;

$RefreshReg$(_c, "RegistrarOperacion");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3RyYXJvcGVyYWNpb24uanMiXSwibmFtZXMiOlsiUmVnaXN0cmFyT3BlcmFjaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiQXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXV0aENvbnRleHQiLCJtZW5zYWplIiwidXN1YXJpb0F1dGVudGljYWRvIiwiT3BlcmFjaW9uQ29udGV4dCIsIm9wZXJhY2lvbkNvbnRleHQiLCJhZ3JlZ2FyT3BlcmFjaW9uIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJjb25jZXB0byIsIm1vbnRvIiwiZmVjaGEiLCJ0aXBvIiwiY2F0ZWdvcmlhIiwidXN1YXJpbyIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsb3JlcyIsIlN3YWwiLCJmaXJlIiwicG9zaXRpb24iLCJpY29uIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsInRpbWVyIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJ0b3VjaGVkIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUNqQztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FGaUMsQ0FHL0I7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUorQixNQUt2QkMsT0FMdUIsR0FLU0gsV0FMVCxDQUt2QkcsT0FMdUI7QUFBQSxNQUtk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RUFxQk0xQixNQUFNLENBQUMyQixPQUFQLENBQWVwQixTQUFmLElBQTRCUCxNQUFNLENBQUM0QixNQUFQLENBQWNyQixTQUExQyxHQUNBO0FBQUssYUFBUyxFQUFDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVAsTUFBTSxDQUFDNEIsTUFBUCxDQUFjckIsU0FBbEIsTUFGSixDQURBLEdBS0UsSUExQlIsQ0FGRixHQThCSSxJQWhLVixFQXNNSTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLHlFQUZaO0FBR0UsU0FBSyxFQUFDLHdCQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0TUosQ0FESixDQURKLENBTEYsQ0FESixDQUZGO0FBMk5ELENBNVJEOztHQUFNdkIsa0I7VUFFU0UscUQsRUFzQkVlLGdEOzs7S0F4QlhqQixrQjtBQThSU0EsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlZ2lzdHJhcm9wZXJhY2lvbi5qcy4wZGNlYjU2NTk3YTdhZWUyMmMzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0JztcclxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgdXNlUm91dGVywqB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFJlZ2lzdHJhck9wZXJhY2lvbiA9ICgpID0+IHtcclxuLy8gTmV4dCByb3V0ZXJcclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gQWNjZWRlciBhbCBzdGF0ZVxyXG4gIGNvbnN0IEF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgeyBtZW5zYWplLCB1c3VhcmlvQXV0ZW50aWNhZG/CoH0gPSBBdXRoQ29udGV4dDtcclxuXHJcbiAgY29uc3QgT3BlcmFjaW9uQ29udGV4dCA9IHVzZUNvbnRleHQob3BlcmFjaW9uQ29udGV4dCk7XHJcbiAgY29uc3QgeyBhZ3JlZ2FyT3BlcmFjaW9uIH0gPSBPcGVyYWNpb25Db250ZXh0O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcbiAgICBpZih0b2tlbikge1xyXG4gICAgICB1c3VhcmlvQXV0ZW50aWNhZG8oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBGb3JtdWxhcmlvIHkgdmFsaWRhY2nDs24gY29uIGZvcm1payB5IFl1cFxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICBjb25jZXB0bzogJycsXHJcbiAgICAgICAgbW9udG86ICcnLFxyXG4gICAgICAgIGZlY2hhOiAnJyxcclxuICAgICAgICB0aXBvOiAnJyxcclxuICAgICAgICBjYXRlZ29yaWE6ICcnLFxyXG4gICAgICAgIHVzdWFyaW86ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgICBjb25jZXB0bzogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIGNvbmNlcHRvIGVzIG9ibGlnYXRvcmlvJyksXHJcbiAgICAgICAgICAgIG1vbnRvOiBZdXAubnVtYmVyKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgbW9udG8gZXMgb2JsaWdhdG9yaW8nKSxcclxuICAgICAgICAgICAgZmVjaGE6IFl1cC5kYXRlKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnTGEgZmVjaGEgZXMgb2JsaWdhdG9yaWEnKSxcclxuICAgICAgICAgICAgdGlwbzogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIHRpcG8gZXMgb2JsaWdhdG9yaW8nKSxcclxuICAgICAgICAgICAgY2F0ZWdvcmlhOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnTGEgY2F0ZWdvcsOtYSBlcyBvYmxpZ2F0b3JpYScpXHJcbiAgICAgIH0pLFxyXG4gICAgICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XHJcbiAgICAgICAgICBhZ3JlZ2FyT3BlcmFjaW9uKHZhbG9yZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gbW9zdHJhciBtZW5zYWplIG9rXHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdPcGVyYWNpw7NuIGFncmVnYWRhIGNvcnJlY3RhbWVudGUnLFxyXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgdGltZXI6IDIwMDAsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyM2MEE1RkEnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09rIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9saXN0YWRvJyk7XHJcbiAgICAgICAgICAvLyByZWluaWNpYXIgZWwgZm9ybVxyXG4gICAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTQvNSB4bDp3LTMvNSBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTUwMCB0ZXh0LWNlbnRlciBteS00XCI+UmVnaXN0cmFyIE9wZXJhY2nDs248L2gyPlxyXG5cclxuICAgICAgICAgIHsgbWVuc2FqZSAmJiA8QWxlcnRhIC8+fVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1tZCBweC04IHB0LTYgcGItOCBtYi0yMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY29uY2VwdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5Db25jZXB0bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmNlcHRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25jZXB0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNvbmNlcHRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmNvbmNlcHRvICYmIGZvcm1pay5lcnJvcnMuY29uY2VwdG8gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuY29uY2VwdG99IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibW9udG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5Nb250bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibW9udG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vbnRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubW9udG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQubW9udG8gJiYgZm9ybWlrLmVycm9ycy5tb250byA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5tb250b30gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJmZWNoYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPkZlY2hhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVjaGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZlY2hhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZmVjaGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuZmVjaGEgJiYgZm9ybWlrLmVycm9ycy5mZWNoYSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5mZWNoYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0aXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+VGlwbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudGlwb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkZWZhdWx0VmFsdWUgZGlzYWJsZWQgaGlkZGVuPlRpcG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW5ncmVzb1wiPkluZ3Jlc288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRWdyZXNvXCI+RWdyZXNvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQudGlwbyAmJiBmb3JtaWsuZXJyb3JzLnRpcG8gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMudGlwb30gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7ICgoZm9ybWlrLnZhbHVlcy50aXBvID09PSAnSW5ncmVzbycpIHx8IChmb3JtaWsudmFsdWVzLnRpcG8gPT09ICdpbmdyZXNvJykpID8gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DYXRlZ29yaWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXRlZ29yaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGVmYXVsdFZhbHVlIGRpc2FibGVkIGhpZGRlbj5DYXRlZ29yw61hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdWVsZG9cIj5TdWVsZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRvbmFjacOzblwiPkRvbmFjacOzbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuY2F0ZWdvcmlhICYmIGZvcm1pay5lcnJvcnMuY2F0ZWdvcmlhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLmNhdGVnb3JpYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoIG51bGwgKSB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgeyAoKGZvcm1pay52YWx1ZXMudGlwbyA9PT0gJ0VncmVzbycpIHx8IChmb3JtaWsudmFsdWVzLnRpcG8gPT09ICdlZ3Jlc28nKSkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Q2F0ZWdvcmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuY2F0ZWdvcmlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRlZmF1bHRWYWx1ZSBkaXNhYmxlZCBoaWRkZW4+Q2F0ZWdvcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsaW1lbnRvc1wiPkFsaW1lbnRvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW1wdWVzdG9zXCI+SW1wdWVzdG9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcnTDrWN1bG9zIGRlIGxpbXBpZXphXCI+QXJ0w61jdWxvcyBkZSBsaW1waWV6YTwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmNhdGVnb3JpYSAmJiBmb3JtaWsuZXJyb3JzLmNhdGVnb3JpYSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5jYXRlZ29yaWF9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6ICggbnVsbCApIH1cclxuXHJcblxyXG5cclxuXHJcbnsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5DYXRlZ29yaWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2F0ZWdvcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXRlZ29yaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGVmYXVsdFZhbHVlIGRpc2FibGVkIGhpZGRlbj5DYXRlZ29yw61hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN1ZWxkb1wiPlN1ZWxkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEb25hY2nDs25cIj5Eb25hY2nDs248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxpbWVudG9zXCI+QWxpbWVudG9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkltcHVlc3Rvc1wiPkltcHVlc3Rvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcnTDrWN1bG9zIGRlIGxpbXBpZXphXCI+QXJ0w61jdWxvcyBkZSBsaW1waWV6YTwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5jYXRlZ29yaWEgJiYgZm9ybWlrLmVycm9ycy5jYXRlZ29yaWEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuY2F0ZWdvcmlhfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIGhvdmVyOmJnLWdyYXktOTAwIHctZnVsbCBwLTIgdGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJSZWdpc3RyYXIgT3BlcmFjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmFyT3BlcmFjaW9uOyJdLCJzb3VyY2VSb290IjoiIn0=