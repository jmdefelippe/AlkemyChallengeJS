import React, { useReducer } from 'react';

import operacionContext from './operacionContext';
import operacionReducer from './operacionReducer';
import {
    FORMULARIO_OPERACION,
    OBTENER_OPERACIONES,
    AGREGAR_OPERACION,
    OPERACION_ERROR,
    VALIDAR_FORMULARIO,
    OPERACION_ACTUAL,
    ELIMINAR_OPERACION
} from '../../types';

import clienteAxios from '../../config/axios';

const OperacionState = props => {

    const initialState = {
        operaciones : [],
        nuevaOperacion : false,
        errorformulario: false,
        operacion: null,
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(operacionReducer, initialState);

    // serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_OPERACION
        })
    }

    // obtener los operaciones
    const obtenerOperaciones = async () => {
        try {
            const resultado = await clienteAxios.get('/api/operaciones');
            
            dispatch({
                type: OBTENER_OPERACIONES,
                payload: resultado.data.operaciones
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: OPERACION_ERROR,
                payload: alerta
            })
        }
    }
    
    // agregar nueva operacion
    const agregarOperacion = async operacion => {

        try {
            const resultado = await clienteAxios.post('/api/operaciones', operacion);
            console.log(resultado);
            // insertar el operacion en el state
            dispatch({
                type: AGREGAR_OPERACION,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: OPERACION_ERROR,
                payload: alerta
            })
        }

    }

    // validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // selecciona el operacion que el usuario dio click
    const operacionActual = operacionId => {
        dispatch({
            type: OPERACION_ACTUAL,
            payload: operacionId
        })
    }

    // elimina un operacion
    const eliminarOperacion = async operacionId => {
        try {
            await clienteAxios.delete(`/api/operaciones/${operacionId}`);
            dispatch({
                type: ELIMINAR_OPERACION,
                payload: operacionId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: OPERACION_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <operacionContext.Provider
            value={{
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
            }}
        >
            {props.children}
        </operacionContext.Provider>
    )
}

export default OperacionState;