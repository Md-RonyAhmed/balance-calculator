import { ADD_TRANSACTION, DECREMENT, DELETE_TRANSACTION, INCREMENT } from "./actionTypes";

//Actions creator functions
export function addTransaction(transaction, dispatch) {
  dispatch({
    type: ADD_TRANSACTION,
    payload: transaction,
  });
}

export function deleteTransaction(id, dispatch) {
  dispatch({
    type: DELETE_TRANSACTION,
    payload: id,
  });
}

export function increment(incrementBy, dispatch) {
  dispatch({
    type: INCREMENT,
    payload: incrementBy,
  });
}

export function decrement(decrementBy, dispatch) {
  dispatch({
    type: DECREMENT,
    payload: decrementBy,
  });
}
