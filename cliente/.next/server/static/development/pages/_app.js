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
    mensaje: null
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
  };

  return __jsx(_operacionContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      operaciones: state.operaciones,
      formulario: state.formulario,
      errorformulario: state.errorformulario,
      operacion: state.operacion,
      mensaje: state.mensaje,
      mostrarFormulario,
      obtenerOperaciones,
      agregarOperacion,
      mostrarError,
      operacionActual,
      eliminarOperacion
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
/* harmony import */ var _context_auth_authState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/auth/authState */ "./context/auth/authState.js");
/* harmony import */ var _context_app_appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/app/appState */ "./context/app/appState.js");
/* harmony import */ var _context_operaciones_operacionState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/operaciones/operacionState */ "./context/operaciones/operacionState.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyReactChallenge\\cliente\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_context_operaciones_operacionState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_context_auth_authState__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(_context_app_appState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION, MOSTRAR_ALERTA, OCULTAR_ALERTA, LIMPIAR_STATE, FORMULARIO_OPERACION, OBTENER_OPERACIONES, AGREGAR_OPERACION, OPERACION_ERROR, VALIDAR_FORMULARIO, OPERACION_ACTUAL, ELIMINAR_OPERACION */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAvYXBwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC9hcHBSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwL2FwcFN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiY2xpZW50ZUF4aW9zIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImJhY2tlbmRVUkwiLCJ0b2tlbkF1dGgiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiTU9TVFJBUl9BTEVSVEEiLCJtZW5zYWplX2FyY2hpdm8iLCJwYXlsb2FkIiwiT0NVTFRBUl9BTEVSVEEiLCJMSU1QSUFSX1NUQVRFIiwibm9tYnJlIiwibm9tYnJlX29yaWdpbmFsIiwiY2FyZ2FuZG8iLCJkZXNjYXJnYXMiLCJwYXNzd29yZCIsImF1dG9yIiwidXJsIiwiQXBwU3RhdGUiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsIm1lbnNhamUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJhcHBSZWR1Y2VyIiwibW9zdHJhckFsZXJ0YSIsIm1zZyIsInNldFRpbWVvdXQiLCJsaW1waWFyU3RhdGUiLCJhdXRoQ29udGV4dCIsIlJFR0lTVFJPX0VYSVRPU08iLCJSRUdJU1RST19FUlJPUiIsIkxPR0lOX0VSUk9SIiwiTE9HSU5fRVhJVE9TTyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhdXRlbnRpY2FkbyIsIlVTVUFSSU9fQVVURU5USUNBRE8iLCJ1c3VhcmlvIiwiQ0VSUkFSX1NFU0lPTiIsInJlbW92ZUl0ZW0iLCJBdXRoU3RhdGUiLCJhdXRoUmVkdWNlciIsInJlZ2lzdHJhclVzdWFyaW8iLCJkYXRvcyIsInJlc3B1ZXN0YSIsInBvc3QiLCJkYXRhIiwiZXJyb3IiLCJyZXNwb25zZSIsImluaWNpYXJTZXNpb24iLCJ1c3VhcmlvQXV0ZW50aWNhZG8iLCJnZXRJdGVtIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImNlcnJhclNlc2lvbiIsIm9wZXJhY2lvbkNvbnRleHQiLCJGT1JNVUxBUklPX09QRVJBQ0lPTiIsImZvcm11bGFyaW8iLCJPQlRFTkVSX09QRVJBQ0lPTkVTIiwib3BlcmFjaW9uZXMiLCJBR1JFR0FSX09QRVJBQ0lPTiIsImVycm9yZm9ybXVsYXJpbyIsIlZBTElEQVJfRk9STVVMQVJJTyIsIk9QRVJBQ0lPTl9BQ1RVQUwiLCJvcGVyYWNpb24iLCJmaWx0ZXIiLCJfaWQiLCJFTElNSU5BUl9PUEVSQUNJT04iLCJPUEVSQUNJT05fRVJST1IiLCJPcGVyYWNpb25TdGF0ZSIsInByb3BzIiwibnVldmFPcGVyYWNpb24iLCJvcGVyYWNpb25SZWR1Y2VyIiwibW9zdHJhckZvcm11bGFyaW8iLCJvYnRlbmVyT3BlcmFjaW9uZXMiLCJyZXN1bHRhZG8iLCJhbGVydGEiLCJjYXRlZ29yaWEiLCJhZ3JlZ2FyT3BlcmFjaW9uIiwibW9zdHJhckVycm9yIiwib3BlcmFjaW9uQWN0dWFsIiwib3BlcmFjaW9uSWQiLCJlbGltaW5hck9wZXJhY2lvbiIsImRlbGV0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDOUJDLFNBQU8sRUFBRUMsdUJBQXNCQztBQURELENBQWIsQ0FBckI7QUFJZUwsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBOztBQUVBLE1BQU1NLFNBQVMsR0FBR0MsS0FBSyxJQUFJO0FB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QUFNSSxrQkFBa0IsR0FBRyxvQkFBM0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBjbGllbnRlQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LmJhY2tlbmRVUkxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRlQXhpb3M7IiwiaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuL2F4aW9zJztcblxuY29uc3QgdG9rZW5BdXRoID0gdG9rZW4gPT4ge1xuICAgIGlmKHRva2VuKSB7XG4gICAgICAgIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5BdXRoOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcENvbnRleHQ7IiwiaW1wb3J0IHtcbiAgICBNT1NUUkFSX0FMRVJUQSxcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMSU1QSUFSX1NUQVRFXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBNT1NUUkFSX0FMRVJUQTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBMSU1QSUFSX1NUQVRFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGwsXG4gICAgICAgICAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgICAgICAgICBub21icmVfb3JpZ2luYWw6JycsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IG51bGwsXG4gICAgICAgICAgICAgICAgZGVzY2FyZ2FzOiAxLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBhdXRvcjogbnVsbCxcbiAgICAgICAgICAgICAgICB1cmw6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcENvbnRleHQgZnJvbSAnLi9hcHBDb250ZXh0JztcbmltcG9ydCBhcHBSZWR1Y2VyIGZyb20gJy4vYXBwUmVkdWNlcic7XG5pbXBvcnQge1xuICAgIE1PU1RSQVJfQUxFUlRBLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExJTVBJQVJfU1RBVEVcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuXG5jb25zdCBBcHBTdGF0ZSA9ICh7Y2hpbGRyZW59KSA9PiB7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIG1lbnNhamU6IG51bGxcbiAgICB9XG5cbiAgICAvLyBDcmVhciBkaXNwYXRjaCB5IHN0YXRlXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBNdWVzdHJhIHVuYSBhbGVydGEgXG4gICAgY29uc3QgbW9zdHJhckFsZXJ0YSA9IG1zZyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IE1PU1RSQVJfQUxFUlRBLFxuICAgICAgICAgICAgcGF5bG9hZDogbXNnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGltcGlhclN0YXRlID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX1NUQVRFXG4gICAgICAgIH0pXG4gICAgfVxuIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcbiAgICAgICAgICAgICAgICBtb3N0cmFyQWxlcnRhLFxuICAgICAgICAgICAgICAgIGxpbXBpYXJTdGF0ZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2FwcENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aENvbnRleHQ7IiwiaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTyxcbiAgICBSRUdJU1RST19FUlJPUixcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMT0dJTl9FWElUT1NPLFxuICAgIExPR0lOX0VSUk9SLFxuICAgIFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgQ0VSUkFSX1NFU0lPTlxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgUkVHSVNUUk9fRVhJVE9TTzpcbiAgICAgICAgY2FzZSBSRUdJU1RST19FUlJPUjpcbiAgICAgICAgY2FzZSBMT0dJTl9FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIGNhc2UgTE9HSU5fRVhJVE9TTzogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBudWxsXG4gICAgICAgICAgICB9IFxuICAgICAgICBjYXNlIFVTVUFSSU9fQVVURU5USUNBRE86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0VSUkFSX1NFU0lPTjogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogbnVsbCwgXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4vYXV0aENvbnRleHQnO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuXG5cbmltcG9ydCB7IFxuICAgIFJFR0lTVFJPX0VYSVRPU08sIFxuICAgIFJFR0lTVFJPX0VSUk9SLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExPR0lOX0VYSVRPU08sXG4gICAgTE9HSU5fRVJST1IsXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICBDRVJSQVJfU0VTSU9OXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuaW1wb3J0IHRva2VuQXV0aCBmcm9tICcuLi8uLi9jb25maWcvdG9rZW5BdXRoJztcblxuY29uc3QgQXV0aFN0YXRlID0gKHtjaGlsZHJlbn0pID0+IHtcblxuICAgIC8vIERlZmluaXIgdW4gc3RhdGUgaW5pY2lhbFxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgdG9rZW46IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJyxcbiAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgIHVzdWFyaW86IG51bGwsXG4gICAgICAgIG1lbnNhamU6IG51bGwsXG4gICAgICAgIGNhcmdhbmRvOiBudWxsXG4gICAgfVxuXG4gICAgLy8gRGVmaW5pciBlbCByZWR1Y2VyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoYXV0aFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBSZWdpc3RyYXIgbnVldm9zIHVzdWFyaW9zXG4gICAgY29uc3QgcmVnaXN0cmFyVXN1YXJpbyA9IGFzeW5jIGRhdG9zID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS91c3VhcmlvcycsIGRhdG9zKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIG9idGVuZXIgZWwgdXN1YXJpb1xuICAgICAgICAgICAgLy91c3VhcmlvQXV0ZW50aWNhZG8oKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vIEF1dGVudGljYXIgVXN1YXJpb3NcbiAgICBjb25zdCBpbmljaWFyU2VzaW9uID0gYXN5bmMgZGF0b3MgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS9hdXRoJywgZGF0b3MpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VYSVRPU08sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vIFJldG9ybmUgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBlbiBiYXNlIGFsIEpXVFxuICAgIGNvbnN0IHVzdWFyaW9BdXRlbnRpY2FkbyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgaWYodG9rZW4pIHtcbiAgICAgICAgICAgIHRva2VuQXV0aCh0b2tlbilcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL2F1dGgnKTtcbiAgICAgICAgICAgIGlmKHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW8pIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW9cbiAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2VycmFyIGxhIHNlc2nDs25cbiAgICBjb25zdCBjZXJyYXJTZXNpb24gPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENFUlJBUl9TRVNJT05cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7IFxuICAgICAgICAgICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2Fkbzogc3RhdGUuYXV0ZW50aWNhZG8sXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogc3RhdGUudXN1YXJpbyxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBzdGF0ZS5jYXJnYW5kbyxcbiAgICAgICAgICAgICAgICByZWdpc3RyYXJVc3VhcmlvLFxuICAgICAgICAgICAgICAgIGluaWNpYXJTZXNpb24sXG4gICAgICAgICAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvLCBcbiAgICAgICAgICAgICAgICBjZXJyYXJTZXNpb25cbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3Qgb3BlcmFjaW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9wZXJhY2lvbkNvbnRleHQ7IiwiaW1wb3J0IHtcclxuICAgIEZPUk1VTEFSSU9fT1BFUkFDSU9OLFxyXG4gICAgT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgIEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgVkFMSURBUl9GT1JNVUxBUklPLFxyXG4gICAgT1BFUkFDSU9OX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX09QRVJBQ0lPTlxyXG59IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZPUk1VTEFSSU9fT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9CVEVORVJfT1BFUkFDSU9ORVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBR1JFR0FSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IFsuLi5zdGF0ZS5vcGVyYWNpb25lcywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFZBTElEQVJfRk9STVVMQVJJTzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTl9BQ1RVQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogc3RhdGUub3BlcmFjaW9uZXMuZmlsdGVyKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkID09PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEVMSU1JTkFSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLmZpbHRlcihvcGVyYWNpb24gPT4gb3BlcmFjaW9uLl9pZCAhPT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPUEVSQUNJT05fRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBvcGVyYWNpb25Db250ZXh0IGZyb20gJy4vb3BlcmFjaW9uQ29udGV4dCc7XHJcbmltcG9ydCBvcGVyYWNpb25SZWR1Y2VyIGZyb20gJy4vb3BlcmFjaW9uUmVkdWNlcic7XHJcbmltcG9ydCB7XHJcbiAgICBGT1JNVUxBUklPX09QRVJBQ0lPTixcclxuICAgIE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgIE9QRVJBQ0lPTl9FUlJPUixcclxuICAgIFZBTElEQVJfRk9STVVMQVJJTyxcclxuICAgIE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICBFTElNSU5BUl9PUEVSQUNJT05cclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcblxyXG5jb25zdCBPcGVyYWNpb25TdGF0ZSA9IHByb3BzID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgb3BlcmFjaW9uZXMgOiBbXSxcclxuICAgICAgICBudWV2YU9wZXJhY2lvbiA6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yZm9ybXVsYXJpbzogZmFsc2UsXHJcbiAgICAgICAgb3BlcmFjaW9uOiBudWxsLFxyXG4gICAgICAgIG1lbnNhamU6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXNwYXRjaCBwYXJhIGVqZWN1dGFyIGxhcyBhY2Npb25lc1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG9wZXJhY2lvblJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gc2VyaWUgZGUgZnVuY2lvbmVzIHBhcmEgZWwgQ1JVRFxyXG4gICAgY29uc3QgbW9zdHJhckZvcm11bGFyaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBGT1JNVUxBUklPX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsb3Mgb3BlcmFjaW9uZXNcclxuICAgIGNvbnN0IG9idGVuZXJPcGVyYWNpb25lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL29wZXJhY2lvbmVzJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGFncmVnYXIgbnVldmEgb3BlcmFjaW9uXHJcbiAgICBjb25zdCBhZ3JlZ2FyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvb3BlcmFjaW9uZXMnLCBvcGVyYWNpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRhZG8pO1xyXG4gICAgICAgICAgICAvLyBpbnNlcnRhciBlbCBvcGVyYWNpb24gZW4gZWwgc3RhdGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUdSRUdBUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdmFsaWRhciBlbCBmb3JtdWxhcmlvIHBvciBlcnJvcmVzXHJcbiAgICBjb25zdCBtb3N0cmFyRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBWQUxJREFSX0ZPUk1VTEFSSU9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjY2lvbmEgZWwgb3BlcmFjaW9uIHF1ZSBlbCB1c3VhcmlvIGRpbyBjbGlja1xyXG4gICAgY29uc3Qgb3BlcmFjaW9uQWN0dWFsID0gb3BlcmFjaW9uSWQgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0FDVFVBTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogb3BlcmFjaW9uSWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsaW1pbmEgdW4gb3BlcmFjaW9uXHJcbiAgICBjb25zdCBlbGltaW5hck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBjbGllbnRlQXhpb3MuZGVsZXRlKGAvYXBpL29wZXJhY2lvbmVzLyR7b3BlcmFjaW9uSWR9YCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEVMSU1JTkFSX09QRVJBQ0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG9wZXJhY2lvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcyxcclxuICAgICAgICAgICAgICAgIGZvcm11bGFyaW86IHN0YXRlLmZvcm11bGFyaW8sXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IHN0YXRlLmVycm9yZm9ybXVsYXJpbyxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogc3RhdGUub3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJGb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJFcnJvcixcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbkFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyT3BlcmFjaW9uXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9vcGVyYWNpb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVyYWNpb25TdGF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dGhTdGF0ZSBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aFN0YXRlJztcbmltcG9ydCBBcHBTdGF0ZSBmcm9tICcuLi9jb250ZXh0L2FwcC9hcHBTdGF0ZSc7XG5pbXBvcnQgT3BlcmFjaW9uU3RhdGUgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25TdGF0ZSc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxPcGVyYWNpb25TdGF0ZT5cbiAgICAgICAgICAgIDxBdXRoU3RhdGU+XG4gICAgICAgICAgICAgICAgPEFwcFN0YXRlPlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9BcHBTdGF0ZT5cbiAgICAgICAgICAgIDwvQXV0aFN0YXRlPlxuICAgICAgICA8L09wZXJhY2lvblN0YXRlPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImV4cG9ydCBjb25zdCBSRUdJU1RST19FWElUT1NPID0gJ1JFR0lTVFJPX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IFJFR0lTVFJPX0VSUk9SID0gJ1JFR0lTVFJPX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IExPR0lOX0VYSVRPU08gPSAnTE9HSU5fRVhJVE9TTyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSAnTE9HSU5fRVJST1InO1xuXG5leHBvcnQgY29uc3QgVVNVQVJJT19BVVRFTlRJQ0FETyA9ICdVU1VBUklPX0FVVEVOVElDQURPJztcbmV4cG9ydCBjb25zdCBDRVJSQVJfU0VTSU9OID0gJ0NFUlJBUl9TRVNJT04nXG5cbmV4cG9ydCBjb25zdCBNT1NUUkFSX0FMRVJUQSA9ICdNT1NUUkFSX0FMRVJUQSc7XG5leHBvcnQgY29uc3QgT0NVTFRBUl9BTEVSVEEgPSAnT0NVTFRBUl9BTEVSVEEnO1xuXG5leHBvcnQgY29uc3QgTElNUElBUl9TVEFURSA9ICdMSU1QSUFSX1NUQVRFJztcblxuXG5cbmV4cG9ydCBjb25zdCBGT1JNVUxBUklPX09QRVJBQ0lPTiA9ICdGT1JNVUxBUklPX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgT0JURU5FUl9PUEVSQUNJT05FUyA9ICdPQlRFTkVSX09QRVJBQ0lPTkVTJztcbmV4cG9ydCBjb25zdCBBR1JFR0FSX09QRVJBQ0lPTiA9ICdBR1JFR0FSX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9OX0VSUk9SID0gJ09QRVJBQ0lPTl9FUlJPUic7XG5leHBvcnQgY29uc3QgVkFMSURBUl9GT1JNVUxBUklPID0gJ1ZBTElEQVJfRk9STVVMQVJJTyc7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9OX0FDVFVBTCA9ICdPUEVSQUNJT05fQUNUVUFMJztcbmV4cG9ydCBjb25zdCBFTElNSU5BUl9PUEVSQUNJT04gPSAnRUxJTUlOQVJfT1BFUkFDSU9OJztcblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9