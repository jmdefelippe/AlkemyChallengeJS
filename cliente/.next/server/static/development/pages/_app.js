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
    }); // después de 3 segundos limpiar alerta

    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
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
        mensaje: {}
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
    mensaje: {},
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
/* harmony import */ var _context_operaciones_operacionState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/operaciones/operacionState */ "./context/operaciones/operacionState.js");
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
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_context_operaciones_operacionState__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_context_auth_authState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiY2xpZW50ZUF4aW9zIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImJhY2tlbmRVUkwiLCJ0b2tlbkF1dGgiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFsZXJ0YUNvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiTU9TVFJBUl9BTEVSVEEiLCJhbGVydGEiLCJwYXlsb2FkIiwiT0JURU5FUl9VU1VBUklPIiwidXN1YXJpbyIsIk9DVUxUQVJfQUxFUlRBIiwiQWxlcnRhU3RhdGUiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImFsZXJ0YVJlZHVjZXIiLCJtb3N0cmFyQWxlcnRhIiwibXNnIiwiY2F0ZWdvcmlhIiwic2V0VGltZW91dCIsImNoaWxkcmVuIiwiYXV0aENvbnRleHQiLCJSRUdJU1RST19FWElUT1NPIiwiUkVHSVNUUk9fRVJST1IiLCJMT0dJTl9FUlJPUiIsIm1lbnNhamUiLCJMT0dJTl9FWElUT1NPIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImF1dGVudGljYWRvIiwiVVNVQVJJT19BVVRFTlRJQ0FETyIsIkNFUlJBUl9TRVNJT04iLCJyZW1vdmVJdGVtIiwiQXV0aFN0YXRlIiwiY2FyZ2FuZG8iLCJhdXRoUmVkdWNlciIsInJlZ2lzdHJhclVzdWFyaW8iLCJkYXRvcyIsInJlc3B1ZXN0YSIsInBvc3QiLCJkYXRhIiwidXN1YXJpb0F1dGVudGljYWRvIiwiZXJyb3IiLCJyZXNwb25zZSIsImluaWNpYXJTZXNpb24iLCJnZXRJdGVtIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImNlcnJhclNlc2lvbiIsIm9wZXJhY2lvbkNvbnRleHQiLCJGT1JNVUxBUklPX09QRVJBQ0lPTiIsImZvcm11bGFyaW8iLCJPQlRFTkVSX09QRVJBQ0lPTkVTIiwib3BlcmFjaW9uZXMiLCJBR1JFR0FSX09QRVJBQ0lPTiIsImVycm9yZm9ybXVsYXJpbyIsIlZBTElEQVJfRk9STVVMQVJJTyIsIk9QRVJBQ0lPTl9BQ1RVQUwiLCJvcGVyYWNpb24iLCJmaWx0ZXIiLCJfaWQiLCJFTElNSU5BUl9PUEVSQUNJT04iLCJPUEVSQUNJT05fRVJST1IiLCJBQ1RVQUxJWkFSX09QRVJBQ0lPTiIsIm1hcCIsIkxJTVBJQVJfT1BFUkFDSU9OIiwiT1BFUkFDSU9ORVNfQ0FURUdPUklBUyIsIlRPVEFMX0lOR1JFU09TIiwiaW5ncmVzb3MiLCJyZWR1Y2UiLCJtb250byIsInRpcG8iLCJUT1RBTF9FR1JFU09TIiwiZWdyZXNvcyIsIkNBTENVTEFSX0JBTEFOQ0UiLCJiYWxhbmNlIiwiT3BlcmFjaW9uU3RhdGUiLCJudWV2YU9wZXJhY2lvbiIsIm9wZXJhY2lvblJlZHVjZXIiLCJtb3N0cmFyRm9ybXVsYXJpbyIsIm9idGVuZXJPcGVyYWNpb25lcyIsInJlc3VsdGFkbyIsImFncmVnYXJPcGVyYWNpb24iLCJtb3N0cmFyRXJyb3IiLCJvcGVyYWNpb25BY3R1YWwiLCJvcGVyYWNpb25JZCIsImVsaW1pbmFyT3BlcmFjaW9uIiwiZGVsZXRlIiwiYWN0dWFsaXphck9wZXJhY2lvbiIsInB1dCIsImxpbXBpYXJPcGVyYWNpb24iLCJjYWxjdWxhclRvdGFsSW5ncmVzb3MiLCJjYWxjdWxhclRvdGFsRWdyZXNvcyIsImNhbGN1bGFyQmFsYW5jZSIsImNhbGN1bGFyVG90YWxlcyIsIm9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkxJTVBJQVJfU1RBVEUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJB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LE1BQU1GLFdBQVcsR0FBRyxhQUFwQjtBQUVBLE1BQU1NLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUVBLE1BQU0zQixjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUssY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU0yRixhQUFhLEdBQUcsZUFBdEI7QUFJQSxNQUFNakQsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUUsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTVEsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1OLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1JLGtCQUFrQixHQUFHLG9CQUEzQjtBQUdBLE1BQU12RCxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTXlELG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1FLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1FLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNSyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNRSxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNUixzQkFBc0IsR0FBRyx3QkFBL0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ1Asa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBjbGllbnRlQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LmJhY2tlbmRVUkxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRlQXhpb3M7IiwiaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuL2F4aW9zJztcblxuY29uc3QgdG9rZW5BdXRoID0gdG9rZW4gPT4ge1xuICAgIGlmKHRva2VuKSB7XG4gICAgICAgIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5BdXRoOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBhbGVydGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxlcnRhQ29udGV4dDsiLCJpbXBvcnQgeyBNT1NUUkFSX0FMRVJUQSwgT0NVTFRBUl9BTEVSVEEsIE9CVEVORVJfVVNVQVJJTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIE1PU1RSQVJfQUxFUlRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnRhOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPQlRFTkVSX1VTVUFSSU86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydGE6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYWxlcnRhUmVkdWNlciBmcm9tICcuL2FsZXJ0YVJlZHVjZXInO1xyXG5pbXBvcnQgYWxlcnRhQ29udGV4dCBmcm9tICcuL2FsZXJ0YUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgTU9TVFJBUl9BTEVSVEEsIE9DVUxUQVJfQUxFUlRBIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgQWxlcnRhU3RhdGUgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgYWxlcnRhOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoYWxlcnRhUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyBmdW5jaW9uZXNcclxuICAgIGNvbnN0IG1vc3RyYXJBbGVydGEgPSAobXNnLCBjYXRlZ29yaWEpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE1PU1RSQVJfQUxFUlRBLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBtc2csXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zIGxpbXBpYXIgYWxlcnRhXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YWxlcnRhQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgYWxlcnRhOiBzdGF0ZS5hbGVydGEsXHJcbiAgICAgICAgICAgICAgICBtb3N0cmFyQWxlcnRhXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9hbGVydGFDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnRhU3RhdGU7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhDb250ZXh0OyIsImltcG9ydCB7IFxuICAgIFJFR0lTVFJPX0VYSVRPU08sXG4gICAgUkVHSVNUUk9fRVJST1IsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgTE9HSU5fRVhJVE9TTyxcbiAgICBMT0dJTl9FUlJPUixcbiAgICBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgIENFUlJBUl9TRVNJT05cbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFJFR0lTVFJPX0VYSVRPU086XG4gICAgICAgIGNhc2UgUkVHSVNUUk9fRVJST1I6XG4gICAgICAgIGNhc2UgTE9HSU5fRVJST1I6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICBjYXNlIExPR0lOX0VYSVRPU086IFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBPQ1VMVEFSX0FMRVJUQTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZToge31cbiAgICAgICAgICAgIH0gXG4gICAgICAgIGNhc2UgVVNVQVJJT19BVVRFTlRJQ0FETzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBDRVJSQVJfU0VTSU9OOiBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBudWxsLCBcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi9hdXRoQ29udGV4dCc7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5cblxuaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTywgXG4gICAgUkVHSVNUUk9fRVJST1IsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgTE9HSU5fRVhJVE9TTyxcbiAgICBMT0dJTl9FUlJPUixcbiAgICBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgIENFUlJBUl9TRVNJT05cbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5pbXBvcnQgdG9rZW5BdXRoIGZyb20gJy4uLy4uL2NvbmZpZy90b2tlbkF1dGgnO1xuXG5jb25zdCBBdXRoU3RhdGUgPSAoe2NoaWxkcmVufSkgPT4ge1xuXG4gICAgLy8gRGVmaW5pciB1biBzdGF0ZSBpbmljaWFsXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICB0b2tlbjogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnLFxuICAgICAgICBhdXRlbnRpY2FkbzogbnVsbCxcbiAgICAgICAgdXN1YXJpbzogbnVsbCxcbiAgICAgICAgbWVuc2FqZToge30sXG4gICAgICAgIGNhcmdhbmRvOiBudWxsXG4gICAgfVxuXG4gICAgLy8gRGVmaW5pciBlbCByZWR1Y2VyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoYXV0aFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBSZWdpc3RyYXIgbnVldm9zIHVzdWFyaW9zXG4gICAgY29uc3QgcmVnaXN0cmFyVXN1YXJpbyA9IGFzeW5jIGRhdG9zID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS91c3VhcmlvcycsIGRhdG9zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xuICAgICAgICAgICAgICAgIG1zZzogcmVzcHVlc3RhLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIG9idGVuZXIgZWwgdXN1YXJpb1xuICAgICAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XG4gICAgICAgICAgICAgICAgbXNnOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVHSVNUUk9fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTsgXG4gICAgfVxuXG4gICAgLy8gQXV0ZW50aWNhciBVc3Vhcmlvc1xuICAgIGNvbnN0IGluaWNpYXJTZXNpb24gPSBhc3luYyBkYXRvcyA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL2F1dGgnLCBkYXRvcyk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVhJVE9TTyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS50b2tlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcbiAgICAgICAgICAgICAgICBtc2c6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIC8vIFJldG9ybmUgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBlbiBiYXNlIGFsIEpXVFxuICAgIGNvbnN0IHVzdWFyaW9BdXRlbnRpY2FkbyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgaWYodG9rZW4pIHtcbiAgICAgICAgICAgIHRva2VuQXV0aCh0b2tlbilcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL2F1dGgnKTtcbiAgICAgICAgICAgIGlmKHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW8pIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW9cbiAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2VycmFyIGxhIHNlc2nDs25cbiAgICBjb25zdCBjZXJyYXJTZXNpb24gPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENFUlJBUl9TRVNJT05cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7IFxuICAgICAgICAgICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2Fkbzogc3RhdGUuYXV0ZW50aWNhZG8sXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogc3RhdGUudXN1YXJpbyxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBzdGF0ZS5jYXJnYW5kbyxcbiAgICAgICAgICAgICAgICByZWdpc3RyYXJVc3VhcmlvLFxuICAgICAgICAgICAgICAgIGluaWNpYXJTZXNpb24sXG4gICAgICAgICAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvLCBcbiAgICAgICAgICAgICAgICBjZXJyYXJTZXNpb25cbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3Qgb3BlcmFjaW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9wZXJhY2lvbkNvbnRleHQ7IiwiaW1wb3J0IHtcclxuICAgIEZPUk1VTEFSSU9fT1BFUkFDSU9OLFxyXG4gICAgT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgIEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgVkFMSURBUl9GT1JNVUxBUklPLFxyXG4gICAgT1BFUkFDSU9OX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX09QRVJBQ0lPTixcclxuICAgIEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgTElNUElBUl9PUEVSQUNJT04sXHJcbiAgICBDQUxDVUxBUl9CQUxBTkNFLFxyXG4gICAgT1BFUkFDSU9ORVNfQ0FURUdPUklBUyxcclxuICAgIFRPVEFMX0lOR1JFU09TLFxyXG4gICAgVE9UQUxfRUdSRVNPU1xyXG59IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZPUk1VTEFSSU9fT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9CVEVORVJfT1BFUkFDSU9ORVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBR1JFR0FSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IFsuLi5zdGF0ZS5vcGVyYWNpb25lcywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFZBTElEQVJfRk9STVVMQVJJTzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTl9BQ1RVQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogc3RhdGUub3BlcmFjaW9uZXMuZmlsdGVyKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkID09PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEVMSU1JTkFSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLmZpbHRlcihvcGVyYWNpb24gPT4gb3BlcmFjaW9uLl9pZCAhPT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPUEVSQUNJT05fRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFDVFVBTElaQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMubWFwKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkID09PSBhY3Rpb24ucGF5bG9hZC5faWRcclxuICAgICAgICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQgOiBvcGVyYWNpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExJTVBJQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb246IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT1BFUkFDSU9ORVNfQ0FURUdPUklBUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLmZpbHRlcihvcGVyYWNpb24gPT4gb3BlcmFjaW9uLmNhdGVnb3JpYSA9PT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBUT1RBTF9JTkdSRVNPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaW5ncmVzb3M6IHN0YXRlLm9wZXJhY2lvbmVzLnJlZHVjZSggKG1vbnRvLCBvcGVyYWNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vbnRvICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250byA9IG1vbnRvLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmFjaW9uLnRpcG8gPT09ICdJbmdyZXNvJykgbW9udG8gKz0gb3BlcmFjaW9uLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250bztcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFRPVEFMX0VHUkVTT1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVncmVzb3M6IHN0YXRlLm9wZXJhY2lvbmVzLnJlZHVjZSggKG1vbnRvLCBvcGVyYWNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vbnRvICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250byA9IG1vbnRvLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmFjaW9uLnRpcG8gPT09ICdFZ3Jlc28nKSBtb250byArPSBvcGVyYWNpb24ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRvO1xyXG4gICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0FMQ1VMQVJfQkFMQU5DRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogc3RhdGUub3BlcmFjaW9uZXMucmVkdWNlKCAobW9udG8sIG9wZXJhY2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbW9udG8gIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRvID0gbW9udG8ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYWNpb24udGlwbyA9PT0gJ0luZ3Jlc28nKSBtb250byArPSBvcGVyYWNpb24ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhY2lvbi50aXBvID09PSAnRWdyZXNvJykgbW9udG8gLT0gb3BlcmFjaW9uLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250bztcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgb3BlcmFjaW9uQ29udGV4dCBmcm9tICcuL29wZXJhY2lvbkNvbnRleHQnO1xyXG5pbXBvcnQgb3BlcmFjaW9uUmVkdWNlciBmcm9tICcuL29wZXJhY2lvblJlZHVjZXInO1xyXG5pbXBvcnQge1xyXG4gICAgRk9STVVMQVJJT19PUEVSQUNJT04sXHJcbiAgICBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgQUdSRUdBUl9PUEVSQUNJT04sXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBWQUxJREFSX0ZPUk1VTEFSSU8sXHJcbiAgICBPUEVSQUNJT05fQUNUVUFMLFxyXG4gICAgRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgTElNUElBUl9TVEFURSxcclxuICAgIEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgTElNUElBUl9PUEVSQUNJT04sXHJcbiAgICBDQUxDVUxBUl9CQUxBTkNFLFxyXG4gICAgT1BFUkFDSU9ORVNfQ0FURUdPUklBUyxcclxuICAgIFRPVEFMX0lOR1JFU09TLFxyXG4gICAgVE9UQUxfRUdSRVNPU1xyXG59IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi4vLi4vY29uZmlnL2F4aW9zJztcclxuXHJcbmNvbnN0IE9wZXJhY2lvblN0YXRlID0gcHJvcHMgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBvcGVyYWNpb25lcyA6IFtdLFxyXG4gICAgICAgIG51ZXZhT3BlcmFjaW9uIDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBmYWxzZSxcclxuICAgICAgICBvcGVyYWNpb246IG51bGwsXHJcbiAgICAgICAgbWVuc2FqZTogbnVsbCxcclxuICAgICAgICBiYWxhbmNlOiAwLFxyXG4gICAgICAgIGluZ3Jlc29zOiAwLFxyXG4gICAgICAgIGVncmVzb3M6IDBcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXNwYXRjaCBwYXJhIGVqZWN1dGFyIGxhcyBhY2Npb25lc1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG9wZXJhY2lvblJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gc2VyaWUgZGUgZnVuY2lvbmVzIHBhcmEgZWwgQ1JVRFxyXG4gICAgY29uc3QgbW9zdHJhckZvcm11bGFyaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBGT1JNVUxBUklPX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsb3Mgb3BlcmFjaW9uZXNcclxuICAgIGNvbnN0IG9idGVuZXJPcGVyYWNpb25lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL29wZXJhY2lvbmVzJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBhZ3JlZ2FyIG51ZXZhIG9wZXJhY2lvblxyXG4gICAgY29uc3QgYWdyZWdhck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbiA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL29wZXJhY2lvbmVzJywgb3BlcmFjaW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0YWRvKTtcclxuICAgICAgICAgICAgLy8gaW5zZXJ0YXIgZWwgb3BlcmFjaW9uIGVuIGVsIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHZhbGlkYXIgZWwgZm9ybXVsYXJpbyBwb3IgZXJyb3Jlc1xyXG4gICAgY29uc3QgbW9zdHJhckVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVkFMSURBUl9GT1JNVUxBUklPXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY2Npb25hIGVsIG9wZXJhY2lvbiBxdWUgZWwgdXN1YXJpbyBkaW8gY2xpY2tcclxuICAgIGNvbnN0IG9wZXJhY2lvbkFjdHVhbCA9IG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIHVuIG9wZXJhY2lvblxyXG4gICAgY29uc3QgZWxpbWluYXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb25JZCA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgY2xpZW50ZUF4aW9zLmRlbGV0ZShgL2FwaS9vcGVyYWNpb25lcy8ke29wZXJhY2lvbklkfWApO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBvcGVyYWNpb25JZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0YSBvIG1vZGlmaWNhIHVuYSBvcGVyYWNpb25cclxuICAgIGNvbnN0IGFjdHVhbGl6YXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb24gPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wdXQoYC9hcGkvb3BlcmFjaW9uZXMvJHtvcGVyYWNpb24uX2lkfWAsIG9wZXJhY2lvbik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIGxhIG9wZXJhY2lvbiBzZWxlY2Npb25hZGFcclxuICAgIGNvbnN0IGxpbXBpYXJPcGVyYWNpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbEluZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfSU5HUkVTT1NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxFZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfRUdSRVNPU1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNhbGN1bGFyIGVsIGJhbGFuY2U6IHRvdGFsIGluZ3Jlc29zIC0gdG90YWwgZWdyZXNvc1xyXG4gICAgY29uc3QgY2FsY3VsYXJCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0FMQ1VMQVJfQkFMQU5DRVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG5cclxuICAgICAgICBjYWxjdWxhclRvdGFsSW5ncmVzb3MoKTtcclxuICAgICAgICBjYWxjdWxhclRvdGFsRWdyZXNvcygpO1xyXG4gICAgICAgIGNhbGN1bGFyQmFsYW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMgPSBhc3luYyBjYXRlZ29yaWEgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVMsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGNhdGVnb3JpYVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxvcGVyYWNpb25Db250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMsXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiBzdGF0ZS5mb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBzdGF0ZS5lcnJvcmZvcm11bGFyaW8sXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb246IHN0YXRlLm9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHN0YXRlLm1lbnNhamUsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiBzdGF0ZS5iYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgaW5ncmVzb3M6IHN0YXRlLmluZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgZWdyZXNvczogc3RhdGUuZWdyZXNvcyxcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJGb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJFcnJvcixcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbkFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyT3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsaXphck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxJbmdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxFZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXJCYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxlc1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvb3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmFjaW9uU3RhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgQWxlcnRhU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hbGVydGFzL2FsZXJ0YVN0YXRlJztcbmltcG9ydCBBdXRoU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZSc7XG5pbXBvcnQgT3BlcmFjaW9uU3RhdGUgZnJvbSAnLi4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25TdGF0ZSc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBbGVydGFTdGF0ZT5cbiAgICAgICAgICAgIDxPcGVyYWNpb25TdGF0ZT5cbiAgICAgICAgICAgICAgICA8QXV0aFN0YXRlPlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9BdXRoU3RhdGU+XG4gICAgICAgICAgICA8L09wZXJhY2lvblN0YXRlPlxuICAgICAgICA8L0FsZXJ0YVN0YXRlPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImV4cG9ydCBjb25zdCBSRUdJU1RST19FWElUT1NPID0gJ1JFR0lTVFJPX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IFJFR0lTVFJPX0VSUk9SID0gJ1JFR0lTVFJPX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IExPR0lOX0VYSVRPU08gPSAnTE9HSU5fRVhJVE9TTyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSAnTE9HSU5fRVJST1InO1xuXG5leHBvcnQgY29uc3QgVVNVQVJJT19BVVRFTlRJQ0FETyA9ICdVU1VBUklPX0FVVEVOVElDQURPJztcbmV4cG9ydCBjb25zdCBDRVJSQVJfU0VTSU9OID0gJ0NFUlJBUl9TRVNJT04nXG5cbmV4cG9ydCBjb25zdCBNT1NUUkFSX0FMRVJUQSA9ICdNT1NUUkFSX0FMRVJUQSc7XG5leHBvcnQgY29uc3QgT0NVTFRBUl9BTEVSVEEgPSAnT0NVTFRBUl9BTEVSVEEnO1xuXG5leHBvcnQgY29uc3QgTElNUElBUl9TVEFURSA9ICdMSU1QSUFSX1NUQVRFJztcblxuXG5cbmV4cG9ydCBjb25zdCBGT1JNVUxBUklPX09QRVJBQ0lPTiA9ICdGT1JNVUxBUklPX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgT0JURU5FUl9PUEVSQUNJT05FUyA9ICdPQlRFTkVSX09QRVJBQ0lPTkVTJztcbmV4cG9ydCBjb25zdCBBR1JFR0FSX09QRVJBQ0lPTiA9ICdBR1JFR0FSX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9OX0VSUk9SID0gJ09QRVJBQ0lPTl9FUlJPUic7XG5leHBvcnQgY29uc3QgVkFMSURBUl9GT1JNVUxBUklPID0gJ1ZBTElEQVJfRk9STVVMQVJJTyc7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9OX0FDVFVBTCA9ICdPUEVSQUNJT05fQUNUVUFMJztcbmV4cG9ydCBjb25zdCBFTElNSU5BUl9PUEVSQUNJT04gPSAnRUxJTUlOQVJfT1BFUkFDSU9OJztcblxuXG5leHBvcnQgY29uc3QgT0JURU5FUl9VU1VBUklPID0gJ09CVEVORVJfVVNVQVJJTyc7XG5cbmV4cG9ydCBjb25zdCBBQ1RVQUxJWkFSX09QRVJBQ0lPTiA9ICdBQ1RVQUxJWkFSX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgTElNUElBUl9PUEVSQUNJT04gPSAnTElNUElBUl9PUEVSQUNJT04nO1xuXG5leHBvcnQgY29uc3QgVE9UQUxfSU5HUkVTT1MgPSAnVE9UQUxfSU5HUkVTT1MnO1xuZXhwb3J0IGNvbnN0IFRPVEFMX0VHUkVTT1MgPSAnVE9UQUxfRUdSRVNPUyc7XG5leHBvcnQgY29uc3QgQ0FMQ1VMQVJfQkFMQU5DRSA9ICdDQUxDVUxBUl9CQUxBTkNFJztcbmV4cG9ydCBjb25zdCBPUEVSQUNJT05FU19DQVRFR09SSUFTID0gJ09QRVJBQ0lPTkVTX0NBVEVHT1JJQVMnOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=