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

/***/ "./context/alertas/alertaContext.js":
/*!******************************************!*\
  !*** ./context/alertas/alertaContext.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const alertaContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (alertaContext);

/***/ }),

/***/ "./context/alertas/alertaReducer.js":
/*!******************************************!*\
  !*** ./context/alertas/alertaReducer.js ***!
  \******************************************/
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
      return {
        alerta: action.payload
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["OBTENER_USUARIO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OCULTAR_ALERTA"]:
      return {
        alerta: null
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/alertas/alertaState.js":
/*!****************************************!*\
  !*** ./context/alertas/alertaState.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alertaReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alertaReducer */ "./context/alertas/alertaReducer.js");
/* harmony import */ var _alertaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertaContext */ "./context/alertas/alertaContext.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\context\\alertas\\alertaState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AlertaState = props => {
  const initialState = {
    alerta: null
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_alertaReducer__WEBPACK_IMPORTED_MODULE_1__["default"], initialState); // funciones

  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["MOSTRAR_ALERTA"],
      payload: {
        msg,
        categoria
      }
    }); // después de 5 segundos limpiar alerta

    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 5000);
  };

  return __jsx(_alertaContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      alerta: state.alerta,
      mostrarAlerta
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (AlertaState);

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
      const alerta = {
        msg: respuesta.data.msg,
        categoria: 'alerta-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_EXITOSO"],
        payload: alerta
      }); // obtener el usuario

      usuarioAutenticado();
    } catch (error) {
      // console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_ERROR"],
        payload: alerta
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
      // console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_ERROR"],
        payload: alerta
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
      console.log(error);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_ERROR"],
        payload: error.response.data.msg
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
      lineNumber: 138,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthState);

/***/ }),

/***/ "./context/operaciones/operacionContext.js":
/*!*************************************************!*\
  !*** ./context/operaciones/operacionContext.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const operacionContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (operacionContext);

/***/ }),

/***/ "./context/operaciones/operacionReducer.js":
/*!*************************************************!*\
  !*** ./context/operaciones/operacionReducer.js ***!
  \*************************************************/
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
    case _types__WEBPACK_IMPORTED_MODULE_0__["FORMULARIO_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        formulario: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OBTENER_OPERACIONES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: [...state.operaciones, action.payload],
        formulario: false,
        errorformulario: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["VALIDAR_FORMULARIO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        errorformulario: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OPERACION_ACTUAL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operacion: state.operaciones.filter(operacion => operacion._id === action.payload)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ELIMINAR_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: state.operaciones.filter(operacion => operacion._id !== action.payload),
        operacion: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OPERACION_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ACTUALIZAR_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: state.operaciones.map(operacion => operacion._id === action.payload._id ? action.payload : operacion)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LIMPIAR_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operacion: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OPERACIONES_CATEGORIAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: state.operaciones.filter(operacion => operacion.categoria === action.payload)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["TOTAL_INGRESOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        ingresos: state.operaciones.reduce((monto, operacion) => {
          if (typeof monto !== 'number') {
            monto = monto.monto;
          }

          if (operacion.tipo === 'Ingreso') monto += operacion.monto;
          return monto;
        }, 0)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["TOTAL_EGRESOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        egresos: state.operaciones.reduce((monto, operacion) => {
          if (typeof monto !== 'number') {
            monto = monto.monto;
          }

          if (operacion.tipo === 'Egreso') monto += operacion.monto;
          return monto;
        }, 0)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CALCULAR_BALANCE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        balance: state.operaciones.reduce((monto, operacion) => {
          if (typeof monto !== 'number') {
            monto = monto.monto;
          }

          if (operacion.tipo === 'Ingreso') monto += operacion.monto;
          if (operacion.tipo === 'Egreso') monto -= operacion.monto;
          return monto;
        }, 0)
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/operaciones/operacionState.js":
/*!***********************************************!*\
  !*** ./context/operaciones/operacionState.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _operacionContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operacionContext */ "./context/operaciones/operacionContext.js");
