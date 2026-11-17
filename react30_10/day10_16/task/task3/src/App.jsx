import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Arun", marks: 75 },
  { id: 2, name: "Bala", marks: 85 },
  { id: 3, name: "Kumar", marks: 65 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [message, setMessage] = useState("");

  // ADD - spread operator, prevent duplicate IDs
  const handleAdd = () => {
    const newStudent = { id: 4, name: "Priya", marks: 90 };

    const isDuplicate = students.some((student) => student.id === newStudent.id);
    if (isDuplicate) {
      setMessage(`Student with ID ${newStudent.id} already exists. Cannot add duplicate.`);
      return;
    }

    setStudents([...students, newStudent]);
    setMessage("Priya added successfully.");
  };

  // UPDATE - map(): change Bala's marks from 85 to 95
  const handleUpdate = () => {
    setStudents(
      students.map((student) =>
        student.name === "Bala" ? { ...student, marks: 95 } : student
      )
    );
    setMessage("Bala's marks updated to 95.");
  };

  // DELETE - filter(): remove Kumar (ID 3)
  const handleDelete = () => {
    setStudents(students.filter((student) => student.id !== 3));
    setMessage("Kumar (ID 3) deleted.");
  };

  // Reset to original data
  const handleReset = () => {
    setStudents(initialStudents);
    setMessage("List reset to original data.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Task 3: Student Records - Add, Update and Delete</h1>

      <button onClick={handleAdd} style={{ marginRight: "10px" }}>
        Add Priya
      </button>
      <button onClick={handleUpdate} style={{ marginRight: "10px" }}>
        Update Bala's Marks to 95
      </button>
      <button onClick={handleDelete} style={{ marginRight: "10px" }}>
        Delete Kumar
      </button>
      <button onClick={handleReset}>Reset</button>

      {message && <p style={{ fontWeight: "bold" }}>{message}</p>}

      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <ul>
          {/* map() - display all students */}
          {students.map((student) => (
            <li key={student.id}>
              ID: {student.id} | Name: {student.name} | Marks: {student.marks}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
