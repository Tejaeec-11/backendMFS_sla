import { useState } from "react"

const ArrayOfObjectsProcess = () => {
  const [arrObj,setArrObj] = useState(
    [{name:"MERN",age:26,salary:40000},
      {name:"JAVA",age:28,salary:470000},
      {name:"DOTNET",age:23,salary:70000},
      {name:"PYTHON",age:45,salary:60000} ]
  )

  const [sum,setSum] = useState(null)

  // 1. add element
   const handleAdd = ()=>{
   const addnewafo = {name:"RUST",age:20,salary:70000}
   setArrObj((p)=>[...p,addnewafo])//setArrObj()thisnormal prev develop
   }

  const handleUpdate = (eid)=>{
  setArrObj((p)=>[...p].map((e,i)=>i==eid?{...e,age:300}:e))
  }

  const handleDelete = (deleteelementid)=>{
    const copy = [...arrObj]
    const deletedatas = copy.filter((e,i)=>i !== deleteelementid)
    setArrObj(deletedatas)
  }

  const filterPrice = ()=>{
   const copy = [...arrObj]
   const fileterdatas = copy.filter((e,i)=>e.salary > 50000)
  setArrObj(fileterdatas)
  }


  const sumofvalues = ()=>{
   const copy = [...arrObj]
   const sumofproess = copy.reduce((acc,i)=>acc+i.salary,0)
   setSum(sumofproess)
   }

return (
    <>
      <div className="bg-mauve-500 text-white flex flex-col gap-5 p-10 justify-around items-center">
         {arrObj.map((e,i)=>(
          <div key={i} className="bg-black  p-5 flex gap-6 rounded-2xl">
             <h3>Name: {e.name}</h3> {/*element means oru index 0 like 0,1,2,3 idu colloect of elemt */}
             <p>Age: {e.age}</p>
             <p>Salary: {e.salary}</p>
             <button onClick={()=>handleUpdate(i)} className="bg-red-400 text-white p-1 rounded">Update Data</button>
             <button onClick={()=>handleDelete(i)} className="bg-red-400 text-white p-1 rounded">Delete Data</button>
           </div>
            ))}
           

          <button onClick={handleAdd} className="bg-red-400 text-white p-1 rounded w-30" >Add Data</button>
         <button onClick={filterPrice} className="bg-red-400 text-white p-1 rounded w-50">Filter by Price above 50000</button>
         <button onClick={sumofvalues} className="bg-red-400 text-white p-1 rounded w-30">Sum of Items</button><h1>{sum}</h1>
      </div>
    </>
  )
}

export default ArrayOfObjectsProcess

//used obj but arr method
// useState() – store array of objects.
// map() – display objects.
// filter() – filter or delete objects.
// reduce() – calculate total.



// Spread operator – add and update data.

//method 1 
  //  // 1. add element
  //  const handleAdd = ()=>{
  //  const copy = [...arrObj]
  //  const obj = {name:"node 1",age:20,salary:70000}
  //  copy.push(obj)
  //   setArrObj(copy)

  // //method 2 - use this
  // // 1. add element
  //  const handleAdd = ()=>{
  //  const obj = {name:"node 1",age:20,salary:70000}
  //  setArrObj((p)=>[...p,obj])
  //  }
