module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/axios.js":
/*!*************************!*\
  !*** ./config/axios.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const clienteAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:4000"
});
/* harmony default export */ __webpack_exports__["default"] = (clienteAxios);

/***/ }),

/***/ "./config/tokenAuth.js":
/*!*****************************!*\
  !*** ./config/tokenAuth.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "./config/axios.js");


const tokenAuth = token => {
  if (token) {
    _axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete _axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tokenAuth);

/***/ }),

/***/ "./context/app/appContext.js":
/*!***********************************!*\
  !*** ./context/app/appContext.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const appContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (appContext);

/***/ }),

/***/ "./context/app/appReducer.js":
/*!***********************************!*\
  !*** ./context/app/appReducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["MOSTRAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OCULTAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LIMPIAR_STATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: null,
        nombre: '',
        nombre_original: '',
        cargando: null,
        descargas: 1,
        password: '',
        autor: null,
        url: ''
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/app/appState.js":
/*!*********************************!*\
  !*** ./context/app/appState.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appContext */ "./context/app/appContext.js");
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ "./context/app/appReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\context\\app\\appState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AppState = ({
  children
}) => {
  const initialState = {
    mensaje: null
  }; // Crear dispatch y state

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_appReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // Muestra una alerta 

  const mostrarAlerta = msg => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["MOSTRAR_ALERTA"],
      payload: msg
    });
    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  };

  const limpiarState = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["LIMPIAR_STATE"]
    });
  };

  return __jsx(_appContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      mensaje: state.mensaje,
      mostrarAlerta,
      limpiarState
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppState);

/***/ }),

/***/ "./context/auth/authContext.js":
/*!*************************************!*\
  !*** ./context/auth/authContext.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (authContext);

/***/ }),

/***/ "./context/auth/authReducer.js":
/*!*************************************!*\
  !*** ./context/auth/authReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["REGISTRO_EXITOSO"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["REGISTRO_ERROR"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_EXITOSO"]:
      localStorage.setItem('token', action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload,
        autenticado: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OCULTAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USUARIO_AUTENTICADO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: action.payload,
        autenticado: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CERRAR_SESION"]:
      localStorage.removeItem('token');
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: null,
        token: null,
        autenticado: null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/auth/authState.js":
/*!***********************************!*\
  !*** ./context/auth/authState.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authContext */ "./context/auth/authContext.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./context/auth/authReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
