import React,{useState,useContext,useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'
import {
  Containe,
  Form,
  ContenedorInput,
  Input,
  InputSubmit,
  MensajeError,
} from "./mixins";

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
      <Containe>
        <Form onSubmit={onSubmit}>
          <ContenedorInput>
            <Input
              type="text"
              placeholder="Nombre Tarea..."
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
          </ContenedorInput>
          <ContenedorInput>
            <InputSubmit
              type="submit"
              value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
            />
          </ContenedorInput>
        </Form>
        {errortarea ? (
          <MensajeError>El nombre de la Tarea es obligatorio</MensajeError>
        ) : null}
      </Containe>
    );
}
 
export default FormTarea;