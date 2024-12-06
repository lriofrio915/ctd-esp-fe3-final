import React, { createContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios";

export const initialState = { theme: "light", data: [] };

const ACTIONS = {
  SET_THEME: "SET_THEME",
  SET_DATA: "SET_DATA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload, 
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

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  useEffect(() => {
    fetchData();
  }, []);

  const value = useMemo(
    () => ({
      theme: state.theme,
      data: state.data,
      setTheme: (theme) =>
        dispatch({ type: ACTIONS.SET_THEME, payload: theme }), 
    }),
    [state.theme, state.data]
  );

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
