import React,{useState,useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'
import { ContaineTarea, NombreTarea, Estado, ButtonCompleto , ButtonIncompleto, Acciones, ButtonPrimario, ButtonSecundario } from "./mixins";

const Tarea = ({tarea}) => {
    const proyectosContext=useContext(proyectoContext);
    const {proyecto} =proyectosContext;

    const tareasContext=useContext(TareaContext);
    const {eliminarTarea,obtenerTareas,actualizarTarea,guardarTareaActual} =tareasContext;

    const [proyectoActual]=proyecto;

    //Eliminar tarea
    const tareaEliminar=(id)=>{
        eliminarTarea(id,proyectoActual._id);
        obtenerTareas(proyectoActual._id);
    }

    //Cambiar estado de tarea
    const cambiarEstado=(tarea)=>{
        if(tarea.estado){
            tarea.estado=false;
        }
        else{
            tarea.estado=true;
        }
        actualizarTarea(tarea);
    }

    //Seleccionar Tarea para editarla
    const seleccionarTarea=(tarea)=>{
        guardarTareaActual(tarea);
    }

    return (
      <ContaineTarea>
        <NombreTarea>{tarea.nombre}</NombreTarea>

        <Estado>
          {tarea.estado ? (
            <ButtonCompleto type="button" onClick={() => cambiarEstado(tarea)}>
              Completo
            </ButtonCompleto>
          ) : (
            <ButtonIncompleto
              type="button"
              onClick={() => cambiarEstado(tarea)}
            >
              Incompleto
            </ButtonIncompleto>
          )}
        </Estado>

        <Acciones>
          <ButtonPrimario type="button" onClick={() => seleccionarTarea(tarea)}>
            Editar
          </ButtonPrimario>

          <ButtonSecundario
            type="button"
            onClick={() => tareaEliminar(tarea._id)}
          >
            Eliminar
          </ButtonSecundario>
        </Acciones>
      </ContaineTarea>
    );
}
 
export default Tarea;