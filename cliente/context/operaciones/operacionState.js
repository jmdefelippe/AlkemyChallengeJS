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
    ELIMINAR_OPERACION,
    LIMPIAR_STATE,
    ACTUALIZAR_OPERACION,
    LIMPIAR_OPERACION,
    CALCULAR_BALANCE,
    OPERACIONES_CATEGORIAS,
    TOTAL_INGRESOS,
    TOTAL_EGRESOS
} from '../../types';

import clienteAxios from '../../config/axios';

const OperacionState = props => {

    const initialState = {
        operaciones : [],
        nuevaOperacion : false,
        errorformulario: false,
        operacion: null,
        mensaje: null,
        balance: 0,
        ingresos: 0,
        egresos: 0
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
            });
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

    // edita o modifica una operacion
    const actualizarOperacion = async operacion => {
        try {
            const resultado = await clienteAxios.put(`/api/operaciones/${operacion._id}`, operacion);
            dispatch({
                type: ACTUALIZAR_OPERACION,
                payload: resultado.data.operacion
            })
        } catch (error) {
            console.log(error);
        }
    }

    // elimina la operacion seleccionada
    const limpiarOperacion = () => {
        dispatch({
            type: LIMPIAR_OPERACION
        })
    }

    const calcularTotalIngresos = async () => {
        dispatch({
            type: TOTAL_INGRESOS
        })
    }

    const calcularTotalEgresos = async () => {
        dispatch({
            type: TOTAL_EGRESOS
        })
    }


    // calcular el balance: total ingresos - total egresos
    const calcularBalance = async () => {
        dispatch({
            type: CALCULAR_BALANCE
        })
    }

    const calcularTotales = async () => {
        await obtenerOperaciones();

        calcularTotalIngresos();
        calcularTotalEgresos();
        calcularBalance();
    }

    const obtenerOperacionesCategorias = async categoria => {
        
        await obtenerOperaciones();

        dispatch({
            type: OPERACIONES_CATEGORIAS,
            payload: categoria
        })
    }



    return (
        <operacionContext.Provider
            value={{
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
            }}
        >
            {props.children}
        </operacionContext.Provider>
    )
}

export default OperacionState;