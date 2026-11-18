import { useState } from "react"


const App = () => {

  const [dept,SetDept] = useState(["EEE","ECE","IT","MECH"])

  const handleClick =()=>{
    SetDept([...dept,"CIVIL"])
  }
  return (
    <>
    <div>
      <div>
        {dept.map((e,i)=>(
          <p key={i}>{e}</p>
        ))}
      </div>
      <button onClick={handleClick}>click to add colour</button>
    </div>
    </>
  )
}

export default App