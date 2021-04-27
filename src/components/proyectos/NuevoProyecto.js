import React, { useContext, useState } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //obtener el state
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorformulario ,mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

  // state para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  // Extraer el nombre (para ponerlo en value (va en el input))
  const { nombre } = proyecto;

  // Lee los contenidos del input (va en el input)
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario envia un proyecto ( va en el form)
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // Validar
    if(nombre === '') {
      mostrarError()
      return;
    }

    // Agregar al state
    agregarProyecto( proyecto )

    // Reiniciar el form
    guardarProyecto({
      nombre:""
    })

  };

  return (
    <>
      <button
        onClick={() => mostrarFormulario()}
        type="button"
        className="btn btn-block btn-primario"
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nuevo Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {errorformulario?<p className="mensaje error">El nombre del proyecto es obligatorio</p>:null}
    </>
  );
};

export default NuevoProyecto;
