import { useEffect, useState } from "react";

const Task3SortProduct = () => {

  const [showDatas, setShowDatas] = useState([]);
  const [sort, setSort] = useState("");

  const fetchTheProduct = async () => {

    const res = await fetch("https://dummyjson.com/products?limit=20");

    const parseData = await res.json();

    setShowDatas(parseData.products);
  };

  useEffect(() => {
    fetchTheProduct();
  }, []);

  let sortedProducts = [...showDatas];// important line

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <h2>Sort Products</h2>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Select Sorting</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      {sortedProducts.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>Price: ${e.price}</p>
        </div>
      ))}

    </div>
  );
};
export default Task3SortProduct

// Why?
// - showDatas is the original state array.
// - [...showDatas] creates a copy.
// - sort() changes the array on which it is called.
// - So we sort the copied array instead of modifying the original state.
// // Low to High
// a.price - b.price

// // High to Low
// b.price - a.price