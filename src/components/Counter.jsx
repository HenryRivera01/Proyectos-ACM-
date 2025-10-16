import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div className="count-display">{count}</div>
      <div className="buttons">
        <Button onClick={() => setCount(count + 1)}>➕ Incrementar</Button>
        <Button onClick={() => setCount(count - 1)}>➖ Decrementar</Button>
      </div>
    </div>
  );
}

export default Counter;
