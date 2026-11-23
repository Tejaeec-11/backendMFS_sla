//1 videoeplain instead useeffectlifecyclex`complete ingore useefeectlifecycle
//sideeffect handle panna use effect unmated loop in local storga ,fetch nadhakamum


//1 ,mount- empty depency
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data,SetDatas] = useState()

//   const handleeClick =()=>{
//     console.log("print running");
//      SetDatas(data + 1)
//   }

//   //mount code output 1st run agum then set 2nd print 3 +1 again print so console 3 time print munted irukum
//   useEffect(()=>{
//     handleeClick()
//   },[])
//   return (
//    <>
//    <div>app</div>
//    </>
//   )
// }

// export default App
//-----------------------------------------------------------------------------------------------------
//2-update- with depency -loopagum
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data,SetDatas] = useState(0)//zero podalana athula NaN show agum

//   const handleeClick =()=>{
//     console.log("print running");
//      SetDatas(data + 1)
//   }

//   //mount code output 1st run agum then set 2nd print 3 +1 again print so console 3 time print munted irukum
//   useEffect(()=>{
//     handleeClick()
//   },[data])
//   return (
//    <>
//    <div>app</div>
//    <h1>{data}</h1>
//    </>
//   )
// }

// export default App
//--------------------------------------------------------------------------------
//3 umount aprm later
//---------------------------------------------------------------------------------
//4 without dependce same like 2 loop agum different ena update paanalum 4 triger agum but 2 only button action apo tha trigger agum 
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data,SetDatas] = useState(0)

//   const handleeClick =()=>{
//     console.log("print running");
//      SetDatas(data + 1)
//   }


//   useEffect(()=>{
//     handleeClick()
//   })
//   return (
//    <>
//    <div>app</div>
//    <h1>{data}</h1>
//    </>
//   )
// }

// export default App
//------------------------------------------------------------
// //5****** open call only when state invole just know 
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data,SetDatas] = useState(0)

//   const handleeClick =()=>{
//     console.log("print running");
//      SetDatas(data + 1)
//   }
//   handleeClick()//state invole so open () call panna mudiyathu apdi
//   // panna loop agum so remove this handleclick() when state involue or
//   //  if invole we need to use unmount mount
//   //this one side effect ithu nala we using use effect to avoid loop and 
//   //react



//   //so open call panna invole state panna apo loop agum means unwanted rerender atha preventpanna we use use effect
//   return (
//    <>
//    <div>app</div>
//    <h1>{data}</h1>
//    </>
//   )
// }
// export default App

 