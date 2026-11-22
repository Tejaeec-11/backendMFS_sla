//Task 1 uses array index (i)
//setSaveData((p)=>[...p,obj])
// const handleEdit = (e,i)=>{
//     setObj(e)
//     setEditId(i)
// }
// const handleDelete = (userid)=>{
//     setSaveData((p)=>[...p].filter((e,i)=>i!==userid))
// }
// import { useState } from "react";
//setSaveData((p)=>[...p].map((e,i)=>i===editId?obj:e))
//saveData.map((e,i)=>(
   // <div key={i}></div>
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

    setSaveData((p)=>[...p,obj])
    alert("Data Successfully Added")
    setObj({usertask:"",taskdate:"",status:""})
  }

  const handleEdit = (e,i)=>{
    setObj(e)
    setEditId(i)
  }

  const handleDelete = (userid)=>{
    setSaveData((p)=>[...p].filter((e,i)=>i!==userid))
  }

  const handleUpdate = (e)=>{
    e.preventDefault()

    if(!obj.usertask.trim() || !obj.taskdate || !obj.status){
      alert("Please fill all the fields")
      return
    }

    setSaveData((p)=>[...p].map((e,i)=>i===editId?obj:e))
    alert("Data Successfully Updated")
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
          <button onClick={handleUpdate}>Task Update</button>
        }
      </form>

      <div>
        {saveData.length===0 ? ("No Data") : (
          saveData.map((e,i)=>(
            <div key={i}>
              <h2>{e.usertask}</h2>
              <p>{e.taskdate}</p>
              <p>{e.status}</p>
              <button type="button" onClick={()=>handleEdit(e,i)}>Edit</button>
              <button type="button" onClick={()=>handleDelete(i)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default App;

// Main difference
// Task 1	Task 2
// Uses array index	Uses unique ID
// key={i}	key={e.id}
// editId stores index	editId stores ID
// Delete using index	Delete using ID
// No Cancel button	Cancel button included
// No unique ID needed	crypto.randomUUID()
