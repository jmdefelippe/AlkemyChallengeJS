import {
    FORMULARIO_OPERACION,
    OBTENER_OPERACIONES,
    AGREGAR_OPERACION,
    OPERACION_ERROR,
    VALIDAR_FORMULARIO,
    OPERACION_ACTUAL,
    ELIMINAR_OPERACION,
    ACTUALIZAR_OPERACION,
    LIMPIAR_OPERACION,
    CALCULAR_BALANCE,
    OPERACIONES_CATEGORIAS,
    TOTAL_INGRESOS,
    TOTAL_EGRESOS
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
        case ACTUALIZAR_OPERACION:
            return {
                ...state,
                operaciones: state.operaciones.map(operacion => operacion._id === action.payload._id
                ? action.payload : operacion)
            }
        case LIMPIAR_OPERACION:
            return {
                ...state,
                operacion: null
            }
        case OPERACIONES_CATEGORIAS:
            return {
                ...state,
                operaciones: state.operaciones.filter(operacion => operacion.categoria ===
                action.payload)
            }
        case TOTAL_INGRESOS:
            return {
                ...state,
                ingresos: state.operaciones.reduce( (monto, operacion) => {
                    if (typeof monto !== 'number') {
                        monto = monto.monto;
                    }
                    if (operacion.tipo === 'Ingreso') monto += operacion.monto;
                    return monto;
                }, 0)
            }
        case TOTAL_EGRESOS:
            return {
                ...state,
                egresos: state.operaciones.reduce( (monto, operacion) => {
                    if (typeof monto !== 'number') {
                        monto = monto.monto;
                    }
                    if (operacion.tipo === 'Egreso') monto += operacion.monto;
                    return monto;
                }, 0)
            }
        case CALCULAR_BALANCE:
            return {
                ...state,
                balance: state.operaciones.reduce( (monto, operacion) => {
                    if (typeof monto !== 'number') {
                        monto = monto.monto;
                    }
                    if (operacion.tipo === 'Ingreso') monto += operacion.monto;
                    if (operacion.tipo === 'Egreso') monto -= operacion.monto;
                    return monto;
                }, 0)
            }

        default:
            return state;
    }
}