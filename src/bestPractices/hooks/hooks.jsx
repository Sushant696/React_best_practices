import { useCallback } from "react";
import { useState } from "react";
import UseCallback from "./useCallback";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => setCount((prevCount) => prevCount + 1), []);
  const handleDecrement = useCallback(() => setCount((prevCount) => prevCount - 1), []);
  return (
    <>
      <h1>Number increment program</h1>
      <div className="flex justify-center p-4 m-5 gap-6">
        <h3>hello {count}</h3>
        <UseCallback onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </div>
    </>
  );
}
