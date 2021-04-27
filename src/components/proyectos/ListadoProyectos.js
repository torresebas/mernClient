import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

  // Estraer proyectos de initial state
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  // obtener proyectos cuando carga el componente
  useEffect( () => {
    obtenerProyectos();
  }, [])
   
  // Revisar si proyectos tiene contenido
  if(proyectos.length === 0) return <p>No hay Proyectos, agrega uno!</p>;

  
  
  return (
    <ul className="listado-proyectos">
      {proyectos.map( proyecto => (
        <Proyecto
          key={proyecto.id}
          proyecto={proyecto}
        />
      ))}
      
    </ul>
  );
}

export default ListadoProyectos;