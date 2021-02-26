import React,{Fragment, useState,useContext,useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    //obtener el state del formultario
    const proyectosContext=useContext(proyectoContext);
    const {formulario,errorformulario,mostrarFormulario,agregarProyecto,mostrarError,proyectoseleccionado,limpiarProyecto,actualizarProyecto} =proyectosContext;

    const [proyecto,guardarProyecto]=useState({
        nombre:''
    });

    const {nombre}=proyecto;

    useEffect(()=>{
        if(proyectoseleccionado!==null){
            guardarProyecto(proyectoseleccionado);
        }
        else{
            guardarProyecto({
                nombre:''
            })
        }
    },[proyectoseleccionado])

    const onChangeProyecto=e=>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    }

    const onSubmitProyecto=e=>{
        e.preventDefault();

        //Validar
        if(nombre.trim()===''){
            mostrarError();
            return
        }

        if(proyectoseleccionado===null){
            //Agregar al State
            agregarProyecto(proyecto)
        }
        else{
            actualizarProyecto(proyecto);
            //limpiar tarea seleccioanda
            limpiarProyecto();
        }

        //Reiniciar Form
        guardarProyecto({
                nombre:''
        })
    }


    //mostrar el formulario
    const onClickFormulario=()=>{
        mostrarFormulario();
    }

    return ( 
        <Fragment>
        <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
        >Nuevo Proyecto
        </button>

        {
            formulario?
            (   <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
                >
                    <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    onChange={onChangeProyecto}
                    value={nombre}
                    />
        
                    <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value={proyectoseleccionado?"Editar Proyecto":"Agregar Proyecto"}
                    />
        
                </form>)
            :
            (
                null
            )
        }


        {errorformulario?<p className="mensaje error">El nombre del Proyecto es obligatorio</p>:null}
        </Fragment>
     );
}
 
export default NuevoProyecto;