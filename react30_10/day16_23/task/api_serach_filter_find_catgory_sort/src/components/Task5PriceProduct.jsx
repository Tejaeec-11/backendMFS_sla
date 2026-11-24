import { useEffect, useState } from "react";

const Task5PriceProduct = () => {

  const [showDatas, setShowDatas] = useState([]);
  const [abovePrice, setAbovePrice] = useState(false);

  const fetchTheProduct = async () => {

    const res = await fetch("https://dummyjson.com/products?limit=20");

    const parseData = await res.json();

    setShowDatas(parseData.products);
  };

  useEffect(() => {
    fetchTheProduct();
  }, []);

  let filteredProducts = abovePrice
    ? showDatas.filter((e) => e.price > 100)
    : showDatas;

  let totalPrice = filteredProducts.reduce(
    (total, e) => total + e.price,
    0
  );

  return (
    <div>
      <h2>Price Products</h2>

      <button onClick={() => setAbovePrice(true)}>
        Above $100
      </button>

      <button onClick={() => setAbovePrice(false)}>
        Show All
      </button>

      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

      {filteredProducts.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>Price: ${e.price}</p>
        </div>
      ))}

    </div>
  );
};

export default Task5PriceProduct;

// - total → previous accumulated amount.
// - e.price → current product price.
// - 0 → initial total.
// The total changes automatically when you click Above $100 or Show All because it is calculated from filteredProducts.
