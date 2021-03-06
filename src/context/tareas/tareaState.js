import React, {useReducer}from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {TAREAS_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA,ELIMINAR_TAREA,TAREA_ACTUAL,ACTUALIZAR_TAREA,LIMPIAR_ACTUAL,LIMPIAR} from '../../types'
import clienteAxios from '../../config/axios';

const TareaState=props=>{



    const initialState={
        tareasproyecto:[],
        errortarea:false,
        tareaseleccionada:null
    }

    //dispath para ejecutar las acciones
    const[state,dispatch]=useReducer(tareaReducer,initialState);

    //Obtener tareas de proyectos
    const obtenerTareas=async (proyecto)=>{
        console.log(proyecto)
        try {
            const resultado = await clienteAxios.get('/api/tareas', { params: { proyecto }});
            console.log(resultado)
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Agregar Tarea
    const agregarTarea=async tarea=>{
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Validar el formulario por errores
    const validarTarea=()=>{
        dispatch({
            type:VALIDAR_TAREA
        })
    }
    
    //Eliminar proyecto
    const eliminarTarea=async (id,proyecto)=>{
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto }});
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }


    const guardarTareaActual=tarea=>{
        dispatch({
            type:TAREA_ACTUAL,
            payload:tarea
        })
    }

    
    const actualizarTarea=async tarea=>{
        try {
            console.log(tarea)
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            console.log(resultado)
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
    }

    const limpiarTarea=()=>{
        dispatch({
            type:LIMPIAR_ACTUAL
        })
    }

    const limpiar=()=>{
        dispatch({
            type:LIMPIAR
        })
    }


    return(
        <tareaContext.Provider
        value={{
            tareasproyecto:state.tareasproyecto,
            errortarea:state.errortarea,
            tareaseleccionada:state.tareaseleccionada,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            guardarTareaActual,
            actualizarTarea,
            limpiarTarea,
            limpiar
        }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}





export default TareaState;