/* harmony import */ var _operacionReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operacionReducer */ "./context/operaciones/operacionReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\context\\operaciones\\operacionState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const OperacionState = props => {
  const initialState = {
    operaciones: [],
    nuevaOperacion: false,
    errorformulario: false,
    operacion: null,
    mensaje: null,
    balance: 0,
    ingresos: 0,
    egresos: 0
  }; // dispatch para ejecutar las acciones

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_operacionReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // serie de funciones para el CRUD

  const mostrarFormulario = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["FORMULARIO_OPERACION"]
    });
  }; // obtener los operaciones


  const obtenerOperaciones = async () => {
    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/operaciones');
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OBTENER_OPERACIONES"],
        payload: resultado.data.operaciones
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACION_ERROR"],
        payload: alerta
      });
    }
  }; // agregar nueva operacion


  const agregarOperacion = async operacion => {
    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/operaciones', operacion);
      console.log(resultado); // insertar el operacion en el state

      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["AGREGAR_OPERACION"],
        payload: resultado.data
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACION_ERROR"],
        payload: alerta
      });
    }
  }; // validar el formulario por errores


  const mostrarError = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["VALIDAR_FORMULARIO"]
    });
  }; // selecciona el operacion que el usuario dio click


  const operacionActual = operacionId => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACION_ACTUAL"],
      payload: operacionId
    });
  }; // elimina un operacion


  const eliminarOperacion = async operacionId => {
    try {
      await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].delete(`/api/operaciones/${operacionId}`);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["ELIMINAR_OPERACION"],
        payload: operacionId
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACION_ERROR"],
        payload: alerta
      });
    }
  }; // edita o modifica una operacion


  const actualizarOperacion = async operacion => {
    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].put(`/api/operaciones/${operacion._id}`, operacion);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["ACTUALIZAR_OPERACION"],
        payload: resultado.data.operacion
      });
    } catch (error) {
      console.log(error);
    }
  }; // elimina la operacion seleccionada


  const limpiarOperacion = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["LIMPIAR_OPERACION"]
    });
  };

  const calcularTotalIngresos = async () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["TOTAL_INGRESOS"]
    });
  };

  const calcularTotalEgresos = async () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["TOTAL_EGRESOS"]
    });
  }; // calcular el balance: total ingresos - total egresos


  const calcularBalance = async () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["CALCULAR_BALANCE"]
    });
  };

  const calcularTotales = async () => {
    await obtenerOperaciones();
    calcularTotalIngresos();
    calcularTotalEgresos();
    calcularBalance();
  };

  const obtenerOperacionesCategorias = async categoria => {
    await obtenerOperaciones();
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACIONES_CATEGORIAS"],
      payload: categoria
    });
  };

  return __jsx(_operacionContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      operaciones: state.operaciones,
      formulario: state.formulario,
      errorformulario: state.errorformulario,
      operacion: state.operacion,
      mensaje: state.mensaje,
      balance: state.balance,
      ingresos: state.ingresos,
      egresos: state.egresos,
      mostrarFormulario,
      obtenerOperaciones,
      agregarOperacion,
      mostrarError,
      operacionActual,
      eliminarOperacion,
      actualizarOperacion,
      calcularTotalIngresos,
      calcularTotalEgresos,
      calcularBalance,
      obtenerOperacionesCategorias,
      calcularTotales
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (OperacionState);

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_alertas_alertaState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/alertas/alertaState */ "./context/alertas/alertaState.js");
/* harmony import */ var _context_auth_authState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth/authState */ "./context/auth/authState.js");
/* harmony import */ var _context_app_appState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/app/appState */ "./context/app/appState.js");
/* harmony import */ var _context_operaciones_operacionState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/operaciones/operacionState */ "./context/operaciones/operacionState.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_context_alertas_alertaState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_context_operaciones_operacionState__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_context_auth_authState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(_context_app_appState__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION, MOSTRAR_ALERTA, OCULTAR_ALERTA, LIMPIAR_STATE, FORMULARIO_OPERACION, OBTENER_OPERACIONES, AGREGAR_OPERACION, OPERACION_ERROR, VALIDAR_FORMULARIO, OPERACION_ACTUAL, ELIMINAR_OPERACION, OBTENER_USUARIO, ACTUALIZAR_OPERACION, LIMPIAR_OPERACION, TOTAL_INGRESOS, TOTAL_EGRESOS, CALCULAR_BALANCE, OPERACIONES_CATEGORIAS */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMULARIO_OPERACION", function() { return FORMULARIO_OPERACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBTENER_OPERACIONES", function() { return OBTENER_OPERACIONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_OPERACION", function() { return AGREGAR_OPERACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERACION_ERROR", function() { return OPERACION_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDAR_FORMULARIO", function() { return VALIDAR_FORMULARIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERACION_ACTUAL", function() { return OPERACION_ACTUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELIMINAR_OPERACION", function() { return ELIMINAR_OPERACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBTENER_USUARIO", function() { return OBTENER_USUARIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTUALIZAR_OPERACION", function() { return ACTUALIZAR_OPERACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMPIAR_OPERACION", function() { return LIMPIAR_OPERACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_INGRESOS", function() { return TOTAL_INGRESOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_EGRESOS", function() { return TOTAL_EGRESOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALCULAR_BALANCE", function() { return CALCULAR_BALANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERACIONES_CATEGORIAS", function() { return OPERACIONES_CATEGORIAS; });
const REGISTRO_EXITOSO = 'REGISTRO_EXITOSO';
const REGISTRO_ERROR = 'REGISTRO_ERROR';
const LOGIN_EXITOSO = 'LOGIN_EXITOSO';
const LOGIN_ERROR = 'LOGIN_ERROR';
const USUARIO_AUTENTICADO = 'USUARIO_AUTENTICADO';
const CERRAR_SESION = 'CERRAR_SESION';
const MOSTRAR_ALERTA = 'MOSTRAR_ALERTA';
const OCULTAR_ALERTA = 'OCULTAR_ALERTA';
const LIMPIAR_STATE = 'LIMPIAR_STATE';
const FORMULARIO_OPERACION = 'FORMULARIO_OPERACION';
const OBTENER_OPERACIONES = 'OBTENER_OPERACIONES';
const AGREGAR_OPERACION = 'AGREGAR_OPERACION';
const OPERACION_ERROR = 'OPERACION_ERROR';
const VALIDAR_FORMULARIO = 'VALIDAR_FORMULARIO';
const OPERACION_ACTUAL = 'OPERACION_ACTUAL';
const ELIMINAR_OPERACION = 'ELIMINAR_OPERACION';
const OBTENER_USUARIO = 'OBTENER_USUARIO';
const ACTUALIZAR_OPERACION = 'ACTUALIZAR_OPERACION';
const LIMPIAR_OPERACION = 'LIMPIAR_OPERACION';
const TOTAL_INGRESOS = 'TOTAL_INGRESOS';
const TOTAL_EGRESOS = 'TOTAL_EGRESOS';
const CALCULAR_BALANCE = 'CALCULAR_BALANCE';
const OPERACIONES_CATEGORIAS = 'OPERACIONES_CATEGORIAS';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwL2FwcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAvYXBwUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC9hcHBTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblN0YXRlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImNsaWVudGVBeGlvcyIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJiYWNrZW5kVVJMIiwidG9rZW5BdXRoIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhbGVydGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk1PU1RSQVJfQUxFUlRBIiwiYWxlcnRhIiwicGF5bG9hZCIsIk9CVEVORVJfVVNVQVJJTyIsInVzdWFyaW8iLCJPQ1VMVEFSX0FMRVJUQSIsIkFsZXJ0YVN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJhbGVydGFSZWR1Y2VyIiwibW9zdHJhckFsZXJ0YSIsIm1zZyIsImNhdGVnb3JpYSIsInNldFRpbWVvdXQiLCJjaGlsZHJlbiIsImFwcENvbnRleHQiLCJtZW5zYWplX2FyY2hpdm8iLCJMSU1QSUFSX1NUQVRFIiwibm9tYnJlIiwibm9tYnJlX29yaWdpbmFsIiwiY2FyZ2FuZG8iLCJkZXNjYXJnYXMiLCJwYXNzd29yZCIsImF1dG9yIiwidXJsIiwiQXBwU3RhdGUiLCJtZW5zYWplIiwiYXBwUmVkdWNlciIsImxpbXBpYXJTdGF0ZSIsImF1dGhDb250ZXh0IiwiUkVHSVNUUk9fRVhJVE9TTyIsIlJFR0lTVFJPX0VSUk9SIiwiTE9HSU5fRVJST1IiLCJMT0dJTl9FWElUT1NPIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImF1dGVudGljYWRvIiwiVVNVQVJJT19BVVRFTlRJQ0FETyIsIkNFUlJBUl9TRVNJT04iLCJyZW1vdmVJdGVtIiwiQXV0aFN0YXRlIiwiYXV0aFJlZHVjZXIiLCJyZWdpc3RyYXJVc3VhcmlvIiwiZGF0b3MiLCJyZXNwdWVzdGEiLCJwb3N0IiwiZGF0YSIsInVzdWFyaW9BdXRlbnRpY2FkbyIsImVycm9yIiwicmVzcG9uc2UiLCJpbmljaWFyU2VzaW9uIiwiZ2V0SXRlbSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJjZXJyYXJTZXNpb24iLCJvcGVyYWNpb25Db250ZXh0IiwiRk9STVVMQVJJT19PUEVSQUNJT04iLCJmb3JtdWxhcmlvIiwiT0JURU5FUl9PUEVSQUNJT05FUyIsIm9wZXJhY2lvbmVzIiwiQUdSRUdBUl9PUEVSQUNJT04iLCJlcnJvcmZvcm11bGFyaW8iLCJWQUxJREFSX0ZPUk1VTEFSSU8iLCJPUEVSQUNJT05fQUNUVUFMIiwib3BlcmFjaW9uIiwiZmlsdGVyIiwiX2lkIiwiRUxJTUlOQVJfT1BFUkFDSU9OIiwiT1BFUkFDSU9OX0VSUk9SIiwiQUNUVUFMSVpBUl9PUEVSQUNJT04iLCJtYXAiLCJMSU1QSUFSX09QRVJBQ0lPTiIsIk9QRVJBQ0lPTkVTX0NBVEVHT1JJQVMiLCJUT1RBTF9JTkdSRVNPUyIsImluZ3Jlc29zIiwicmVkdWNlIiwibW9udG8iLCJ0aXBvIiwiVE9UQUxfRUdSRVNPUyIsImVncmVzb3MiLCJDQUxDVUxBUl9CQUxBTkNFIiwiYmFsYW5jZSIsIk9wZXJhY2lvblN0YXRlIiwibnVldmFPcGVyYWNpb24iLCJvcGVyYWNpb25SZWR1Y2VyIiwibW9zdHJhckZvcm11bGFyaW8iLCJvYnRlbmVyT3BlcmFjaW9uZXMiLCJyZXN1bHRhZG8iLCJhZ3JlZ2FyT3BlcmFjaW9uIiwibW9zdHJhckVycm9yIiwib3BlcmFjaW9uQWN0dWFsIiwib3BlcmFjaW9uSWQiLCJlbGltaW5hck9wZXJhY2lvbiIsImRlbGV0ZSIsImFjdHVhbGl6YXJPcGVyYWNpb24iLCJwdXQiLCJsaW1waWFyT3BlcmFjaW9uIiwiY2FsY3VsYXJUb3RhbEluZ3Jlc29zIiwiY2FsY3VsYXJUb3RhbEVncmVzb3MiLCJjYWxjdWxhckJhbGFuY2UiLCJjYWxjdWxhclRvdGFsZXMiLCJvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7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SUEsTUFBTXdDLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1FLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1FLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1RLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNTixrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNSSxrQkFBa0IsR0FBRyxvQkFBM0I7QUFHQSxNQUFNbkUsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLE1BQU1xRSxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNRSxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUssYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUUsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTVIsc0JBQXNCLEdBQUcsd0JBQS9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNQLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgY2xpZW50ZUF4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5iYWNrZW5kVVJMXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50ZUF4aW9zOyIsImltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi9heGlvcyc7XG5cbmNvbnN0IHRva2VuQXV0aCA9IHRva2VuID0+IHtcbiAgICBpZih0b2tlbikge1xuICAgICAgICBjbGllbnRlQXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBjbGllbnRlQXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRva2VuQXV0aDsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgYWxlcnRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsZXJ0YUNvbnRleHQ7IiwiaW1wb3J0IHsgTU9TVFJBUl9BTEVSVEEsIE9DVUxUQVJfQUxFUlRBLCBPQlRFTkVSX1VTVUFSSU8gfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBNT1NUUkFSX0FMRVJUQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0YTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0JURU5FUl9VU1VBUklPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnRhOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFsZXJ0YVJlZHVjZXIgZnJvbSAnLi9hbGVydGFSZWR1Y2VyJztcclxuaW1wb3J0IGFsZXJ0YUNvbnRleHQgZnJvbSAnLi9hbGVydGFDb250ZXh0JztcclxuXHJcbmltcG9ydCB7IE1PU1RSQVJfQUxFUlRBLCBPQ1VMVEFSX0FMRVJUQSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IEFsZXJ0YVN0YXRlID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIGFsZXJ0YTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKGFsZXJ0YVJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gZnVuY2lvbmVzXHJcbiAgICBjb25zdCBtb3N0cmFyQWxlcnRhID0gKG1zZywgY2F0ZWdvcmlhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBNT1NUUkFSX0FMRVJUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbXNnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZGVzcHXDqXMgZGUgNSBzZWd1bmRvcyBsaW1waWFyIGFsZXJ0YVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFsZXJ0YUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGFsZXJ0YTogc3RhdGUuYWxlcnRhLFxyXG4gICAgICAgICAgICAgICAgbW9zdHJhckFsZXJ0YVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvYWxlcnRhQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0YVN0YXRlOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcENvbnRleHQ7IiwiaW1wb3J0IHtcbiAgICBNT1NUUkFSX0FMRVJUQSxcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMSU1QSUFSX1NUQVRFXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBNT1NUUkFSX0FMRVJUQTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBMSU1QSUFSX1NUQVRFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGwsXG4gICAgICAgICAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgICAgICAgICBub21icmVfb3JpZ2luYWw6JycsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IG51bGwsXG4gICAgICAgICAgICAgICAgZGVzY2FyZ2FzOiAxLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBhdXRvcjogbnVsbCxcbiAgICAgICAgICAgICAgICB1cmw6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi9hcHBDb250ZXh0JztcbmltcG9ydCBhcHBSZWR1Y2VyIGZyb20gJy4vYXBwUmVkdWNlcic7XG5pbXBvcnQge1xuICAgIE1PU1RSQVJfQUxFUlRBLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExJTVBJQVJfU1RBVEVcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuXG5jb25zdCBBcHBTdGF0ZSA9ICh7Y2hpbGRyZW59KSA9PiB7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIG1lbnNhamU6IG51bGxcbiAgICB9XG5cbiAgICAvLyBDcmVhciBkaXNwYXRjaCB5IHN0YXRlXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBNdWVzdHJhIHVuYSBhbGVydGEgXG4gICAgY29uc3QgbW9zdHJhckFsZXJ0YSA9IG1zZyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IE1PU1RSQVJfQUxFUlRBLFxuICAgICAgICAgICAgcGF5bG9hZDogbXNnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGltcGlhclN0YXRlID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX1NUQVRFXG4gICAgICAgIH0pXG4gICAgfVxuIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcbiAgICAgICAgICAgICAgICBtb3N0cmFyQWxlcnRhLFxuICAgICAgICAgICAgICAgIGxpbXBpYXJTdGF0ZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2FwcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aENvbnRleHQ7IiwiaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTyxcbiAgICBSRUdJU1RST19FUlJPUixcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMT0dJTl9FWElUT1NPLFxuICAgIExPR0lOX0VSUk9SLFxuICAgIFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgQ0VSUkFSX1NFU0lPTlxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgUkVHSVNUUk9fRVhJVE9TTzpcbiAgICAgICAgY2FzZSBSRUdJU1RST19FUlJPUjpcbiAgICAgICAgY2FzZSBMT0dJTl9FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIGNhc2UgTE9HSU5fRVhJVE9TTzogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBudWxsXG4gICAgICAgICAgICB9IFxuICAgICAgICBjYXNlIFVTVUFSSU9fQVVURU5USUNBRE86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0VSUkFSX1NFU0lPTjogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogbnVsbCwgXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4vYXV0aENvbnRleHQnO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuXG5cbmltcG9ydCB7IFxuICAgIFJFR0lTVFJPX0VYSVRPU08sIFxuICAgIFJFR0lTVFJPX0VSUk9SLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExPR0lOX0VYSVRPU08sXG4gICAgTE9HSU5fRVJST1IsXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICBDRVJSQVJfU0VTSU9OXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuaW1wb3J0IHRva2VuQXV0aCBmcm9tICcuLi8uLi9jb25maWcvdG9rZW5BdXRoJztcblxuY29uc3QgQXV0aFN0YXRlID0gKHtjaGlsZHJlbn0pID0+IHtcblxuICAgIC8vIERlZmluaXIgdW4gc3RhdGUgaW5pY2lhbFxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgdG9rZW46IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJyxcbiAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgIHVzdWFyaW86IG51bGwsXG4gICAgICAgIG1lbnNhamU6IG51bGwsXG4gICAgICAgIGNhcmdhbmRvOiBudWxsXG4gICAgfVxuXG4gICAgLy8gRGVmaW5pciBlbCByZWR1Y2VyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoYXV0aFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBSZWdpc3RyYXIgbnVldm9zIHVzdWFyaW9zXG4gICAgY29uc3QgcmVnaXN0cmFyVXN1YXJpbyA9IGFzeW5jIGRhdG9zID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS91c3VhcmlvcycsIGRhdG9zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xuICAgICAgICAgICAgICAgIG1zZzogcmVzcHVlc3RhLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIG9idGVuZXIgZWwgdXN1YXJpb1xuICAgICAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XG4gICAgICAgICAgICAgICAgbXNnOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVHSVNUUk9fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICAvLyBBdXRlbnRpY2FyIFVzdWFyaW9zXG4gICAgY29uc3QgaW5pY2lhclNlc2lvbiA9IGFzeW5jIGRhdG9zID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvYXV0aCcsIGRhdG9zKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnRva2VuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xuICAgICAgICAgICAgICAgIG1zZzogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2csXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gUmV0b3JuZSBlbCBVc3VhcmlvIGF1dGVudGljYWRvIGVuIGJhc2UgYWwgSldUXG4gICAgY29uc3QgdXN1YXJpb0F1dGVudGljYWRvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBpZih0b2tlbikge1xuICAgICAgICAgICAgdG9rZW5BdXRoKHRva2VuKVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvYXV0aCcpO1xuICAgICAgICAgICAgaWYocmVzcHVlc3RhLmRhdGEudXN1YXJpbykge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudXN1YXJpb1xuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDZXJyYXIgbGEgc2VzacOzblxuICAgIGNvbnN0IGNlcnJhclNlc2lvbiA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQ0VSUkFSX1NFU0lPTlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3sgXG4gICAgICAgICAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiBzdGF0ZS5hdXRlbnRpY2FkbyxcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBzdGF0ZS51c3VhcmlvLFxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHN0YXRlLm1lbnNhamUsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IHN0YXRlLmNhcmdhbmRvLFxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhclVzdWFyaW8sXG4gICAgICAgICAgICAgICAgaW5pY2lhclNlc2lvbixcbiAgICAgICAgICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8sIFxuICAgICAgICAgICAgICAgIGNlcnJhclNlc2lvblxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFN0YXRlOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBvcGVyYWNpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3BlcmFjaW9uQ29udGV4dDsiLCJpbXBvcnQge1xyXG4gICAgRk9STVVMQVJJT19PUEVSQUNJT04sXHJcbiAgICBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgQUdSRUdBUl9PUEVSQUNJT04sXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBWQUxJREFSX0ZPUk1VTEFSSU8sXHJcbiAgICBPUEVSQUNJT05fQUNUVUFMLFxyXG4gICAgRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX09QRVJBQ0lPTixcclxuICAgIENBTENVTEFSX0JBTEFOQ0UsXHJcbiAgICBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgVE9UQUxfSU5HUkVTT1MsXHJcbiAgICBUT1RBTF9FR1JFU09TXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgRk9STVVMQVJJT19PUEVSQUNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZvcm11bGFyaW86IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0JURU5FUl9PUEVSQUNJT05FUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFHUkVHQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogWy4uLnN0YXRlLm9wZXJhY2lvbmVzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVkFMSURBUl9GT1JNVUxBUklPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT1BFUkFDSU9OX0FDVFVBTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBzdGF0ZS5vcGVyYWNpb25lcy5maWx0ZXIob3BlcmFjaW9uID0+IG9wZXJhY2lvbi5faWQgPT09XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRUxJTUlOQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMuZmlsdGVyKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkICE9PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUNUVUFMSVpBUl9PUEVSQUNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcy5tYXAob3BlcmFjaW9uID0+IG9wZXJhY2lvbi5faWQgPT09IGFjdGlvbi5wYXlsb2FkLl9pZFxyXG4gICAgICAgICAgICAgICAgPyBhY3Rpb24ucGF5bG9hZCA6IG9wZXJhY2lvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElNUElBUl9PUEVSQUNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPUEVSQUNJT05FU19DQVRFR09SSUFTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMuZmlsdGVyKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uY2F0ZWdvcmlhID09PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFRPVEFMX0lOR1JFU09TOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpbmdyZXNvczogc3RhdGUub3BlcmFjaW9uZXMucmVkdWNlKCAobW9udG8sIG9wZXJhY2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbW9udG8gIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRvID0gbW9udG8ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYWNpb24udGlwbyA9PT0gJ0luZ3Jlc28nKSBtb250byArPSBvcGVyYWNpb24ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRvO1xyXG4gICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVE9UQUxfRUdSRVNPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZWdyZXNvczogc3RhdGUub3BlcmFjaW9uZXMucmVkdWNlKCAobW9udG8sIG9wZXJhY2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbW9udG8gIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRvID0gbW9udG8ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYWNpb24udGlwbyA9PT0gJ0VncmVzbycpIG1vbnRvICs9IG9wZXJhY2lvbi5tb250bztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9udG87XHJcbiAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDQUxDVUxBUl9CQUxBTkNFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiBzdGF0ZS5vcGVyYWNpb25lcy5yZWR1Y2UoIChtb250bywgb3BlcmFjaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb250byAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udG8gPSBtb250by5tb250bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhY2lvbi50aXBvID09PSAnSW5ncmVzbycpIG1vbnRvICs9IG9wZXJhY2lvbi5tb250bztcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmFjaW9uLnRpcG8gPT09ICdFZ3Jlc28nKSBtb250byAtPSBvcGVyYWNpb24ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRvO1xyXG4gICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBvcGVyYWNpb25Db250ZXh0IGZyb20gJy4vb3BlcmFjaW9uQ29udGV4dCc7XHJcbmltcG9ydCBvcGVyYWNpb25SZWR1Y2VyIGZyb20gJy4vb3BlcmFjaW9uUmVkdWNlcic7XHJcbmltcG9ydCB7XHJcbiAgICBGT1JNVUxBUklPX09QRVJBQ0lPTixcclxuICAgIE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgIE9QRVJBQ0lPTl9FUlJPUixcclxuICAgIFZBTElEQVJfRk9STVVMQVJJTyxcclxuICAgIE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX1NUQVRFLFxyXG4gICAgQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX09QRVJBQ0lPTixcclxuICAgIENBTENVTEFSX0JBTEFOQ0UsXHJcbiAgICBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgVE9UQUxfSU5HUkVTT1MsXHJcbiAgICBUT1RBTF9FR1JFU09TXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xyXG5cclxuY29uc3QgT3BlcmFjaW9uU3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIG9wZXJhY2lvbmVzIDogW10sXHJcbiAgICAgICAgbnVldmFPcGVyYWNpb24gOiBmYWxzZSxcclxuICAgICAgICBlcnJvcmZvcm11bGFyaW86IGZhbHNlLFxyXG4gICAgICAgIG9wZXJhY2lvbjogbnVsbCxcclxuICAgICAgICBtZW5zYWplOiBudWxsLFxyXG4gICAgICAgIGJhbGFuY2U6IDAsXHJcbiAgICAgICAgaW5ncmVzb3M6IDAsXHJcbiAgICAgICAgZWdyZXNvczogMFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpc3BhdGNoIHBhcmEgZWplY3V0YXIgbGFzIGFjY2lvbmVzXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIob3BlcmFjaW9uUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyBzZXJpZSBkZSBmdW5jaW9uZXMgcGFyYSBlbCBDUlVEXHJcbiAgICBjb25zdCBtb3N0cmFyRm9ybXVsYXJpbyA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPUk1VTEFSSU9fT1BFUkFDSU9OXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBvYnRlbmVyIGxvcyBvcGVyYWNpb25lc1xyXG4gICAgY29uc3Qgb2J0ZW5lck9wZXJhY2lvbmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvb3BlcmFjaW9uZXMnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YS5vcGVyYWNpb25lc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGFncmVnYXIgbnVldmEgb3BlcmFjaW9uXHJcbiAgICBjb25zdCBhZ3JlZ2FyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvb3BlcmFjaW9uZXMnLCBvcGVyYWNpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRhZG8pO1xyXG4gICAgICAgICAgICAvLyBpbnNlcnRhciBlbCBvcGVyYWNpb24gZW4gZWwgc3RhdGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUdSRUdBUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdmFsaWRhciBlbCBmb3JtdWxhcmlvIHBvciBlcnJvcmVzXHJcbiAgICBjb25zdCBtb3N0cmFyRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBWQUxJREFSX0ZPUk1VTEFSSU9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjY2lvbmEgZWwgb3BlcmFjaW9uIHF1ZSBlbCB1c3VhcmlvIGRpbyBjbGlja1xyXG4gICAgY29uc3Qgb3BlcmFjaW9uQWN0dWFsID0gb3BlcmFjaW9uSWQgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0FDVFVBTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogb3BlcmFjaW9uSWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsaW1pbmEgdW4gb3BlcmFjaW9uXHJcbiAgICBjb25zdCBlbGltaW5hck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBjbGllbnRlQXhpb3MuZGVsZXRlKGAvYXBpL29wZXJhY2lvbmVzLyR7b3BlcmFjaW9uSWR9YCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEVMSU1JTkFSX09QRVJBQ0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXRhIG8gbW9kaWZpY2EgdW5hIG9wZXJhY2lvblxyXG4gICAgY29uc3QgYWN0dWFsaXphck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbiA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnB1dChgL2FwaS9vcGVyYWNpb25lcy8ke29wZXJhY2lvbi5faWR9YCwgb3BlcmFjaW9uKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YS5vcGVyYWNpb25cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsaW1pbmEgbGEgb3BlcmFjaW9uIHNlbGVjY2lvbmFkYVxyXG4gICAgY29uc3QgbGltcGlhck9wZXJhY2lvbiA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJTVBJQVJfT1BFUkFDSU9OXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxjdWxhclRvdGFsSW5ncmVzb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBUT1RBTF9JTkdSRVNPU1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbEVncmVzb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBUT1RBTF9FR1JFU09TXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY2FsY3VsYXIgZWwgYmFsYW5jZTogdG90YWwgaW5ncmVzb3MgLSB0b3RhbCBlZ3Jlc29zXHJcbiAgICBjb25zdCBjYWxjdWxhckJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBDQUxDVUxBUl9CQUxBTkNFXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxjdWxhclRvdGFsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgb2J0ZW5lck9wZXJhY2lvbmVzKCk7XHJcblxyXG4gICAgICAgIGNhbGN1bGFyVG90YWxJbmdyZXNvcygpO1xyXG4gICAgICAgIGNhbGN1bGFyVG90YWxFZ3Jlc29zKCk7XHJcbiAgICAgICAgY2FsY3VsYXJCYWxhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyA9IGFzeW5jIGNhdGVnb3JpYSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgb2J0ZW5lck9wZXJhY2lvbmVzKCk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9ORVNfQ0FURUdPUklBUyxcclxuICAgICAgICAgICAgcGF5bG9hZDogY2F0ZWdvcmlhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG9wZXJhY2lvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcyxcclxuICAgICAgICAgICAgICAgIGZvcm11bGFyaW86IHN0YXRlLmZvcm11bGFyaW8sXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IHN0YXRlLmVycm9yZm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogc3RhdGUub3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IHN0YXRlLmJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICBpbmdyZXNvczogc3RhdGUuaW5ncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBlZ3Jlc29zOiBzdGF0ZS5lZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgbW9zdHJhckZvcm11bGFyaW8sXHJcbiAgICAgICAgICAgICAgICBvYnRlbmVyT3BlcmFjaW9uZXMsXHJcbiAgICAgICAgICAgICAgICBhZ3JlZ2FyT3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgbW9zdHJhckVycm9yLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uQWN0dWFsLFxyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBhY3R1YWxpemFyT3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXJUb3RhbEluZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXJUb3RhbEVncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhckJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzLFxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXJUb3RhbGVzXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9vcGVyYWNpb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVyYWNpb25TdGF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4uL2luZGV4LmNzcyc7XG5cbmltcG9ydCBBbGVydGFTdGF0ZSBmcm9tICcuLi9jb250ZXh0L2FsZXJ0YXMvYWxlcnRhU3RhdGUnO1xuaW1wb3J0IEF1dGhTdGF0ZSBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aFN0YXRlJztcbmltcG9ydCBBcHBTdGF0ZSBmcm9tICcuLi9jb250ZXh0L2FwcC9hcHBTdGF0ZSc7XG5pbXBvcnQgT3BlcmFjaW9uU3RhdGUgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25TdGF0ZSc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBbGVydGFTdGF0ZT5cbiAgICAgICAgICAgIDxPcGVyYWNpb25TdGF0ZT5cbiAgICAgICAgICAgICAgICA8QXV0aFN0YXRlPlxuICAgICAgICAgICAgICAgICAgICA8QXBwU3RhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQXBwU3RhdGU+XG4gICAgICAgICAgICAgICAgPC9BdXRoU3RhdGU+XG4gICAgICAgICAgICA8L09wZXJhY2lvblN0YXRlPlxuICAgICAgICA8L0FsZXJ0YVN0YXRlPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImV4cG9ydCBjb25zdCBSRUdJU1RST19FWElUT1NPID0gJ1JFR0lTVFJPX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IFJFR0lTVFJPX0VSUk9SID0gJ1JFR0lTVFJPX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IExPR0lOX0VYSVRPU08gPSAnTE9HSU5fRVhJVE9TTyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSAnTE9HSU5fRVJST1InO1xuXG5leHBvcnQgY29uc3QgVVNVQVJJT19BVVRFTlRJQ0FETyA9ICdVU1VBUklPX0FVVEVOVElDQURPJztcbmV4cG9ydCBjb25zdCBDRVJSQVJfU0VTSU9OID0gJ0NFUlJBUl9TRVNJT04nXG5cbmV4cG9ydCBjb25zdCBNT1NUUkFSX0FMRVJUQSA9ICdNT1NUUkFSX0FMRVJUQSc7XG5leHBvcnQgY29uc3QgT0NVTFRBUl9BTEVSVEEgPSAnT0NVTFRBUl9BTEVSVEEnO1xuXG5leHBvcnQgY29uc3QgTElNUElBUl9TVEFURSA9ICdMSU1QSUFSX1NUQVRFJztcblxuXG5cbmV4cG9ydCBjb25zdCBGT1JNVUxBUklPX09QRVJBQ0lPTiA9ICdGT1JNVUxBUklPX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgT0JURU5FUl9PUEVSQUNJT05FUyA9ICdPQlRFTkVSX09QRVJBQ0lPTkVTJztcbmV4cG9ydCBjb25zdCBBR1JFR0FSX09QRVJBQ0lPTiA9ICdBR1JFR0FSX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9OX0VSUk9SID0gJ09QRVJBQ0lPTl9FUlJPUic7XG5leHBvcnQgY29uc3QgVkFMSURBUl9GT1JNVUxBUklPID0gJ1ZBTElEQVJfRk9STVVMQVJJTyc7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9OX0FDVFVBTCA9ICdPUEVSQUNJT05fQUNUVUFMJztcbmV4cG9ydCBjb25zdCBFTElNSU5BUl9PUEVSQUNJT04gPSAnRUxJTUlOQVJfT1BFUkFDSU9OJztcblxuXG5leHBvcnQgY29uc3QgT0JURU5FUl9VU1VBUklPID0gJ09CVEVORVJfVVNVQVJJTyc7XG5cbmV4cG9ydCBjb25zdCBBQ1RVQUxJWkFSX09QRVJBQ0lPTiA9ICdBQ1RVQUxJWkFSX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgTElNUElBUl9PUEVSQUNJT04gPSAnTElNUElBUl9PUEVSQUNJT04nO1xuXG5leHBvcnQgY29uc3QgVE9UQUxfSU5HUkVTT1MgPSAnVE9UQUxfSU5HUkVTT1MnO1xuZXhwb3J0IGNvbnN0IFRPVEFMX0VHUkVTT1MgPSAnVE9UQUxfRUdSRVNPUyc7XG5leHBvcnQgY29uc3QgQ0FMQ1VMQVJfQkFMQU5DRSA9ICdDQUxDVUxBUl9CQUxBTkNFJztcbmV4cG9ydCBjb25zdCBPUEVSQUNJT05FU19DQVRFR09SSUFTID0gJ09QRVJBQ0lPTkVTX0NBVEVHT1JJQVMnOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=