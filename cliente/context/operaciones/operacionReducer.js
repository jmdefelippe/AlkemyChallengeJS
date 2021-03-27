import {
    OBTENER_OPERACIONES,
    AGREGAR_OPERACION,
    OPERACION_EXITOSA,
    OCULTAR_ALERTA,
    OPERACION_ERROR,
    OPERACION_ACTUAL,
    ELIMINAR_OPERACION,
    ACTUALIZAR_OPERACION,
    CALCULAR_BALANCE,
    OPERACIONES_CATEGORIAS,
    TOTAL_INGRESOS,
    TOTAL_EGRESOS
} from '../../types';

export default (state, action) => {
    switch(action.type) {
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
        case OPERACION_ACTUAL:
            return {
                ...state,
                operacion: state.operaciones.filter(operacion => operacion._id ===
                action.payload)
            }
        case ACTUALIZAR_OPERACION:
            return {
                ...state,
                operaciones: state.operaciones.map(operacion => operacion._id === action.payload._id
                ? action.payload : operacion)
            }
        case ELIMINAR_OPERACION:
            return {
                ...state,
                operaciones: state.operaciones.filter(operacion => operacion._id !==
                action.payload),
                operacion: null,
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                mensaje: {}
            } 
        case OPERACION_EXITOSA:
        case OPERACION_ERROR:
            return {
                ...state,
                mensaje: action.payload
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