import { useState } from "react";

function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 },
    { id: 5, name: "Headphone", price: 2000 },
  ]);

  const [showExpensive, setShowExpensive] = useState(false);

  // reduce() - total price
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  // filter() - price above 2000
  const expensiveProducts = products.filter((product) => product.price > 2000);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Task 2: Product Price - Sum of Values</h1>

      <h2>All Products</h2>
      <ul>
        {/* map() - display every product */}
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price.toLocaleString("en-IN")}
          </li>
        ))}
      </ul>

      <h3>Total Price: ₹{totalPrice.toLocaleString("en-IN")}</h3>
      {/* length - number of products */}
      <h3>Number of Products: {products.length}</h3>

      <button onClick={() => setShowExpensive(!showExpensive)}>
        {showExpensive ? "Hide" : "Show"} Products Above ₹2,000
      </button>

      {showExpensive && (
        <>
          <h2>Products Above ₹2,000</h2>
          <ul>
            {expensiveProducts.map((product) => (
              <li key={product.id}>
                {product.name} - ₹{product.price.toLocaleString("en-IN")}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
