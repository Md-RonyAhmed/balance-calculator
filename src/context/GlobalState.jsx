/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { BalanceReducer } from "../reducer/BalanceReducer";

//initial state
const initialState = {
  transactions: [],
};

//create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BalanceReducer, initialState);

  //Actions creator functions
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  const value = {
    transactions: state.transactions,
    addTransaction,
    deleteTransaction,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
