import React, { useState } from 'react'

const App = () => {

  const [dept,SetDept] = useState(["EEE","IT","ECE","MECH"])

  const handleUpdate =(changedept)=>{
    SetDept(dept.map((e,i)=>i==changedept?"CSE":e))
  }
  return (
    <>
     <div>
       {dept.map((e,i)=>(
        <p key={i}>{e}</p>
       ))}
       <button onClick={()=>handleUpdate(2)}>click to change index value</button>
     </div>
    </>
  )
}

export default App