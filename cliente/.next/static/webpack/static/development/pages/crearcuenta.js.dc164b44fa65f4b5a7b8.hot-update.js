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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/auth/authContext */ "./context/auth/authContext.js");
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Alerta */ "./components/Alerta.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\crearcuenta.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var CrearCuenta = function CrearCuenta() {
  _s();

  // Acceder al state
  var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var mensaje = AuthContext.mensaje,
      registrarUsuario = AuthContext.registrarUsuario; // Formulario y validación con formik y Yup

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"])({
    initialValues: {
      nombre: '',
      email: '',
      password: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
      nombre: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('El Nombre es Obligatorio'),
      email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email('El email no es válido').required('El Email es Obligatorio'),
      password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('El password no puede ir vacio').min(6, 'El password debe contener al menos 6 caracteres')
    }),
    onSubmit: function onSubmit(valores) {
      registrarUsuario(valores);
    }
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto mb-32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Crear Cuenta"), mensaje && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 24
    }
  }), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 56,
      columnNumber: 27
    }
  }), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, formik.errors.nombre, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 78,
      columnNumber: 27
    }
  }), formik.touched.email && formik.errors.email ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, formik.errors.email, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 99,
      columnNumber: 27
    }
  }), formik.touched.password && formik.errors.password ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, formik.errors.password, " ")) : null), __jsx("div", {
    "class": "grid grid-cols-1 divide-y divide-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, __jsx("input", {
    type: "submit",
    className: "bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold mb-6",
    value: "Crear Cuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "text-gray-800 text-sm-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 31
    }
  }, "Volver a iniciar sesi\xF3n")))))))));
};

_s(CrearCuenta, "bMcn9//1n7sY8rhddbqlm/Jd9R4=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhcmN1ZW50YS5qcyJdLCJuYW1lcyI6WyJDcmVhckN1ZW50YSIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsImF1dGhDb250ZXh0IiwibWVuc2FqZSIsInJlZ2lzdHJhclVzdWFyaW8iLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibm9tYnJlIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm9uU3VibWl0IiwidmFsb3JlcyIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsInRvdWNoZWQiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBRXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUh3QixNQUloQkMsT0FKZ0IsR0FJY0gsV0FKZCxDQUloQkcsT0FKZ0I7QUFBQSxNQUlQQyxnQkFKTyxHQUljSixXQUpkLENBSVBJLGdCQUpPLEVBTXhCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0Msd0RBQVMsQ0FBQztBQUNyQkMsaUJBQWEsRUFBRTtBQUNiQyxZQUFNLEVBQUUsRUFESztBQUViQyxXQUFLLEVBQUUsRUFGTTtBQUdiQyxjQUFRLEVBQUU7QUFIRyxLQURNO0FBTXJCQyxvQkFBZ0IsRUFBRUMsMENBQUEsQ0FBVztBQUN6QkosWUFBTSxFQUFFSSwwQ0FBQSxHQUNHQyxRQURILENBQ1ksMEJBRFosQ0FEaUI7QUFHekJKLFdBQUssRUFBRUcsMENBQUEsR0FDSUgsS0FESixDQUNVLHVCQURWLEVBRUlJLFFBRkosQ0FFYSx5QkFGYixDQUhrQjtBQU16QkgsY0FBUSxFQUFFRSwwQ0FBQSxH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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREosQ0FQRixDQXBFSixDQURKLENBREosQ0FMRixDQURKLENBREY7QUFpR0QsQ0E5SEQ7O0dBQU1YLFc7VUFPV08sZ0Q7OztLQVBYUCxXO0FBZ0lTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY3JlYXJjdWVudGEuanMuZGMxNjRiNDRmYTY1ZjRiNWE3YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0JztcbmltcG9ydCBBbGVydGEgZnJvbSAnLi4vY29tcG9uZW50cy9BbGVydGEnXG5cbmNvbnN0IENyZWFyQ3VlbnRhID0gKCkgPT4ge1xuXG4gIC8vIEFjY2VkZXIgYWwgc3RhdGVcbiAgY29uc3QgQXV0aENvbnRleHQgPSB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbiAgY29uc3QgeyBtZW5zYWplLCByZWdpc3RyYXJVc3VhcmlvwqB9ID0gQXV0aENvbnRleHQ7XG5cbiAgLy8gRm9ybXVsYXJpbyB5IHZhbGlkYWNpw7NuIGNvbiBmb3JtaWsgeSBZdXBcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgICAgICBub21icmU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIE5vbWJyZSBlcyBPYmxpZ2F0b3JpbycpLFxuICAgICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLmVtYWlsKCdFbCBlbWFpbCBubyBlcyB2w6FsaWRvJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBFbWFpbCBlcyBPYmxpZ2F0b3JpbycpLFxuICAgICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBwYXNzd29yZCBubyBwdWVkZSBpciB2YWNpbycpXG4gICAgICAgICAgICAgICAgICAgIC5taW4oNiwgJ0VsIHBhc3N3b3JkIGRlYmUgY29udGVuZXIgYWwgbWVub3MgNiBjYXJhY3RlcmVzJylcbiAgICAgIH0pLFxuICAgICAgb25TdWJtaXQ6IHZhbG9yZXMgPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhclVzdWFyaW8odmFsb3JlcylcbiAgICAgIH1cbiAgfSk7XG5cblxuICByZXR1cm4gKCBcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNC81IHhsOnctMy81IG14LWF1dG8gbWItMzJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTUwMCB0ZXh0LWNlbnRlciBteS00XCI+Q3JlYXIgQ3VlbnRhPC9oMj5cblxuICAgICAgICAgIHsgbWVuc2FqZSAmJiA8QWxlcnRhIC8+fVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LW1kIHB4LTggcHQtNiBwYi04IG1iLTIwXCJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJub21icmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+Tm9tYnJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZSBkZSBVc3VhcmlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5vbWJyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQubm9tYnJlICYmIGZvcm1pay5lcnJvcnMubm9tYnJlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLm5vbWJyZX0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGRlIFVzdWFyaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmVtYWlsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLmVtYWlsfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgZGUgVXN1YXJpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLnBhc3N3b3JkICYmIGZvcm1pay5lcnJvcnMucGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMucGFzc3dvcmR9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEgZGl2aWRlLXkgZGl2aWRlLWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBob3ZlcjpiZy1ncmF5LTkwMCB3LWZ1bGwgcC0yIHRleHQtd2hpdGUgdXBwZXJjYXNlIGZvbnQtYm9sZCBtYi02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJDcmVhciBDdWVudGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgdGV4dC1zbS0xXCI+Vm9sdmVyIGEgaW5pY2lhciBzZXNpw7NuPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IENyZWFyQ3VlbnRhOyJdLCJzb3VyY2VSb290IjoiIn0=