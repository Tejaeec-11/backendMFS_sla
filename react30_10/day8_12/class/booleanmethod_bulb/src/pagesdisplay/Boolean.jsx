import React, { useState } from 'react'

const Boolean = () => {
console.log('Rendering');

    const [isActive,setIsActive] = useState(true)
     
    const handleClick =()=>{
          setIsActive(!isActive) 
      // setIsActive((prev)=>!prev) not mostly used just know true click = flase off but used setIsActive(!isActive)  but state used prev
      }

    

  return (
    <> 
    <div className='bg-cyan-400 h-50 p-10 flex justify-center flex-col items-center'>
     <p>{isActive?"1.register":"successfully registered"}</p>
     <p>{isActive?<p>2+3.this is tag</p>:<p className='bg-emerald-700 p-1 w-32 rounded'>this tag changed</p>}</p>
     {isActive?<div>4.hide tag</div>:""}
       {isActive&&<div>5.istead 4 use 5 optional used for hide and show not tritnary</div>}
     <button className='border bg-red-400 p-1' onClick={handleClick}>{isActive?"click":"clicked"} </button>
     <br />i.text,tag,css,hide tag update</div>
     <h1 className='mx-20'>ii. Now For Test Used Again ?:text,?:tag,?:css,&&tag hide </h1>
     <div className={isActive?"bg-orange-700 p-2 w-50 h-50 rounded":"bg-purple-600 p-2 w-50 h-50 rounded"}>
       box this tailwindcss
       </div><br />
        <div className={isActive?"active":"notactive"}>
       box this css
       </div>
    </>
  )
}

export default Boolean
//1
//used &&,!,?:,prev or ! this all **













































//1  boollean-(! operatoer) just see paru 
// const Boolean = () => {
// console.log('Rendering');

//     const [isActive,setIsActive] = useState(true)
     
//     const handleClick =()=>{
//           setIsActive(!isActive)
//       }

    

//   return (
//     <> 
//     <div className='bg-cyan-400 h-100 p-10 flex justify-center items-center'>Boolean</div>
//     <h1>boolean - not operator</h1>
//     <button onClick={handleClick}>Click to update </button>
//     </>
//   )
// }

// export default Boolean


//2boolean-tertiary(just see)
// import React, { useState } from 'react'

// const Boolean = () => {
// console.log('Rendering');

//     const [isActive,setIsActive] = useState(true)
     
//     const handleClick =()=>{
//           setIsActive(!isActive)
//       }

    

//   return (
//     <> 
//     <div className='bg-cyan-400 h-40 p-10 flex justify-center flex-col items-center'>
//     <h1>boolean-teritary... {isActive?"this is text":"buttoon click changed"}</h1>
//     <button onClick={handleClick} className='border bg-red-400 p-1'>Click to update </button>
//     </div>
//     </>
//   )
// }

// export default Boolean