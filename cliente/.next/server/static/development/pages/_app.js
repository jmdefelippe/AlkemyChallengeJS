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
        operacion: null,
        alerta: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OCULTAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: {}
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OPERACION_EXITOSA"]:
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
    operacion: [{}],
    mensaje: {},
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
      const alerta = {
        msg: 'Operación agregada exitosamente',
        categoria: 'alerta-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACION_EXITOSA"],
        payload: alerta
      }); // insertar el operacion en el state

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
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
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
      const alerta = {
        msg: 'Operación eliminada exitosamente',
        categoria: 'alerta-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACION_EXITOSA"],
        payload: alerta
      });
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
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  }; // edita o modifica una operacion


  const actualizarOperacion = async operacion => {
    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].put(`/api/operaciones/${operacion._id}`, operacion);
      const alerta = {
        msg: 'Operación editada exitosamente',
        categoria: 'alerta-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACION_EXITOSA"],
        payload: alerta
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["ACTUALIZAR_OPERACION"],
        payload: resultado.data.operacion
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
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
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
      lineNumber: 251,
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
/* harmony import */ var _context_auth_authState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth/authState */ "./context/auth/authState.js");
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
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_context_auth_authState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
/*! exports provided: REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION, MOSTRAR_ALERTA, OCULTAR_ALERTA, LIMPIAR_STATE, FORMULARIO_OPERACION, OBTENER_OPERACIONES, AGREGAR_OPERACION, OPERACION_EXITOSA, OPERACION_ERROR, VALIDAR_FORMULARIO, OPERACION_ACTUAL, ELIMINAR_OPERACION, OBTENER_USUARIO, ACTUALIZAR_OPERACION, LIMPIAR_OPERACION, TOTAL_INGRESOS, TOTAL_EGRESOS, CALCULAR_BALANCE, OPERACIONES_CATEGORIAS */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERACION_EXITOSA", function() { return OPERACION_EXITOSA; });
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
const OPERACION_EXITOSA = 'OPERACION_EXITOSA';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjbGllbnRlQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiYmFja2VuZFVSTCIsInRva2VuQXV0aCIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiUkVHSVNUUk9fRVhJVE9TTyIsIlJFR0lTVFJPX0VSUk9SIiwiTE9HSU5fRVJST1IiLCJtZW5zYWplIiwicGF5bG9hZCIsIkxPR0lOX0VYSVRPU08iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYXV0ZW50aWNhZG8iLCJPQ1VMVEFSX0FMRVJUQSIsIlVTVUFSSU9fQVVURU5USUNBRE8iLCJ1c3VhcmlvIiwiQ0VSUkFSX1NFU0lPTiIsInJlbW92ZUl0ZW0iLCJBdXRoU3RhdGUiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsImNhcmdhbmRvIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiYXV0aFJlZHVjZXIiLCJyZWdpc3RyYXJVc3VhcmlvIiwiZGF0b3MiLCJyZXNwdWVzdGEiLCJwb3N0IiwiYWxlcnRhIiwibXNnIiwiZGF0YSIsImNhdGVnb3JpYSIsInVzdWFyaW9BdXRlbnRpY2FkbyIsImVycm9yIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwiaW5pY2lhclNlc2lvbiIsImdldEl0ZW0iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiY2VycmFyU2VzaW9uIiwib3BlcmFjaW9uQ29udGV4dCIsIkZPUk1VTEFSSU9fT1BFUkFDSU9OIiwiZm9ybXVsYXJpbyIsIk9CVEVORVJfT1BFUkFDSU9ORVMiLCJvcGVyYWNpb25lcyIsIkFHUkVHQVJfT1BFUkFDSU9OIiwiZXJyb3Jmb3JtdWxhcmlvIiwiVkFMSURBUl9GT1JNVUxBUklPIiwiT1BFUkFDSU9OX0FDVFVBTCIsIm9wZXJhY2lvbiIsImZpbHRlciIsIl9pZCIsIkVMSU1JTkFSX09QRVJBQ0lPTiIsIk9QRVJBQ0lPTl9FWElUT1NBIiwiT1BFUkFDSU9OX0VSUk9SIiwiQUNUVUFMSVpBUl9PUEVSQUNJT04iLCJtYXAiLCJMSU1QSUFSX09QRVJBQ0lPTiIsIk9QRVJBQ0lPTkVTX0NBVEVHT1JJQVMiLCJUT1RBTF9JTkdSRVNPUyIsImluZ3Jlc29zIiwicmVkdWNlIiwibW9udG8iLCJ0aXBvIiwiVE9UQUxfRUdSRVNPUyIsImVncmVzb3MiLCJDQUxDVUxBUl9CQUxBTkNFIiwiYmFsYW5jZSIsIk9wZXJhY2lvblN0YXRlIiwicHJvcHMiLCJudWV2YU9wZXJhY2lvbiIsIm9wZXJhY2lvblJlZHVjZXIiLCJtb3N0cmFyRm9ybXVsYXJpbyIsIm9idGVuZXJPcGVyYWNpb25lcyIsInJlc3VsdGFkbyIsImFncmVnYXJPcGVyYWNpb24iLCJtb3N0cmFyRXJyb3IiLCJvcGVyYWNpb25BY3R1YWwiLCJvcGVyYWNpb25JZCIsImVsaW1pbmFyT3BlcmFjaW9uIiwiZGVsZXRlIiwiYWN0dWFsaXphck9wZXJhY2lvbiIsInB1dCIsImxpbXBpYXJPcGVyYWNpb24iLCJjYWxjdWxhclRvdGFsSW5ncmVzb3MiLCJjYWxjdWxhclRvdGFsRWdyZXNvcyIsImNhbGN1bGFyQmFsYW5jZSIsImNhbGN1bGFyVG90YWxlcyIsIm9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIk1PU1RSQVJfQUxFUlRBIiwiTElNUElBUl9TVEFURSIsIk9CVEVORVJfVVNVQVJJTyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzlCQyxT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QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1JLGtCQUFrQixHQUFHLG9CQUEzQjtBQUdBLE1BQU0wQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTXZDLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1FLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1FLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNSyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNRSxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNUixzQkFBc0IsR0FBRyx3QkFBL0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ1Asa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBjbGllbnRlQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LmJhY2tlbmRVUkxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRlQXhpb3M7IiwiaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuL2F4aW9zJztcblxuY29uc3QgdG9rZW5BdXRoID0gdG9rZW4gPT4ge1xuICAgIGlmKHRva2VuKSB7XG4gICAgICAgIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5BdXRoOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoQ29udGV4dDsiLCJpbXBvcnQgeyBcbiAgICBSRUdJU1RST19FWElUT1NPLFxuICAgIFJFR0lTVFJPX0VSUk9SLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExPR0lOX0VYSVRPU08sXG4gICAgTE9HSU5fRVJST1IsXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICBDRVJSQVJfU0VTSU9OXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUdJU1RST19FWElUT1NPOlxuICAgICAgICBjYXNlIFJFR0lTVFJPX0VSUk9SOlxuICAgICAgICBjYXNlIExPR0lOX0VSUk9SOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgY2FzZSBMT0dJTl9FWElUT1NPOiBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHt9XG4gICAgICAgICAgICB9IFxuICAgICAgICBjYXNlIFVTVUFSSU9fQVVURU5USUNBRE86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQ0VSUkFSX1NFU0lPTjogXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogbnVsbCwgXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF1dGhDb250ZXh0IGZyb20gJy4vYXV0aENvbnRleHQnO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuXG5cbmltcG9ydCB7IFxuICAgIFJFR0lTVFJPX0VYSVRPU08sIFxuICAgIFJFR0lTVFJPX0VSUk9SLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExPR0lOX0VYSVRPU08sXG4gICAgTE9HSU5fRVJST1IsXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICBDRVJSQVJfU0VTSU9OXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuaW1wb3J0IHRva2VuQXV0aCBmcm9tICcuLi8uLi9jb25maWcvdG9rZW5BdXRoJztcblxuY29uc3QgQXV0aFN0YXRlID0gKHtjaGlsZHJlbn0pID0+IHtcblxuICAgIC8vIERlZmluaXIgdW4gc3RhdGUgaW5pY2lhbFxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgdG9rZW46IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJyxcbiAgICAgICAgYXV0ZW50aWNhZG86IG51bGwsXG4gICAgICAgIHVzdWFyaW86IG51bGwsXG4gICAgICAgIG1lbnNhamU6IHt9LFxuICAgICAgICBjYXJnYW5kbzogbnVsbFxuICAgIH1cblxuICAgIC8vIERlZmluaXIgZWwgcmVkdWNlclxuICAgIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKGF1dGhSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gICAgLy8gUmVnaXN0cmFyIG51ZXZvcyB1c3Vhcmlvc1xuICAgIGNvbnN0IHJlZ2lzdHJhclVzdWFyaW8gPSBhc3luYyBkYXRvcyA9PiB7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvdXN1YXJpb3MnLCBkYXRvcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcbiAgICAgICAgICAgICAgICBtc2c6IHJlc3B1ZXN0YS5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtb2snXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVHSVNUUk9fRVhJVE9TTyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBvYnRlbmVyIGVsIHVzdWFyaW9cbiAgICAgICAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xuICAgICAgICAgICAgICAgIG1zZzogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2csXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFJFR0lTVFJPX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwMCk7IFxuICAgIH1cblxuICAgIC8vIEF1dGVudGljYXIgVXN1YXJpb3NcbiAgICBjb25zdCBpbmljaWFyU2VzaW9uID0gYXN5bmMgZGF0b3MgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS9hdXRoJywgZGF0b3MpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VYSVRPU08sXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XG4gICAgICAgICAgICAgICAgbXNnOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBSZXRvcm5lIGVsIFVzdWFyaW8gYXV0ZW50aWNhZG8gZW4gYmFzZSBhbCBKV1RcbiAgICBjb25zdCB1c3VhcmlvQXV0ZW50aWNhZG8gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIGlmKHRva2VuKSB7XG4gICAgICAgICAgICB0b2tlbkF1dGgodG9rZW4pXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCgnL2FwaS9hdXRoJyk7XG4gICAgICAgICAgICBpZihyZXNwdWVzdGEuZGF0YS51c3VhcmlvKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS51c3VhcmlvXG4gICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENlcnJhciBsYSBzZXNpw7NuXG4gICAgY29uc3QgY2VycmFyU2VzaW9uID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBDRVJSQVJfU0VTSU9OXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17eyBcbiAgICAgICAgICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHN0YXRlLmF1dGVudGljYWRvLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IHN0YXRlLnVzdWFyaW8sXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcbiAgICAgICAgICAgICAgICBjYXJnYW5kbzogc3RhdGUuY2FyZ2FuZG8sXG4gICAgICAgICAgICAgICAgcmVnaXN0cmFyVXN1YXJpbyxcbiAgICAgICAgICAgICAgICBpbmljaWFyU2VzaW9uLFxuICAgICAgICAgICAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbywgXG4gICAgICAgICAgICAgICAgY2VycmFyU2VzaW9uXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoU3RhdGU7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IG9wZXJhY2lvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcGVyYWNpb25Db250ZXh0OyIsImltcG9ydCB7XHJcbiAgICBGT1JNVUxBUklPX09QRVJBQ0lPTixcclxuICAgIE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgIE9QRVJBQ0lPTl9FWElUT1NBLFxyXG4gICAgT0NVTFRBUl9BTEVSVEEsXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBWQUxJREFSX0ZPUk1VTEFSSU8sXHJcbiAgICBPUEVSQUNJT05fQUNUVUFMLFxyXG4gICAgRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX09QRVJBQ0lPTixcclxuICAgIENBTENVTEFSX0JBTEFOQ0UsXHJcbiAgICBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgVE9UQUxfSU5HUkVTT1MsXHJcbiAgICBUT1RBTF9FR1JFU09TXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgRk9STVVMQVJJT19PUEVSQUNJT046XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZvcm11bGFyaW86IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0JURU5FUl9PUEVSQUNJT05FUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFHUkVHQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogWy4uLnN0YXRlLm9wZXJhY2lvbmVzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVkFMSURBUl9GT1JNVUxBUklPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT1BFUkFDSU9OX0FDVFVBTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBzdGF0ZS5vcGVyYWNpb25lcy5maWx0ZXIob3BlcmFjaW9uID0+IG9wZXJhY2lvbi5faWQgPT09XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRUxJTUlOQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMuZmlsdGVyKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkICE9PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYWxlcnRhOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPQ1VMVEFSX0FMRVJUQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZToge31cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTl9FWElUT1NBOlxyXG4gICAgICAgIGNhc2UgT1BFUkFDSU9OX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBQ1RVQUxJWkFSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLm1hcChvcGVyYWNpb24gPT4gb3BlcmFjaW9uLl9pZCA9PT0gYWN0aW9uLnBheWxvYWQuX2lkXHJcbiAgICAgICAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkIDogb3BlcmFjaW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMSU1QSUFSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcy5maWx0ZXIob3BlcmFjaW9uID0+IG9wZXJhY2lvbi5jYXRlZ29yaWEgPT09XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVE9UQUxfSU5HUkVTT1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGluZ3Jlc29zOiBzdGF0ZS5vcGVyYWNpb25lcy5yZWR1Y2UoIChtb250bywgb3BlcmFjaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb250byAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udG8gPSBtb250by5tb250bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhY2lvbi50aXBvID09PSAnSW5ncmVzbycpIG1vbnRvICs9IG9wZXJhY2lvbi5tb250bztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9udG87XHJcbiAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBUT1RBTF9FR1JFU09TOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlZ3Jlc29zOiBzdGF0ZS5vcGVyYWNpb25lcy5yZWR1Y2UoIChtb250bywgb3BlcmFjaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb250byAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udG8gPSBtb250by5tb250bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhY2lvbi50aXBvID09PSAnRWdyZXNvJykgbW9udG8gKz0gb3BlcmFjaW9uLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250bztcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENBTENVTEFSX0JBTEFOQ0U6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IHN0YXRlLm9wZXJhY2lvbmVzLnJlZHVjZSggKG1vbnRvLCBvcGVyYWNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vbnRvICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250byA9IG1vbnRvLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmFjaW9uLnRpcG8gPT09ICdJbmdyZXNvJykgbW9udG8gKz0gb3BlcmFjaW9uLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYWNpb24udGlwbyA9PT0gJ0VncmVzbycpIG1vbnRvIC09IG9wZXJhY2lvbi5tb250bztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9udG87XHJcbiAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IG9wZXJhY2lvbkNvbnRleHQgZnJvbSAnLi9vcGVyYWNpb25Db250ZXh0JztcclxuaW1wb3J0IG9wZXJhY2lvblJlZHVjZXIgZnJvbSAnLi9vcGVyYWNpb25SZWR1Y2VyJztcclxuaW1wb3J0IHtcclxuICAgIEZPUk1VTEFSSU9fT1BFUkFDSU9OLFxyXG4gICAgT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgIEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgT1BFUkFDSU9OX0VYSVRPU0EsXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBPQ1VMVEFSX0FMRVJUQSxcclxuICAgIFZBTElEQVJfRk9STVVMQVJJTyxcclxuICAgIE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX1NUQVRFLFxyXG4gICAgQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICBMSU1QSUFSX09QRVJBQ0lPTixcclxuICAgIENBTENVTEFSX0JBTEFOQ0UsXHJcbiAgICBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgVE9UQUxfSU5HUkVTT1MsXHJcbiAgICBUT1RBTF9FR1JFU09TXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xyXG5cclxuY29uc3QgT3BlcmFjaW9uU3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIG9wZXJhY2lvbmVzIDogW10sXHJcbiAgICAgICAgbnVldmFPcGVyYWNpb24gOiBmYWxzZSxcclxuICAgICAgICBlcnJvcmZvcm11bGFyaW86IGZhbHNlLFxyXG4gICAgICAgIG9wZXJhY2lvbjogW3t9XSxcclxuICAgICAgICBtZW5zYWplOiB7fSxcclxuICAgICAgICBiYWxhbmNlOiAwLFxyXG4gICAgICAgIGluZ3Jlc29zOiAwLFxyXG4gICAgICAgIGVncmVzb3M6IDBcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXNwYXRjaCBwYXJhIGVqZWN1dGFyIGxhcyBhY2Npb25lc1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG9wZXJhY2lvblJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gc2VyaWUgZGUgZnVuY2lvbmVzIHBhcmEgZWwgQ1JVRFxyXG4gICAgY29uc3QgbW9zdHJhckZvcm11bGFyaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBGT1JNVUxBUklPX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsb3Mgb3BlcmFjaW9uZXNcclxuICAgIGNvbnN0IG9idGVuZXJPcGVyYWNpb25lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL29wZXJhY2lvbmVzJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQlRFTkVSX09QRVJBQ0lPTkVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBhZ3JlZ2FyIG51ZXZhIG9wZXJhY2lvblxyXG4gICAgY29uc3QgYWdyZWdhck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbiA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL29wZXJhY2lvbmVzJywgb3BlcmFjaW9uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ09wZXJhY2nDs24gYWdyZWdhZGEgZXhpdG9zYW1lbnRlJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VYSVRPU0EsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIGluc2VydGFyIGVsIG9wZXJhY2lvbiBlbiBlbCBzdGF0ZVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAzMDAwKTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdmFsaWRhciBlbCBmb3JtdWxhcmlvIHBvciBlcnJvcmVzXHJcbiAgICBjb25zdCBtb3N0cmFyRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBWQUxJREFSX0ZPUk1VTEFSSU9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjY2lvbmEgZWwgb3BlcmFjaW9uIHF1ZSBlbCB1c3VhcmlvIGRpbyBjbGlja1xyXG4gICAgY29uc3Qgb3BlcmFjaW9uQWN0dWFsID0gb3BlcmFjaW9uSWQgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0FDVFVBTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogb3BlcmFjaW9uSWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsaW1pbmEgdW4gb3BlcmFjaW9uXHJcbiAgICBjb25zdCBlbGltaW5hck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXdhaXQgY2xpZW50ZUF4aW9zLmRlbGV0ZShgL2FwaS9vcGVyYWNpb25lcy8ke29wZXJhY2lvbklkfWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnT3BlcmFjacOzbiBlbGltaW5hZGEgZXhpdG9zYW1lbnRlJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VYSVRPU0EsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEVMSU1JTkFSX09QRVJBQ0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgMzAwMCk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXRhIG8gbW9kaWZpY2EgdW5hIG9wZXJhY2lvblxyXG4gICAgY29uc3QgYWN0dWFsaXphck9wZXJhY2lvbiA9IGFzeW5jIG9wZXJhY2lvbiA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnB1dChgL2FwaS9vcGVyYWNpb25lcy8ke29wZXJhY2lvbi5faWR9YCwgb3BlcmFjaW9uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ09wZXJhY2nDs24gZWRpdGFkYSBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVhJVE9TQSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YS5vcGVyYWNpb25cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDMwMDApOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIGxhIG9wZXJhY2lvbiBzZWxlY2Npb25hZGFcclxuICAgIGNvbnN0IGxpbXBpYXJPcGVyYWNpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX09QRVJBQ0lPTlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbEluZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfSU5HUkVTT1NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxFZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfRUdSRVNPU1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNhbGN1bGFyIGVsIGJhbGFuY2U6IHRvdGFsIGluZ3Jlc29zIC0gdG90YWwgZWdyZXNvc1xyXG4gICAgY29uc3QgY2FsY3VsYXJCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0FMQ1VMQVJfQkFMQU5DRVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG5cclxuICAgICAgICBjYWxjdWxhclRvdGFsSW5ncmVzb3MoKTtcclxuICAgICAgICBjYWxjdWxhclRvdGFsRWdyZXNvcygpO1xyXG4gICAgICAgIGNhbGN1bGFyQmFsYW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMgPSBhc3luYyBjYXRlZ29yaWEgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IG9idGVuZXJPcGVyYWNpb25lcygpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTkVTX0NBVEVHT1JJQVMsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGNhdGVnb3JpYVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxvcGVyYWNpb25Db250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMsXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiBzdGF0ZS5mb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBzdGF0ZS5lcnJvcmZvcm11bGFyaW8sXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb246IHN0YXRlLm9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHN0YXRlLm1lbnNhamUsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiBzdGF0ZS5iYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgaW5ncmVzb3M6IHN0YXRlLmluZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgZWdyZXNvczogc3RhdGUuZWdyZXNvcyxcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJGb3JtdWxhcmlvLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG1vc3RyYXJFcnJvcixcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbkFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyT3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsaXphck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxJbmdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxFZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXJCYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxlc1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvb3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmFjaW9uU3RhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgQXV0aFN0YXRlIGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoU3RhdGUnO1xuaW1wb3J0IE9wZXJhY2lvblN0YXRlIGZyb20gJy4uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uU3RhdGUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8T3BlcmFjaW9uU3RhdGU+XG4gICAgICAgICAgICA8QXV0aFN0YXRlPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXV0aFN0YXRlPlxuICAgICAgICA8L09wZXJhY2lvblN0YXRlPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImV4cG9ydCBjb25zdCBSRUdJU1RST19FWElUT1NPID0gJ1JFR0lTVFJPX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IFJFR0lTVFJPX0VSUk9SID0gJ1JFR0lTVFJPX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IExPR0lOX0VYSVRPU08gPSAnTE9HSU5fRVhJVE9TTyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSAnTE9HSU5fRVJST1InO1xuXG5leHBvcnQgY29uc3QgVVNVQVJJT19BVVRFTlRJQ0FETyA9ICdVU1VBUklPX0FVVEVOVElDQURPJztcbmV4cG9ydCBjb25zdCBDRVJSQVJfU0VTSU9OID0gJ0NFUlJBUl9TRVNJT04nXG5cbmV4cG9ydCBjb25zdCBNT1NUUkFSX0FMRVJUQSA9ICdNT1NUUkFSX0FMRVJUQSc7XG5leHBvcnQgY29uc3QgT0NVTFRBUl9BTEVSVEEgPSAnT0NVTFRBUl9BTEVSVEEnO1xuXG5leHBvcnQgY29uc3QgTElNUElBUl9TVEFURSA9ICdMSU1QSUFSX1NUQVRFJztcblxuXG5cbmV4cG9ydCBjb25zdCBGT1JNVUxBUklPX09QRVJBQ0lPTiA9ICdGT1JNVUxBUklPX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgT0JURU5FUl9PUEVSQUNJT05FUyA9ICdPQlRFTkVSX09QRVJBQ0lPTkVTJztcbmV4cG9ydCBjb25zdCBBR1JFR0FSX09QRVJBQ0lPTiA9ICdBR1JFR0FSX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9OX0VYSVRPU0EgPSAnT1BFUkFDSU9OX0VYSVRPU0EnO1xuZXhwb3J0IGNvbnN0IE9QRVJBQ0lPTl9FUlJPUiA9ICdPUEVSQUNJT05fRVJST1InO1xuZXhwb3J0IGNvbnN0IFZBTElEQVJfRk9STVVMQVJJTyA9ICdWQUxJREFSX0ZPUk1VTEFSSU8nO1xuZXhwb3J0IGNvbnN0IE9QRVJBQ0lPTl9BQ1RVQUwgPSAnT1BFUkFDSU9OX0FDVFVBTCc7XG5leHBvcnQgY29uc3QgRUxJTUlOQVJfT1BFUkFDSU9OID0gJ0VMSU1JTkFSX09QRVJBQ0lPTic7XG5cblxuZXhwb3J0IGNvbnN0IE9CVEVORVJfVVNVQVJJTyA9ICdPQlRFTkVSX1VTVUFSSU8nO1xuXG5leHBvcnQgY29uc3QgQUNUVUFMSVpBUl9PUEVSQUNJT04gPSAnQUNUVUFMSVpBUl9PUEVSQUNJT04nO1xuZXhwb3J0IGNvbnN0IExJTVBJQVJfT1BFUkFDSU9OID0gJ0xJTVBJQVJfT1BFUkFDSU9OJztcblxuZXhwb3J0IGNvbnN0IFRPVEFMX0lOR1JFU09TID0gJ1RPVEFMX0lOR1JFU09TJztcbmV4cG9ydCBjb25zdCBUT1RBTF9FR1JFU09TID0gJ1RPVEFMX0VHUkVTT1MnO1xuZXhwb3J0IGNvbnN0IENBTENVTEFSX0JBTEFOQ0UgPSAnQ0FMQ1VMQVJfQkFMQU5DRSc7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9ORVNfQ0FURUdPUklBUyA9ICdPUEVSQUNJT05FU19DQVRFR09SSUFTJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9