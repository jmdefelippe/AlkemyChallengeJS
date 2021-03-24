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
/* harmony import */ var _context_alertas_alertaContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/alertas/alertaContext */ "./context/alertas/alertaContext.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\crearcuenta.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var CrearCuenta = function CrearCuenta() {
  _s();

  // extraer los valores del context
  var AlertaContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_alertas_alertaContext__WEBPACK_IMPORTED_MODULE_8__["default"]);
  var alerta = AlertaContext.alerta,
      mostrarAlerta = AlertaContext.mostrarAlerta; // Acceder al state

  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_9__["default"]);
  var mensaje = AuthContext.mensaje,
      autenticado = AuthContext.autenticado,
      registrarUsuario = AuthContext.registrarUsuario; // Next router

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (autenticado) {
      router.push('/');
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [autenticado, mensaje]); // Formulario y validación con formik y Yup

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
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Crear Cuenta"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 101,
      columnNumber: 27
    }
  }), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, formik.errors.nombre, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 123,
      columnNumber: 27
    }
  }), formik.touched.email && formik.errors.email ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, formik.errors.email, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 144,
      columnNumber: 27
    }
  }), formik.touched.password && formik.errors.password ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, formik.errors.password, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "confirmarPassword",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 165,
      columnNumber: 27
    }
  }), formik.touched.confirmarPassword && formik.errors.confirmarPassword ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }, formik.errors.confirmarPassword, " ")) : null), __jsx("div", {
    className: "grid grid-cols-1 divide-y divide-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 23
    }
  }, __jsx("input", {
    type: "submit",
    className: "bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold mt-3 mb-6",
    value: "Crear Cuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "text-gray-800 text-sm-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 31
    }
  }, "Iniciar sesi\xF3n en una cuenta existente")))), mensaje && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 36
    }
  }))))));
};

