import React,{useEffect,useContext}  from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import {AppHeader, NombreUsuario, Span, Nav, Button} from './mixins'

const Barra = () => {
        // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuario,usuarioAutenticado ,cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return ( 
        <AppHeader>
             {usuario ? <NombreUsuario>Hola <Span>{usuario.nombre} </Span> </NombreUsuario> : null}

            <Nav>
                <Button 
                    onClick={() => cerrarSesion() }
                >Cerrar Sesión
                </Button>
            </Nav>
        </AppHeader>
     );
}
 
export default Barra;