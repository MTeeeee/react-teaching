import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  let increment = () => {
    setCount((count) => count + 1);
  };
  let decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  let reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Up</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Down</button>
    </div>
  );
}

export default Counter2;