_s(CrearCuenta, "ZBqLqTyCzIocHCFq4fiWOKWAwLs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhcmN1ZW50YS5qcyJdLCJuYW1lcyI6WyJDcmVhckN1ZW50YSIsIkFsZXJ0YUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiYWxlcnRhQ29udGV4dCIsImFsZXJ0YSIsIm1vc3RyYXJBbGVydGEiLCJBdXRoQ29udGV4dCIsImF1dGhDb250ZXh0IiwibWVuc2FqZSIsImF1dGVudGljYWRvIiwicmVnaXN0cmFyVXN1YXJpbyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInB1c2giLCJtc2ciLCJjYXRlZ29yaWEiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibm9tYnJlIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1hclBhc3N3b3JkIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwibWluIiwib25lT2YiLCJvblN1Ym1pdCIsInZhbG9yZXMiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJ0b3VjaGVkIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBRXhCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyx3REFBVSxDQUFDQyxzRUFBRCxDQUFoQztBQUh3QixNQUloQkMsTUFKZ0IsR0FJVUgsYUFKVixDQUloQkcsTUFKZ0I7QUFBQSxNQUlSQyxhQUpRLEdBSVVKLGFBSlYsQ0FJUkksYUFKUSxFQU14Qjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdKLHdEQUFVLENBQUNLLGlFQUFELENBQTlCO0FBUHdCLE1BUWhCQyxPQVJnQixHQVEyQkYsV0FSM0IsQ0FRaEJFLE9BUmdCO0FBQUEsTUFRUEMsV0FSTyxHQVEyQkgsV0FSM0IsQ0FRUEcs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QixDQURKLENBREosQ0FIRixDQUZKLENBREY7QUEwSEQsQ0EvTEQ7O0dBQU1SLFc7VUFXV1kscUQsRUFjQU0sZ0Q7OztLQXpCWGxCLFc7QUFpTVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjcmVhcmN1ZW50YS5qcy4wYTE0YjI5ZDhhZmY4ZjhjNWYyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlcsKgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5cbmltcG9ydCBBbGVydGEgZnJvbSAnLi4vY29tcG9uZW50cy9BbGVydGEnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuaW1wb3J0IGFsZXJ0YUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hbGVydGFzL2FsZXJ0YUNvbnRleHQnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dCc7XG5cbmNvbnN0IENyZWFyQ3VlbnRhID0gKCkgPT4ge1xuXG4gIC8vIGV4dHJhZXIgbG9zIHZhbG9yZXMgZGVsIGNvbnRleHRcbiAgY29uc3QgQWxlcnRhQ29udGV4dCA9IHVzZUNvbnRleHQoYWxlcnRhQ29udGV4dCk7XG4gIGNvbnN0IHsgYWxlcnRhLCBtb3N0cmFyQWxlcnRhIH0gPSBBbGVydGFDb250ZXh0O1xuXG4gIC8vIEFjY2VkZXIgYWwgc3RhdGVcbiAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbiAgY29uc3QgeyBtZW5zYWplLCBhdXRlbnRpY2FkbywgcmVnaXN0cmFyVXN1YXJpbyB9ID0gQXV0aENvbnRleHQ7XG5cbiAgLy8gTmV4dCByb3V0ZXJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgIGlmKGF1dGVudGljYWRvKSB7XG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cbiAgICBpZihtZW5zYWplKSB7XG4gICAgICBtb3N0cmFyQWxlcnRhKG1lbnNhamUubXNnLCBtZW5zYWplLmNhdGVnb3JpYSk7XG4gICAgfVxuICB9LCBbYXV0ZW50aWNhZG8sIG1lbnNhamVdKTtcblxuXG4gIC8vIEZvcm11bGFyaW8geSB2YWxpZGFjacOzbiBjb24gZm9ybWlrIHkgWXVwXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICAgIG5vbWJyZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBjb25maXJtYXJQYXNzd29yZDogJydcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgICAgIG5vbWJyZTogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgTm9tYnJlIGVzIE9ibGlnYXRvcmlvJyksXG4gICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAuZW1haWwoJ0VsIGVtYWlsIG5vIGVzIHbDoWxpZG8nKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIEVtYWlsIGVzIE9ibGlnYXRvcmlvJyksXG4gICAgICAgICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIHBhc3N3b3JkIG5vIHB1ZWRlIGlyIHZhY2lvJylcbiAgICAgICAgICAgICAgICAgICAgLm1pbig2LCAnRWwgcGFzc3dvcmQgZGViZSBjb250ZW5lciBhbCBtZW5vcyA2IGNhcmFjdGVyZXMnKSxcbiAgICAgICAgICBjb25maXJtYXJQYXNzd29yZDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgcGFzc3dvcmQgbm8gcHVlZGUgaXIgdmFjaW8nKVxuICAgICAgICAgICAgICAgICAgICAubWluKDYsICdFbCBwYXNzd29yZCBkZWJlIGNvbnRlbmVyIGFsIG1lbm9zIDYgY2FyYWN0ZXJlcycpXG4gICAgICAgICAgICAgICAgICAgIC5vbmVPZihbWXVwLnJlZigncGFzc3dvcmQnKSwgbnVsbF0sICdMb3MgUGFzc3dvcmRzIG5vIGNvaW5jaWRlbicpXG4gICAgICB9KSxcbiAgICAgXG4gICAgICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XG4gICAgICAgICAgcmVnaXN0cmFyVXN1YXJpbyh2YWxvcmVzKTtcbi8qXG4gICAgICAgICAgLy8gbW9zdHJhciBtZW5zYWplIG9rXG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQ3VlbnRhIGNyZWFkYScsXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICB0aW1lcjogMjAwMCxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyM2MEE1RkEnLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPayEnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgXG4qL1xuICAgICAgICAgIC8vcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICAgIFxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuICggXG4gICAgPExheW91dD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNC81IHhsOnctMy81IG14LWF1dG9cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTUwMCB0ZXh0LWNlbnRlciBteS00XCI+Q3JlYXIgQ3VlbnRhPC9oMj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWxnXCI+XG4gICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1tZCBweC04IHB0LTYgcGItOCBtYi0yMFwiXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPk5vbWJyZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmUgZGUgVXN1YXJpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5ub21icmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLm5vbWJyZSAmJiBmb3JtaWsuZXJyb3JzLm5vbWJyZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5ub21icmV9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBkZSBVc3VhcmlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5lbWFpbH0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkIGRlIFVzdWFyaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5wYXNzd29yZCAmJiBmb3JtaWsuZXJyb3JzLnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY29uZmlybWFyUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+Q29uZmlybWFyIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtYXJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGl0ZSBsYSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jb25maXJtYXJQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmNvbmZpcm1hclBhc3N3b3JkICYmIGZvcm1pay5lcnJvcnMuY29uZmlybWFyUGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuY29uZmlybWFyUGFzc3dvcmR9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGRpdmlkZS15IGRpdmlkZS1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaG92ZXI6YmctZ3JheS05MDAgdy1mdWxsIHAtMiB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBmb250LWJvbGQgbXQtMyBtYi02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJDcmVhciBDdWVudGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgdGV4dC1zbS0xXCI+SW5pY2lhciBzZXNpw7NuIGVuIHVuYSBjdWVudGEgZXhpc3RlbnRlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7IG1lbnNhamUgJiYgPEFsZXJ0YSAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgey8qIGFsZXJ0YSA/ICggPGRpdiBjbGFzc05hbWU9e2BhbGVydGEgJHthbGVydGEuY2F0ZWdvcmlhfWB9PiB7YWxlcnRhLm1zZ30gPC9kaXY+ICk6IG51bGwgKi99XG5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBDcmVhckN1ZW50YTsiXSwic291cmNlUm9vdCI6IiJ9