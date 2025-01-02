import React,{Fragment, useState,useContext,useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import { ButtonBlock, FormularioNuevoProyecto ,Input, InputSubmit, MensajeError } from './mixins'

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
        <ButtonBlock type="button" onClick={onClickFormulario}>
          Nuevo Proyecto
        </ButtonBlock>

        {formulario ? (
          <FormularioNuevoProyecto onSubmit={onSubmitProyecto}>
            <Input
              type="text"
              placeholder="Nombre Proyecto"
              name="nombre"
              onChange={onChangeProyecto}
              value={nombre}
            />

            <InputSubmit
              type="submit"
              value={
                proyectoseleccionado ? "Editar Proyecto" : "Agregar Proyecto"
              }
            />
          </FormularioNuevoProyecto>
        ) : null}

        {errorformulario ? (
          <MensajeError>El nombre del Proyecto es obligatorio</MensajeError>
        ) : null}
      </Fragment>
    );
}
 
export default NuevoProyecto;