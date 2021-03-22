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
        balance: state.operaciones.map(operacion => operacion.tipo === 'Ingreso' || operacion.tipo === 'ingreso' ? state.balance += operacion.monto : state.balance -= operacion.monto)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OPERACIONES_CATEGORIAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: state.operaciones.filter(operacion => operacion.categoria === action.payload)
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
    balance: 0
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
  }; // calcular el balance: total ingresos - total egresos


  const calcularBalance = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["CALCULAR_BALANCE"]
    });
  };

  const obtenerOperacionesCategorias = categoria => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACIONES_CATEGORIAS"]
    });
    console.log(categoria);
  };

  return __jsx(_operacionContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      operaciones: state.operaciones,
      formulario: state.formulario,
      errorformulario: state.errorformulario,
      operacion: state.operacion,
      mensaje: state.mensaje,
      balance: state.balance,
      mostrarFormulario,
      obtenerOperaciones,
      agregarOperacion,
      mostrarError,
      operacionActual,
      eliminarOperacion,
      actualizarOperacion,
      calcularBalance,
      obtenerOperacionesCategorias
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
/*! exports provided: REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION, MOSTRAR_ALERTA, OCULTAR_ALERTA, LIMPIAR_STATE, FORMULARIO_OPERACION, OBTENER_OPERACIONES, AGREGAR_OPERACION, OPERACION_ERROR, VALIDAR_FORMULARIO, OPERACION_ACTUAL, ELIMINAR_OPERACION, OBTENER_USUARIO, ACTUALIZAR_OPERACION, LIMPIAR_OPERACION, CALCULAR_BALANCE, OPERACIONES_CATEGORIAS */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwL2FwcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAvYXBwUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC9hcHBTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblN0YXRlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImNsaWVudGVBeGlvcyIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJiYWNrZW5kVVJMIiwidG9rZW5BdXRoIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhbGVydGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk1PU1RSQVJfQUxFUlRBIiwiYWxlcnRhIiwicGF5bG9hZCIsIk9CVEVORVJfVVNVQVJJTyIsInVzdWFyaW8iLCJPQ1VMVEFSX0FMRVJUQSIsIkFsZXJ0YVN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJhbGVydGFSZWR1Y2VyIiwibW9zdHJhckFsZXJ0YSIsIm1zZyIsImNhdGVnb3JpYSIsInNldFRpbWVvdXQiLCJjaGlsZHJlbiIsImFwcENvbnRleHQiLCJtZW5zYWplX2FyY2hpdm8iLCJMSU1QSUFSX1NUQVRFIiwibm9tYnJlIiwibm9tYnJlX29yaWdpbmFsIiwiY2FyZ2FuZG8iLCJkZXNjYXJnYXMiLCJwYXNzd29yZCIsImF1dG9yIiwidXJsIiwiQXBwU3RhdGUiLCJtZW5zYWplIiwiYXBwUmVkdWNlciIsImxpbXBpYXJTdGF0ZSIsImF1dGhDb250ZXh0IiwiUkVHSVNUUk9fRVhJVE9TTyIsIlJFR0lTVFJPX0VSUk9SIiwiTE9HSU5fRVJST1IiLCJMT0dJTl9FWElUT1NPIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImF1dGVudGljYWRvIiwiVVNVQVJJT19BVVRFTlRJQ0FETyIsIkNFUlJBUl9TRVNJT04iLCJyZW1vdmVJdGVtIiwiQXV0aFN0YXRlIiwiYXV0aFJlZHVjZXIiLCJyZWdpc3RyYXJVc3VhcmlvIiwiZGF0b3MiLCJyZXNwdWVzdGEiLCJwb3N0IiwiZGF0YSIsImVycm9yIiwicmVzcG9uc2UiLCJpbmljaWFyU2VzaW9uIiwidXN1YXJpb0F1dGVudGljYWRvIiwiZ2V0SXRlbSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJjZXJyYXJTZXNpb24iLCJvcGVyYWNpb25Db250ZXh0IiwiRk9STVVMQVJJT19PUEVSQUNJT04iLCJmb3JtdWxhcmlvIiwiT0JURU5FUl9PUEVSQUNJT05FUyIsIm9wZXJhY2lvbmVzIiwiQUdSRUdBUl9PUEVSQUNJT04iLCJlcnJvcmZvcm11bGFyaW8iLCJWQUxJREFSX0ZPUk1VTEFSSU8iLCJPUEVSQUNJT05fQUNUVUFMIiwib3BlcmFjaW9uIiwiZmlsdGVyIiwiX2lkIiwiRUxJTUlOQVJfT1BFUkFDSU9OIiwiT1BFUkFDSU9OX0VSUk9SIiwiQUNUVUFMSVpBUl9PUEVSQUNJT04iLCJtYXAiLCJMSU1QSUFSX09QRVJBQ0lPTiIsIkNBTENVTEFSX0JBTEFOQ0UiLCJiYWxhbmNlIiwidGlwbyIsIm1vbnRvIiwiT1BFUkFDSU9ORVNfQ0FURUdPUklBUyIsIk9wZXJhY2lvblN0YXRlIiwibnVldmFPcGVyYWNpb24iLCJvcGVyYWNpb25SZWR1Y2VyIiwibW9zdHJhckZvcm11bGFyaW8iLCJvYnRlbmVyT3BlcmFjaW9uZXMiLCJyZXN1bHRhZG8iLCJhZ3JlZ2FyT3BlcmFjaW9uIiwibW9zdHJhckVycm9yIiwib3BlcmFjaW9uQWN0dWFsIiwib3BlcmFjaW9uSWQiLCJlbGltaW5hck9wZXJhY2lvbiIsImRlbGV0ZSIsImFjdHVhbGl6YXJPcGVyYWNpb24iLCJwdXQiLCJsaW1waWFyT3BlcmFjaW9uIiwiY2FsY3VsYXJCYWxhbmNlIiwib2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FB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QUF0QjtBQUNBLE1BQU1ELFdBQVcsR0FBRyxhQUFwQjtBQUVBLE1BQU1LLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUVBLE1BQU14QyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUssY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1jLGFBQWEsR0FBRyxlQUF0QjtBQUlBLE1BQU13QyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNRSxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNUSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTU4sa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUksa0JBQWtCLEdBQUcsb0JBQTNCO0FBR0EsTUFBTW5FLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNcUUsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUksc0JBQXNCLEdBQUcsd0JBQS9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JQLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgY2xpZW50ZUF4aW9zID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5iYWNrZW5kVVJMXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50ZUF4aW9zOyIsImltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi9heGlvcyc7XG5cbmNvbnN0IHRva2VuQXV0aCA9IHRva2VuID0+IHtcbiAgICBpZih0b2tlbikge1xuICAgICAgICBjbGllbnRlQXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBjbGllbnRlQXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRva2VuQXV0aDsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgYWxlcnRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsZXJ0YUNvbnRleHQ7IiwiaW1wb3J0IHsgTU9TVFJBUl9BTEVSVEEsIE9DVUxUQVJfQUxFUlRBLCBPQlRFTkVSX1VTVUFSSU8gfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBNT1NUUkFSX0FMRVJUQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0YTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0JURU5FUl9VU1VBUklPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnRhOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFsZXJ0YVJlZHVjZXIgZnJvbSAnLi9hbGVydGFSZWR1Y2VyJztcclxuaW1wb3J0IGFsZXJ0YUNvbnRleHQgZnJvbSAnLi9hbGVydGFDb250ZXh0JztcclxuXHJcbmltcG9ydCB7IE1PU1RSQVJfQUxFUlRBLCBPQ1VMVEFSX0FMRVJUQSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IEFsZXJ0YVN0YXRlID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIGFsZXJ0YTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKGFsZXJ0YVJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gZnVuY2lvbmVzXHJcbiAgICBjb25zdCBtb3N0cmFyQWxlcnRhID0gKG1zZywgY2F0ZWdvcmlhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBNT1NUUkFSX0FMRVJUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbXNnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZGVzcHXDqXMgZGUgNSBzZWd1bmRvcyBsaW1waWFyIGFsZXJ0YVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFsZXJ0YUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGFsZXJ0YTogc3RhdGUuYWxlcnRhLFxyXG4gICAgICAgICAgICAgICAgbW9zdHJhckFsZXJ0YVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvYWxlcnRhQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0YVN0YXRlOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcENvbnRleHQ7IiwiaW1wb3J0IHtcbiAgICBNT1NUUkFSX0FMRVJUQSxcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMSU1QSUFSX1NUQVRFXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBNT1NUUkFSX0FMRVJUQTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBMSU1QSUFSX1NUQVRFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGwsXG4gICAgICAgICAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgICAgICAgICBub21icmVfb3JpZ2luYWw6JycsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IG51bGwsXG4gICAgICAgICAgICAgICAgZGVzY2FyZ2FzOiAxLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBhdXRvcjogbnVsbCxcbiAgICAgICAgICAgICAgICB1cmw6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi9hcHBDb250ZXh0JztcbmltcG9ydCBhcHBSZWR1Y2VyIGZyb20gJy4vYXBwUmVkdWNlcic7XG5pbXBvcnQge1xuICAgIE1PU1RSQVJfQUxFUlRBLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExJTVBJQVJfU1RBVEVcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuXG5jb25zdCBBcHBTdGF0ZSA9ICh7Y2hpbGRyZW59KSA9PiB7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIG1lbnNhamU6IG51bGxcbiAgICB9XG5cbiAgICAvLyBDcmVhciBkaXNwYXRjaCB5IHN0YXRlXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBNdWVzdHJhIHVuYSBhbGVydGEgXG4gICAgY29uc3QgbW9zdHJhckFsZXJ0YSA9IG1zZyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IE1PU1RSQVJfQUxFUlRBLFxuICAgICAgICAgICAgcGF5bG9hZDogbXNnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGltcGlhclN0YXRlID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX1NUQVRFXG4gICAgICAgIH0pXG4gICAgfVxuIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcbiAgICAgICAgICAgICAgICBtb3N0cmFyQWxlcnRhLFxuICAgICAgICAgICAgICAgIGxpbXBpYXJTdGF0ZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2FwcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aENvbnRleHQ7IiwiaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTyxcbiAgICBSRUdJU1RST19FUlJPUixcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMT0dJTl9FWElUT1NPLFxuICAgIExPR0lOX0VSUk9SLFxuICAgIFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgQ0VSUkFSX1NFU0lPTlxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgUkVHSVNUUk9fRVhJVE9TTzpcbiAgICAgICAgY2FzZSBSRUdJU1RST19FUlJPUjpcbiAgICAgICAgY2FzZSBMT0dJTl9FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIGNhc2UgTE9HSU5fRVhJVE9TTzogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBudWxsXG4gICAgICAgICAgICB9IFxuICAgICAgICBjYXNlIFVTVUFSSU9fQVVURU5USUNBRE86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0VSUkFSX1NFU0lPTjogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogbnVsbCwgXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4vYXV0aENvbnRleHQnO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuXG5cbmltcG9ydCB7IFxuICAgIFJFR0lTVFJPX0VYSVRPU08sIFxuICAgIFJFR0lTVFJPX0VSUk9SLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExPR0lOX0VYSVRPU08sXG4gICAgTE9HSU5fRVJST1IsXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICBDRVJSQVJfU0VTSU9OXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuaW1wb3J0IHRva2VuQXV0aCBmcm9tICcuLi8uLi9jb25maWcvdG9rZW5BdXRoJztcblxuY29uc3QgQXV0aFN0YXRlID0gKHtjaGlsZHJlbn0pID0+IHtcblxuICAgIC8vIERlZmluaXIgdW4gc3RhdGUgaW5pY2lhbFxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgdG9rZW46IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJyxcbiAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgIHVzdWFyaW86IG51bGwsXG4gICAgICAgIG1lbnNhamU6IG51bGwsXG4gICAgICAgIGNhcmdhbmRvOiBudWxsXG4gICAgfVxuXG4gICAgLy8gRGVmaW5pciBlbCByZWR1Y2VyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoYXV0aFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBSZWdpc3RyYXIgbnVldm9zIHVzdWFyaW9zXG4gICAgY29uc3QgcmVnaXN0cmFyVXN1YXJpbyA9IGFzeW5jIGRhdG9zID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS91c3VhcmlvcycsIGRhdG9zKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIG9idGVuZXIgZWwgdXN1YXJpb1xuICAgICAgICAgICAgLy91c3VhcmlvQXV0ZW50aWNhZG8oKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vIEF1dGVudGljYXIgVXN1YXJpb3NcbiAgICBjb25zdCBpbmljaWFyU2VzaW9uID0gYXN5bmMgZGF0b3MgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS9hdXRoJywgZGF0b3MpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VYSVRPU08sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vIFJldG9ybmUgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBlbiBiYXNlIGFsIEpXVFxuICAgIGNvbnN0IHVzdWFyaW9BdXRlbnRpY2FkbyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgaWYodG9rZW4pIHtcbiAgICAgICAgICAgIHRva2VuQXV0aCh0b2tlbilcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL2F1dGgnKTtcbiAgICAgICAgICAgIGlmKHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW8pIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW9cbiAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2VycmFyIGxhIHNlc2nDs25cbiAgICBjb25zdCBjZXJyYXJTZXNpb24gPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENFUlJBUl9TRVNJT05cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7IFxuICAgICAgICAgICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2Fkbzogc3RhdGUuYXV0ZW50aWNhZG8sXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogc3RhdGUudXN1YXJpbyxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBzdGF0ZS5jYXJnYW5kbyxcbiAgICAgICAgICAgICAgICByZWdpc3RyYXJVc3VhcmlvLFxuICAgICAgICAgICAgICAgIGluaWNpYXJTZXNpb24sXG4gICAgICAgICAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvLCBcbiAgICAgICAgICAgICAgICBjZXJyYXJTZXNpb25cbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3Qgb3BlcmFjaW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9wZXJhY2lvbkNvbnRleHQ7IiwiaW1wb3J0IHtcclxuICAgIEZPUk1VTEFSSU9fT1BFUkFDSU9OLFxyXG4gICAgT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgIEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgVkFMSURBUl9GT1JNVUxBUklPLFxyXG4gICAgT1BFUkFDSU9OX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX09QRVJBQ0lPTixcclxuICAgIEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgTElNUElBUl9PUEVSQUNJT04sXHJcbiAgICBDQUxDVUxBUl9CQUxBTkNFLFxyXG4gICAgT1BFUkFDSU9ORVNfQ0FURUdPUklBU1xyXG59IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZPUk1VTEFSSU9fT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9CVEVORVJfT1BFUkFDSU9ORVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBR1JFR0FSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IFsuLi5zdGF0ZS5vcGVyYWNpb25lcywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFZBTElEQVJfRk9STVVMQVJJTzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTl9BQ1RVQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogc3RhdGUub3BlcmFjaW9uZXMuZmlsdGVyKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkID09PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEVMSU1JTkFSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLmZpbHRlcihvcGVyYWNpb24gPT4gb3BlcmFjaW9uLl9pZCAhPT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPUEVSQUNJT05fRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFDVFVBTElaQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMubWFwKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkID09PSBhY3Rpb24ucGF5bG9hZC5faWRcclxuICAgICAgICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQgOiBvcGVyYWNpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExJTVBJQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb246IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0FMQ1VMQVJfQkFMQU5DRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogc3RhdGUub3BlcmFjaW9uZXMubWFwKG9wZXJhY2lvbiA9PiBcclxuICAgICAgICAgICAgICAgICAgICAob3BlcmFjaW9uLnRpcG8gPT09ICdJbmdyZXNvJyB8fCBvcGVyYWNpb24udGlwbyA9PT0gJ2luZ3Jlc28nKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGF0ZS5iYWxhbmNlICs9IG9wZXJhY2lvbi5tb250b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmJhbGFuY2UgLT0gb3BlcmFjaW9uLm1vbnRvXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcy5maWx0ZXIob3BlcmFjaW9uID0+IG9wZXJhY2lvbi5jYXRlZ29yaWEgPT09XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBvcGVyYWNpb25Db250ZXh0IGZyb20gJy4vb3BlcmFjaW9uQ29udGV4dCc7XHJcbmltcG9ydCBvcGVyYWNpb25SZWR1Y2VyIGZyb20gJy4vb3BlcmFjaW9uUmVkdWNlcic7XHJcbmltcG9ydCB7XHJcbiAgICBGT1JNVUxBUklPX09QRVJBQ0lPTixcclxuICAgIE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgIE9QRVJBQ0lPTl9FUlJPUixcclxuICAgIFZBTElEQVJfRk9STVVMQVJJTyxcclxuICAgIE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX1NUQVRFLFxyXG4gICAgQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX09QRVJBQ0lPTixcclxuICAgIENBTENVTEFSX0JBTEFOQ0UsXHJcbiAgICBPUEVSQUNJT05FU19DQVRFR09SSUFTXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xyXG5cclxuY29uc3QgT3BlcmFjaW9uU3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIG9wZXJhY2lvbmVzIDogW10sXHJcbiAgICAgICAgbnVldmFPcGVyYWNpb24gOiBmYWxzZSxcclxuICAgICAgICBlcnJvcmZvcm11bGFyaW86IGZhbHNlLFxyXG4gICAgICAgIG9wZXJhY2lvbjogbnVsbCxcclxuICAgICAgICBtZW5zYWplOiBudWxsLFxyXG4gICAgICAgIGJhbGFuY2U6IDBcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXNwYXRjaCBwYXJhIGVqZWN1dGFyIGxhcyBhY2Npb25lc1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG9wZXJhY2lvblJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gc2VyaWUgZGUgZnVuY2lvbmVzIHBhcmEgZWwgQ1JVRFxyXG4gICAgY29uc3QgbW9zdHJhckZvcm11bGFyaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBGT1JNVUxBUklPX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsb3Mgb3BlcmFjaW9uZXNcclxuICAgIGNvbnN0IG9idGVuZXJPcGVyYWNpb25lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL29wZXJhY2lvbmVzJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBhZ3JlZ2FyIG51ZXZhIG9wZXJhY2lvblxyXG4gICAgY29uc3QgYWdyZWdhck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbiA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL29wZXJhY2lvbmVzJywgb3BlcmFjaW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0YWRvKTtcclxuICAgICAgICAgICAgLy8gaW5zZXJ0YXIgZWwgb3BlcmFjaW9uIGVuIGVsIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHZhbGlkYXIgZWwgZm9ybXVsYXJpbyBwb3IgZXJyb3Jlc1xyXG4gICAgY29uc3QgbW9zdHJhckVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVkFMSURBUl9GT1JNVUxBUklPXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY2Npb25hIGVsIG9wZXJhY2lvbiBxdWUgZWwgdXN1YXJpbyBkaW8gY2xpY2tcclxuICAgIGNvbnN0IG9wZXJhY2lvbkFjdHVhbCA9IG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIHVuIG9wZXJhY2lvblxyXG4gICAgY29uc3QgZWxpbWluYXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb25JZCA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgY2xpZW50ZUF4aW9zLmRlbGV0ZShgL2FwaS9vcGVyYWNpb25lcy8ke29wZXJhY2lvbklkfWApO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBvcGVyYWNpb25JZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0YSBvIG1vZGlmaWNhIHVuYSBvcGVyYWNpb25cclxuICAgIGNvbnN0IGFjdHVhbGl6YXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb24gPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wdXQoYC9hcGkvb3BlcmFjaW9uZXMvJHtvcGVyYWNpb24uX2lkfWAsIG9wZXJhY2lvbik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIGxhIG9wZXJhY2lvbiBzZWxlY2Npb25hZGFcclxuICAgIGNvbnN0IGxpbXBpYXJPcGVyYWNpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsY3VsYXIgZWwgYmFsYW5jZTogdG90YWwgaW5ncmVzb3MgLSB0b3RhbCBlZ3Jlc29zXHJcbiAgICBjb25zdCBjYWxjdWxhckJhbGFuY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBDQUxDVUxBUl9CQUxBTkNFXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzID0gY2F0ZWdvcmlhID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVNcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpYSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8b3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogc3RhdGUuZm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogc3RhdGUuZXJyb3Jmb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBzdGF0ZS5vcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogc3RhdGUuYmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJGb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJFcnJvcixcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbkFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyT3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsaXphck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXNcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L29wZXJhY2lvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhY2lvblN0YXRlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWxlcnRhU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVN0YXRlJztcbmltcG9ydCBBdXRoU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZSc7XG5pbXBvcnQgQXBwU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwU3RhdGUnO1xuaW1wb3J0IE9wZXJhY2lvblN0YXRlIGZyb20gJy4uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uU3RhdGUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QWxlcnRhU3RhdGU+XG4gICAgICAgICAgICA8T3BlcmFjaW9uU3RhdGU+XG4gICAgICAgICAgICAgICAgPEF1dGhTdGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPEFwcFN0YXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0FwcFN0YXRlPlxuICAgICAgICAgICAgICAgIDwvQXV0aFN0YXRlPlxuICAgICAgICAgICAgPC9PcGVyYWNpb25TdGF0ZT5cbiAgICAgICAgPC9BbGVydGFTdGF0ZT5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiLCJleHBvcnQgY29uc3QgUkVHSVNUUk9fRVhJVE9TTyA9ICdSRUdJU1RST19FWElUT1NPJztcbmV4cG9ydCBjb25zdCBSRUdJU1RST19FUlJPUiA9ICdSRUdJU1RST19FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBMT0dJTl9FWElUT1NPID0gJ0xPR0lOX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IExPR0lOX0VSUk9SID0gJ0xPR0lOX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IFVTVUFSSU9fQVVURU5USUNBRE8gPSAnVVNVQVJJT19BVVRFTlRJQ0FETyc7XG5leHBvcnQgY29uc3QgQ0VSUkFSX1NFU0lPTiA9ICdDRVJSQVJfU0VTSU9OJ1xuXG5leHBvcnQgY29uc3QgTU9TVFJBUl9BTEVSVEEgPSAnTU9TVFJBUl9BTEVSVEEnO1xuZXhwb3J0IGNvbnN0IE9DVUxUQVJfQUxFUlRBID0gJ09DVUxUQVJfQUxFUlRBJztcblxuZXhwb3J0IGNvbnN0IExJTVBJQVJfU1RBVEUgPSAnTElNUElBUl9TVEFURSc7XG5cblxuXG5leHBvcnQgY29uc3QgRk9STVVMQVJJT19PUEVSQUNJT04gPSAnRk9STVVMQVJJT19PUEVSQUNJT04nO1xuZXhwb3J0IGNvbnN0IE9CVEVORVJfT1BFUkFDSU9ORVMgPSAnT0JURU5FUl9PUEVSQUNJT05FUyc7XG5leHBvcnQgY29uc3QgQUdSRUdBUl9PUEVSQUNJT04gPSAnQUdSRUdBUl9PUEVSQUNJT04nO1xuZXhwb3J0IGNvbnN0IE9QRVJBQ0lPTl9FUlJPUiA9ICdPUEVSQUNJT05fRVJST1InO1xuZXhwb3J0IGNvbnN0IFZBTElEQVJfRk9STVVMQVJJTyA9ICdWQUxJREFSX0ZPUk1VTEFSSU8nO1xuZXhwb3J0IGNvbnN0IE9QRVJBQ0lPTl9BQ1RVQUwgPSAnT1BFUkFDSU9OX0FDVFVBTCc7XG5leHBvcnQgY29uc3QgRUxJTUlOQVJfT1BFUkFDSU9OID0gJ0VMSU1JTkFSX09QRVJBQ0lPTic7XG5cblxuZXhwb3J0IGNvbnN0IE9CVEVORVJfVVNVQVJJTyA9ICdPQlRFTkVSX1VTVUFSSU8nO1xuXG5leHBvcnQgY29uc3QgQUNUVUFMSVpBUl9PUEVSQUNJT04gPSAnQUNUVUFMSVpBUl9PUEVSQUNJT04nO1xuZXhwb3J0IGNvbnN0IExJTVBJQVJfT1BFUkFDSU9OID0gJ0xJTVBJQVJfT1BFUkFDSU9OJztcblxuZXhwb3J0IGNvbnN0IENBTENVTEFSX0JBTEFOQ0UgPSAnQ0FMQ1VMQVJfQkFMQU5DRSc7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9ORVNfQ0FURUdPUklBUyA9ICdPUEVSQUNJT05FU19DQVRFR09SSUFTJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9