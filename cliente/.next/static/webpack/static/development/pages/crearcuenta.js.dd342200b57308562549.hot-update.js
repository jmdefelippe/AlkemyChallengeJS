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
      // mostrar mensaje ok
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        position: 'center',
        icon: 'success',
        title: 'Cuenta creada',
        width: 400,
        height: 400,
        timer: 2000,
        confirmButtonColor: '#60A5FA',
        confirmButtonText: 'Ok!'
      });
      router.push('/login');
    }
    /*    
        if(mensaje) {
          mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    */

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
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Crear Cuenta"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 120,
      columnNumber: 27
    }
  }), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, formik.errors.nombre, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 142,
      columnNumber: 27
    }
  }), formik.touched.email && formik.errors.email ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  }, formik.errors.email, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 163,
      columnNumber: 27
    }
  }), formik.touched.password && formik.errors.password ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 33
    }
  }, formik.errors.password, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "confirmarPassword",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
      lineNumber: 184,
      columnNumber: 27
    }
  }), formik.touched.confirmarPassword && formik.errors.confirmarPassword ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 33
    }
  }, formik.errors.confirmarPassword, " ")) : null), __jsx("div", {
    className: "grid grid-cols-1 divide-y divide-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 23
    }
  }, __jsx("input", {
    type: "submit",
    className: "bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold mt-3 mb-6",
    value: "Crear Cuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "text-gray-800 text-sm-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 31
    }
  }, "Iniciar sesi\xF3n en una cuenta existente")))), mensaje.categoria === 'alerta-error' && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    msg: mensaje.msg,
    categoria: mensaje.categoria,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 67
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhcmN1ZW50YS5qcyJdLCJuYW1lcyI6WyJDcmVhckN1ZW50YSIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwibWVuc2FqZSIsImF1dGVudGljYWRvIiwicmVnaXN0cmFyVXN1YXJpbyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInB1c2giLCJjYXRlZ29yaWEiLCJTd2FsIiwiZmlyZSIsInBvc2l0aW9uIiwiaWNvbiIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJ0aW1lciIsImNvbmZpcm1CdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5vbWJyZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtYXJQYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm9uZU9mIiwib25TdWJtaXQiLCJ2YWxvcmVzIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtDQUdBOztBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBOUI7QUFQd0IsTUFRaEJDLE9BUmdCLEdBUTJCSCxXQVIzQixDQVFoQkcsT0FSZ0I7QUFBQSxNQVFQQyxXQVJPLEdBUTJCSixXQVIzQixDQVFQSSxXQVJPO0FBQUEsTUFRTUMsZ0JBUk4sR0FRMkJMLFdBUjNCLENBUU1LLGdCQVJOLEVBVXhCOztBQUNBLE1BQU1DLE1BQU0s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QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURGLENBREosQ0FQRixDQXpGSixFQXVHT3hCLE9BQU8sQ0FBQ08sU0FBUixLQUFzQixjQUF2QixJQUEwQyxNQUFDLDBEQUFEO0FBQVEsT0FBRyxFQUFFUCxPQUFPLENBQUNxQyxHQUFyQjtBQUEwQixhQUFTLEVBQUVyQyxPQUFPLENBQUNPLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2R2hELENBREosQ0FESixDQUhGLENBRkosQ0FERjtBQXlIRCxDQWpORDs7R0FBTVgsVztVQVdXUSxxRCxFQWdDQWUsZ0Q7OztLQTNDWHZCLFc7QUFtTlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjcmVhcmN1ZW50YS5qcy5kZDM0MjIwMGI1NzMwODU2MjU0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlcsKgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5cbmltcG9ydCBBbGVydGEgZnJvbSAnLi4vY29tcG9uZW50cy9BbGVydGEnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLy9pbXBvcnQgYWxlcnRhQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2FsZXJ0YXMvYWxlcnRhQ29udGV4dCc7XG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcblxuY29uc3QgQ3JlYXJDdWVudGEgPSAoKSA9PiB7XG5cbi8qICAvLyBleHRyYWVyIGxvcyB2YWxvcmVzIGRlbCBjb250ZXh0XG4gIGNvbnN0IEFsZXJ0YUNvbnRleHQgPSB1c2VDb250ZXh0KGFsZXJ0YUNvbnRleHQpO1xuICBjb25zdCB7IGFsZXJ0YSwgbW9zdHJhckFsZXJ0YSB9ID0gQWxlcnRhQ29udGV4dDtcbiovXG4gIC8vIEFjY2VkZXIgYWwgc3RhdGVcbiAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbiAgY29uc3QgeyBtZW5zYWplLCBhdXRlbnRpY2FkbywgcmVnaXN0cmFyVXN1YXJpbyB9ID0gQXV0aENvbnRleHQ7XG4gIFxuICAvLyBOZXh0IHJvdXRlclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gICAgaWYoYXV0ZW50aWNhZG8pIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuXG4gICAgaWYgKG1lbnNhamUuY2F0ZWdvcmlhID09PSAnYWxlcnRhLW9rJykge1xuICAgICAgXG4gICAgICAvLyBtb3N0cmFyIG1lbnNhamUgb2tcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICB0aXRsZTogJ0N1ZW50YSBjcmVhZGEnLFxuICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgdGltZXI6IDIwMDAsXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyM2MEE1RkEnLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09rIScsXG4gICAgICB9KVxuXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgfVxuLyogICAgXG4gICAgaWYobWVuc2FqZSkge1xuICAgICAgbW9zdHJhckFsZXJ0YShtZW5zYWplLm1zZywgbWVuc2FqZS5jYXRlZ29yaWEpO1xuICAgIH1cbiovXG4gIH0sIFthdXRlbnRpY2FkbywgbWVuc2FqZV0pO1xuXG4gIC8vIEZvcm11bGFyaW8geSB2YWxpZGFjacOzbiBjb24gZm9ybWlrIHkgWXVwXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICAgIG5vbWJyZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBjb25maXJtYXJQYXNzd29yZDogJydcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgICAgIG5vbWJyZTogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgTm9tYnJlIGVzIE9ibGlnYXRvcmlvJyksXG4gICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAuZW1haWwoJ0VsIGVtYWlsIG5vIGVzIHbDoWxpZG8nKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIEVtYWlsIGVzIE9ibGlnYXRvcmlvJyksXG4gICAgICAgICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIHBhc3N3b3JkIG5vIHB1ZWRlIGlyIHZhY2lvJylcbiAgICAgICAgICAgICAgICAgICAgLm1pbig2LCAnRWwgcGFzc3dvcmQgZGViZSBjb250ZW5lciBhbCBtZW5vcyA2IGNhcmFjdGVyZXMnKSxcbiAgICAgICAgICBjb25maXJtYXJQYXNzd29yZDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgcGFzc3dvcmQgbm8gcHVlZGUgaXIgdmFjaW8nKVxuICAgICAgICAgICAgICAgICAgICAubWluKDYsICdFbCBwYXNzd29yZCBkZWJlIGNvbnRlbmVyIGFsIG1lbm9zIDYgY2FyYWN0ZXJlcycpXG4gICAgICAgICAgICAgICAgICAgIC5vbmVPZihbWXVwLnJlZigncGFzc3dvcmQnKSwgbnVsbF0sICdMb3MgUGFzc3dvcmRzIG5vIGNvaW5jaWRlbicpXG4gICAgICB9KSxcbiAgICAgXG4gICAgICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XG4gICAgICAgICAgcmVnaXN0cmFyVXN1YXJpbyh2YWxvcmVzKTtcbi8qXG4gICAgICAgICAgLy8gbW9zdHJhciBtZW5zYWplIG9rXG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQ3VlbnRhIGNyZWFkYScsXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICB0aW1lcjogMjAwMCxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyM2MEE1RkEnLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPayEnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgXG4qL1xuXG4gICAgICAgICAgLy9yb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgICAgXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKCBcbiAgICA8TGF5b3V0PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy00LzUgeGw6dy0zLzUgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNhbnMgZm9udC1ib2xkIHRleHQtYmxhY2stNTAwIHRleHQtY2VudGVyIG15LTRcIj5DcmVhciBDdWVudGE8L2gyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LW1kIHB4LTggcHQtNiBwYi04IG1iLTIwXCJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+Tm9tYnJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZSBkZSBVc3VhcmlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5vbWJyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQubm9tYnJlICYmIGZvcm1pay5lcnJvcnMubm9tYnJlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLm5vbWJyZX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGRlIFVzdWFyaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmVtYWlsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLmVtYWlsfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgZGUgVXN1YXJpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLnBhc3N3b3JkICYmIGZvcm1pay5lcnJvcnMucGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMucGFzc3dvcmR9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjb25maXJtYXJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5Db25maXJtYXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1hclBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwaXRlIGxhIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNvbmZpcm1hclBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuY29uZmlybWFyUGFzc3dvcmQgJiYgZm9ybWlrLmVycm9ycy5jb25maXJtYXJQYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5jb25maXJtYXJQYXNzd29yZH0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZGl2aWRlLXkgZGl2aWRlLWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBob3ZlcjpiZy1ncmF5LTkwMCB3LWZ1bGwgcC0yIHRleHQtd2hpdGUgdXBwZXJjYXNlIGZvbnQtYm9sZCBtdC0zIG1iLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkNyZWFyIEN1ZW50YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCB0ZXh0LXNtLTFcIj5JbmljaWFyIHNlc2nDs24gZW4gdW5hIGN1ZW50YSBleGlzdGVudGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIHsgKG1lbnNhamUuY2F0ZWdvcmlhID09PSAnYWxlcnRhLWVycm9yJykgJiYgPEFsZXJ0YSBtc2c9e21lbnNhamUubXNnfSBjYXRlZ29yaWE9e21lbnNhamUuY2F0ZWdvcmlhfSAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgey8qIGFsZXJ0YSA/ICggPGRpdiBjbGFzc05hbWU9e2BhbGVydGEgJHthbGVydGEuY2F0ZWdvcmlhfWB9PiB7YWxlcnRhLm1zZ30gPC9kaXY+ICk6IG51bGwgKi99XG5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgQ3JlYXJDdWVudGE7Il0sInNvdXJjZVJvb3QiOiIifQ==