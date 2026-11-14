import  { useState } from 'react'

const Nullish = () => {
    const [Nullish,setNullish] = useState(678)

    const handleClick =()=>{
        setNullish(undefined )//10or"this is nullish"
    }
  return (
  <>
    <div className='bg-cyan-500 h-100 p-10 flex flex-col justify-center items-center'>
    <h1>{Nullish??alert("this is react refresh ")}</h1>
    <button className='border p-1 bg-red-400' onClick={handleClick}>click to update</button>
    </div>
 </>
  )
}

export default Nullish

//1 nullish

//2 or opoator ||
// import  { useState } from 'react'

// const Nullish = () => {
//     const [Nullish,setNullish] = useState(false)//false or 678

//     const handleClick =()=>{
//         setNullish(undefined )
//     }
//   return (
//   <>
//     <div className='bg-cyan-500 h-100 p-10 flex flex-col justify-center items-center'>
//     <h1>{Nullish||"this is react refresh "}</h1>
//     <button className='border p-1 bg-red-400' onClick={handleClick}>click to update</button>
//     </div>
//  </>
//   )
// }

// export default Nullish