// Baue eine neue Componente  Counter mit drei Buttons
// Die Buttons sollen sein:  +1 / -1 / reset
// der counter soll nicht unter 0 gehen

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((count) => count + 1);
    // ersetze den wert von count durch count + 1 und lade die Componente neu
  }

  function minus() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter</h1>
      <h1 id="count">{count}</h1>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
