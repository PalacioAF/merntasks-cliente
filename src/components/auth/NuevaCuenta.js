import React,{useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'

import {
    FormUsuario,
    FormUsuarioContaine,
    CampoForm,
    CampoFormLabel,
    Input
  } from "./mixins";

const NuevaCuenta = (props) => {

    //extraer los valores del context
    const alertaContext=useContext(AlertaContext);
    const {alerta,mostrarAlerta}=alertaContext;

    const authContext=useContext(AuthContext);
    const {mensaje,autenticado,registrarUsuario}=authContext;

    //En caso que el usuario se haya autenticado o registrado o registro duplicado
    useEffect(()=>{
        if(autenticado){
            props.history.push('/proyectos');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }

        // eslint-disable-next-line
    },[mensaje,autenticado,props.history])

    //State para iniciar sesión
    const[usuario,guardarUsuario]=useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    const {nombre,email,password,confirmar}=usuario;

    const onChange=(e)=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit=e=>{
        e.preventDefault();

        // Validar que no haya campos vacios
        if( nombre.trim() === '' || 
            email.trim() === '' || 
            password.trim() === '' || 
            confirmar.trim() === '' ) {
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }

        // Password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // Los 2 passwords son iguales
        if(password !== confirmar) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }

        //registrar usuario
        registrarUsuario({
            nombre,
            email,
            password
        });

    }

    return ( 
        <FormUsuario>
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
            <FormUsuarioContaine>
                <h1>Obtener Cuenta</h1>
                <form 
                onSubmit={onSubmit}
                >
                    <CampoForm>
                        <CampoFormLabel htmlFor="nombre">Nombre</CampoFormLabel>
                        <Input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu Nombre"
                        value={nombre}
                        onChange={onChange}
                        />
                    </CampoForm>
                    <CampoForm>
                        <CampoFormLabel htmlFor="email">Email</CampoFormLabel>
                        <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu Email"
                        value={email}
                        onChange={onChange}
                        />
                    </CampoForm>
                    <CampoForm>
                        <CampoFormLabel htmlFor="password">Password</CampoFormLabel>
                        <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu Password"
                        value={password}
                        onChange={onChange}
                        />
                    </CampoForm>
                    <CampoForm>
                        <CampoFormLabel htmlFor="confirmar">Confirmar Password</CampoFormLabel>
                        <Input
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Repite tu Password"
                        value={confirmar}
                        onChange={onChange}
                        />
                    </CampoForm>
                    <CampoForm>
                        <Input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrarme"
                        />
                    </CampoForm>   
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </FormUsuarioContaine>
        </FormUsuario>
     );
}
 
export default NuevaCuenta;