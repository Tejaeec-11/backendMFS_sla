import { useState } from "react"

const App = () => {
   const [student, setStudent] = useState([
    { id: 1, name: "Arun", marks: 75 },
    { id: 2, name: "Bala", marks: 85 },
    { id: 3, name: "Kumar", marks: 65 }
  ])

  // 1. Add Student
  const handleAdd = () => {
  const newStudent = { id: 4, name: "Priya", marks: 90 }
  setStudent((p)=>p.some((e) => e.id === newStudent.id)?p : [...p, newStudent])
  }

  // 2. Update Student
  const handleUpdate = () => {
  setStudent((p) =>p.map((e) =>e.id === 2 ? { ...e, marks: 95 } : e))
  }

  // 3. Delete Student
  const handleDelete = () => {
  setStudent((p) =>p.filter((e) => e.id !== 3))
  }

  return (
    <>
      <div className="bg-black text-white flex flex-col gap-5 p-10 items-center">
      <h1>Student Records</h1>
      {student.map((e, i) => (
        <div key={e.id} className="bg-gray-700 p-5 rounded flex gap-5">
            <h3>ID: {e.id}</h3>
            <h3>Name: {e.name}</h3>
            <p>Marks: {e.marks}</p>
          </div>
        ))}

        <button onClick={handleAdd} className="bg-green-500 p-2 rounded">Add Student</button>
        <button onClick={handleUpdate} className="bg-blue-500 p-2 rounded">Update Bala Marks</button>
        <button onClick={handleDelete} className="bg-red-500 p-2 rounded"> Delete Kumar</button>
        </div>
    </>
  )
}

export default App


// p → Previous student array.
// some() → Checks whether ID 4 already exists.
// If ID exists → p (no duplicate).
// Otherwise → [...p, newStudent] adds Priya.

// map() checks every student.
// // e.id === 2 → Finds Bala.
// {...e, marks: 95} → Copies Bala's details and changes marks.
// // : e → Other students remain unchanged.

// filter() checks every student.
// e.id !== 3 → Keeps everyone except Kumar.
// Kumar is removed.

