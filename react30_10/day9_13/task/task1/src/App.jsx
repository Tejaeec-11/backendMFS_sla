import { useState } from 'react'
import React from 'react'

const App = () => {   

const [program,SetProgram]=useState(["kotlin","rust","dart","MATLAB"])


  return (
   <>
   <div>

   <div>
      {program.map((e,i)=>(
        <p key={i}>{e}</p>
      ))}
   </div>
   </div>
   </>
  )
}

export default App   