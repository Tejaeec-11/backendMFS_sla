import React, { useState } from 'react'

const App = () => {

  const [dept,SetDept] = useState(["EEE","IT","CSE","ECE","MECH"])

  return (
    <>
    <div>
      <div>
        {dept.map((e,i)=>(
          <p key={i}>{e}</p>//try {dept} all dept 5 time like loop
        ))}
      </div>
    </div>
    </>
  )
}

export default App 


// Array method	Purpose	Can render?
// map()	Returns a new array	Yes
// forEach()	Executes for each element	No, directly
// filter()	Filters elements based on condition	Yes
// find()	Returns the first matching element	Yes
// reduce()	Reduces array into a single value	Yes, if result is JSX

// 1. Using forEach()
// colour.forEach((e) => {
//   console.log(e)
// })


// Prints each colour in the console. It doesn't return an array of JSX elements.
// 2. Using filter()
// {colour.filter((e) => e === "pink").map((e, i) => (
//   <p key={i}>{e}</p>
// ))}


// Displays only pink.
// 3. Using find()
// <p>{colour.find((e) => e === "blue")}</p>


// Displays only blue.
// 4. Using reduce()
// {colour.reduce((acc, e, i) => {
//   return [...acc, <p key={i}>{e}</p>]
// }, [])}


// Displays all colours by building an array of JSX elements.

// Interview point:

// map() is the most commonly used method for rendering lists in React because it returns a new array and makes JSX rendering simple.

// So, remember:
// - Need all elements → map()
// - Need selected elements → filter()
// - Need one matching element → find()
// - Need a single accumulated result → reduce()