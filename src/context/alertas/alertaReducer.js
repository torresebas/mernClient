import { MOSTRAR_ALERTA, OCULAR_ALERTA } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case MOSTRAR_ALERTA:
      return {
        alerta: action.payload,
      };

    case OCULAR_ALERTA:
      return {
        alerta: null,
      };
    default:
      return state;
  }
};
