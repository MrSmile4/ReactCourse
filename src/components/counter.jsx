import { useState, useCallback } from "react";
import "./layout.css";

export const useCount = () => {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 5;

  const increment = useCallback(() => {
    setCount((prevState) => (prevState + 1 > max ? prevState : prevState + 1));
  }, []);

  const decrement = useCallback(() => {
    setCount((prevState) => (prevState - 1 < min ? prevState : prevState - 1));
  }, []);

  const clear = useCallback(() => {
    setCount(0);
  }, []);

  return {
    count,
    increment,
    decrement,
    clear,
  };
};

export const Counter = () => {
  const { count, decrement, increment } = useCount();

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};