/* harmony import */ var _config_tokenAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/tokenAuth */ "./config/tokenAuth.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\context\\auth\\authState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const AuthState = ({
  children
}) => {
  // Definir un state inicial
  const initialState = {
    token: false ? undefined : '',
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: null
  }; // Definir el reducer

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_authReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // Registrar nuevos usuarios

  const registrarUsuario = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/usuarios', datos);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_EXITOSO"],
        payload: respuesta.data.msg
      });
    } catch (error) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_ERROR"],
        payload: error.response.data.msg
      });
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  }; // Autenticar Usuarios


  const iniciarSesion = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/auth', datos);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_EXITOSO"],
        payload: respuesta.data.token
      });
    } catch (error) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_ERROR"],
        payload: error.response.data.msg
      });
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  }; // Retorne el Usuario autenticado en base al JWT


  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      Object(_config_tokenAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(token);
    }

    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/auth');

      if (respuesta.data.usuario) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_3__["USUARIO_AUTENTICADO"],
          payload: respuesta.data.usuario
        });
      }
    } catch (error) {
      //console.log(error);
      dispatch({//type: LOGIN_ERROR,
        //payload: error.response.data.msg
      });
    }
  }; // Cerrar la sesión


  const cerrarSesion = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["CERRAR_SESION"]
    });
  };

  return __jsx(_authContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      token: state.token,
      autenticado: state.autenticado,
      usuario: state.usuario,
      mensaje: state.mensaje,
      cargando: state.cargando,
      registrarUsuario,
      iniciarSesion,
      usuarioAutenticado,
      cerrarSesion
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthState);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_auth_authState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/auth/authState */ "./context/auth/authState.js");
/* harmony import */ var _context_app_appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/app/appState */ "./context/app/appState.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_context_auth_authState__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_context_app_appState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION, MOSTRAR_ALERTA, OCULTAR_ALERTA, LIMPIAR_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_EXITOSO", function() { return REGISTRO_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_ERROR", function() { return REGISTRO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_EXITOSO", function() { return LOGIN_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUARIO_AUTENTICADO", function() { return USUARIO_AUTENTICADO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERRAR_SESION", function() { return CERRAR_SESION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOSTRAR_ALERTA", function() { return MOSTRAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCULTAR_ALERTA", function() { return OCULTAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMPIAR_STATE", function() { return LIMPIAR_STATE; });
const REGISTRO_EXITOSO = 'REGISTRO_EXITOSO';
const REGISTRO_ERROR = 'REGISTRO_ERROR';
const LOGIN_EXITOSO = 'LOGIN_EXITOSO';
const LOGIN_ERROR = 'LOGIN_ERROR';
const USUARIO_AUTENTICADO = 'USUARIO_AUTENTICADO';
const CERRAR_SESION = 'CERRAR_SESION';
const MOSTRAR_ALERTA = 'MOSTRAR_ALERTA';
const OCULTAR_ALERTA = 'OCULTAR_ALERTA';
const LIMPIAR_STATE = 'LIMPIAR_STATE';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAvYXBwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC9hcHBSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwL2FwcFN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjbGllbnRlQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiYmFja2VuZFVSTCIsInRva2VuQXV0aCIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJNT1NUUkFSX0FMRVJUQSIsIm1lbnNhamVfYXJjaGl2byIsInBheWxvYWQiLCJPQ1VMVEFSX0FMRVJUQSIsIkxJTVBJQVJfU1RBVEUiLCJub21icmUiLCJub21icmVfb3JpZ2luYWwiLCJjYXJnYW5kbyIsImRlc2NhcmdhcyIsInBhc3N3b3JkIiwiYXV0b3IiLCJ1cmwiLCJBcHBTdGF0ZSIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwibWVuc2FqZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImFwcFJlZHVjZXIiLCJtb3N0cmFyQWxlcnRhIiwibXNnIiwic2V0VGltZW91dCIsImxpbXBpYXJTdGF0ZSIsImF1dGhDb250ZXh0IiwiUkVHSVNUUk9fRVhJVE9TTyIsIlJFR0lTVFJPX0VSUk9SIiwiTE9HSU5fRVJST1IiLCJMT0dJTl9FWElUT1NPIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImF1dGVudGljYWRvIiwiVVNVQVJJT19BVVRFTlRJQ0FETyIsInVzdWFyaW8iLCJDRVJSQVJfU0VTSU9OIiwicmVtb3ZlSXRlbSIsIkF1dGhTdGF0ZSIsImF1dGhSZWR1Y2VyIiwicmVnaXN0cmFyVXN1YXJpbyIsImRhdG9zIiwicmVzcHVlc3RhIiwicG9zdCIsImRhdGEiLCJlcnJvciIsInJlc3BvbnNlIiwiaW5pY2lhclNlc2lvbiIsInVzdWFyaW9BdXRlbnRpY2FkbyIsImdldEl0ZW0iLCJnZXQiLCJjZXJyYXJTZXNpb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFD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cUJBQTVCO0FBQ0EsTUFBTUUsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTWpDLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNRyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsYUFBYSxHQUFHLGVBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBjbGllbnRlQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LmJhY2tlbmRVUkxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRlQXhpb3M7IiwiaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuL2F4aW9zJztcblxuY29uc3QgdG9rZW5BdXRoID0gdG9rZW4gPT4ge1xuICAgIGlmKHRva2VuKSB7XG4gICAgICAgIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5BdXRoOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcENvbnRleHQ7IiwiaW1wb3J0IHtcbiAgICBNT1NUUkFSX0FMRVJUQSxcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMSU1QSUFSX1NUQVRFXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBNT1NUUkFSX0FMRVJUQTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBMSU1QSUFSX1NUQVRFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGwsXG4gICAgICAgICAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgICAgICAgICBub21icmVfb3JpZ2luYWw6JycsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IG51bGwsXG4gICAgICAgICAgICAgICAgZGVzY2FyZ2FzOiAxLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBhdXRvcjogbnVsbCxcbiAgICAgICAgICAgICAgICB1cmw6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi9hcHBDb250ZXh0JztcbmltcG9ydCBhcHBSZWR1Y2VyIGZyb20gJy4vYXBwUmVkdWNlcic7XG5pbXBvcnQge1xuICAgIE1PU1RSQVJfQUxFUlRBLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExJTVBJQVJfU1RBVEVcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuXG5jb25zdCBBcHBTdGF0ZSA9ICh7Y2hpbGRyZW59KSA9PiB7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIG1lbnNhamU6IG51bGxcbiAgICB9XG5cbiAgICAvLyBDcmVhciBkaXNwYXRjaCB5IHN0YXRlXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBNdWVzdHJhIHVuYSBhbGVydGEgXG4gICAgY29uc3QgbW9zdHJhckFsZXJ0YSA9IG1zZyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IE1PU1RSQVJfQUxFUlRBLFxuICAgICAgICAgICAgcGF5bG9hZDogbXNnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGltcGlhclN0YXRlID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX1NUQVRFXG4gICAgICAgIH0pXG4gICAgfVxuIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcbiAgICAgICAgICAgICAgICBtb3N0cmFyQWxlcnRhLFxuICAgICAgICAgICAgICAgIGxpbXBpYXJTdGF0ZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2FwcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aENvbnRleHQ7IiwiaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTyxcbiAgICBSRUdJU1RST19FUlJPUixcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMT0dJTl9FWElUT1NPLFxuICAgIExPR0lOX0VSUk9SLFxuICAgIFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgQ0VSUkFSX1NFU0lPTlxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgUkVHSVNUUk9fRVhJVE9TTzpcbiAgICAgICAgY2FzZSBSRUdJU1RST19FUlJPUjpcbiAgICAgICAgY2FzZSBMT0dJTl9FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIGNhc2UgTE9HSU5fRVhJVE9TTzogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBudWxsXG4gICAgICAgICAgICB9IFxuICAgICAgICBjYXNlIFVTVUFSSU9fQVVURU5USUNBRE86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0VSUkFSX1NFU0lPTjogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogbnVsbCwgXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4vYXV0aENvbnRleHQnO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuXG5cbmltcG9ydCB7IFxuICAgIFJFR0lTVFJPX0VYSVRPU08sIFxuICAgIFJFR0lTVFJPX0VSUk9SLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExPR0lOX0VYSVRPU08sXG4gICAgTE9HSU5fRVJST1IsXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICBDRVJSQVJfU0VTSU9OXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuaW1wb3J0IHRva2VuQXV0aCBmcm9tICcuLi8uLi9jb25maWcvdG9rZW5BdXRoJztcblxuY29uc3QgQXV0aFN0YXRlID0gKHtjaGlsZHJlbn0pID0+IHtcblxuICAgIC8vIERlZmluaXIgdW4gc3RhdGUgaW5pY2lhbFxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgdG9rZW46IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJyxcbiAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgIHVzdWFyaW86IG51bGwsXG4gICAgICAgIG1lbnNhamU6IG51bGwsXG4gICAgICAgIGNhcmdhbmRvOiBudWxsXG4gICAgfVxuXG4gICAgLy8gRGVmaW5pciBlbCByZWR1Y2VyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoYXV0aFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBSZWdpc3RyYXIgbnVldm9zIHVzdWFyaW9zXG4gICAgY29uc3QgcmVnaXN0cmFyVXN1YXJpbyA9IGFzeW5jIGRhdG9zID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS91c3VhcmlvcycsIGRhdG9zKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVHSVNUUk9fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICAvLyBBdXRlbnRpY2FyIFVzdWFyaW9zXG4gICAgY29uc3QgaW5pY2lhclNlc2lvbiA9IGFzeW5jIGRhdG9zID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvYXV0aCcsIGRhdG9zKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnRva2VuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICAvLyBSZXRvcm5lIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZW4gYmFzZSBhbCBKV1RcbiAgICBjb25zdCB1c3VhcmlvQXV0ZW50aWNhZG8gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIGlmKHRva2VuKSB7XG4gICAgICAgICAgICB0b2tlbkF1dGgodG9rZW4pXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCgnL2FwaS9hdXRoJyk7XG4gICAgICAgICAgICBpZihyZXNwdWVzdGEuZGF0YS51c3VhcmlvKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS51c3VhcmlvXG4gICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIC8vdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgLy9wYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENlcnJhciBsYSBzZXNpw7NuXG4gICAgY29uc3QgY2VycmFyU2VzaW9uID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBDRVJSQVJfU0VTSU9OXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17eyBcbiAgICAgICAgICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHN0YXRlLmF1dGVudGljYWRvLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IHN0YXRlLnVzdWFyaW8sXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcbiAgICAgICAgICAgICAgICBjYXJnYW5kbzogc3RhdGUuY2FyZ2FuZG8sXG4gICAgICAgICAgICAgICAgcmVnaXN0cmFyVXN1YXJpbyxcbiAgICAgICAgICAgICAgICBpbmljaWFyU2VzaW9uLFxuICAgICAgICAgICAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbywgXG4gICAgICAgICAgICAgICAgY2VycmFyU2VzaW9uXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoU3RhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRoU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZSc7XG5pbXBvcnQgQXBwU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwU3RhdGUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aFN0YXRlPlxuICAgICAgICAgICAgPEFwcFN0YXRlPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBwU3RhdGU+XG4gICAgICAgIDwvQXV0aFN0YXRlPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImV4cG9ydCBjb25zdCBSRUdJU1RST19FWElUT1NPID0gJ1JFR0lTVFJPX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IFJFR0lTVFJPX0VSUk9SID0gJ1JFR0lTVFJPX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IExPR0lOX0VYSVRPU08gPSAnTE9HSU5fRVhJVE9TTyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSAnTE9HSU5fRVJST1InO1xuXG5leHBvcnQgY29uc3QgVVNVQVJJT19BVVRFTlRJQ0FETyA9ICdVU1VBUklPX0FVVEVOVElDQURPJztcbmV4cG9ydCBjb25zdCBDRVJSQVJfU0VTSU9OID0gJ0NFUlJBUl9TRVNJT04nXG5cbmV4cG9ydCBjb25zdCBNT1NUUkFSX0FMRVJUQSA9ICdNT1NUUkFSX0FMRVJUQSc7XG5leHBvcnQgY29uc3QgT0NVTFRBUl9BTEVSVEEgPSAnT0NVTFRBUl9BTEVSVEEnO1xuXG5leHBvcnQgY29uc3QgTElNUElBUl9TVEFURSA9ICdMSU1QSUFSX1NUQVRFJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9