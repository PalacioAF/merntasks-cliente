import React,{useState,useContext,useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
    const [tarea,guardarTarea]=useState({
        nombre:''
    });

    const{nombre}=tarea;

    const proyectosContext=useContext(proyectoContext);
    const {proyecto} =proyectosContext;

    const tareasContext=useContext(TareaContext);
    const {tareaseleccionada,agregarTarea,errortarea,validarTarea,obtenerTareas,actualizarTarea,limpiarTarea} =tareasContext;

    useEffect(()=>{
        if(tareaseleccionada!==null){
            guardarTarea(tareaseleccionada);
        }
        else{
            guardarTarea({
                nombre:''
            })
        }
    },[tareaseleccionada])

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    const [proyectoActual]=proyecto;

    const handleChange=(e)=>{
        guardarTarea({
            ...tarea,
            [e.target.name]:e.target.value
        })
    }


    const onSubmit=(e)=>{
        e.preventDefault();

        //Validar
        if(nombre.trim()===''){
            validarTarea();
            return
        }

        //Veridica si agrega o edita una tarea

        if(tareaseleccionada===null){
            //agregar nueva tareas
            tarea.proyecto=proyectoActual._id;
            agregarTarea(tarea);
        }
        else{
            //editar tarea
            actualizarTarea(tarea);
            //limpiar tarea seleccioanda
            limpiarTarea();
        }



        //Obtener y filtar tareas de proyecto
        obtenerTareas(proyectoActual._id);
        //reiniciar el form
        guardarTarea({
            nombre:''
        })
    }


    return ( 
        <div className="formulario">
            <form
            onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                <input
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value={tareaseleccionada?"Editar Tarea":"Agregar Tarea"}
            />
                </div>

            </form>
            {errortarea?<p className="mensaje error">El nombre de la Tarea es obligatorio</p>:null}
        </div>
     );
}
 
export default FormTarea;