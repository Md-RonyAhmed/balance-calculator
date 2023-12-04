/* eslint-disable react/prop-types */

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { id, amount, text } = transaction;
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}
      <span>
        {sign} {Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
