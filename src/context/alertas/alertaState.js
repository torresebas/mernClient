import React, { useReducer } from "react";
import alertaReducer from "./alertaReducer";
import alertaContext from "./alertaContext";

import { MOSTRAR_ALERTA, OCULAR_ALERTA } from "../../types";

const AlertaState = (props) => {
  const initialState = {
    alerta: null,
  };

  const [state, dispatch] = useReducer(alertaReducer, initialState);

  // funciones
  const mostarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria,
      },
    });


    //desps de 5 seg limpia la alerta
    setTimeout(() => {
      dispatch({
        type: OCULAR_ALERTA,
      });
    }, 5000);
  };
  return (
    <alertaContext.Provider
      value={{
        alerta: state.alerta,
        mostarAlerta,
      }}
    >
      {props.children}
    </alertaContext.Provider>
  );
};

export default AlertaState;
