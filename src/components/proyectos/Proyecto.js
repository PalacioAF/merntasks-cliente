import React,{useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'

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
            <button
            type="button"
            className="btn btn-blank"
            onClick={()=>seleccionarProyecto(proyecto._id)}
            >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;