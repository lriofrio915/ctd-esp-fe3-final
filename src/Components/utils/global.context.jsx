import React, { createContext, useReducer, useMemo, useEffect } from "react";
import axios from "axios";

export const initialState = { theme: "light", data: [] };

// Tipos de acción para el reducer
const ACTIONS = {
  TOGGLE_THEME: "TOGGLE_THEME",
  SET_DATA: "SET_DATA",
};

// Reducer para manejar el estado
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case ACTIONS.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Crear el contexto
export const ContextGlobal = createContext(undefined);

// Proveedor del contexto
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState); // Función para obtener datos de la API

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: ACTIONS.SET_DATA, payload: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Llamar a fetchData al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Usar useMemo para optimizar el valor del contexto
  const value = useMemo(
    () => ({
      theme: state.theme,
      data: state.data,
      toggleTheme: () => dispatch({ type: ACTIONS.TOGGLE_THEME }),
    }),
    [state]
  );

  return (
    <ContextGlobal.Provider value={{ value }}>
      {children}
    </ContextGlobal.Provider>
  );
};
