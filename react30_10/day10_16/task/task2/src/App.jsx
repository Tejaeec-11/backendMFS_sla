
import { useState } from "react"

const App = () => {
  const [product, setProduct] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 },
    { id: 5, name: "Headphone", price: 2000 }
  ])

  const [totalsum, setTotalsum] = useState(0)
  const [filtered, setFiltered] = useState(false)

  // Calculate total price
  const handleSum = () => {
    const sum = product.reduce((acc, e) => acc + e.price, 0)
    setTotalsum(sum)
  }

  // Filter products above 2000
  const handleFilter = () => {
    setFiltered(true)
  }

  return (
    <>
      <div className="bg-black text-white flex flex-col gap-5 p-10 items-center">
      <h1>Product Price Process</h1>
      <h2>Total Products: {product.length}</h2>
      {product.filter((e) => filtered ? e.price > 2000 : true).map((e)=>(
            <div key={e.id} className="bg-gray-700 p-4 rounded">
              <h3>Name: {e.name}</h3>
              <p>Price: ₹{e.price}</p>
            </div>
          ))}

        <button onClick={handleSum} className="bg-blue-500 p-2 rounded">Calculate Total</button>
        <h2>Total Price: ₹{totalsum}</h2>
        <button onClick={handleFilter} className="bg-red-500 p-2 rounded">Filter Above 2000</button>
      </div>
    </>
  )
}

export default App
