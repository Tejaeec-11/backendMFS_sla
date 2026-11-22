
import { useEffect, useState } from "react";

const App = () => {

  const [showDatas, setShowDatas] = useState([]);

  const fetchTheProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=3");
      const change = await res.json();

      setShowDatas(change.products);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTheProduct();
  }, []);

  return (
    <>
      <h1>Product List</h1>

      {showDatas.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>{e.category}</p>
          <p>{e.price}</p>
        </div>
      ))}
    </>
  );
};

export default App;
