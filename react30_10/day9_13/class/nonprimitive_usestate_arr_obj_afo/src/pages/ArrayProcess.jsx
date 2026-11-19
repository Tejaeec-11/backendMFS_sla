import { useState } from "react"


const ArrayProcess = () => {

  const [arr,setArr] = useState(["React","Node","JS","HTML","CSS"])
    //for add element code  
  const handleClick = ()=>{
    let copy = [...arr]
    copy.push("AWS")
     setArr(copy)
    }

  const handleUpdate = (addelelement)=>{//element id
    let copy = [...arr]
     //copy[eid] = "MERN"
     //setArr(copy)
    setArr(copy.map((e,i)=>i==addelelement?"Skill":e))
  }

  const handleDelete = (deleteelement)=>{ //delete id
     let copy = [...arr]
    const deleteData = copy.filter((e,i)=>i !== deleteelement)
    setArr(deleteData)
  }

  return (
    <>
    <div className="bg-black flex-col gap-5 text-white p-10 h-150 flex justify-center items-center">
     <h1>Array Process | Adding | Update | Delete</h1>
     
     {arr.map((e,i)=>(
        <div key={i}>
            <p>{e}</p>
            <button onClick={()=>handleUpdate(i)} className="bg-white rounded  p-1 text-black w-30">Update</button> <span> </span> {/* for space between button i put span istead of break  */}
            <button onClick={()=>handleDelete(i)} className="bg-white rounded  p-1 text-black w-30">Delete</button>
       
        </div>
     ))}
     
     <button onClick={handleClick} className="bg-white rounded  p-1 text-black w-30">Click To Add element</button>
     {/* <button onClick={handleUpdate} className="bg-white rounded  p-1 text-black w-30">Click To Update</button> */}
     
    </div>
    </>
  )
}

export default ArrayProcess


// Operation	Method	Purpose
// Copy	[...arr]	Existing array copy
// Add	push()	Element add
// Update	map()	Element replace
// Delete	filter()	Element remove
// Display	map()	Elements render


// One important difference:
// - push() original copied array-ah mutate pannum. Nee first copy create pannirukka, so state original array direct-ah mutate aagala.
// - map() new array return pannum.
// - filter() new array return pannum.
// - Spread ... existing array elements-ah copy/expand pannum.