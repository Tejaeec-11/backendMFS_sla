import React, { useState } from 'react'

const ObjectProcess = () => {

  const [obj,setObj] = useState(
  { name:"React",
  subject:"Node",
  Price:30000,
  skils:["React,","Node,","JS,","HTML,","CSS"] }
  )

  const handleClick = ()=>{
  //const copy = {...obj,brand:"React"}
  //setObj(copy)
   setObj({...obj,Offer:"4676"})
  }

  const handleUpdate = ()=>{
    setObj({...obj,Price:"800000"})
  }

  const handleDelete = ()=>{
   setObj({...obj,Price:""})
   }

//    const handleDelete = () => { //delete whole just know
//   const { Price, ...del } = obj

//   setObj(del)
// }
  


  return (
    <>
    <div className="bg-black flex-col gap-5 text-white p-10 h-150 flex justify-center items-center">

      <div>
        <h1>Name:{obj.name}</h1><br />
        <p>Sub:{obj.subject}</p><br />
        <p>Price:{obj.Price}</p><br />
        <p>Offer:{obj.Offer}</p><br />
        <p>Courses:{obj.course}</p>
        <p>{obj.skils.map((e,i)=>(
            <span key={i} className='flex gap-20'>{e}</span>
        ))}</p>

      </div>


      <button onClick={handleClick} className='bg-white p-1 rounded w-30 text-black'>Click to add</button>
      <button onClick={handleUpdate} className='bg-white p-1 rounded w-30 text-black'>Click to Update</button>
      <button onClick={handleDelete} className='bg-white p-1 rounded w-30 text-black'>Click to Delete</button>

    </div>
    </>
  )
}

export default ObjectProcess


//i add that name:,sub,offer,price 

// Operation	Code	Meaning
// Add	{...obj, Offer: "4676"}	New property add
// Update	{...obj, Price: 800000}	Existing property update
// Empty	{...obj, Price: ""}	Value empty aagum
// Delete	const {Price, ...del} = obj	Property remove
// Display	obj.name	Direct rendering
// Array display	obj.skils.map()	Array elements render

// Remember these 3 differences:
// 1. Add → New property.
// 2. Update → Existing property value change.
// 3. Delete → Property itself remove.



