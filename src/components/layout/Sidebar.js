import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos'
import { Div } from './mixins'

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            <NuevoProyecto/>
            <Div>
                <h2>Tus Proyectos</h2>
                <ListadoProyectos/>
            </Div>
        </aside>
     );
}
 
export default Sidebar;