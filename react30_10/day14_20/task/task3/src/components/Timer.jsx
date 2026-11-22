
import { useEffect, useState } from "react";

const Timer = () => {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setSeconds((previous) => previous + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, []);

  return (
    <>
      <h1>Timer</h1>
      <h2>{seconds}</h2>
    </>
  );
};

export default Timer;
