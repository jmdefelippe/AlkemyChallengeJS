import {
    FORMULARIO_OPERACION,
    OBTENER_OPERACIONES,
    AGREGAR_OPERACION,
    OPERACION_ERROR,
    VALIDAR_FORMULARIO,
    OPERACION_ACTUAL,
    ELIMINAR_OPERACION
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_OPERACION:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_OPERACIONES:
            return {
                ...state,
                operaciones: action.payload
            }
        case AGREGAR_OPERACION:
            return {
                ...state,
                operaciones: [...state.operaciones, action.payload],
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true
            }
        case OPERACION_ACTUAL:
            return {
                ...state,
                operacion: state.operaciones.filter(operacion => operacion._id ===
                action.payload)
            }
        case ELIMINAR_OPERACION:
            return {
                ...state,
                operaciones: state.operaciones.filter(operacion => operacion._id !==
                action.payload),
                operacion: null
            }
        case OPERACION_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}