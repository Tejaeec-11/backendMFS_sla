import { useRef, useState } from "react";

const Task3Timer = () => {
  const [count, setCount] = useState(0);

  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current !== null) {
      return;
    }
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setCount(0);
  };

  return (
    <div>
      <h2>Timer</h2>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Task3Timer