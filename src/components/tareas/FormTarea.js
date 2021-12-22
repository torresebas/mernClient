import React, { useContext, useState, useEffect } from "react";
// import { v4 as uuid } from "uuid";

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea
  } = tareasContext;

  //Effect que detecta si hay una tarea seleccionada

  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  // state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //estraer nombre proyecto
  const { nombre } = tarea;

  // si no hay un proyecto seleccionado
  if (!proyecto) return null;
  // Array destructuring para extraer el proyecto
  const [proyectoActual] = proyecto;

  // Leer valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // Si es edicion o nueva tarea
    if (tareaseleccionada === null) {
      //tarea nueva
      // Agregar nueva tarea al state de tareas
      tarea.proyecto = proyectoActual._id;
      // tarea.id = uuid(); // adicionando un id a tareas nuevas para evitar que se borre las tareas q entreamos
      agregarTarea(tarea);
    } else {
      // actualizar tarea existente
      actualizarTarea(tarea);

      //elimina tarea seleccionada del state
      limpiarTarea();
    }

    // Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    // Reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
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
            value={tareaseleccionada ? "Editar tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio </p>
      ) : null}
    </div>
  );
};

export default FormTarea;
