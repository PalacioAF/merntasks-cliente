import React,{Fragment,useContext} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import { ListaTareas, TareaItem, Button } from './mixins'


const ListadoTareas = () => {

    //extraer proyecto de state inicial
    const proyectosContext=useContext(proyectoContext);
    const {proyecto,eliminarProyecto,guardarProyectoSeleccionado} =proyectosContext;

    const tareasContext=useContext(TareaContext);
    const {tareasproyecto} =tareasContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    const [proyectoActual]=proyecto;


    const onClickEliminar=()=>{
        eliminarProyecto(proyectoActual._id);
    }
    const onClickEditar=()=>{
        guardarProyectoSeleccionado(proyectoActual);
    }

    return (
      <Fragment>
        <h2>Proyecto: {proyectoActual.nombre}</h2>

        <ListaTareas>
          {tareasproyecto.length === 0 ? (
            <TareaItem>No hay Tareas</TareaItem>
          ) : (
            <TransitionGroup>
              {tareasproyecto.map((tarea) => (
                <CSSTransition key={tarea._id} timeout={200} classNames="tarea">
                  <Tarea tarea={tarea} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
        </ListaTareas>
        <Button type="button" onClick={onClickEditar}>
          Editar Proyecto &equiv;
        </Button>
        <Button type="button" onClick={onClickEliminar}>
          Eliminar Proyecto &times;
        </Button>
      </Fragment>
    );
}
 
export default ListadoTareas;