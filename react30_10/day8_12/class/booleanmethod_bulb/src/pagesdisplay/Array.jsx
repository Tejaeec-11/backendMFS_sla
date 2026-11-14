import  { useState } from 'react'

const Array = () => {
        //[count,setCount]
    const [arr,setArr] = useState([1,2,3,4,5,6,7])

    const handleClick =()=>{
      
     let copy = [...arr]

     copy[4] =   "used words "//any no or string
     setArr(copy)
    }
  return (
    <>
    <div>{arr}
      <button onClick={handleClick} className='bg-red-400 border p-1'>click</button>  
    </div>
    </>
  )
}

export default Array
//when button click it usestate and init arr 0 then click usestate action then setarr so 1 and show screen 


//1 method-to add new value 
// import  { useState } from 'react'

// const Array = () => {
//         //[count,setCount]
//     const [arr,setArr] = useState([1,2,3,4,5,6,7])

//     const handleClick =()=>{
//         let copy = [...arr]
//         copy.push(1,2,3,4)
//         console.log(copy); //to show browser
//         setArr(copy) //to show in ui
     
//     }
//   return (
//     <>
//     <div>{arr}
//       <button onClick={handleClick} className='bg-red-400 border p-1'>click</button>  
//     </div>
//     </>
//   )
// }

// export default Array

//2 method -to add new method
// import  { useState } from 'react'

// const Array = () => {
//         //[count,setCount]
//     const [arr,setArr] = useState([1,2,3,4,5,6,7])

//     const handleClick =()=>{
      
 
//        setArr((p)=>[...p,1,2,3,4,6,8 ])  //prev mostly used in useset
     
//     }
//   return (
//     <>
//     <div>{arr}
//       <button onClick={handleClick} className='bg-red-400 border p-1'>click</button>  
//     </div>
//     </>
//   )
// }

// export default Array


//3 change index elemnt to words or diffderent number
// import  { useState } from 'react'

// const Array = () => {
//         //[count,setCount]
//     const [arr,setArr] = useState([1,2,3,4,5,6,7])

//     const handleClick =()=>{
      
//      let copy = [...arr]

//      copy[4] =   "used words "//any no or string
//      setArr(copy)
//     }
//   return (
//     <>
//     <div>{arr}
//       <button onClick={handleClick} className='bg-red-400 border p-1'>click</button>  
//     </div>
//     </>
//   )
// }

// export default Array