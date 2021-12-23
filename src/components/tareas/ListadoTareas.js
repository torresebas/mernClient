import React, { useContext } from "react";
import Tarea from "./Tarea";

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  // Extraer proyectos del state incial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //obtenemos las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  // Si no hay un proyecto seleccionado
  if (!proyecto) return <h1>Selecciona un proyecto</h1>;

  //(ARRAY DESTRUCTURING!!!) para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  // Elimina un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual._id);
  };

  return (
    <>
      <h1>Proyecto: {proyectoActual.nombre}</h1>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition
                key={tarea._id}
                timeout={200}
                className="tarea"
              >
                <Tarea  
                  tarea={tarea} 
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
