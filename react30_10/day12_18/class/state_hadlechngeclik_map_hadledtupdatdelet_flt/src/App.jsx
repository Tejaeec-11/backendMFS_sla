//code1 stored only one task name.
import { use, useState } from "react";

const App = () => {

  const [task,setTask] = useState("")//input button
  const [savetask,setSaveTask] = useState([])//submit button
  const [editId,setEditId] = useState(null)//edit

                              //input button
  const handleChange = (e)=>{
    setTask(e.target.value)
  }

                              //sumbit button
  const handleClick = ()=>{
    if(!task) {                 //when user click not task type alert show 
      alert("Please fill the Input")
      return
    }                                   //after if new add panna athu prev oda copy panni + new task print pannu 
     setSaveTask((p)=>[...p,task])
    setTask("")                         //after print or submit aprm ma empty agum input box
   }

                                         //handle edit aprm next update then delete
  const handleEdit = (element,eid) => {
    setTask(element)
    setEditId(eid)
  }
 
  const handleDelete = (userid)=>{
    setSaveTask((p)=>[...p].filter((e,i)=>i!==userid))
     }

                                //submit button
  const handleUpdate = ()=>{
    setSaveTask((p)=>[...p].map((e,i)=>i==editId?task:e))
    setTask("")                  //after empty i/p
    setEditId(null)
  }

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} placeholder="Enter the Task" value={task} />
        {editId==null?<button onClick={handleClick}>Add Task</button>:<button onClick={handleUpdate}>Update Task</button>}
      </div>

      <div>                                                       {/* ida code for show in screen after sumbit table show panna  */}
        <table border={"3"}>
          <thead><tr><th>S.no</th><th>Task Name</th><th>Action</th></tr></thead>
          <tbody>
          {savetask.length === 0 ? (<tr><td colSpan={3}>No Datas Available</td></tr>):(savetask.map((e,i)=>(
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{e}</td>
                  <td>
                    <button onClick={()=>handleEdit(e,i)}>Edit</button> ||
                    <button onClick={()=>handleDelete(i)}>Delete</button>
                  </td>
                </tr>
              )))
            }

          </tbody>
        </table>

        {/* {savetask.map((e,i)=>(

          <div key={i}>
            <h1>{e}</h1>
          </div>

        ))} */}
      </div>
    </>
  );
};

export default App;
//1. Add Task – Spread + State
//Concepts: useState, Spread operator, Previous state, Array.
//2. Delete Task – Filter + Spread
//Concepts: filter(), Spread operator, Previous state, Index.
//3. Edit Task – State update
//Concepts: Function parameters, useState, Index.
//4. Update Task – Map + Ternary + Spread
//Concepts: map(), Spread operator, Ternary operator, Previous state.
//5. Input Handling
//Concepts: Event handling, onChange, e.target.value.
//6. Display Tasks – Map
//Concepts: map(), Index, JSX, key.

// Important concepts – Revision table
// Concept	Purpose
// useState	Store data
// Spread ...	Copy array
// push()	Add element
// filter()	Delete element
// map()	Display / Update
// Ternary ? :	Condition
// onChange	Input handling
// onClick	Button click
// null	No selected edit ID
// setState	Update state

// Remember your CRUD:
// - C – Create → Add
// - R – Read → Display
// - U – Update → Edit
// - D – Delete → Remove
// These are the main concepts in your Task Management application.

// //method 2 for delete
// const handleDelete = (userid)=>{
//     const copy = [...savetask]
//     const deleteData = copy.filter((e,i)=>i!==userid)
//     setSaveTask(deleteData)
// }


//method 2 for click
// const handleClick = ()=>{
//     if(!task) {
//       alert("Please fill the Input")
//       return
//     }

//     const copy = [...savetask]
//     copy.push(task)
//     setSaveTask(copy)
//     setTask("")
// }
