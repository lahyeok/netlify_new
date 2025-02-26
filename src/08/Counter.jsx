import { useState } from "react";
import './Counter.css'

export default function Counter(){

  const [count,setCount] = useState(0);
  const increment =() => {
    setCount(count + 1);
  }
  const decrement = () =>{
    setCount(count - 1);
  }
  const reset = () =>{
    setCount(0);
  }

  return(
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement} >Decrement</button>
      <button className="counter-button" onClick={reset}>reset</button>
      <button className="counter-button" onClick={increment}>increment</button>
    </div>
  );
}