//state
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const counterStyle = {
    border: "2px solid orange",
    padding: "10px",
  };
  return (
    <div style={counterStyle}>
      <h1>Counter</h1>
      <p>{count}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}
