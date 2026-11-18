import React, { useState } from 'react'

const App = () => {

  const [detail,SetDetail] = useState({Name:"Tejeswari",Age:21,Emailid:"tej@gmail.com"})

   const handleClick =()=>{
    SetDetail({...detail,Course:"Full stack"})
   }
  return (
    <>
     <div>
      <h2>{detail.Name}</h2>
      <h2>{detail.Age}</h2>
      <h2>{detail.Emailid}</h2>
      <h2>{detail.Course}</h2>
      <button onClick={handleClick}>click to object add</button>
    </div>
    </>
   )
}


export default App


// First, Mutate na original array/object-ah direct-ah change panradhu.

// React-la usually original state-ah mutate panna koodadhu. So copy create panni update panrom.

// ... is called Spread Operator.

// Idhu existing array/object-la irukkura elements or properties-ah expand panni copy panna help pannum.

// Remember
// Syntax	Meaning
// ...array	Array elements copy/expand
// ...object	Object properties copy/expand
// [...array, value]	Array-la add
// {...object, key:value}	Object-la property add we used this 