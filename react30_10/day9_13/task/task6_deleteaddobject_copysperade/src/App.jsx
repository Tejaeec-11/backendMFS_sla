
import React, { useState } from 'react'

const App = () => {
  const [product, SetProduct] = useState({
    ProductName: "Lipstick",
    Ouantity: 5,
    Type: "Makeup",
    Colour: "red shade"
  })

  const handleUpdate = () => {
    SetProduct({ ...product, Price: 600 })
  }

  const handledelete = () => {
    const { Type, ...del } = product
    SetProduct(del)
  }

  return (
    <>
      <div>
        <h2>{product.ProductName}</h2>
        <h2>{product.Ouantity}</h2>
        <h2>{product.Type}</h2>
        <h2>{product.Colour}</h2>
        <h2>{product.Price}</h2>

        <button onClick={handleUpdate}>Click to add</button>
        <button onClick={handledelete}>Click to delete</button>
      </div>
    </>
  )
}

export default App
