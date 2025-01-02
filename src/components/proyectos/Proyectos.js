import React,{useEffect,useContext} from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';
import AuthContext from '../../context/autenticacion/authContext';
import {ContenedorApp , ContenedorTareas, } from './mixins'


const Proyectos = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])

    return ( 
        <ContenedorApp>
            <Sidebar/>
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTarea/>

                    <ContenedorTareas>
                        <ListadoTareas/>
                    </ContenedorTareas>
                </main>
            </div>

        </ContenedorApp>
     );
}
 
export default Proyectos;