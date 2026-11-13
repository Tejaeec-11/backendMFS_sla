//2 state in hook mostly used in button
import { useState } from "react";

const HooksProcess = () => {
  
  const [count,setCount]  = useState(0) //2try("React")
  
   const handleClickPanna =()=>{ //2try (e)
     setCount(count+1)//2try("Node")

   }

  return (
    <div className="bg-blue-300 flex justify-center items-center flex-col gap-10 p-10 h-100">hooks 
      <h1>{count}</h1>
      <button className="bg-red-400 text-white p-1 rounded w-30 hover:bg-amber-100 hover:text-black" onClick={handleClickPanna}>button</button>
    </div>
  )
}

export default HooksProcess
//1 used state to update number when button click .and change 2 react into node 2 task 
 //3 increment ,decerement ,reset three button vechi   .

















































//not read just know
//2 text type use state
// import { useState } from "react";

// const HooksProcess = () => {
  
//   const [count,setCount]  = useState("")
  
//    const countChange =(e)=>{
    
//      setCount(e.target.value )

//    }

//     const handleClickPanna = () => {
  
//   };

//   return (
//     <div className="bg-blue-300 flex justify-center items-center flex-col gap-10 p-10 h-100">hooks 
//       <h1>{count}</h1>
//       <input type="text" placeholder="Enter Your Name"  onChange={countChange}  className="bg-white-400 text-black p-1 rounded" />
//       <button className="bg-red-400 text-white p-1 rounded w-30 hover:bg-amber-100 hover:text-black" onClick={handleClickPanna}>button</button>
//     </div>
//   )
// }

// export default HooksProcess


//3 add type number with previous number 
// import { useState } from "react";

// const HooksProcess = () => {
  
//   const [count,setCount]  = useState("")
  
//    const countChange =(e)=>{
    
//      setCount(Number(e.target.value)+1 ) //try this   setCount(Number(e.target.value)+count )

//    }

//     const handleClickPanna = () => {
  
//   };

//   return (
//     <div className="bg-blue-300 flex justify-center items-center flex-col gap-10 p-10 h-100">hooks 
//       <h1>{count}</h1>
//       <input type="text" onChange={countChange}  className="bg-white-400 text-black p-1 rounded" />
//       <button className="bg-red-400 text-white p-1 rounded w-30 hover:bg-amber-100 hover:text-black" onClick={handleClickPanna}>button</button>
//     </div>
//   )
// }

// export default HooksProcess