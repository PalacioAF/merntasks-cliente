import React, {useReducer}from 'react';
import shortid from 'shortid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO,OBTENER_PROYECTOS,AGREGAR_PROYECTO,VALIDAR_PROYECTO,ACTUAL_PROYECTO,ELIMINAR_PROYECTO,PROYECTO_ERROR,PROYECTO_SELECCIONADO,LIMPIAR_ACTUAL,ACTUALIZAR_PROYECTO} from '../../types'
import clienteAxios from '../../config/axios';




const ProyectoState=props=>{



    const initialState={
        proyectos:[],
        formulario:false,
        errorformulario:false,
        proyecto:null,
        mensaje: null,
        proyectoseleccionado:null
    }

    //dispath para ejecutar las acciones
    const[state,dispatch]=useReducer(proyectoReducer,initialState);

    //serie de funciones para el CRUD
    const mostrarFormulario=()=>{
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            console.log(resultado);
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    //Agregar nuevoProyectos
    const agregarProyecto=async (proyecto)=>{
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            console.log(resultado);
            // Insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    //Validar el formulario por errores

    const mostrarError=()=>{
        dispatch({
            type:VALIDAR_PROYECTO
        })
    }


    //Selecciona el proyecto que el usuario dio click

    const proyectoActual=proyectoId=>{
        dispatch({
            type:ACTUAL_PROYECTO,
            payload:proyectoId
        })
    }

    //Eliminar proyecto
    const eliminarProyecto=async (proyectoId)=>{
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    const guardarProyectoSeleccionado=proyecto=>{
        dispatch({
            type:PROYECTO_SELECCIONADO,
            payload:proyecto
        })
    }

    const limpiarProyecto=()=>{
        dispatch({
            type:LIMPIAR_ACTUAL
        })
    }

    const actualizarProyecto=async proyecto=>{
        try {
            console.log(proyecto)
            const resultado = await clienteAxios.put(`/api/proyectos/${proyecto._id}`, proyecto);
            console.log(resultado)
            dispatch({
                type: ACTUALIZAR_PROYECTO,
                payload: resultado.data.proyecto
            })
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <proyectoContext.Provider
        value={{
            proyectos:state.proyectos,
            formulario:state.formulario,
            errorformulario:state.errorformulario,
            proyecto:state.proyecto,
            mensaje: state.mensaje,
            proyectoseleccionado:state.proyectoseleccionado,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto,
            guardarProyectoSeleccionado,
            limpiarProyecto,
            actualizarProyecto
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;