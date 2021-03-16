import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA,
    LIMPIAR_STATE
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: null
            }
        case LIMPIAR_STATE:
            return {
                ...state,
                mensaje_archivo: null,
                nombre: '',
                nombre_original:'',
                cargando: null,
                descargas: 1,
                password: '',
                autor: null,
                url: ''
            }
        default:
            return state
    }
}