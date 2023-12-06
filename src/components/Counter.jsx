import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { increment } from "../reducer/actions";

const Counter = () => {
  const { count,dispatch } = useContext(GlobalContext);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>increment(5,dispatch)}>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

export default Counter;
