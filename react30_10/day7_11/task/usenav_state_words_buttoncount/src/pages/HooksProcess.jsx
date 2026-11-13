

import { useState } from "react";

const HooksProcess = () => {

  const [count, setCount] = useState(0);

  const [word, setWord] = useState("React");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleChange = () => {
    setWord("Node");
  };

  return (
    <div className="bg-blue-300 flex justify-center items-center flex-col gap-10 p-10 h-100">

      <h1>{count}</h1>

      <div className="flex gap-5">

        <button onClick={handleIncrement}
          className="bg-green-500 text-white p-2 rounded w-30">
          Increment
        </button>

        <button onClick={handleDecrement}
          className="bg-red-400 text-white p-2 rounded w-30">
          Decrement
        </button>

        <button onClick={handleReset}
          className="bg-black text-white p-2 rounded w-30">
          Reset
        </button>

      </div>

      <h1>{word}</h1>

      <button
        onClick={handleChange}
        className="bg-red-400 text-white p-2 rounded w-30"
      >
        Change Word
      </button>

    </div>
  );
};

export default HooksProcess;



//Update React word to Node using useState +Increment, Decrement and Reset using useState
























