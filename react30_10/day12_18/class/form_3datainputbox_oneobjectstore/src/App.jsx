//code 2
import { useState } from "react";
                      //Updating an Object using the Spread Operator and Dynamic Property Names. afoformhandling code ***
const App = () => {
  const [obj,setObj] = useState({usertask:"",taskdate:"",status:""})//input
  const [saveData,setSaveData] = useState([])//submit,delte
  const [editId,setEditId] = useState(null)//edit
   
  const handleChange = (e)=>{//input 
    setObj({...obj,[e.target.name]:e.target.value})//name indules usertask,date,status tagretname iruka value 
   }                                                //Important concept [e.target.name]:e.target.value is called a computed property name (dynamic property name).

 const handleAdd = (e)=>{//submit
   e.preventDefault()//sumbit apo reload agam iruka
   setSaveData((p)=>[...p,obj])
   alert("Data Successfully Added")
   setObj({usertask:"",taskdate:"",status:""})//after submit empty aga
  }

  const handleEdit = (e,i)=>{//edit irutha update irukanum
    setObj(e)
    setEditId(i)
    }

   const handleDelete = (userid)=>{
   setSaveData((p)=>[...p].filter((e,i)=>i!==userid))
  }

  const handleUpdate = (e)=>{
    e.preventDefault()
    setSaveData((p)=>[...p].map((e,i)=>i==editId?{...e,...obj}:e))
    alert("Data Successfully Updated")
    setObj({usertask:"",taskdate:"",status:""})
    setEditId(null)
    }

  return (
    <>
     <form>
      <input type="text" name="usertask" onChange={handleChange} value={obj.usertask} placeholder="Enter the Task" />
      <input type="date" name="taskdate" onChange={handleChange} value={obj.taskdate} />
      <input type="text" name="status" onChange={handleChange} value={obj.status} placeholder="Enter the Status"  />
     {/*3 input one button has condition edit==mull irutha add task apdi illana edit==null illana update task */}
     {editId==null?<button onClick={handleAdd}>Task Add</button>:<button onClick={handleUpdate}>Task Update</button>}
      </form>


     <div>
      {saveData.length == 0 ? ("No Data"):(saveData.map((e,i)=>(
        <div key={i}>
          <h2>{e.usertask}</h2>
          <p>{e.taskdate}</p>
          <p>{e.status}</p>
          <button onClick={()=>handleEdit(e,i)}>Edit</button>
          <button onClick={()=>handleDelete(i)}>Delete</button>
        </div>
      )))}
     </div>
    </>
  );
};

export default App;

// 1. Full code structure – Concepts
// Function / Concept	Purpose
// useState	Store object and array data
// handleChange	Handle all three inputs
// Spread + Dynamic key	Update object properties
// handleAdd	Add task object
// handleEdit	Select task for editing
// handleDelete	Delete selected task
// handleUpdate	Update selected object
// map()	Display task details
// filter()	Remove selected object
// e.preventDefault()	Prevent form refresh

//B. useState – Object
//obj – stores the complete task object.
//setObj – updates the object.

//C. useState – Array
// saveData – stores all task objects.
// setSaveData – updates the array.
// [ ] – initially empty array.

//D. Edit ID
// Stores the index of the task selected for editing.
// - null – no task selected.
// - 0 – first task selected.
// - 1 – second task selected.