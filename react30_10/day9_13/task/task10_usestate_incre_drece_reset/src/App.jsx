
import React, { useState } from 'react'

const App = () => {

  const [number, SetNumber] = useState(10)

  const handleIncrement = () => {
    SetNumber(number + 5)
  }

  const handleDecrement = () => {
    SetNumber(number - 2)
  }

  const handleMultiply = () => {
    SetNumber(number * 3)
  }

  const handleReset = () => {
    SetNumber(10)
  }

  return (
    <>
      <div>
        <h2>Number: {number}</h2>

        <h2>{number % 2 === 0 ? "Even" : "Odd"}</h2>

        <button onClick={handleIncrement}>Increment +5</button>

        <button onClick={handleDecrement}>Decrement -2</button>

        <button onClick={handleMultiply}>Multiply *3</button>

        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
