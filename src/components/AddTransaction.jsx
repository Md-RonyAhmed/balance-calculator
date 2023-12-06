import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { addTransaction } from "../reducer/actions";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const {dispatch} =useContext(GlobalContext)

  const handleSubmit=(e)=>{
	e.preventDefault();
    const newTransaction={
		id: Date.now(),
		text,
		amount
	}
    
	addTransaction(newTransaction,dispatch);
	setAmount("")
	setText("")

  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
