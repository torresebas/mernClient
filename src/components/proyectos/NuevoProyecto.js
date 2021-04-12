import React, {  useState } from "react";

const NuevoProyecto = () => {
  //obtener el state

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

    // Agregar al state

    // Reiniciar el form
  };


  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
      >
        Nuevo Proyecto
      </button>

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
    </>
  );
};

export default NuevoProyecto;
