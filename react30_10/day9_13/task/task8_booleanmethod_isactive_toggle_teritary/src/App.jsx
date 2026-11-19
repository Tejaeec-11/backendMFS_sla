import React, { useState } from 'react'

const App = () => {
  const [isActive,SetIsActive] = useState(false)

  const HandleToggle =()=>{
   SetIsActive(!isActive)
  }
  return (
   <>
  {/* <h2>{isActive}</h2> THIS ALways used but toggle nala konjam develop */}
  <h2>{isActive?"Activetrue":"isActivefalse"}</h2>
  <button onClick={HandleToggle}>click to toggle</button>
   </>
  )
}

export default App


// ! means opposite value.
// - false → true
// - true → false



// Remember this classification
// 1. useState(false) → Boolean
// 2. useState(0) → Number
// 3. useState("Hello") → String
// 4. useState([]) → Array
// 5. useState({}) → Object
// 6. useState([{...}]) → Array of Objects
// So Task 8 belongs to Boolean practice.


// Explanation
// - useState(false) → Initial value false.
// - !isActive → Opposite value.
// - isActive ? "Active" : "Inactive" → Ternary operator.
// - true → Active.
// - false → Inactive.