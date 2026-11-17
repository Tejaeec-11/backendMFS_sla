import { useState } from "react";

function App() {
  const [employees] = useState([
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Bala", salary: 45000 },
    { id: 3, name: "Kumar", salary: 60000 },
    { id: 4, name: "Vijay", salary: 35000 },
    { id: 5, name: "Priya", salary: 55000 },
  ]);

  const [showFiltered, setShowFiltered] = useState(false);

  // filter() - salary above 40000
  const filteredEmployees = employees.filter((emp) => emp.salary > 40000);

  // Decide which list to display
  const displayList = showFiltered ? filteredEmployees : employees;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Task 1: Employee Salary Filter</h1>

      <button onClick={() => setShowFiltered(true)} style={{ marginRight: "10px" }}>
        Show Salary Above ₹40,000
      </button>
      <button onClick={() => setShowFiltered(false)}>Show All Employees</button>

      <h2>
        {showFiltered ? "Employees with Salary Above ₹40,000" : "All Employees"}
      </h2>

      <ul>
        {/* map() - display each employee */}
        {displayList.map((emp) => (
          <li key={emp.id}>
            {emp.name} - ₹{emp.salary.toLocaleString("en-IN")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
