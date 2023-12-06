import { ADD_TRANSACTION, DECREMENT, DELETE_TRANSACTION, INCREMENT } from "./actionTypes";

export const reducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload
      }
    default:
      return state;
  }
};
