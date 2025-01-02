import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import AlertaContext from '../../context/alertas/alertaContext';
import { ListadoProyectosUl, Alert } from "./mixins";

const ListadoProyectos = () => {

    //extraer proyectos de state inicial
    const proyectosContext=useContext(proyectoContext);
    const {mensaje,proyectos,obtenerProyectos} =proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    useEffect(()=>{
        // si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
        //enlint-sisable-next-line
    },[mensaje]);

    if(!proyectos) return <p>No hay proyectos, comienza creando uno</p>;

    return (
      <ListadoProyectosUl>
        {alerta ? (
          <Alert categoria={alerta.categoria}>
            {alerta.msg}
          </Alert>
        ) : null}
        <TransitionGroup>
          {proyectos.map((proyecto) => (
            <CSSTransition
              key={proyecto._id}
              timeout={200}
              classNames="proyecto"
            >
              <Proyecto proyecto={proyecto} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListadoProyectosUl>
    );
}
 
export default ListadoProyectos;