
import { useState } from "react"

const App = () => {
  const [employee, setEmployee] = useState([
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Bala", salary: 45000 },
    { id: 3, name: "Kumar", salary: 60000 },
    { id: 4, name: "Vijay", salary: 35000 },
    { id: 5, name: "Priya", salary: 55000 }
  ])

  const [filtered, setFiltered] = useState(false)//show all data when click button true apo fliter data
   
  const handleFilter = () => {
    setFiltered(true)
  }

  return (
    <>
      <div>
       {employee.filter((e) => filtered ? e.salary > 40000 : true).map((e, i) => (
            <div key={e.id}>
              <h3>Name: {e.name}</h3>
              <p>Salary: {e.salary}</p>
            </div>
          ))}
        <button onClick={handleFilter}>Filter Salary Above 40000</button>
      </div>
    </>
  )
}

export default App
