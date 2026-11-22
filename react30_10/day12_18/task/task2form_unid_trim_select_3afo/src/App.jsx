//whereas Task 2 uses a unique ID (e.id).
//setSaveData((p)=>[...p,{...obj,id:crypto.randomUUID()}])
// const handleEdit = (e)=>{
//     setObj(e)
//     setEditId(e.id)
// }
// const handleDelete = (userid)=>{
//     setSaveData((p)=>[...p].filter((e)=>e.id!==userid))
// }
//setSaveData((p)=>[...p].map((e)=>e.id===editId?{...e,...obj}:e))
// saveData.map((e)=>(
//     <div key={e.id}></div>
import { useState } from "react";

const App = () => {
  const [obj,setObj] = useState({usertask:"",taskdate:"",status:""})
  const [saveData,setSaveData] = useState([])
  const [editId,setEditId] = useState(null)

  const handleChange = (e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
  }

  const handleAdd = (e)=>{
    e.preventDefault()

    if(!obj.usertask.trim() || !obj.taskdate || !obj.status){
      alert("Please fill all the fields")
      return
    }

    setSaveData((p)=>[...p,{...obj,id:crypto.randomUUID()}])
    alert("Data Successfully Added")
    setObj({usertask:"",taskdate:"",status:""})
  }

  const handleEdit = (e)=>{
    setObj(e)
    setEditId(e.id)
  }

  const handleDelete = (userid)=>{
    setSaveData((p)=>[...p].filter((e)=>e.id!==userid))
  }

  const handleUpdate = (e)=>{
    e.preventDefault()

    if(!obj.usertask.trim() || !obj.taskdate || !obj.status){
      alert("Please fill all the fields")
      return
    }

    setSaveData((p)=>[...p].map((e)=>e.id===editId?{...e,...obj}:e))
    alert("Data Successfully Updated")
    setObj({usertask:"",taskdate:"",status:""})
    setEditId(null)
  }

  const handleCancel = ()=>{
    setObj({usertask:"",taskdate:"",status:""})
    setEditId(null)
  }

  return (
    <>
      <form>
        <input
          type="text"
          name="usertask"
          placeholder="Enter the Task"
          onChange={handleChange}
          value={obj.usertask}
        />

        <input
          type="date"
          name="taskdate"
          onChange={handleChange}
          value={obj.taskdate}
        />

        <select name="status" onChange={handleChange} value={obj.status}>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        {editId===null?
          <button onClick={handleAdd}>Task Add</button>
          :
          <>
            <button onClick={handleUpdate}>Task Update</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </>
        }
      </form>

      <div>
        {saveData.length===0 ? ("No Data") : (
          saveData.map((e)=>(
            <div key={e.id}>
              <h2>{e.usertask}</h2>
              <p>{e.taskdate}</p>
              <p>{e.status}</p>
              <button type="button" onClick={()=>handleEdit(e)}>Edit</button>
              <button type="button" onClick={()=>handleDelete(e.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default App;


// -  Add task with all three fields.
// -Select each of the three status options.
// -  Enter only spaces in task name and submit. Error should appear.
// - Leave date empty and submit. Error should appear.
// -  Add three tasks.
// -  Edit the third task.
// - Delete the first task.
// -  Update the selected third task.
// -  Click Edit and then Cancel. Form should clear and Add button should return.
// Important: The last test checks why we use stable IDs instead of array indexes.


// What is common in both?
// These features are the same:
// - useState
// - handleChange
// - Form inputs
// - Status dropdown
// - trim() validation
// - Add validation
// - Update validation
// - Form reset after Add or Update
// Easy way to remember:
// - Task 1 = Validation + Dropdown.
// - Task 2 = Validation + Dropdown + Stable ID + Cancel Edit.