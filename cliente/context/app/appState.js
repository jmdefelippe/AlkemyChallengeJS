import React, {useReducer} from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA,
    LIMPIAR_STATE
} from '../../types';
import clienteAxios from '../../config/axios';

const AppState = ({children}) => {

    const initialState = {
        mensaje: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Muestra una alerta 
    const mostrarAlerta = msg => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg
        });

        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 3000);
    }
    
    const limpiarState = () => {
        dispatch({
            type: LIMPIAR_STATE
        })
    }
 

    return (
        <appContext.Provider
            value={{
                mensaje: state.mensaje,
                mostrarAlerta,
                limpiarState
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default AppState;