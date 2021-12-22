import React, { useContext } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

  //Extraer el proyecto
  const [proyectoActual] = proyecto;

  // funcion que se ejecuta cuando el usuario presiona el boton de eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual.id);
  };

  // funcion que modifica el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    // ya va estar modificada
    cambiarEstadoTarea(tarea);
  }

  // agrega una tarea actual cuando el usuario desea editarla

  const seleccionarTarea = tarea => {
    guardarTareaActual(tarea)
  }


  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            onClick={() => cambiarEstado(tarea)}
            type="button"
            className="completo"
          >
            Completo
          </button>
        ) : (
          <button
            onClick={() => cambiarEstado(tarea)}
            type="button"
            className="incompleto"
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button onClick={() => seleccionarTarea(tarea)} type="button" className="btn btn-primario">
          Editar
        </button>

        <button
          onClick={() => tareaEliminar(tarea._id)}
          type="button"
          className="btn btn-secundario"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
