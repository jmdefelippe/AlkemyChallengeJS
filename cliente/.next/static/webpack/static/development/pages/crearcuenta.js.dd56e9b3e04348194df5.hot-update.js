webpackHotUpdate("static\\development\\pages\\crearcuenta.js",{

/***/ "./pages/crearcuenta.js":
/*!******************************!*\
  !*** ./pages/crearcuenta.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Alerta */ "./components/Alerta.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\crearcuenta.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 //import alertaContext from '../context/alertas/alertaContext';



var CrearCuenta = function CrearCuenta() {
  _s();

  /*  // extraer los valores del context
    const AlertaContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = AlertaContext;
  */
  // Acceder al state
  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_8__["default"]);
  var mensaje = AuthContext.mensaje,
      autenticado = AuthContext.autenticado,
      registrarUsuario = AuthContext.registrarUsuario; // Next router

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (autenticado) {
      router.push('/');
    }

    if (mensaje.categoria === 'alerta-ok') {
      console.log("comparacion");
      console.log(mensaje.categoria === 'alerta-ok');
      router.push('/login');
    }
    /*    
        if(mensaje) {
          mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    */

  }, [autenticado]); // Formulario y validación con formik y Yup

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      nombre: '',
      email: '',
      password: '',
      confirmarPassword: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
      nombre: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('El Nombre es Obligatorio'),
      email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email('El email no es válido').required('El Email es Obligatorio'),
      password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('El password no puede ir vacio').min(6, 'El password debe contener al menos 6 caracteres'),
      confirmarPassword: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('El password no puede ir vacio').min(6, 'El password debe contener al menos 6 caracteres').oneOf([yup__WEBPACK_IMPORTED_MODULE_4__["ref"]('password'), null], 'Los Passwords no coinciden')
    }),
    onSubmit: function onSubmit(valores) {
      registrarUsuario(valores);
      /*
                // mostrar mensaje ok
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Cuenta creada',
                  width: 400,
                  height: 400,
                  timer: 2000,
                  confirmButtonColor: '#60A5FA',
                  confirmButtonText: 'Ok!',
                })
                
      */
      //router.push('/login');
    }
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Crear Cuenta"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 27
    }
  }, "Nombre"), __jsx("input", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "nombre",
    placeholder: "Nombre de Usuario",
    value: formik.values.nombre,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 27
    }
  }), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 33
    }
  }, formik.errors.nombre, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 27
    }
  }, "Email"), __jsx("input", {
    type: "email",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "email",
    placeholder: "Email de Usuario",
    value: formik.values.email,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 27
    }
  }), formik.touched.email && formik.errors.email ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, formik.errors.email, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 27
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "password",
    placeholder: "Password de Usuario",
    value: formik.values.password,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 27
    }
  }), formik.touched.password && formik.errors.password ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 33
    }
  }, formik.errors.password, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "confirmarPassword",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 27
    }
  }, "Confirmar Password"), __jsx("input", {
    type: "password",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "confirmarPassword",
    placeholder: "Repite la Password",
    value: formik.values.confirmarPassword,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 27
    }
  }), formik.touched.confirmarPassword && formik.errors.confirmarPassword ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 33
    }
  }, formik.errors.confirmarPassword, " ")) : null), __jsx("div", {
    className: "grid grid-cols-1 divide-y divide-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 23
    }
  }, __jsx("input", {
    type: "submit",
    className: "bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold mt-3 mb-6",
    value: "Crear Cuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "text-gray-800 text-sm-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 31
    }
  }, "Iniciar sesi\xF3n en una cuenta existente")))), mensaje && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    msg: mensaje.msg,
    categoria: mensaje.categoria,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 36
    }
  }))))));
};

_s(CrearCuenta, "2j99ihpnGtN/ruATsA0K61U0+60=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"]];
});

_c = CrearCuenta;
/* harmony default export */ __webpack_exports__["default"] = (CrearCuenta);

var _c;

