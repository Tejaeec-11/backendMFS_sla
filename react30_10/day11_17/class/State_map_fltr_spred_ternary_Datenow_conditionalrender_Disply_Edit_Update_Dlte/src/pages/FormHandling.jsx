// RUD operations – Quick comparison
// CREATE1
// Add task
// setSaveData((p) => [...p, datas])
// spread + new object.
// READ2
// Display tasks
// savedata.map((e) => ...)
// map() use pannrom.
// UPDATE3
// Edit and update
// p.map((e) =>
//   e.id === editId ? {...e, todo} : e
// )
// map() + ternary + spread.
// DELETE4
// Delete task
// savedata.filter((e) => e.id !== id)
// filter() use pannrom.
import React, { useState } from 'react'

const FormHandling = () => {

  const [todo, setTodo] = useState("")//input
  const [savedata, setSaveData] = useState([])//button
  const [editId, setEditId] = useState(null)//edit
 
  //userinputtype
  const handleChange = (e) => {
    setTodo(e.target.value)//Input-la type panra text todo state-la save aagum.
  }
 
  //button
  const handleAdd = () => {
   const datas = { id: Date.now(), todo }//Input-la type panra text todo state-la save aagum.
    if (!todo.trim()) {//new line input fill pannama button click todonot so ples fill alret show agum
      alert("Please fill the form")//newline
      return//newline
    }//newline
    setSaveData((p) => [...p, datas])//Existing tasks copy panni new task add pannum.
    setTodo("")//newline Input box clear aagum.
  }//data show panna map
  
  //edit
  const handleEdit = (datas) => {
    setTodo(datas.todo)
    setEditId(datas.id)
  }

  //delete
  const handleDelete = (id) => {//Delete panna pora task ID argument-ah receive pannum.
    const copy = [...savedata]//Existing array-oda copy create pannum.
    const deleteData = copy.filter((e) => e.id !== id)
    setSaveData(deleteData)//Updated array state-la save aagum.
  }

  //update after edit so we update we use update is edit inrutha update irukanum
  const handleUpdate = () => {
    //Idhu CRUD-la romba important line 3
    setSaveData((p) =>p.map((e) =>e.id === editId ? { ...e, todo } : e))
    setEditId(null)//Editing mode close pannum.
    setTodo("")//Input box clear pannum.
  }

  return (
    <>
      <div>
     <input value={todo} type="text" onChange={handleChange}/>
     {editId === null? <button onClick={handleAdd}>Add Task</button>: <button onClick={handleUpdate}>Update Task</button>}
     </div>
     <div>
        {savedata.map((e) => (
        <div key={e.id}>
        <h1>{e.id}</h1>
        <p>{e.todo}</p>
        <button onClick={() => handleEdit(e)} className='border'>Edit</button>
        <button onClick={() => handleDelete(e.id)} className='border'>Delete</button>
        </div>
        ))}
      </div>
    </>
  )
}

export default FormHandling

// todo – input-la type panra task.
// setTodo – task value update panna.
// "" – initial empty value.

// savedata – all saved tasks store aagum.
// setSaveData – tasks array update pannum.
// [ ] – initial empty array

// datas – selected task object.
// setTodo(datas.todo) – selected task text input box-la varum.
// setEditId(datas.id) – selected task ID store aagum.

// filter() – condition true aagura elements keep pannum.
// e.id – current task ID.
// id – delete button-la irundhu varra selected ID.
// !== – not equal.
// Selected ID match aana condition false; so andha task remove aagum.


// Code	Purpose
// p	Previous array
// map()	Every object check pannum
// e.id === editId	Selected task ID check
// {...e, todo}	Existing object copy + new todo value
// : e	Other objects unchanged

// Ternary operator use pannirukkanga.
// - editId === null true → Add Task button display.
// - editId === null false → Update Task button display.
// So Edit click pannina Add Task button change aagi Update Task button varum.