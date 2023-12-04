import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, curr) => (acc += +curr), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>Total: ${total}</h1>
    </>
  );
};

export default Balance;
