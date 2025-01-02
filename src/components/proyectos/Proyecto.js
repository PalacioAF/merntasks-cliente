import React,{useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'
import { ButtonBlank } from "./mixins";

const Proyecto = ({proyecto}) => {
    const proyectosContext=useContext(proyectoContext);
    const {proyectoActual} =proyectosContext;

    const tareasContext=useContext(TareaContext);
    const {obtenerTareas,limpiar} =tareasContext;


    //Obtener proyecto
    const seleccionarProyecto=id=>{
        proyectoActual(id);//Filtrar proyecto
        limpiar();
        obtenerTareas(id);//Filtrar tareas de proyecto
    }

    return ( 
        <li>
            <ButtonBlank
            onClick={()=>seleccionarProyecto(proyecto._id)}
            >
                {proyecto.nombre}
            </ButtonBlank>
        </li>
     );
}
 
export default Proyecto;