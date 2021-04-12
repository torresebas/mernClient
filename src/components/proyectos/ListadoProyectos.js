import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto'


const ListadoProyectos = () => {

  const proyectos = [{id:1, nombre:"tienda virtual"}]


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