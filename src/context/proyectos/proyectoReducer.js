import {FORMULARIO_PROYECTO,
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_PROYECTO,
        ACTUAL_PROYECTO,
        ELIMINAR_PROYECTO,
        PROYECTO_ERROR,
        PROYECTO_SELECCIONADO,
        LIMPIAR_ACTUAL,
        ACTUALIZAR_PROYECTO} from '../../types'

export default(state,action)=>{
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario:true
            }
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos:action.payload
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos:[...state.proyectos,action.payload],
                formulario:false,
                errorformulario:false
            }
        case VALIDAR_PROYECTO:
            return{
                ...state,
                errorformulario:true
            }
        case ACTUAL_PROYECTO:
            return{
                ...state,
                proyecto:state.proyectos.filter(proyecto=>proyecto._id===action.payload)
            }
        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos:state.proyectos.filter(proyecto=>proyecto._id!==action.payload),
                proyecto:null
            }
        case PROYECTO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case PROYECTO_SELECCIONADO:
            return{
                ...state,
                proyectoseleccionado:action.payload,
                formulario:true
            }
        case LIMPIAR_ACTUAL:
                return{
                    ...state,
                    proyectoseleccionado:null
                }
        case ACTUALIZAR_PROYECTO:
            return{
                ...state,
                proyectos:state.proyectos.map(proyecto=>proyecto._id===action.payload._id?action.payload:proyecto),
                formulario:false,
                errorformulario:false
            }                                                                 
        default:
            return state;
    }
}