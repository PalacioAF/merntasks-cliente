import React,{useState,useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

import Spinner from '../spinner/Spinner';
import {
  FormUsuario,
  FormUsuarioContaine,
  CampoForm,
  CampoFormLabel,
  Input
} from "./mixins";


const Login = (props) => {

    //extraer los valores del context
    const alertaContext=useContext(AlertaContext);
    const {alerta,mostrarAlerta}=alertaContext;

    const authContext=useContext(AuthContext);
    const {mensaje,autenticado,iniciarSesion}=authContext;

    //Spinner
    const [cargando, guardarCargando] = useState(false);


     
    // En caso de que el password o usuario no exista
    useEffect(() => {
        guardarCargando(false);
        if(autenticado) {
            props.history.push('/proyectos');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    const[usuario,guardarUsuario]=useState({
        email:'',
        password:''
    });

    const {email,password}=usuario;

    const onChange=(e)=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit=e=>{
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        //Spinner
        guardarCargando(true);
        // Pasarlo al action
        iniciarSesion({ email, password });
    }

    return ( 
        <FormUsuario>
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
            
            <FormUsuarioContaine>
            {cargando? <Spinner />:(<>
                <h1>Iniciar Sesión</h1>
                <form 
                onSubmit={onSubmit}
                >
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
                    <CampoForm className="campo-form">
                        <Input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Iniciar Sesión"
                        />
                    </CampoForm>   
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
                </>
                )}
            </FormUsuarioContaine>
        </FormUsuario>
     );
}
 
export default Login;