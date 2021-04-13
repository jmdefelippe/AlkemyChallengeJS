import React, { useReducer } from 'react';

import operacionContext from './operacionContext';
import operacionReducer from './operacionReducer';
import {
    OBTENER_OPERACIONES,
    AGREGAR_OPERACION,
    OPERACION_EXITOSA,
    OPERACION_ERROR,
    OCULTAR_ALERTA,
    OPERACION_ACTUAL,
    ELIMINAR_OPERACION,
    ACTUALIZAR_OPERACION,
    CALCULAR_BALANCE,
    OPERACIONES_CATEGORIAS,
    TOTAL_INGRESOS,
    TOTAL_EGRESOS
} from '../../types';

import clienteAxios from '../../config/axios';

const OperacionState = props => {

    const initialState = {
        operaciones : [],
        operacion: [{}],
        mensaje: {},
        balance: 0,
        ingresos: 0,
        egresos: 0
    }

    const timeOut = 2000;

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(operacionReducer, initialState);

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
            
            const alerta = {
                msg: 'Operación agregada exitosamente',
                categoria: 'alerta-ok'
            }
            
            dispatch({
                type: OPERACION_EXITOSA,
                payload: alerta
            })

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

        // Limpia la alerta después de 3 segundos
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, timeOut); 
    }

    // selecciona el operacion que el usuario dio click
    const operacionActual = operacionId => {
        dispatch({
            type: OPERACION_ACTUAL,
            payload: operacionId
        })
    }

    // edita o modifica una operacion
    const actualizarOperacion = async operacion => {
        try {
            const resultado = await clienteAxios.put(`/api/operaciones/${operacion._id}`, operacion);
            
            const alerta = {
                msg: 'Operación editada exitosamente',
                categoria: 'alerta-ok'
            }
            
            dispatch({
                type: OPERACION_EXITOSA,
                payload: alerta
            })
            
            dispatch({
                type: ACTUALIZAR_OPERACION,
                payload: resultado.data.operacion
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

        // Limpia la alerta después de 3 segundos
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, timeOut); 
    }

    // elimina un operacion
    const eliminarOperacion = async operacionId => {
        try {
            
            await clienteAxios.delete(`/api/operaciones/${operacionId}`);
            
            const alerta = {
                msg: 'Operación eliminada exitosamente',
                categoria: 'alerta-ok'
            }
            
            dispatch({
                type: OPERACION_EXITOSA,
                payload: alerta
            })

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

        // Limpia la alerta después de 3 segundos
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, timeOut); 
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
            }}
        >
            {props.children}
        </operacionContext.Provider>
    )
}

export default OperacionState;