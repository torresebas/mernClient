import React, { useContext, useState } from 'react'

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext"

const FormTarea = () => {

  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const { agregarTarea } = tareasContext

  // state del formulario
  const [tarea, guardarTarea] = useState({
    nombre:''
  })

  //estraer nombre proyecto
  const { nombre } = tarea;

  // si no hay un proyecto seleccionado
  if(!proyecto) return null;
  // Array destructuring para extraer el proyecto
  const [ proyectoActual ] = proyecto;

  // Leer valores del formulario
  const handleChange = e =>{
    guardarTarea({
      ...tarea,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    //Validar

    // Pasar la validacion

    // Agregar nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false
    agregarTarea(tarea);

    // Reiniciar el form
  }


  

  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >

        <div className="contenedor-input">
          <input 
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input 
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
}
 
export default FormTarea;