import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoProyectos = () => {
  // Estraer proyectos de initial state
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  // obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  // Revisar si proyectos tiene contenido
  if (proyectos.length === 0) return <p>No hay Proyectos, agrega uno!</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} className="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
