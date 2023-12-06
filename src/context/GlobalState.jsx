/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { initialState } from "../reducer/initialState";

//create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    dispatch,
    transactions: state.transactions,
    count: state.counter
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
