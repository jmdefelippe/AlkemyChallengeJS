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

    case _types__WEBPACK_IMPORTED_MODULE_0__["OPERACION_ACTUAL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operacion: state.operaciones.filter(operacion => operacion._id === action.payload)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ACTUALIZAR_OPERACION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        operaciones: state.operaciones.map(operacion => operacion._id === action.payload._id ? action.payload : operacion)
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
    operacion: [{}],
    mensaje: {},
    balance: 0,
    ingresos: 0,
    egresos: 0
  }; // dispatch para ejecutar las acciones

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_operacionReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // obtener los operaciones

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
  }; // selecciona el operacion que el usuario dio click


  const operacionActual = operacionId => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["OPERACION_ACTUAL"],
      payload: operacionId
    });
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
      operacion: state.operacion,
      mensaje: state.mensaje,
      balance: state.balance,
      ingresos: state.ingresos,
      egresos: state.egresos,
      obtenerOperaciones,
      agregarOperacion,
      operacionActual,
      actualizarOperacion,
      eliminarOperacion,
      calcularTotalIngresos,
      calcularTotalEgresos,
      calcularBalance,
      obtenerOperacionesCategorias,
      calcularTotales
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
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
/*! exports provided: REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION, OCULTAR_ALERTA, OBTENER_OPERACIONES, AGREGAR_OPERACION, OPERACION_EXITOSA, OPERACION_ERROR, OPERACION_ACTUAL, ELIMINAR_OPERACION, ACTUALIZAR_OPERACION, TOTAL_INGRESOS, TOTAL_EGRESOS, CALCULAR_BALANCE, OPERACIONES_CATEGORIAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_EXITOSO", function() { return REGISTRO_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_ERROR", function() { return REGISTRO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_EXITOSO", function() { return LOGIN_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUARIO_AUTENTICADO", function() { return USUARIO_AUTENTICADO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERRAR_SESION", function() { return CERRAR_SESION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCULTAR_ALERTA", function() { return OCULTAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBTENER_OPERACIONES", function() { return OBTENER_OPERACIONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_OPERACION", function() { return AGREGAR_OPERACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERACION_EXITOSA", function() { return OPERACION_EXITOSA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERACION_ERROR", function() { return OPERACION_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERACION_ACTUAL", function() { return OPERACION_ACTUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELIMINAR_OPERACION", function() { return ELIMINAR_OPERACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTUALIZAR_OPERACION", function() { return ACTUALIZAR_OPERACION; });
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
const OCULTAR_ALERTA = 'OCULTAR_ALERTA';
const OBTENER_OPERACIONES = 'OBTENER_OPERACIONES';
const AGREGAR_OPERACION = 'AGREGAR_OPERACION';
const OPERACION_EXITOSA = 'OPERACION_EXITOSA';
const OPERACION_ERROR = 'OPERACION_ERROR';
const OPERACION_ACTUAL = 'OPERACION_ACTUAL';
const ELIMINAR_OPERACION = 'ELIMINAR_OPERACION';
const ACTUALIZAR_OPERACION = 'ACTUALIZAR_OPERACION';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L29wZXJhY2lvbmVzL29wZXJhY2lvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9vcGVyYWNpb25lcy9vcGVyYWNpb25TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjbGllbnRlQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiYmFja2VuZFVSTCIsInRva2VuQXV0aCIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiUkVHSVNUUk9fRVhJVE9TTyIsIlJFR0lTVFJPX0VSUk9SIiwiTE9HSU5fRVJST1IiLCJtZW5zYWplIiwicGF5bG9hZCIsIkxPR0lOX0VYSVRPU08iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYXV0ZW50aWNhZG8iLCJPQ1VMVEFSX0FMRVJUQSIsIlVTVUFSSU9fQVVURU5USUNBRE8iLCJ1c3VhcmlvIiwiQ0VSUkFSX1NFU0lPTiIsInJlbW92ZUl0ZW0iLCJBdXRoU3RhdGUiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsImNhcmdhbmRvIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiYXV0aFJlZHVjZXIiLCJyZWdpc3RyYXJVc3VhcmlvIiwiZGF0b3MiLCJyZXNwdWVzdGEiLCJwb3N0IiwiYWxlcnRhIiwibXNnIiwiZGF0YSIsImNhdGVnb3JpYSIsInVzdWFyaW9BdXRlbnRpY2FkbyIsImVycm9yIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwiaW5pY2lhclNlc2lvbiIsImdldEl0ZW0iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiY2VycmFyU2VzaW9uIiwib3BlcmFjaW9uQ29udGV4dCIsIk9CVEVORVJfT1BFUkFDSU9ORVMiLCJvcGVyYWNpb25lcyIsIkFHUkVHQVJfT1BFUkFDSU9OIiwiZm9ybXVsYXJpbyIsImVycm9yZm9ybXVsYXJpbyIsIk9QRVJBQ0lPTl9BQ1RVQUwiLCJvcGVyYWNpb24iLCJmaWx0ZXIiLCJfaWQiLCJBQ1RVQUxJWkFSX09QRVJBQ0lPTiIsIm1hcCIsIkVMSU1JTkFSX09QRVJBQ0lPTiIsIk9QRVJBQ0lPTl9FWElUT1NBIiwiT1BFUkFDSU9OX0VSUk9SIiwiT1BFUkFDSU9ORVNfQ0FURUdPUklBUyIsIlRPVEFMX0lOR1JFU09TIiwiaW5ncmVzb3MiLCJyZWR1Y2UiLCJtb250byIsInRpcG8iLCJUT1RBTF9FR1JFU09TIiwiZWdyZXNvcyIsIkNBTENVTEFSX0JBTEFOQ0UiLCJiYWxhbmNlIiwiT3BlcmFjaW9uU3RhdGUiLCJwcm9wcyIsIm9wZXJhY2lvblJlZHVjZXIiLCJvYnRlbmVyT3BlcmFjaW9uZXMiLCJyZXN1bHRhZG8iLCJhZ3JlZ2FyT3BlcmFjaW9uIiwib3BlcmFjaW9uQWN0dWFsIiwib3BlcmFjaW9uSWQiLCJhY3R1YWxpemFyT3BlcmFjaW9uIiwicHV0IiwiZWxpbWluYXJPcGVyYWNpb24iLCJkZWxldGUiLCJjYWxjdWxhclRvdGFsSW5ncmVzb3MiLCJjYWxjdWxhclRvdGFsRWdyZXNvcyIsImNhbGN1bGFyQmFsYW5jZSIsImNhbGN1bGFyVG90YWxlcyIsIm9idGVuZXJPcGVyYWNpb25lc0NhdGVnb3JpYXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzlCQyxTQUFPLEVBQUVDLHVCQUFzQkM7QUFERCxDQUFiLENBQXJCO0FBSWVMLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTs7QUFFQSxNQUFNTSxTQUFTLEdBQUdDLEtBQUssSUFBSTtBQUN2QixNQUFHQSxLQUFILEVBQVU7QUFDTlAsa0RBQVksQ0FBQ1EsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLENBQXFDLGVB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QjtBQUNBLE1BQU1LLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1FLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1SLHNCQUFzQixHQUFHLHdCQUEvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGNsaWVudGVBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuYmFja2VuZFVSTFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudGVBeGlvczsiLCJpbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4vYXhpb3MnO1xuXG5jb25zdCB0b2tlbkF1dGggPSB0b2tlbiA9PiB7XG4gICAgaWYodG9rZW4pIHtcbiAgICAgICAgY2xpZW50ZUF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgY2xpZW50ZUF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b2tlbkF1dGg7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhDb250ZXh0OyIsImltcG9ydCB7IFxuICAgIFJFR0lTVFJPX0VYSVRPU08sXG4gICAgUkVHSVNUUk9fRVJST1IsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgTE9HSU5fRVhJVE9TTyxcbiAgICBMT0dJTl9FUlJPUixcbiAgICBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgIENFUlJBUl9TRVNJT05cbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFJFR0lTVFJPX0VYSVRPU086XG4gICAgICAgIGNhc2UgUkVHSVNUUk9fRVJST1I6XG4gICAgICAgIGNhc2UgTE9HSU5fRVJST1I6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICBjYXNlIExPR0lOX0VYSVRPU086IFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBPQ1VMVEFSX0FMRVJUQTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZToge31cbiAgICAgICAgICAgIH0gXG4gICAgICAgIGNhc2UgVVNVQVJJT19BVVRFTlRJQ0FETzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBDRVJSQVJfU0VTSU9OOiBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBudWxsLCBcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXV0aENvbnRleHQgZnJvbSAnLi9hdXRoQ29udGV4dCc7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcic7XG5cblxuaW1wb3J0IHsgXG4gICAgUkVHSVNUUk9fRVhJVE9TTywgXG4gICAgUkVHSVNUUk9fRVJST1IsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgTE9HSU5fRVhJVE9TTyxcbiAgICBMT0dJTl9FUlJPUixcbiAgICBVU1VBUklPX0FVVEVOVElDQURPLFxuICAgIENFUlJBUl9TRVNJT05cbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5pbXBvcnQgdG9rZW5BdXRoIGZyb20gJy4uLy4uL2NvbmZpZy90b2tlbkF1dGgnO1xuXG5jb25zdCBBdXRoU3RhdGUgPSAoe2NoaWxkcmVufSkgPT4ge1xuXG4gICAgLy8gRGVmaW5pciB1biBzdGF0ZSBpbmljaWFsXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICB0b2tlbjogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnLFxuICAgICAgICBhdXRlbnRpY2FkbzogbnVsbCxcbiAgICAgICAgdXN1YXJpbzogbnVsbCxcbiAgICAgICAgbWVuc2FqZToge30sXG4gICAgICAgIGNhcmdhbmRvOiBudWxsXG4gICAgfVxuXG4gICAgLy8gRGVmaW5pciBlbCByZWR1Y2VyXG4gICAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoYXV0aFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBSZWdpc3RyYXIgbnVldm9zIHVzdWFyaW9zXG4gICAgY29uc3QgcmVnaXN0cmFyVXN1YXJpbyA9IGFzeW5jIGRhdG9zID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCgnL2FwaS91c3VhcmlvcycsIGRhdG9zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xuICAgICAgICAgICAgICAgIG1zZzogcmVzcHVlc3RhLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRUdJU1RST19FWElUT1NPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIG9idGVuZXIgZWwgdXN1YXJpb1xuICAgICAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XG4gICAgICAgICAgICAgICAgbXNnOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVHSVNUUk9fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDAwKTsgXG4gICAgfVxuXG4gICAgLy8gQXV0ZW50aWNhciBVc3Vhcmlvc1xuICAgIGNvbnN0IGluaWNpYXJTZXNpb24gPSBhc3luYyBkYXRvcyA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL2F1dGgnLCBkYXRvcyk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVhJVE9TTyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS50b2tlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcbiAgICAgICAgICAgICAgICBtc2c6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIC8vIFJldG9ybmUgZWwgVXN1YXJpbyBhdXRlbnRpY2FkbyBlbiBiYXNlIGFsIEpXVFxuICAgIGNvbnN0IHVzdWFyaW9BdXRlbnRpY2FkbyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgaWYodG9rZW4pIHtcbiAgICAgICAgICAgIHRva2VuQXV0aCh0b2tlbilcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KCcvYXBpL2F1dGgnKTtcbiAgICAgICAgICAgIGlmKHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW8pIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3B1ZXN0YS5kYXRhLnVzdWFyaW9cbiAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExPR0lOX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2VycmFyIGxhIHNlc2nDs25cbiAgICBjb25zdCBjZXJyYXJTZXNpb24gPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENFUlJBUl9TRVNJT05cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7IFxuICAgICAgICAgICAgICAgIHRva2VuOiBzdGF0ZS50b2tlbixcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2Fkbzogc3RhdGUuYXV0ZW50aWNhZG8sXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogc3RhdGUudXN1YXJpbyxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxuICAgICAgICAgICAgICAgIGNhcmdhbmRvOiBzdGF0ZS5jYXJnYW5kbyxcbiAgICAgICAgICAgICAgICByZWdpc3RyYXJVc3VhcmlvLFxuICAgICAgICAgICAgICAgIGluaWNpYXJTZXNpb24sXG4gICAgICAgICAgICAgICAgdXN1YXJpb0F1dGVudGljYWRvLCBcbiAgICAgICAgICAgICAgICBjZXJyYXJTZXNpb25cbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhTdGF0ZTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3Qgb3BlcmFjaW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9wZXJhY2lvbkNvbnRleHQ7IiwiaW1wb3J0IHtcclxuICAgIE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICBBR1JFR0FSX09QRVJBQ0lPTixcclxuICAgIE9QRVJBQ0lPTl9FWElUT1NBLFxyXG4gICAgT0NVTFRBUl9BTEVSVEEsXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBPUEVSQUNJT05fQUNUVUFMLFxyXG4gICAgRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgQUNUVUFMSVpBUl9PUEVSQUNJT04sXHJcbiAgICBDQUxDVUxBUl9CQUxBTkNFLFxyXG4gICAgT1BFUkFDSU9ORVNfQ0FURUdPUklBUyxcclxuICAgIFRPVEFMX0lOR1JFU09TLFxyXG4gICAgVE9UQUxfRUdSRVNPU1xyXG59IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIE9CVEVORVJfT1BFUkFDSU9ORVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBR1JFR0FSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IFsuLi5zdGF0ZS5vcGVyYWNpb25lcywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTl9BQ1RVQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogc3RhdGUub3BlcmFjaW9uZXMuZmlsdGVyKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkID09PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFDVFVBTElaQVJfT1BFUkFDSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYWNpb25lczogc3RhdGUub3BlcmFjaW9uZXMubWFwKG9wZXJhY2lvbiA9PiBvcGVyYWNpb24uX2lkID09PSBhY3Rpb24ucGF5bG9hZC5faWRcclxuICAgICAgICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQgOiBvcGVyYWNpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEVMSU1JTkFSX09QRVJBQ0lPTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLmZpbHRlcihvcGVyYWNpb24gPT4gb3BlcmFjaW9uLl9pZCAhPT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKSxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFsZXJ0YTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHt9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgY2FzZSBPUEVSQUNJT05fRVhJVE9TQTpcclxuICAgICAgICBjYXNlIE9QRVJBQ0lPTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT1BFUkFDSU9ORVNfQ0FURUdPUklBUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmFjaW9uZXM6IHN0YXRlLm9wZXJhY2lvbmVzLmZpbHRlcihvcGVyYWNpb24gPT4gb3BlcmFjaW9uLmNhdGVnb3JpYSA9PT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBUT1RBTF9JTkdSRVNPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaW5ncmVzb3M6IHN0YXRlLm9wZXJhY2lvbmVzLnJlZHVjZSggKG1vbnRvLCBvcGVyYWNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vbnRvICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250byA9IG1vbnRvLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmFjaW9uLnRpcG8gPT09ICdJbmdyZXNvJykgbW9udG8gKz0gb3BlcmFjaW9uLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250bztcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFRPVEFMX0VHUkVTT1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVncmVzb3M6IHN0YXRlLm9wZXJhY2lvbmVzLnJlZHVjZSggKG1vbnRvLCBvcGVyYWNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vbnRvICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250byA9IG1vbnRvLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmFjaW9uLnRpcG8gPT09ICdFZ3Jlc28nKSBtb250byArPSBvcGVyYWNpb24ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRvO1xyXG4gICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0FMQ1VMQVJfQkFMQU5DRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogc3RhdGUub3BlcmFjaW9uZXMucmVkdWNlKCAobW9udG8sIG9wZXJhY2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbW9udG8gIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRvID0gbW9udG8ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYWNpb24udGlwbyA9PT0gJ0luZ3Jlc28nKSBtb250byArPSBvcGVyYWNpb24ubW9udG87XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhY2lvbi50aXBvID09PSAnRWdyZXNvJykgbW9udG8gLT0gb3BlcmFjaW9uLm1vbnRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250bztcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgb3BlcmFjaW9uQ29udGV4dCBmcm9tICcuL29wZXJhY2lvbkNvbnRleHQnO1xyXG5pbXBvcnQgb3BlcmFjaW9uUmVkdWNlciBmcm9tICcuL29wZXJhY2lvblJlZHVjZXInO1xyXG5pbXBvcnQge1xyXG4gICAgT0JURU5FUl9PUEVSQUNJT05FUyxcclxuICAgIEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgT1BFUkFDSU9OX0VYSVRPU0EsXHJcbiAgICBPUEVSQUNJT05fRVJST1IsXHJcbiAgICBPQ1VMVEFSX0FMRVJUQSxcclxuICAgIE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICBFTElNSU5BUl9PUEVSQUNJT04sXHJcbiAgICBBQ1RVQUxJWkFSX09QRVJBQ0lPTixcclxuICAgIENBTENVTEFSX0JBTEFOQ0UsXHJcbiAgICBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgVE9UQUxfSU5HUkVTT1MsXHJcbiAgICBUT1RBTF9FR1JFU09TXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xyXG5cclxuY29uc3QgT3BlcmFjaW9uU3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIG9wZXJhY2lvbmVzIDogW10sXHJcbiAgICAgICAgb3BlcmFjaW9uOiBbe31dLFxyXG4gICAgICAgIG1lbnNhamU6IHt9LFxyXG4gICAgICAgIGJhbGFuY2U6IDAsXHJcbiAgICAgICAgaW5ncmVzb3M6IDAsXHJcbiAgICAgICAgZWdyZXNvczogMFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpc3BhdGNoIHBhcmEgZWplY3V0YXIgbGFzIGFjY2lvbmVzXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIob3BlcmFjaW9uUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyBvYnRlbmVyIGxvcyBvcGVyYWNpb25lc1xyXG4gICAgY29uc3Qgb2J0ZW5lck9wZXJhY2lvbmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvb3BlcmFjaW9uZXMnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9CVEVORVJfT1BFUkFDSU9ORVMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YS5vcGVyYWNpb25lc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGFncmVnYXIgbnVldmEgb3BlcmFjaW9uXHJcbiAgICBjb25zdCBhZ3JlZ2FyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvb3BlcmFjaW9uZXMnLCBvcGVyYWNpb24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnT3BlcmFjacOzbiBhZ3JlZ2FkYSBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVhJVE9TQSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gaW5zZXJ0YXIgZWwgb3BlcmFjaW9uIGVuIGVsIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDMwMDApOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY2Npb25hIGVsIG9wZXJhY2lvbiBxdWUgZWwgdXN1YXJpbyBkaW8gY2xpY2tcclxuICAgIGNvbnN0IG9wZXJhY2lvbkFjdHVhbCA9IG9wZXJhY2lvbklkID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE9QRVJBQ0lPTl9BQ1RVQUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IG9wZXJhY2lvbklkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0YSBvIG1vZGlmaWNhIHVuYSBvcGVyYWNpb25cclxuICAgIGNvbnN0IGFjdHVhbGl6YXJPcGVyYWNpb24gPSBhc3luYyBvcGVyYWNpb24gPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wdXQoYC9hcGkvb3BlcmFjaW9uZXMvJHtvcGVyYWNpb24uX2lkfWAsIG9wZXJhY2lvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdPcGVyYWNpw7NuIGVkaXRhZGEgZXhpdG9zYW1lbnRlJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VYSVRPU0EsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGEub3BlcmFjaW9uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAzMDAwKTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWxpbWluYSB1biBvcGVyYWNpb25cclxuICAgIGNvbnN0IGVsaW1pbmFyT3BlcmFjaW9uID0gYXN5bmMgb3BlcmFjaW9uSWQgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBjbGllbnRlQXhpb3MuZGVsZXRlKGAvYXBpL29wZXJhY2lvbmVzLyR7b3BlcmFjaW9uSWR9YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdPcGVyYWNpw7NuIGVsaW1pbmFkYSBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05fRVhJVE9TQSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRUxJTUlOQVJfT1BFUkFDSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogb3BlcmFjaW9uSWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT1BFUkFDSU9OX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAzMDAwKTsgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXJUb3RhbEluZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfSU5HUkVTT1NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGFyVG90YWxFZ3Jlc29zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVE9UQUxfRUdSRVNPU1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsY3VsYXIgZWwgYmFsYW5jZTogdG90YWwgaW5ncmVzb3MgLSB0b3RhbCBlZ3Jlc29zXHJcbiAgICBjb25zdCBjYWxjdWxhckJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBDQUxDVUxBUl9CQUxBTkNFXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxjdWxhclRvdGFsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgb2J0ZW5lck9wZXJhY2lvbmVzKCk7XHJcbiAgICAgICAgY2FsY3VsYXJUb3RhbEluZ3Jlc29zKCk7XHJcbiAgICAgICAgY2FsY3VsYXJUb3RhbEVncmVzb3MoKTtcclxuICAgICAgICBjYWxjdWxhckJhbGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYnRlbmVyT3BlcmFjaW9uZXNDYXRlZ29yaWFzID0gYXN5bmMgY2F0ZWdvcmlhID0+IHtcclxuICAgICAgICBhd2FpdCBvYnRlbmVyT3BlcmFjaW9uZXMoKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBPUEVSQUNJT05FU19DQVRFR09SSUFTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBjYXRlZ29yaWFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG9wZXJhY2lvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbmVzOiBzdGF0ZS5vcGVyYWNpb25lcyxcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbjogc3RhdGUub3BlcmFjaW9uLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IHN0YXRlLmJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICBpbmdyZXNvczogc3RhdGUuaW5ncmVzb3MsXHJcbiAgICAgICAgICAgICAgICBlZ3Jlc29zOiBzdGF0ZS5lZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIG9wZXJhY2lvbkFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGFjdHVhbGl6YXJPcGVyYWNpb24sXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hck9wZXJhY2lvbixcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxJbmdyZXNvcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxFZ3Jlc29zLFxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXJCYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lck9wZXJhY2lvbmVzQ2F0ZWdvcmlhcyxcclxuICAgICAgICAgICAgICAgIGNhbGN1bGFyVG90YWxlc1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvb3BlcmFjaW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmFjaW9uU3RhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgQXV0aFN0YXRlIGZyb20gJy4uL2NvbnRleHQvYXV0aC9hdXRoU3RhdGUnO1xuaW1wb3J0IE9wZXJhY2lvblN0YXRlIGZyb20gJy4uL2NvbnRleHQvb3BlcmFjaW9uZXMvb3BlcmFjaW9uU3RhdGUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8T3BlcmFjaW9uU3RhdGU+XG4gICAgICAgICAgICA8QXV0aFN0YXRlPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXV0aFN0YXRlPlxuICAgICAgICA8L09wZXJhY2lvblN0YXRlPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImV4cG9ydCBjb25zdCBSRUdJU1RST19FWElUT1NPID0gJ1JFR0lTVFJPX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IFJFR0lTVFJPX0VSUk9SID0gJ1JFR0lTVFJPX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IExPR0lOX0VYSVRPU08gPSAnTE9HSU5fRVhJVE9TTyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSAnTE9HSU5fRVJST1InO1xuXG5leHBvcnQgY29uc3QgVVNVQVJJT19BVVRFTlRJQ0FETyA9ICdVU1VBUklPX0FVVEVOVElDQURPJztcbmV4cG9ydCBjb25zdCBDRVJSQVJfU0VTSU9OID0gJ0NFUlJBUl9TRVNJT04nXG5cbmV4cG9ydCBjb25zdCBPQ1VMVEFSX0FMRVJUQSA9ICdPQ1VMVEFSX0FMRVJUQSc7XG5cbmV4cG9ydCBjb25zdCBPQlRFTkVSX09QRVJBQ0lPTkVTID0gJ09CVEVORVJfT1BFUkFDSU9ORVMnO1xuZXhwb3J0IGNvbnN0IEFHUkVHQVJfT1BFUkFDSU9OID0gJ0FHUkVHQVJfT1BFUkFDSU9OJztcbmV4cG9ydCBjb25zdCBPUEVSQUNJT05fRVhJVE9TQSA9ICdPUEVSQUNJT05fRVhJVE9TQSc7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9OX0VSUk9SID0gJ09QRVJBQ0lPTl9FUlJPUic7XG5leHBvcnQgY29uc3QgT1BFUkFDSU9OX0FDVFVBTCA9ICdPUEVSQUNJT05fQUNUVUFMJztcbmV4cG9ydCBjb25zdCBFTElNSU5BUl9PUEVSQUNJT04gPSAnRUxJTUlOQVJfT1BFUkFDSU9OJztcbmV4cG9ydCBjb25zdCBBQ1RVQUxJWkFSX09QRVJBQ0lPTiA9ICdBQ1RVQUxJWkFSX09QRVJBQ0lPTic7XG5leHBvcnQgY29uc3QgVE9UQUxfSU5HUkVTT1MgPSAnVE9UQUxfSU5HUkVTT1MnO1xuZXhwb3J0IGNvbnN0IFRPVEFMX0VHUkVTT1MgPSAnVE9UQUxfRUdSRVNPUyc7XG5leHBvcnQgY29uc3QgQ0FMQ1VMQVJfQkFMQU5DRSA9ICdDQUxDVUxBUl9CQUxBTkNFJztcbmV4cG9ydCBjb25zdCBPUEVSQUNJT05FU19DQVRFR09SSUFTID0gJ09QRVJBQ0lPTkVTX0NBVEVHT1JJQVMnOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=