$RefreshReg$(_c, "CrearCuenta");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhcmN1ZW50YS5qcyJdLCJuYW1lcyI6WyJDcmVhckN1ZW50YSIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwibWVuc2FqZSIsImF1dGVudGljYWRvIiwicmVnaXN0cmFyVXN1YXJpbyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInB1c2giLCJjYXRlZ29yaWEiLCJjb25zb2xlIiwibG9nIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5vbWJyZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtYXJQYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm9uZU9mIiwib25TdWJtaXQiLCJ2YWxvcmVzIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtDQUdBOztBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBOUI7QUFQd0IsTUFRaEJDLE9BUmdCLEdBUTJCSCxXQVIzQixDQVFoQkcsT0FSZ0I7QUFBQSxNQVFQQyxXQVJPLEdBUTJCSixXQVIzQixDQVFQSSxXQVJPO0FBQUEsTUFRTUMsZ0JBUk4sR0FRMkJMLFdBUjNCLENBUU1LLGdCQVJOLEVBVXhCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBRWQsUUFBR0osV0FBSCxFQUFnQjtBQUNkRSxZQUFNLENBQUNHLElBQVAsQ0FBWSxH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O0FBQUEsSUF2R2pCLENBREosQ0FESixDQUhGLENBRkosQ0FERjtBQXlIRCxDQXRNRDs7R0FBTVgsVztVQVdXUSxxRCxFQXFCQU8sZ0Q7OztLQWhDWGYsVztBQXdNU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNyZWFyY3VlbnRhLmpzLmRkNTZlOWIzZTA0MzQ4MTk0ZGY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVywqB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vL2ltcG9ydCBhbGVydGFDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYWxlcnRhcy9hbGVydGFDb250ZXh0JztcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnO1xuXG5jb25zdCBDcmVhckN1ZW50YSA9ICgpID0+IHtcblxuLyogIC8vIGV4dHJhZXIgbG9zIHZhbG9yZXMgZGVsIGNvbnRleHRcbiAgY29uc3QgQWxlcnRhQ29udGV4dCA9IHVzZUNvbnRleHQoYWxlcnRhQ29udGV4dCk7XG4gIGNvbnN0IHsgYWxlcnRhLCBtb3N0cmFyQWxlcnRhIH0gPSBBbGVydGFDb250ZXh0O1xuKi9cbiAgLy8gQWNjZWRlciBhbCBzdGF0ZVxuICBjb25zdCBBdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xuICBjb25zdCB7IG1lbnNhamUsIGF1dGVudGljYWRvLCByZWdpc3RyYXJVc3VhcmlvIH0gPSBBdXRoQ29udGV4dDtcbiAgXG4gIC8vIE5leHQgcm91dGVyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBcbiAgICBpZihhdXRlbnRpY2Fkbykge1xuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG5cbiAgICBpZiAobWVuc2FqZS5jYXRlZ29yaWEgPT09ICdhbGVydGEtb2snKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbXBhcmFjaW9uXCIpO1xuICAgICAgY29uc29sZS5sb2coKG1lbnNhamUuY2F0ZWdvcmlhID09PSAnYWxlcnRhLW9rJykpO1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgIH1cbi8qICAgIFxuICAgIGlmKG1lbnNhamUpIHtcbiAgICAgIG1vc3RyYXJBbGVydGEobWVuc2FqZS5tc2csIG1lbnNhamUuY2F0ZWdvcmlhKTtcbiAgICB9XG4qL1xuICB9LCBbYXV0ZW50aWNhZG9dKTtcblxuICAvLyBGb3JtdWxhcmlvIHkgdmFsaWRhY2nDs24gY29uIGZvcm1payB5IFl1cFxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgICBub21icmU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgY29uZmlybWFyUGFzc3dvcmQ6ICcnXG4gICAgICB9LFxuICAgICAgXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgICAgICBub21icmU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIE5vbWJyZSBlcyBPYmxpZ2F0b3JpbycpLFxuICAgICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLmVtYWlsKCdFbCBlbWFpbCBubyBlcyB2w6FsaWRvJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBFbWFpbCBlcyBPYmxpZ2F0b3JpbycpLFxuICAgICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBwYXNzd29yZCBubyBwdWVkZSBpciB2YWNpbycpXG4gICAgICAgICAgICAgICAgICAgIC5taW4oNiwgJ0VsIHBhc3N3b3JkIGRlYmUgY29udGVuZXIgYWwgbWVub3MgNiBjYXJhY3RlcmVzJyksXG4gICAgICAgICAgY29uZmlybWFyUGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIHBhc3N3b3JkIG5vIHB1ZWRlIGlyIHZhY2lvJylcbiAgICAgICAgICAgICAgICAgICAgLm1pbig2LCAnRWwgcGFzc3dvcmQgZGViZSBjb250ZW5lciBhbCBtZW5vcyA2IGNhcmFjdGVyZXMnKVxuICAgICAgICAgICAgICAgICAgICAub25lT2YoW1l1cC5yZWYoJ3Bhc3N3b3JkJyksIG51bGxdLCAnTG9zIFBhc3N3b3JkcyBubyBjb2luY2lkZW4nKVxuICAgICAgfSksXG4gICAgIFxuICAgICAgb25TdWJtaXQ6IHZhbG9yZXMgPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhclVzdWFyaW8odmFsb3Jlcyk7XG4vKlxuICAgICAgICAgIC8vIG1vc3RyYXIgbWVuc2FqZSBva1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICB0aXRsZTogJ0N1ZW50YSBjcmVhZGEnLFxuICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgdGltZXI6IDIwMDAsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjNjBBNUZBJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2shJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIFxuKi9cblxuICAgICAgICAgIC8vcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICAgIFxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuICggXG4gICAgPExheW91dD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNC81IHhsOnctMy81IG14LWF1dG9cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTUwMCB0ZXh0LWNlbnRlciBteS00XCI+Q3JlYXIgQ3VlbnRhPC9oMj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWxnXCI+XG4gICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1tZCBweC04IHB0LTYgcGItOCBtYi0yMFwiXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPk5vbWJyZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmUgZGUgVXN1YXJpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5ub21icmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLm5vbWJyZSAmJiBmb3JtaWsuZXJyb3JzLm5vbWJyZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5ub21icmV9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBkZSBVc3VhcmlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5lbWFpbH0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkIGRlIFVzdWFyaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5wYXNzd29yZCAmJiBmb3JtaWsuZXJyb3JzLnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY29uZmlybWFyUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+Q29uZmlybWFyIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtYXJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGl0ZSBsYSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jb25maXJtYXJQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmNvbmZpcm1hclBhc3N3b3JkICYmIGZvcm1pay5lcnJvcnMuY29uZmlybWFyUGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuY29uZmlybWFyUGFzc3dvcmR9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGRpdmlkZS15IGRpdmlkZS1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaG92ZXI6YmctZ3JheS05MDAgdy1mdWxsIHAtMiB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBmb250LWJvbGQgbXQtMyBtYi02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJDcmVhciBDdWVudGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgdGV4dC1zbS0xXCI+SW5pY2lhciBzZXNpw7NuIGVuIHVuYSBjdWVudGEgZXhpc3RlbnRlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7IG1lbnNhamUgJiYgPEFsZXJ0YSBtc2c9e21lbnNhamUubXNnfSBjYXRlZ29yaWE9e21lbnNhamUuY2F0ZWdvcmlhfSAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgey8qIGFsZXJ0YSA/ICggPGRpdiBjbGFzc05hbWU9e2BhbGVydGEgJHthbGVydGEuY2F0ZWdvcmlhfWB9PiB7YWxlcnRhLm1zZ30gPC9kaXY+ICk6IG51bGwgKi99XG5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgQ3JlYXJDdWVudGE7Il0sInNvdXJjZVJvb3QiOiIifQ==