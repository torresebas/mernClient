import React, { useReducer } from "react";


import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTO,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from "../../types";

import clienteAxios from "../../config/axios";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "MERN" },
    { id: 4, nombre: "Diseno web" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
  };

  //Dispatch para ejecutar las accines
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD //

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectos,
    });
  };

  //agregar nuevo proyecto
  const agregarProyecto = async (proyecto) => {

    try {
      const resultado = await clienteAxios.post('/api/proyectos', proyecto)
      console.log(resultado)
      dispatch({
        type: AGREGAR_PROYECTO,
        payload: resultado.data
      })
    } catch (error) {
      console.log(error)
    }
  };

  // Validar Formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }

  // Selecciona el proyecto que el usuario dio click
  const proyectoActual = proyectoId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    })
  }

  // Eliminar Proyecto
  const eliminarProyecto = proyectoId => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    })
    
  }

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,

        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
