import React from 'react'
import Tarea from './Tarea'

const ListadoTareas = () => {
  
  const tareasProyecto = [
    {id:"1", nombre: "Elegir plataforma", estado:true},
    {id:"2", nombre: "Elegir colores", estado:false},
    {id:"3", nombre: "Elegir plataforma de pago", estado:false},
    {id:"4", nombre: "Elegir Hosting", estado:true}
  ]

  return (
    <>
      <h1>proyecto: Tienda Virtual</h1>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0
          ? (<li className='tarea'><p>No hay tareas</p></li>)
          : tareasProyecto.map(tarea =>(
            <Tarea
              key={tarea.id}
              tarea={tarea}
            />
          ))
        }
      </ul>
      
      <button
        type="button"
        className="btn btn-eliminar"
      >Eliminar Proyecto &times;</button>
    </>
  );
}
 
export default ListadoTareas;