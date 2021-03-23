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
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_EXITOSO"],
        payload: respuesta.data.msg
      }); // obtener el usuario
      //usuarioAutenticado();
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
      lineNumber: 116,
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
/* harmony import */ var _context_alertas_alertaState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/alertas/alertaState */ "./context/alertas/alertaState.js");
/* harmony import */ var _context_auth_authState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth/authState */ "./context/auth/authState.js");
/* harmony import */ var _context_app_appState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/app/appState */ "./context/app/appState.js");
/* harmony import */ var _context_operaciones_operacionState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/operaciones/operacionState */ "./context/operaciones/operacionState.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_context_alertas_alertaState__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_context_operaciones_operacionState__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_context_auth_authState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(_context_app_appState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwL2FwcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAvYXBwUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC9hcHBTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblN0YXRlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImNsaWVudGVBeGlvcyIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJiYWNrZW5kVVJMIiwidG9rZW5BdXRoIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhbGVydGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk1PU1RSQVJfQUxFUlRBIiwiYWxlcnRhIiwicGF5bG9hZCIsIk9CVEVORVJfVVNVQVJJTyIsInVzdWFyaW8iLCJPQ1VMVEFSX0FMRVJUQSIsIkFsZXJ0YVN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJhbGVydGFSZWR1Y2VyIiwibW9zdHJhckFsZXJ0YSIsIm1zZyIsImNhdGVnb3JpYSIsInNldFRpbWVvdXQiLCJjaGlsZHJlbiIsImFwcENvbnRleHQiLCJtZW5zYWplX2FyY2hpdm8iLCJMSU1QSUFSX1NUQVRFIiwibm9tYnJlIiwibm9tYnJlX29yaWdpbmFsIiwiY2FyZ2FuZG8iLCJkZXNjYXJnYXMiLCJwYXNzd29yZCIsImF1dG9yIiwidXJsIiwiQXBwU3RhdGUiLCJtZW5zYWplIiwiYXBwUmVkdWNlciIsImxpbXBpYXJTdGF0ZSIsImF1dGhDb250ZXh0IiwiUkVHSVNUUk9fRVhJVE9TTyIsIlJFR0lTVFJPX0VSUk9SIiwiTE9HSU5fRVJST1IiLCJMT0dJTl9FWElUT1NPIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImF1dGVudGljYWRvIiwiVVNVQVJJT19BVVRFTlRJQ0FETyIsIkNFUlJBUl9TRVNJT04iLCJyZW1vdmVJdGVtIiwiQXV0aFN0YXRlIiwiYXV0aFJlZHVjZXIiLCJyZWdpc3RyYXJVc3VhcmlvIiwiZGF0b3MiLCJyZXNwdWVzdGEiLCJwb3N0IiwiZGF0YSIsImVycm9yIiwicmVzcG9uc2UiLCJpbmljaWFyU2VzaW9uIiwidXN1YXJpb0F1dGVudGljYWRvIiwiZ2V0SXRlbSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJjZXJyYXJTZXNpb24iLCJvcGVyYWNpb25Db250ZXh0IiwiRk9STVVMQVJJT19PUEVSQUNJT04iLCJmb3JtdWxhcmlvIiwiT0JURU5FUl9PUEVSQUNJT05FUyIsIm9wZXJhY2lvbmVzIiwiQUdSRUdBUl9PUEVSQUNJT04iLCJlcnJvcmZvcm11bGFyaW8iLCJWQUxJREFSX0ZPUk1VTEFSSU8iLCJPUEVSQUNJT05fQUNUVUFMIiwib3BlcmFjaW9uIiwiZmlsdGVyIiwiX2lkIiwiRUxJTUlOQVJfT1BFUkFDSU9OIiwiT1BFUkFDSU9OX0VSUk9SIiwiQUNUVUFMSVpBUl9PUEVSQUNJT04iLCJtYXAiLCJMSU1QSUFSX09QRVJBQ0lPTiIsIkNBTENVTEFSX0JBTEFOQ0UiLCJiYWxhbmNlIiwicmVkdWNlIiwibW9udG8iLCJ0aXBvIiwiT1BFUkFDSU9ORVNfQ0FURUdPUklBUyIsIlRPVEFMX0lOR1JFU09TIiwiaW5ncmVzb3MiLCJUT1RBTF9FR1JFU09TIiwiZWdyZXNvcyIsIk9wZXJhY2lvblN0YXRlIiwibnVldmFPcGVyYWNpb24iLCJvcGVyYWNpb25SZWR1Y2VyIiwibW9zdHJhckZvcm11bGFyaW8iLCJvYnRlbmVyT3BlcmFjaW9uZXMiLCJyZXN1bHRhZG8iLCJhZ3JlZ2FyT3BlcmFjaW9uIiwibW9zdHJhckVycm9yIiwib3BlcmFjaW9uQWN0dWFsIiwib3BlcmFjaW9uSWQiLCJlbGltaW5hck9wZXJhY2lvbiIsImRlbGV0ZSIsImFjdHVhbGl6YXJPcGVyYWNpb24iLCJwdXQiLCJsaW1waWFyT3BlcmFjaW9uIiwiY2FsY3VsYXJUb3RhbEluZ3Jlc29zIiwiY2FsY3VsYXJUb3RhbEVncmVzb3MiLCJjYWxjdWxhckJhbGFuY2UiLCJjYWxjdWxhclRvdGFsZXMiLCJvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUM5QkMsU0FBTyxFQUFFQyx1QkFBc0JDO0FBREQsQ0FBYixDQUFyQjtBQUllTCwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7O0FBRUEsTUFBTU0sU0FBUyxHQUFHQyxLQUFLLElBQUk7QUFDdkIsTUFBR0EsS0FBSCxFQUFVO0FBQ05QLGtEQUFZLENBQUNRLFFBQWIsQ0FBc0JDLE9BQXRCLENBQThCQyxNQUE5QixDQUFxQyxlQUFyQyxJQUF5RCxVQUFTSCxLQUFNLEVBQXhFO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsV0FBT1AsOENBQVksQ0FBQ1EsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLENBQXFDLGVBQXJDLENBQVA7QUFDSDtBQUNKLENBTkQ7O0FBUWVKLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUssYUFBYSxHQUFHQywyREFBYSxFQUFuQztBQUVlRCw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBRWUsZ0VBQUNFLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLQyxxREFBTDtBQUNJLGFBQU87QUFDSEMsY0FBTSxFQUFFSCxNQUFNLENBQUNJO0FBRFosT0FBUDs7QUFHSixTQUFLQyxzREFBTDtBQUNJLDZDQUNPTixLQURQO0FBRUlPLGVBQU8sRUFBRU4sTUFBTSxDQUFDSTtBQUZwQjs7QUFJSixTQUFLRyxxREFBTDtBQUNJLGFBQU87QUFDSEosY0FBTSxFQUFFO0FBREwsT0FBUDs7QUFHSjtBQUNJLGFBQU9KLEtBQVA7QUFmUjtBQWlCSCxDQWxCRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1TLFdBQVcsR0FBR0MsS0FBSyxJQUFJO0FBQ3pCLFFBQU1DLFlBQVksR0FBRztBQUNqQlAsVUFBTSxFQUFFO0FBRFMsR0FBckI7QUFJQSxRQUFNO0FBQUEsT0FBRUosS0FBRjtBQUFBLE9BQVNZO0FBQVQsTUFBc0JDLHdEQUFVLENBQUNDLHNEQUFELEVBQWdCSCxZQUFoQixDQUF0QyxDQUx5QixDQU96Qjs7QUFDQSxRQUFNSSxhQUFhLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxTQUFOLEtBQW9CO0FBQ3RDTCxZQUFRLENBQUM7QUFDTFYsVUFBSSxFQUFFQyxxREFERDtBQUVMRSxhQUFPLEVBQUU7QUFDTFcsV0FESztBQUVMQztBQUZLO0FBRkosS0FBRCxDQUFSLENBRHNDLENBU3RDOztBQUNBQyxjQUFVLENBQUMsTUFBTTtBQUNiTixjQUFRLENBQUM7QUFDTFYsWUFBSSxFQUFFTSxxREFBY0E7QUFEZixPQUFELENBQVI7QUFHSCxLQUpTLEVBSVAsSUFKTyxDQUFWO0FBS0gsR0FmRDs7QUFpQkEsU0FDSSxNQUFDLHNEQUFELENBQWUsUUFBZjtBQUNJLFNBQUssRUFBRTtBQUNISixZQUFNLEVBQUVKLEtBQUssQ0FBQ0ksTUFEWDtBQUVIVztBQUZHLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1LTCxLQUFLLENBQUNTLFFBTlgsQ0FESjtBQVdILENBcENEOztBQXNDZVYsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTVcsVUFBVSxHQUFHckIsMkRBQWEsRUFBaEM7QUFFZXFCLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFNZSxnRUFBQ3BCLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLQyxxREFBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlxQix1QkFBZSxFQUFFcEIsTUFBTSxDQUFDSTtBQUY1Qjs7QUFJSixTQUFLRyxxREFBTDtBQUNJLDZDQUNPUixLQURQO0FBRUlxQix1QkFBZSxFQUFFO0FBRnJCOztBQUlKLFNBQUtDLG9EQUFMO0FBQ0ksNkNBQ090QixLQURQO0FBRUlxQix1QkFBZSxFQUFFLElBRnJCO0FBR0lFLGNBQU0sRUFBRSxFQUhaO0FBSUlDLHVCQUFlLEVBQUMsRUFKcEI7QUFLSUMsZ0JBQVEsRUFBRSxJQUxkO0FBTUlDLGlCQUFTLEVBQUUsQ0FOZjtBQU9JQyxnQkFBUSxFQUFFLEVBUGQ7QUFRSUMsYUFBSyxFQUFFLElBUlg7QUFTSUMsV0FBRyxFQUFFO0FBVFQ7O0FBV0o7QUFDSSxhQUFPN0IsS0FBUDtBQXhCUjtBQTBCSCxDQTNCRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBLE1BQU04QixRQUFRLEdBQUcsQ0FBQztBQUFDWDtBQUFELENBQUQsS0FBZ0I7QUFFN0IsUUFBTVIsWUFBWSxHQUFHO0FBQ2pCb0IsV0FBTyxFQUFFO0FBRFEsR0FBckIsQ0FGNkIsQ0FNN0I7O0FBQ0EsUUFBTTtBQUFBLE9BQUMvQixLQUFEO0FBQUEsT0FBUVk7QUFBUixNQUFvQkMsd0RBQVUsQ0FBQ21CLG1EQUFELEVBQWFyQixZQUFiLENBQXBDLENBUDZCLENBUzdCOztBQUNBLFFBQU1JLGFBQWEsR0FBR0MsR0FBRyxJQUFJO0FBQ3pCSixZQUFRLENBQUM7QUFDTFYsVUFBSSxFQUFFQyxxREFERDtBQUVMRSxhQUFPLEVBQUVXO0FBRkosS0FBRCxDQUFSO0FBS0FFLGNBQVUsQ0FBQyxNQUFNO0FBQ2JOLGNBQVEsQ0FBQztBQUNMVixZQUFJLEVBQUVNLHFEQUFjQTtBQURmLE9BQUQsQ0FBUjtBQUdILEtBSlMsRUFJUCxJQUpPLENBQVY7QUFLSCxHQVhEOztBQWFBLFFBQU15QixZQUFZLEdBQUcsTUFBTTtBQUN2QnJCLFlBQVEsQ0FBQztBQUNMVixVQUFJLEVBQUVvQixvREFBYUE7QUFEZCxLQUFELENBQVI7QUFHSCxHQUpEOztBQU9BLFNBQ0ksTUFBQyxtREFBRCxDQUFZLFFBQVo7QUFDSSxTQUFLLEVBQUU7QUFDSFMsYUFBTyxFQUFFL0IsS0FBSyxDQUFDK0IsT0FEWjtBQUVIaEIsbUJBRkc7QUFHSGtCO0FBSEcsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0tkLFFBUEwsQ0FESjtBQVdILENBekNEOztBQTJDZVcsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUksV0FBVyxHQUFHbkMsMkRBQWEsRUFBakM7QUFFZW1DLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFVZSxnRUFBQ2xDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLaUMsdURBQUw7QUFDQSxTQUFLQyxxREFBTDtBQUNBLFNBQUtDLGtEQUFMO0FBQ0ksNkNBQ09yQyxLQURQO0FBRUkrQixlQUFPLEVBQUU5QixNQUFNLENBQUNJO0FBRnBCOztBQUlKLFNBQUtpQyxvREFBTDtBQUNJQyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCdkMsTUFBTSxDQUFDSSxPQUFyQztBQUNBLDZDQUNPTCxLQURQO0FBRUlOLGFBQUssRUFBRU8sTUFBTSxDQUFDSSxPQUZsQjtBQUdJb0MsbUJBQVcsRUFBRTtBQUhqQjs7QUFLSixTQUFLakMscURBQUw7QUFDSSw2Q0FDT1IsS0FEUDtBQUVJK0IsZUFBTyxFQUFFO0FBRmI7O0FBSUosU0FBS1csMERBQUw7QUFDSSw2Q0FDTzFDLEtBRFA7QUFFSU8sZUFBTyxFQUFFTixNQUFNLENBQUNJLE9BRnBCO0FBR0lvQyxtQkFBVyxFQUFFO0FBSGpCOztBQUtKLFNBQUtFLG9EQUFMO0FBQ0lKLGtCQUFZLENBQUNLLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQSw2Q0FDTzVDLEtBRFA7QUFFSU8sZUFBTyxFQUFFLElBRmI7QUFHSWIsYUFBSyxFQUFFLElBSFg7QUFJSStDLG1CQUFXLEVBQUU7QUFKakI7O0FBTUo7QUFDSSxhQUFPekMsS0FBUDtBQW5DUjtBQXFDSCxDQXRDRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBR0E7QUFVQTtBQUNBOztBQUVBLE1BQU02QyxTQUFTLEdBQUcsQ0FBQztBQUFDMUI7QUFBRCxDQUFELEtBQWdCO0FBRTlCO0FBQ0EsUUFBTVIsWUFBWSxHQUFHO0FBQ2pCakIsU0FBSyxFQUFFLFFBQWdDNkMsU0FBaEMsR0FBZ0UsRUFEdEQ7QUFFakJFLGVBQVcsRUFBRSxJQUZJO0FBR2pCbEMsV0FBTyxFQUFFLElBSFE7QUFJakJ3QixXQUFPLEVBQUUsSUFKUTtBQUtqQk4sWUFBUSxFQUFFO0FBTE8sR0FBckIsQ0FIOEIsQ0FXOUI7O0FBQ0EsUUFBTTtBQUFBLE9BQUV6QixLQUFGO0FBQUEsT0FBU1k7QUFBVCxNQUFzQkMsd0RBQVUsQ0FBQ2lDLG9EQUFELEVBQWNuQyxZQUFkLENBQXRDLENBWjhCLENBYzlCOztBQUNBLFFBQU1vQyxnQkFBZ0IsR0FBRyxNQUFNQyxLQUFOLElBQWU7QUFFcEMsUUFBSTtBQUNBLFlBQU1DLFNBQVMsR0FBRyxNQUFNOUQscURBQVksQ0FBQytELElBQWIsQ0FBa0IsZUFBbEIsRUFBbUNGLEtBQW5DLENBQXhCO0FBQ0FwQyxjQUFRLENBQUM7QUFDTFYsWUFBSSxFQUFFaUMsdURBREQ7QUFFTDlCLGVBQU8sRUFBRTRDLFNBQVMsQ0FBQ0UsSUFBVixDQUFlbkM7QUFGbkIsT0FBRCxDQUFSLENBRkEsQ0FPQTtBQUNBO0FBQ0gsS0FURCxDQVNFLE9BQU9vQyxLQUFQLEVBQWM7QUFDWnhDLGNBQVEsQ0FBQztBQUNMVixZQUFJLEVBQUVrQyxxREFERDtBQUVML0IsZUFBTyxFQUFFK0MsS0FBSyxDQUFDQyxRQUFOLENBQWVGLElBQWYsQ0FBb0JuQztBQUZ4QixPQUFELENBQVI7QUFJSCxLQWhCbUMsQ0FpQnBDOzs7QUFDQUUsY0FBVSxDQUFDLE1BQU07QUFDYk4sY0FBUSxDQUFDO0FBQ0xWLFlBQUksRUFBRU0scURBQWNBO0FBRGYsT0FBRCxDQUFSO0FBR0gsS0FKUyxFQUlQLElBSk8sQ0FBVjtBQUtILEdBdkJELENBZjhCLENBd0M5Qjs7O0FBQ0EsUUFBTThDLGFBQWEsR0FBRyxNQUFNTixLQUFOLElBQWU7QUFFakMsUUFBSTtBQUNBLFlBQU1DLFNBQVMsR0FBRyxNQUFNOUQscURBQVksQ0FBQytELElBQWIsQ0FBa0IsV0FBbEIsRUFBK0JGLEtBQS9CLENBQXhCO0FBQ0FwQyxjQUFRLENBQUM7QUFDTFYsWUFBSSxFQUFFb0Msb0RBREQ7QUFFTGpDLGVBQU8sRUFBRTRDLFNBQVMsQ0FBQ0UsSUFBVixDQUFlekQ7QUFGbkIsT0FBRCxDQUFSO0FBSUgsS0FORCxDQU1FLE9BQU8wRCxLQUFQLEVBQWM7QUFDWnhDLGNBQVEsQ0FBQztBQUNMVixZQUFJLEVBQUVtQyxrREFERDtBQUVMaEMsZUFBTyxFQUFFK0MsS0FBSyxDQUFDQyxRQUFOLENBQWVGLElBQWYsQ0FBb0JuQztBQUZ4QixPQUFELENBQVI7QUFJSCxLQWJnQyxDQWVqQzs7O0FBQ0FFLGNBQVUsQ0FBQyxNQUFNO0FBQ2JOLGNBQVEsQ0FBQztBQUNMVixZQUFJLEVBQUVNLHFEQUFjQTtBQURmLE9BQUQsQ0FBUjtBQUdILEtBSlMsRUFJUCxJQUpPLENBQVY7QUFLSCxHQXJCRCxDQXpDOEIsQ0FnRTlCOzs7QUFDQSxRQUFNK0Msa0JBQWtCLEdBQUcsWUFBWTtBQUNuQyxVQUFNN0QsS0FBSyxHQUFHNkMsWUFBWSxDQUFDaUIsT0FBYixDQUFxQixPQUFyQixDQUFkOztBQUNBLFFBQUc5RCxLQUFILEVBQVU7QUFDTkQsdUVBQVMsQ0FBQ0MsS0FBRCxDQUFUO0FBQ0g7O0FBRUQsUUFBSTtBQUNBLFlBQU11RCxTQUFTLEdBQUcsTUFBTTlELHFEQUFZLENBQUNzRSxHQUFiLENBQWlCLFdBQWpCLENBQXhCOztBQUNBLFVBQUdSLFNBQVMsQ0FBQ0UsSUFBVixDQUFlNUMsT0FBbEIsRUFBMkI7QUFDdkJLLGdCQUFRLENBQUM7QUFDTFYsY0FBSSxFQUFFd0MsMERBREQ7QUFFTHJDLGlCQUFPLEVBQUU0QyxTQUFTLENBQUNFLElBQVYsQ0FBZTVDO0FBRm5CLFNBQUQsQ0FBUjtBQUlIO0FBRUosS0FURCxDQVNFLE9BQU82QyxLQUFQLEVBQWM7QUFDWk0sYUFBTyxDQUFDQyxHQUFSLENBQVlQLEtBQVo7QUFDQXhDLGNBQVEsQ0FBQztBQUNMVixZQUFJLEVBQUVtQyxrREFERDtBQUVMaEMsZUFBTyxFQUFFK0MsS0FBSyxDQUFDQyxRQUFOLENBQWVGLElBQWYsQ0FBb0JuQztBQUZ4QixPQUFELENBQVI7QUFJSDtBQUNKLEdBdEJELENBakU4QixDQXlGOUI7OztBQUNBLFFBQU00QyxZQUFZLEdBQUcsTUFBTTtBQUN2QmhELFlBQVEsQ0FBQztBQUNMVixVQUFJLEVBQUV5QyxvREFBYUE7QUFEZCxLQUFELENBQVI7QUFHSCxHQUpEOztBQU1BLFNBQ0ksTUFBQyxvREFBRCxDQUFhLFFBQWI7QUFDSSxTQUFLLEVBQUU7QUFDSGpELFdBQUssRUFBRU0sS0FBSyxDQUFDTixLQURWO0FBRUgrQyxpQkFBVyxFQUFFekMsS0FBSyxDQUFDeUMsV0FGaEI7QUFHSGxDLGFBQU8sRUFBRVAsS0FBSyxDQUFDTyxPQUhaO0FBSUh3QixhQUFPLEVBQUUvQixLQUFLLENBQUMrQixPQUpaO0FBS0hOLGNBQVEsRUFBRXpCLEtBQUssQ0FBQ3lCLFFBTGI7QUFNSHNCLHNCQU5HO0FBT0hPLG1CQVBHO0FBUUhDLHdCQVJHO0FBU0hLO0FBVEcsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUt6QyxRQWJMLENBREo7QUFpQkgsQ0FqSEQ7O0FBbUhlMEIsd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDcklBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTWdCLGdCQUFnQixHQUFHOUQsMkRBQWEsRUFBdEM7QUFFZThELCtFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFnQmUsZ0VBQUM3RCxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDOUIsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSzRELDJEQUFMO0FBQ0ksNkNBQ085RCxLQURQO0FBRUkrRCxrQkFBVSxFQUFFO0FBRmhCOztBQUlKLFNBQUtDLDBEQUFMO0FBQ0ksNkNBQ09oRSxLQURQO0FBRUlpRSxtQkFBVyxFQUFFaEUsTUFBTSxDQUFDSTtBQUZ4Qjs7QUFJSixTQUFLNkQsd0RBQUw7QUFDSSw2Q0FDT2xFLEtBRFA7QUFFSWlFLG1CQUFXLEVBQUUsQ0FBQyxHQUFHakUsS0FBSyxDQUFDaUUsV0FBVixFQUF1QmhFLE1BQU0sQ0FBQ0ksT0FBOUIsQ0FGakI7QUFHSTBELGtCQUFVLEVBQUUsS0FIaEI7QUFJSUksdUJBQWUsRUFBRTtBQUpyQjs7QUFNSixTQUFLQyx5REFBTDtBQUNJLDZDQUNPcEUsS0FEUDtBQUVJbUUsdUJBQWUsRUFBRTtBQUZyQjs7QUFJSixTQUFLRSx1REFBTDtBQUNJLDZDQUNPckUsS0FEUDtBQUVJc0UsaUJBQVMsRUFBRXRFLEtBQUssQ0FBQ2lFLFdBQU4sQ0FBa0JNLE1BQWxCLENBQXlCRCxTQUFTLElBQUlBLFNBQVMsQ0FBQ0UsR0FBVixLQUNqRHZFLE1BQU0sQ0FBQ0ksT0FESTtBQUZmOztBQUtKLFNBQUtvRSx5REFBTDtBQUNJLDZDQUNPekUsS0FEUDtBQUVJaUUsbUJBQVcsRUFBRWpFLEtBQUssQ0FBQ2lFLFdBQU4sQ0FBa0JNLE1BQWxCLENBQXlCRCxTQUFTLElBQUlBLFNBQVMsQ0FBQ0UsR0FBVixLQUNuRHZFLE1BQU0sQ0FBQ0ksT0FETSxDQUZqQjtBQUlJaUUsaUJBQVMsRUFBRTtBQUpmOztBQU1KLFNBQUtJLHNEQUFMO0FBQ0ksNkNBQ08xRSxLQURQO0FBRUkrQixlQUFPLEVBQUU5QixNQUFNLENBQUNJO0FBRnBCOztBQUlKLFNBQUtzRSwyREFBTDtBQUNJLDZDQUNPM0UsS0FEUDtBQUVJaUUsbUJBQVcsRUFBRWpFLEtBQUssQ0FBQ2lFLFdBQU4sQ0FBa0JXLEdBQWxCLENBQXNCTixTQUFTLElBQUlBLFNBQVMsQ0FBQ0UsR0FBVixLQUFrQnZFLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlbUUsR0FBakMsR0FDOUN2RSxNQUFNLENBQUNJLE9BRHVDLEdBQzdCaUUsU0FETjtBQUZqQjs7QUFLSixTQUFLTyx3REFBTDtBQUNJLDZDQUNPN0UsS0FEUDtBQUVJc0UsaUJBQVMsRUFBRTtBQUZmOztBQUlKLFNBQUtRLHVEQUFMO0FBQ0ksNkNBQ085RSxLQURQO0FBRUkrRSxlQUFPLEVBQUUvRSxLQUFLLENBQUNpRSxXQUFOLENBQWtCZSxNQUFsQixDQUEwQixDQUFDQyxLQUFELEVBQVFYLFNBQVIsS0FBc0I7QUFDckQsY0FBSSxPQUFPVyxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzVCQSxpQkFBSyxHQUFHQSxLQUFLLENBQUNBLEtBQWQ7QUFDSDs7QUFDRixjQUFJWCxTQUFTLENBQUNZLElBQVYsS0FBbUIsU0FBdkIsRUFBa0NELEtBQUssSUFBSVgsU0FBUyxDQUFDVyxLQUFuQjtBQUNsQyxjQUFJWCxTQUFTLENBQUNZLElBQVYsS0FBbUIsUUFBdkIsRUFBaUNELEtBQUssSUFBSVgsU0FBUyxDQUFDVyxLQUFuQjtBQUNqQyxpQkFBT0EsS0FBUDtBQUNELFNBUFEsRUFPTixDQVBNO0FBRmI7O0FBV0osU0FBS0UsNkRBQUw7QUFDSSw2Q0FDT25GLEtBRFA7QUFFSWlFLG1CQUFXLEVBQUVqRSxLQUFLLENBQUNpRSxXQUFOLENBQWtCTSxNQUFsQixDQUF5QkQsU0FBUyxJQUFJQSxTQUFTLENBQUNyRCxTQUFWLEtBQ25EaEIsTUFBTSxDQUFDSSxPQURNO0FBRmpCOztBQUtKLFNBQUsrRSxxREFBTDtBQUNJLDZDQUNPcEYsS0FEUDtBQUVJcUYsZ0JBQVEsRUFBRXJGLEtBQUssQ0FBQ2lFLFdBQU4sQ0FBa0JlLE1BQWxCLENBQTBCLENBQUNDLEtBQUQsRUFBUVgsU0FBUixLQUFzQjtBQUN0RCxjQUFJLE9BQU9XLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDM0JBLGlCQUFLLEdBQUdBLEtBQUssQ0FBQ0EsS0FBZDtBQUNIOztBQUNELGNBQUlYLFNBQVMsQ0FBQ1ksSUFBVixLQUFtQixTQUF2QixFQUFrQ0QsS0FBSyxJQUFJWCxTQUFTLENBQUNXLEtBQW5CO0FBQ2xDLGlCQUFPQSxLQUFQO0FBQ0gsU0FOUyxFQU1QLENBTk87QUFGZDs7QUFVSixTQUFLSyxvREFBTDtBQUNJLDZDQUNPdEYsS0FEUDtBQUVJdUYsZUFBTyxFQUFFdkYsS0FBSyxDQUFDaUUsV0FBTixDQUFrQmUsTUFBbEIsQ0FBMEIsQ0FBQ0MsS0FBRCxFQUFRWCxTQUFSLEtBQXNCO0FBQ3JELGNBQUksT0FBT1csS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQkEsaUJBQUssR0FBR0EsS0FBSyxDQUFDQSxLQUFkO0FBQ0g7O0FBQ0QsY0FBSVgsU0FBUyxDQUFDWSxJQUFWLEtBQW1CLFFBQXZCLEVBQWlDRCxLQUFLLElBQUlYLFNBQVMsQ0FBQ1csS0FBbkI7QUFDakMsaUJBQU9BLEtBQVA7QUFDSCxTQU5RLEVBTU4sQ0FOTTtBQUZiOztBQVlKO0FBQ0ksYUFBT2pGLEtBQVA7QUEvRlI7QUFpR0gsQ0FsR0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUNBO0FBaUJBOztBQUVBLE1BQU13RixjQUFjLEdBQUc5RSxLQUFLLElBQUk7QUFFNUIsUUFBTUMsWUFBWSxHQUFHO0FBQ2pCc0QsZUFBVyxFQUFHLEVBREc7QUFFakJ3QixrQkFBYyxFQUFHLEtBRkE7QUFHakJ0QixtQkFBZSxFQUFFLEtBSEE7QUFJakJHLGFBQVMsRUFBRSxJQUpNO0FBS2pCdkMsV0FBTyxFQUFFLElBTFE7QUFNakJnRCxXQUFPLEVBQUUsQ0FOUTtBQU9qQk0sWUFBUSxFQUFFLENBUE87QUFRakJFLFdBQU8sRUFBRTtBQVJRLEdBQXJCLENBRjRCLENBYTVCOztBQUNBLFFBQU07QUFBQSxPQUFDdkYsS0FBRDtBQUFBLE9BQVFZO0FBQVIsTUFBb0JDLHdEQUFVLENBQUM2RSx5REFBRCxFQUFtQi9FLFlBQW5CLENBQXBDLENBZDRCLENBZ0I1Qjs7QUFDQSxRQUFNZ0YsaUJBQWlCLEdBQUcsTUFBTTtBQUM1Qi9FLFlBQVEsQ0FBQztBQUNMVixVQUFJLEVBQUU0RCwyREFBb0JBO0FBRHJCLEtBQUQsQ0FBUjtBQUdILEdBSkQsQ0FqQjRCLENBdUI1Qjs7O0FBQ0EsUUFBTThCLGtCQUFrQixHQUFHLFlBQVk7QUFDbkMsUUFBSTtBQUNBLFlBQU1DLFNBQVMsR0FBRyxNQUFNMUcscURBQVksQ0FBQ3NFLEdBQWIsQ0FBaUIsa0JBQWpCLENBQXhCO0FBRUE3QyxjQUFRLENBQUM7QUFDTFYsWUFBSSxFQUFFOEQsMERBREQ7QUFFTDNELGVBQU8sRUFBRXdGLFNBQVMsQ0FBQzFDLElBQVYsQ0FBZWM7QUFGbkIsT0FBRCxDQUFSO0FBSUgsS0FQRCxDQU9FLE9BQU9iLEtBQVAsRUFBYztBQUNaLFlBQU1oRCxNQUFNLEdBQUc7QUFDWFksV0FBRyxFQUFFLGVBRE07QUFFWEMsaUJBQVMsRUFBRTtBQUZBLE9BQWY7QUFJQUwsY0FBUSxDQUFDO0FBQ0xWLFlBQUksRUFBRXdFLHNEQUREO0FBRUxyRSxlQUFPLEVBQUVEO0FBRkosT0FBRCxDQUFSO0FBSUg7QUFDSixHQWxCRCxDQXhCNEIsQ0E0QzVCOzs7QUFDQSxRQUFNMEYsZ0JBQWdCLEdBQUcsTUFBTXhCLFNBQU4sSUFBbUI7QUFFeEMsUUFBSTtBQUNBLFlBQU11QixTQUFTLEdBQUcsTUFBTTFHLHFEQUFZLENBQUMrRCxJQUFiLENBQWtCLGtCQUFsQixFQUFzQ29CLFNBQXRDLENBQXhCO0FBQ0FaLGFBQU8sQ0FBQ0MsR0FBUixDQUFZa0MsU0FBWixFQUZBLENBR0E7O0FBQ0FqRixjQUFRLENBQUM7QUFDTFYsWUFBSSxFQUFFZ0Usd0RBREQ7QUFFTDdELGVBQU8sRUFBRXdGLFNBQVMsQ0FBQzFDO0FBRmQsT0FBRCxDQUFSO0FBSUgsS0FSRCxDQVFFLE9BQU9DLEtBQVAsRUFBYztBQUNaLFlBQU1oRCxNQUFNLEdBQUc7QUFDWFksV0FBRyxFQUFFLGVBRE07QUFFWEMsaUJBQVMsRUFBRTtBQUZBLE9BQWY7QUFJQUwsY0FBUSxDQUFDO0FBQ0xWLFlBQUksRUFBRXdFLHNEQUREO0FBRUxyRSxlQUFPLEVBQUVEO0FBRkosT0FBRCxDQUFSO0FBSUg7QUFFSixHQXJCRCxDQTdDNEIsQ0FvRTVCOzs7QUFDQSxRQUFNMkYsWUFBWSxHQUFHLE1BQU07QUFDdkJuRixZQUFRLENBQUM7QUFDTFYsVUFBSSxFQUFFa0UseURBQWtCQTtBQURuQixLQUFELENBQVI7QUFHSCxHQUpELENBckU0QixDQTJFNUI7OztBQUNBLFFBQU00QixlQUFlLEdBQUdDLFdBQVcsSUFBSTtBQUNuQ3JGLFlBQVEsQ0FBQztBQUNMVixVQUFJLEVBQUVtRSx1REFERDtBQUVMaEUsYUFBTyxFQUFFNEY7QUFGSixLQUFELENBQVI7QUFJSCxHQUxELENBNUU0QixDQW1GNUI7OztBQUNBLFFBQU1DLGlCQUFpQixHQUFHLE1BQU1ELFdBQU4sSUFBcUI7QUFDM0MsUUFBSTtBQUNBLFlBQU05RyxxREFBWSxDQUFDZ0gsTUFBYixDQUFxQixvQkFBbUJGLFdBQVksRUFBcEQsQ0FBTjtBQUNBckYsY0FBUSxDQUFDO0FBQ0xWLFlBQUksRUFBRXVFLHlEQUREO0FBRUxwRSxlQUFPLEVBQUU0RjtBQUZKLE9BQUQsQ0FBUjtBQUlILEtBTkQsQ0FNRSxPQUFPN0MsS0FBUCxFQUFjO0FBQ1osWUFBTWhELE1BQU0sR0FBRztBQUNYWSxXQUFHLEVBQUUsZUFETTtBQUVYQyxpQkFBUyxFQUFFO0FBRkEsT0FBZjtBQUlBTCxjQUFRLENBQUM7QUFDTFYsWUFBSSxFQUFFd0Usc0RBREQ7QUFFTHJFLGVBQU8sRUFBRUQ7QUFGSixPQUFELENBQVI7QUFJSDtBQUNKLEdBakJELENBcEY0QixDQXVHNUI7OztBQUNBLFFBQU1nRyxtQkFBbUIsR0FBRyxNQUFNOUIsU0FBTixJQUFtQjtBQUMzQyxRQUFJO0FBQ0EsWUFBTXVCLFNBQVMsR0FBRyxNQUFNMUcscURBQVksQ0FBQ2tILEdBQWIsQ0FBa0Isb0JBQW1CL0IsU0FBUyxDQUFDRSxHQUFJLEVBQW5ELEVBQXNERixTQUF0RCxDQUF4QjtBQUNBMUQsY0FBUSxDQUFDO0FBQ0xWLFlBQUksRUFBRXlFLDJEQUREO0FBRUx0RSxlQUFPLEVBQUV3RixTQUFTLENBQUMxQyxJQUFWLENBQWVtQjtBQUZuQixPQUFELENBQVI7QUFJSCxLQU5ELENBTUUsT0FBT2xCLEtBQVAsRUFBYztBQUNaTSxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWjtBQUNIO0FBQ0osR0FWRCxDQXhHNEIsQ0FvSDVCOzs7QUFDQSxRQUFNa0QsZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQjFGLFlBQVEsQ0FBQztBQUNMVixVQUFJLEVBQUUyRSx3REFBaUJBO0FBRGxCLEtBQUQsQ0FBUjtBQUdILEdBSkQ7O0FBTUEsUUFBTTBCLHFCQUFxQixHQUFHLFlBQVk7QUFDdEMzRixZQUFRLENBQUM7QUFDTFYsVUFBSSxFQUFFa0YscURBQWNBO0FBRGYsS0FBRCxDQUFSO0FBR0gsR0FKRDs7QUFNQSxRQUFNb0Isb0JBQW9CLEdBQUcsWUFBWTtBQUNyQzVGLFlBQVEsQ0FBQztBQUNMVixVQUFJLEVBQUVvRixvREFBYUE7QUFEZCxLQUFELENBQVI7QUFHSCxHQUpELENBakk0QixDQXdJNUI7OztBQUNBLFFBQU1tQixlQUFlLEdBQUcsWUFBWTtBQUNoQzdGLFlBQVEsQ0FBQztBQUNMVixVQUFJLEVBQUU0RSx1REFBZ0JBO0FBRGpCLEtBQUQsQ0FBUjtBQUdILEdBSkQ7O0FBTUEsUUFBTTRCLGVBQWUsR0FBRyxZQUFZO0FBQ2hDLFVBQU1kLGtCQUFrQixFQUF4QjtBQUVBVyx5QkFBcUI7QUFDckJDLHdCQUFvQjtBQUNwQkMsbUJBQWU7QUFDbEIsR0FORDs7QUFRQSxRQUFNRSw0QkFBNEIsR0FBRyxNQUFNMUYsU0FBTixJQUFtQjtBQUVwRCxVQUFNMkUsa0JBQWtCLEVBQXhCO0FBRUFoRixZQUFRLENBQUM7QUFDTFYsVUFBSSxFQUFFaUYsNkRBREQ7QUFFTDlFLGFBQU8sRUFBRVk7QUFGSixLQUFELENBQVI7QUFJSCxHQVJEOztBQVlBLFNBQ0ksTUFBQyx5REFBRCxDQUFrQixRQUFsQjtBQUNJLFNBQUssRUFBRTtBQUNIZ0QsaUJBQVcsRUFBRWpFLEtBQUssQ0FBQ2lFLFdBRGhCO0FBRUhGLGdCQUFVLEVBQUUvRCxLQUFLLENBQUMrRCxVQUZmO0FBR0hJLHFCQUFlLEVBQUVuRSxLQUFLLENBQUNtRSxlQUhwQjtBQUlIRyxlQUFTLEVBQUV0RSxLQUFLLENBQUNzRSxTQUpkO0FBS0h2QyxhQUFPLEVBQUUvQixLQUFLLENBQUMrQixPQUxaO0FBTUhnRCxhQUFPLEVBQUUvRSxLQUFLLENBQUMrRSxPQU5aO0FBT0hNLGNBQVEsRUFBRXJGLEtBQUssQ0FBQ3FGLFFBUGI7QUFRSEUsYUFBTyxFQUFFdkYsS0FBSyxDQUFDdUYsT0FSWjtBQVNISSx1QkFURztBQVVIQyx3QkFWRztBQVdIRSxzQkFYRztBQVlIQyxrQkFaRztBQWFIQyxxQkFiRztBQWNIRSx1QkFkRztBQWVIRSx5QkFmRztBQWdCSEcsMkJBaEJHO0FBaUJIQywwQkFqQkc7QUFrQkhDLHFCQWxCRztBQW1CSEUsa0NBbkJHO0FBb0JIRDtBQXBCRyxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F3QktoRyxLQUFLLENBQUNTLFFBeEJYLENBREo7QUE0QkgsQ0EvTEQ7O0FBaU1lcUUsNkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTW9CLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQ3hDLFNBQ0ksTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLENBREosQ0FESixDQURKLENBREo7QUFXSCxDQVpEOztBQWFlRixvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTXpFLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxNQUFNRSxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNRCxXQUFXLEdBQUcsYUFBcEI7QUFFQSxNQUFNSyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFFQSxNQUFNeEMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1LLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxNQUFNYyxhQUFhLEdBQUcsZUFBdEI7QUFJQSxNQUFNd0Msb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUUsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTVEsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1OLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1JLGtCQUFrQixHQUFHLG9CQUEzQjtBQUdBLE1BQU1uRSxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTXFFLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1FLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1PLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNRSxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNUixnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNSyxzQkFBc0IsR0FBRyx3QkFBL0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ1Asa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBjbGllbnRlQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LmJhY2tlbmRVUkxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRlQXhpb3M7IiwiaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuL2F4aW9zJztcblxuY29uc3QgdG9rZW5BdXRoID0gdG9rZW4gPT4ge1xuICAgIGlmKHRva2VuKSB7XG4gICAgICAgIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5BdXRoOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBhbGVydGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxlcnRhQ29udGV4dDsiLCJpbXBvcnQgeyBNT1NUUkFSX0FMRVJUQSwgT0NVTFRBUl9BTEVSVEEsIE9CVEVORVJfVVNVQVJJTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIE1PU1RSQVJfQUxFUlRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnRhOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPQlRFTkVSX1VTVUFSSU86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydGE6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYWxlcnRhUmVkdWNlciBmcm9tICcuL2FsZXJ0YVJlZHVjZXInO1xyXG5pbXBvcnQgYWxlcnRhQ29udGV4dCBmcm9tICcuL2FsZXJ0YUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgTU9TVFJBUl9BTEVSVEEsIE9DVUxUQVJfQUxFUlRBIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgQWxlcnRhU3RhdGUgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgYWxlcnRhOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoYWxlcnRhUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyBmdW5jaW9uZXNcclxuICAgIGNvbnN0IG1vc3RyYXJBbGVydGEgPSAobXNnLCBjYXRlZ29yaWEpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE1PU1RSQVJfQUxFUlRBLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtc2csXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBkZXNwdcOpcyBkZSA1IHNlZ3VuZG9zIGxpbXBpYXIgYWxlcnRhXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YWxlcnRhQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgYWxlcnRhOiBzdGF0ZS5hbGVydGEsXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyQWxlcnRhXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9hbGVydGFDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnRhU3RhdGU7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwQ29udGV4dDsiLCJpbXBvcnQge1xuICAgIE1PU1RSQVJfQUxFUlRBLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExJTVBJQVJfU1RBVEVcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIE1PU1RSQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamVfYXJjaGl2bzogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIExJTVBJQVJfU1RBVEU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamVfYXJjaGl2bzogbnVsbCxcbiAgICAgICAgICAgICAgICBub21icmU6ICcnLFxuICAgICAgICAgICAgICAgIG5vbWJyZV9vcmlnaW5hbDonJyxcbiAgICAgICAgICAgICAgICBjYXJnYW5kbzogbnVsbCxcbiAgICAgICAgICAgICAgICBkZXNjYXJnYXM6IDEsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgIGF1dG9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHVybDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXBwQ29udGV4dCBmcm9tICcuL2FwcENvbnRleHQnO1xuaW1wb3J0IGFwcFJlZHVjZXIgZnJvbSAnLi9hcHBSZWR1Y2VyJztcbmltcG9ydCB7XG4gICAgTU9TVFJBUl9BTEVSVEEsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgTElNUElBUl9TVEFURVxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5cbmNvbnN0IEFwcFN0YXRlID0gKHtjaGlsZHJlbn0pID0+IHtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgbWVuc2FqZTogbnVsbFxuICAgIH1cblxuICAgIC8vIENyZWFyIGRpc3BhdGNoIHkgc3RhdGVcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoYXBwUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICAgIC8vIE11ZXN0cmEgdW5hIGFsZXJ0YSBcbiAgICBjb25zdCBtb3N0cmFyQWxlcnRhID0gbXNnID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogTU9TVFJBUl9BTEVSVEEsXG4gICAgICAgICAgICBwYXlsb2FkOiBtc2dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW1waWFyU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IExJTVBJQVJfU1RBVEVcbiAgICAgICAgfSlcbiAgICB9XG4gXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXBwQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxuICAgICAgICAgICAgICAgIG1vc3RyYXJBbGVydGEsXG4gICAgICAgICAgICAgICAgbGltcGlhclN0YXRlXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFN0YXRlOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoQ29udGV4dDsiLCJpbXBvcnQgeyBcbiAgICBSRUdJU1RST19FWElUT1NPLFxuICAgIFJFR0lTVFJPX0VSUk9SLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExPR0lOX0VYSVRPU08sXG4gICAgTE9HSU5fRVJST1IsXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICBDRVJSQVJfU0VTSU9OXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUdJU1RST19FWElUT1NPOlxuICAgICAgICBjYXNlIFJFR0lTVFJPX0VSUk9SOlxuICAgICAgICBjYXNlIExPR0lOX0VSUk9SOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgY2FzZSBMT0dJTl9FWElUT1NPOiBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamU6IG51bGxcbiAgICAgICAgICAgIH0gXG4gICAgICAgIGNhc2UgVVNVQVJJT19BVVRFTlRJQ0FETzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBDRVJSQVJfU0VTSU9OOiBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBudWxsLCBcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi9hdXRoQ29udGV4dCc7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5cblxuaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTywgXG4gICAgUkVHSVNUUk9fRVJST1IsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgTE9HSU5fRVhJVE9TTyxcbiAgICBMT0dJTl9FUlJPUixcbiAgICBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgIENFUlJBUl9TRVNJT05cbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5pbXBvcnQgdG9rZW5BdXRoIGZyb20gJy4uLy4uL2NvbmZpZy90b2tlbkF1dGgnO1xuXG5jb25zdCBBdXRoU3RhdGUgPSAoe2NoaWxkcmVufSkgPT4ge1xuXG4gICAgLy8gRGVmaW5pciB1biBzdGF0ZSBpbmljaWFsXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICB0b2tlbjogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnLFxuICAgICAgICBhdXRlbnRpY2FkbzogbnVsbCxcbiAgICAgICAgdXN1YXJpbzogbnVsbCxcbiAgICAgICAgbWVuc2FqZTogbnVsbCxcbiAgICAgICAgY2FyZ2FuZG86IG51bGxcbiAgICB9XG5cbiAgICAvLyBEZWZpbmlyIGVsIHJlZHVjZXJcbiAgICBjb25zdCBbIHN0YXRlLCBkaXNwYXRjaCBdID0gdXNlUmVkdWNlcihhdXRoUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICAgIC8vIFJlZ2lzdHJhciBudWV2b3MgdXN1YXJpb3NcbiAgICBjb25zdCByZWdpc3RyYXJVc3VhcmlvID0gYXN5bmMgZGF0b3MgPT4ge1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL3VzdWFyaW9zJywgZGF0b3MpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFJFR0lTVFJPX0VYSVRPU08sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEubXNnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gb2J0ZW5lciBlbCB1c3VhcmlvXG4gICAgICAgICAgICAvL3VzdWFyaW9BdXRlbnRpY2FkbygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFJFR0lTVFJPX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgLy8gQXV0ZW50aWNhciBVc3Vhcmlvc1xuICAgIGNvbnN0IGluaWNpYXJTZXNpb24gPSBhc3luYyBkYXRvcyA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL2F1dGgnLCBkYXRvcyk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVhJVE9TTyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS50b2tlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgLy8gUmV0b3JuZSBlbCBVc3VhcmlvIGF1dGVudGljYWRvIGVuIGJhc2UgYWwgSldUXG4gICAgY29uc3QgdXN1YXJpb0F1dGVudGljYWRvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBpZih0b2tlbikge1xuICAgICAgICAgICAgdG9rZW5BdXRoKHRva2VuKVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvYXV0aCcpO1xuICAgICAgICAgICAgaWYocmVzcHVlc3RhLmRhdGEudXN1YXJpbykge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudXN1YXJpb1xuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDZXJyYXIgbGEgc2VzacOzblxuICAgIGNvbnN0IGNlcnJhclNlc2lvbiA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQ0VSUkFSX1NFU0lPTlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3sgXG4gICAgICAgICAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiBzdGF0ZS5hdXRlbnRpY2FkbyxcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBzdGF0ZS51c3VhcmlvLFxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHN0YXRlLm1lbnNhamUsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IHN0YXRlLmNhcmdhbmRvLFxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhclVzdWFyaW8sXG4gICAgICAgICAgICAgICAgaW5pY2lhclNlc2lvbixcbiAgICAgICAgICAgICAgICB1c3VhcmlvQXV0ZW50aWNhZG8sIFxuICAgICAgICAgICAgICAgIGNlcnJhclNlc2lvblxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFN0YXRlOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBvcGVyYWNpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3BlcmFjaW9uQ29udGV4dDsiLCJpbXBvcnQge1xyXG4gICAgRk9STVVMQVJJT19PUEVSQUNJT04sXHJcbiAgICBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgQUdSRUdBUl9PUEVSQUNJT04sXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBWQUxJREFSX0ZPUk1VTEFSSU8sXHJcbiAgICBPUEVSQUNJT05fQUNUVUFMLFxyXG4gICAgRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX09QRVJBQ0lPTixcclxuICAgIENBTENVTEFSX0JBTEFOQ0UsXHJcbiAgICBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgVE9UQUxfSU5HUkVTT1MsXHJcbiAgICBUT1RBTF9FR1JFU09TXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgRk9STVVMQVJJT19PUEVSQUNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZvcm11bGFyaW86IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0JURU5FUl9PUEVSQUNJT05FUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFHUkVHQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogWy4uLnN0YXRlLm9wZXJhY2lvbmVzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVkFMSURBUl9GT1JNVUxBUklPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT1BFUkFDSU9OX0FDVFVBTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBzdGF0ZS5vcGVyYWNpb25lcy5maWx0ZXIob3BlcmFjaW9uID0+IG9wZXJhY2lvbi5faWQgPT09XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRUxJTUlOQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMuZmlsdGVyKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkICE9PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUNUVUFMSVpBUl9PUEVSQUNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcy5tYXAob3BlcmFjaW9uID0+IG9wZXJhY2lvbi5faWQgPT09IGFjdGlvbi5wYXlsb2FkLl9pZFxyXG4gICAgICAgICAgICAgICAgPyBhY3Rpb24ucGF5bG9hZCA6IG9wZXJhY2lvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElNUElBUl9PUEVSQUNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDQUxDVUxBUl9CQUxBTkNFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiBzdGF0ZS5vcGVyYWNpb25lcy5yZWR1Y2UoIChtb250bywgb3BlcmFjaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb250byAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBtb250byA9IG1vbnRvLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAob3BlcmFjaW9uLnRpcG8gPT09ICdJbmdyZXNvJykgbW9udG8gKz0gb3BlcmFjaW9uLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICBpZiAob3BlcmFjaW9uLnRpcG8gPT09ICdFZ3Jlc28nKSBtb250byAtPSBvcGVyYWNpb24ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBtb250bztcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcy5maWx0ZXIob3BlcmFjaW9uID0+IG9wZXJhY2lvbi5jYXRlZ29yaWEgPT09XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVE9UQUxfSU5HUkVTT1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGluZ3Jlc29zOiBzdGF0ZS5vcGVyYWNpb25lcy5yZWR1Y2UoIChtb250bywgb3BlcmFjaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb250byAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udG8gPSBtb250by5tb250bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhY2lvbi50aXBvID09PSAnSW5ncmVzbycpIG1vbnRvICs9IG9wZXJhY2lvbi5tb250bztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9udG87XHJcbiAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBUT1RBTF9FR1JFU09TOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlZ3Jlc29zOiBzdGF0ZS5vcGVyYWNpb25lcy5yZWR1Y2UoIChtb250bywgb3BlcmFjaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb250byAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udG8gPSBtb250by5tb250bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhY2lvbi50aXBvID09PSAnRWdyZXNvJykgbW9udG8gKz0gb3BlcmFjaW9uLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250bztcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi9vcGVyYWNpb25Db250ZXh0JztcclxuaW1wb3J0IG9wZXJhY2lvblJlZHVjZXIgZnJvbSAnLi9vcGVyYWNpb25SZWR1Y2VyJztcclxuaW1wb3J0IHtcclxuICAgIEZPUk1VTEFSSU9fT1BFUkFDSU9OLFxyXG4gICAgT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgIEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgVkFMSURBUl9GT1JNVUxBUklPLFxyXG4gICAgT1BFUkFDSU9OX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX09QRVJBQ0lPTixcclxuICAgIExJTVBJQVJfU1RBVEUsXHJcbiAgICBBQ1RVQUxJWkFSX09QRVJBQ0lPTixcclxuICAgIExJTVBJQVJfT1BFUkFDSU9OLFxyXG4gICAgQ0FMQ1VMQVJfQkFMQU5DRSxcclxuICAgIE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVMsXHJcbiAgICBUT1RBTF9JTkdSRVNPUyxcclxuICAgIFRPVEFMX0VHUkVTT1NcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcblxyXG5jb25zdCBPcGVyYWNpb25TdGF0ZSA9IHByb3BzID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgb3BlcmFjaW9uZXMgOiBbXSxcclxuICAgICAgICBudWV2YU9wZXJhY2lvbiA6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yZm9ybXVsYXJpbzogZmFsc2UsXHJcbiAgICAgICAgb3BlcmFjaW9uOiBudWxsLFxyXG4gICAgICAgIG1lbnNhamU6IG51bGwsXHJcbiAgICAgICAgYmFsYW5jZTogMCxcclxuICAgICAgICBpbmdyZXNvczogMCxcclxuICAgICAgICBlZ3Jlc29zOiAwXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGlzcGF0Y2ggcGFyYSBlamVjdXRhciBsYXMgYWNjaW9uZXNcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihvcGVyYWNpb25SZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICAgIC8vIHNlcmllIGRlIGZ1bmNpb25lcyBwYXJhIGVsIENSVURcclxuICAgIGNvbnN0IG1vc3RyYXJGb3JtdWxhcmlvID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogRk9STVVMQVJJT19PUEVSQUNJT05cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9idGVuZXIgbG9zIG9wZXJhY2lvbmVzXHJcbiAgICBjb25zdCBvYnRlbmVyT3BlcmFjaW9uZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCgnL2FwaS9vcGVyYWNpb25lcycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhLm9wZXJhY2lvbmVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gYWdyZWdhciBudWV2YSBvcGVyYWNpb25cclxuICAgIGNvbnN0IGFncmVnYXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb24gPT4ge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS9vcGVyYWNpb25lcycsIG9wZXJhY2lvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdGFkbyk7XHJcbiAgICAgICAgICAgIC8vIGluc2VydGFyIGVsIG9wZXJhY2lvbiBlbiBlbCBzdGF0ZVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB2YWxpZGFyIGVsIGZvcm11bGFyaW8gcG9yIGVycm9yZXNcclxuICAgIGNvbnN0IG1vc3RyYXJFcnJvciA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFZBTElEQVJfRk9STVVMQVJJT1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWNjaW9uYSBlbCBvcGVyYWNpb24gcXVlIGVsIHVzdWFyaW8gZGlvIGNsaWNrXHJcbiAgICBjb25zdCBvcGVyYWNpb25BY3R1YWwgPSBvcGVyYWNpb25JZCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fQUNUVUFMLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBvcGVyYWNpb25JZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWxpbWluYSB1biBvcGVyYWNpb25cclxuICAgIGNvbnN0IGVsaW1pbmFyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uSWQgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudGVBeGlvcy5kZWxldGUoYC9hcGkvb3BlcmFjaW9uZXMvJHtvcGVyYWNpb25JZH1gKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogb3BlcmFjaW9uSWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdGEgbyBtb2RpZmljYSB1bmEgb3BlcmFjaW9uXHJcbiAgICBjb25zdCBhY3R1YWxpemFyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucHV0KGAvYXBpL29wZXJhY2lvbmVzLyR7b3BlcmFjaW9uLl9pZH1gLCBvcGVyYWNpb24pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBQ1RVQUxJWkFSX09QRVJBQ0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhLm9wZXJhY2lvblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWxpbWluYSBsYSBvcGVyYWNpb24gc2VsZWNjaW9uYWRhXHJcbiAgICBjb25zdCBsaW1waWFyT3BlcmFjaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTElNUElBUl9PUEVSQUNJT05cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxJbmdyZXNvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFRPVEFMX0lOR1JFU09TXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxjdWxhclRvdGFsRWdyZXNvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFRPVEFMX0VHUkVTT1NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjYWxjdWxhciBlbCBiYWxhbmNlOiB0b3RhbCBpbmdyZXNvcyAtIHRvdGFsIGVncmVzb3NcclxuICAgIGNvbnN0IGNhbGN1bGFyQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENBTENVTEFSX0JBTEFOQ0VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuXHJcbiAgICAgICAgY2FsY3VsYXJUb3RhbEluZ3Jlc29zKCk7XHJcbiAgICAgICAgY2FsY3VsYXJUb3RhbEVncmVzb3MoKTtcclxuICAgICAgICBjYWxjdWxhckJhbGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzID0gYXN5bmMgY2F0ZWdvcmlhID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBjYXRlZ29yaWFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8b3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogc3RhdGUuZm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogc3RhdGUuZXJyb3Jmb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBzdGF0ZS5vcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogc3RhdGUuYmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGluZ3Jlc29zOiBzdGF0ZS5pbmdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGVncmVzb3M6IHN0YXRlLmVncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyRm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJPcGVyYWNpb25lcyxcclxuICAgICAgICAgICAgICAgIGFncmVnYXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25BY3R1YWwsXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGFjdHVhbGl6YXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsSW5ncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsRWdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMsXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhclRvdGFsZXNcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L29wZXJhY2lvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhY2lvblN0YXRlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWxlcnRhU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVN0YXRlJztcbmltcG9ydCBBdXRoU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZSc7XG5pbXBvcnQgQXBwU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwU3RhdGUnO1xuaW1wb3J0IE9wZXJhY2lvblN0YXRlIGZyb20gJy4uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uU3RhdGUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QWxlcnRhU3RhdGU+XG4gICAgICAgICAgICA8T3BlcmFjaW9uU3RhdGU+XG4gICAgICAgICAgICAgICAgPEF1dGhTdGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPEFwcFN0YXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0FwcFN0YXRlPlxuICAgICAgICAgICAgICAgIDwvQXV0aFN0YXRlPlxuICAgICAgICAgICAgPC9PcGVyYWNpb25TdGF0ZT5cbiAgICAgICAgPC9BbGVydGFTdGF0ZT5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiLCJleHBvcnQgY29uc3QgUkVHSVNUUk9fRVhJVE9TTyA9ICdSRUdJU1RST19FWElUT1NPJztcbmV4cG9ydCBjb25zdCBSRUdJU1RST19FUlJPUiA9ICdSRUdJU1RST19FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBMT0dJTl9FWElUT1NPID0gJ0xPR0lOX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IExPR0lOX0VSUk9SID0gJ0xPR0lOX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IFVTVUFSSU9fQVVURU5USUNBRE8gPSAnVVNVQVJJT19BVVRFTlRJQ0FETyc7XG5leHBvcnQgY29uc3QgQ0VSUkFSX1NFU0lPTiA9ICdDRVJSQVJfU0VTSU9OJ1xuXG5leHBvcnQgY29uc3QgTU9TVFJBUl9BTEVSVEEgPSAnTU9TVFJBUl9BTEVSVEEnO1xuZXhwb3J0IGNvbnN0IE9DVUxUQVJfQUxFUlRBID0gJ09DVUxUQVJfQUxFUlRBJztcblxuZXhwb3J0IGNvbnN0IExJTVBJQVJfU1RBVEUgPSAnTElNUElBUl9TVEFURSc7XG5cblxuXG5leHBvcnQgY29uc3QgRk9STVVMQVJJT19PUEVSQUNJT04gPSAnRk9STVVMQVJJT19PUEVSQUNJT04nO1xuZXhwb3J0IGNvbnN0IE9CVEVORVJfT1BFUkFDSU9ORVMgPSAnT0JURU5FUl9PUEVSQUNJT05FUyc7XG5leHBvcnQgY29uc3QgQUdSRUdBUl9PUEVSQUNJT04gPSAnQUdSRUdBUl9PUEVSQUNJT04nO1xuZXhwb3J0IGNvbnN0IE9QRVJBQ0lPTl9FUlJPUiA9ICdPUEVSQUNJT05fRVJST1InO1xuZXhwb3J0IGNvbnN0IFZBTElEQVJfRk9STVVMQVJJTyA9ICdWQUxJREFSX0ZPUk1VTEFSSU8nO1xuZXhwb3J0IGNvbnN0IE9QRVJBQ0lPTl9BQ1RVQUwgPSAnT1BFUkFDSU9OX0FDVFVBTCc7XG5leHBvcnQgY29uc3QgRUxJTUlOQVJfT1BFUkFDSU9OID0gJ0VMSU1JTkFSX09QRVJBQ0lPTic7XG5cblxuZXhwb3J0IGNvbnN0IE9CVEVORVJfVVNVQVJJTyA9ICdPQlRFTkVSX1VTVUFSSU8nO1xuXG5leHBvcnQgY29uc3QgQUNUVUFMSVpBUl9PUEVSQUNJT04gPSAnQUNUVUFMSVpBUl9PUEVSQUNJT04nO1xuZXhwb3J0IGNvbnN0IExJTVBJQVJfT1BFUkFDSU9OID0gJ0xJTVBJQVJfT1BFUkFDSU9OJztcblxuZXhwb3J0IGNvbnN0IFRPVEFMX0lOR1JFU09TID0gJ1RPVEFMX0lOR1JFU09TJztcbmV4cG9ydCBjb25zdCBUT1RBTF9FR1JFU09TID0gJ1RPVEFMX0VHUkVTT1MnO1xuZXhwb3J0IGNvbnN0IENBTENVTEFSX0JBTEFOQ0UgPSAnQ0FMQ1VMQVJfQkFMQU5DRSc7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9ORVNfQ0FURUdPUklBUyA9ICdPUEVSQUNJT05FU19DQVRFR09SSUFTJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9