
import React, { useState } from "react";

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 },
    { id: 5, name: "Headphone", price: 2000 }
  ]);

  // Calculate total price
  const totalPrice = products.reduce(
    (total, product) => total + product.price, 0
  );

  // Filter products above 2000
  const filteredProducts = products.filter(
    (product) => product.price > 2000
  );

  return (
    <div>
      <h2>Product Details</h2>

      <h3>All Products</h3>

      {products.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}

      <h3>Total Price: ₹{totalPrice}</h3>

      <h3>Number of Products: {products.length}</h3>

      <h3>Products Above ₹2000</h3>

      {filteredProducts.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}

    </div>
  );
}

export default App;
