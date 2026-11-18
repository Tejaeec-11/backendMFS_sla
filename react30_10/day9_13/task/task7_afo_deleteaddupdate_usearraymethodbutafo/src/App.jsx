
import React, { useState } from 'react'

const App = () => {
  const [arrfo, SetArrfo] = useState([
    { id: 1, brand: "samsung", price: 50000 },
    { id: 2, brand: "moto", price: 30000 },
    { id: 3, brand: "apple", price: 80000 }
  ])

  const handleAddElement = () => {
    SetArrfo([...arrfo, { id: 4, brand: "redmi", price: 45000 }])
  }

  const handleDelete = () => {
    SetArrfo(arrfo.filter((arr) => arr.id !== 3))
  }

  const handleUpdate = () => {
    SetArrfo(arrfo.map((arr) =>
      arr.id === 2 ? { ...arr, price: 60000 } : arr
    ))
  }

  return (
    <>
      <div>
        {arrfo.map((arr) => (
          <div key={arr.id}>
            <h2>id: {arr.id}</h2>
            <p>Brand: {arr.brand}</p>
            <p>Price: {arr.price}</p>
          </div>
        ))}

        <button onClick={handleAddElement}>Click to add</button>
        <button onClick={handleDelete}>Click to delete</button>
        <button onClick={handleUpdate}>Click to update</button>
      </div>
    </>
  )
}

export default App




// - arr → Current object.
// - arr.id === 2 → Moto object check.
// - {...arr, price: 60000} → Copy + update.
// - : arr → Other objects unchanged.
// Methods used
// Operation	Method
// Display	map()
// Add	Spread ...
// Delete	filter()
// Update	map() + Spread ...