import { useEffect, useState } from "react";

const Task4CategoryProduct = () => {

  const [showDatas, setShowDatas] = useState([]);
  const [category, setCategory] = useState("all");

  const fetchTheProduct = async () => {

    const res = await fetch("https://dummyjson.com/products?limit=30");

    const parseData = await res.json();

    setShowDatas(parseData.products);
  };

  useEffect(() => {
    fetchTheProduct();
  }, []);

  let uniqueCategories = [
    ...new Set(showDatas.map((e) => e.category))
  ];

  let filteredProducts =
    category === "all"
      ? showDatas
      : showDatas.filter((e) => e.category === category);

  return (
    <div>
      <h2>Category Products</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>

        {uniqueCategories.map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>

      {filteredProducts.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>Category: {e.category}</p>
          <p>Price: ${e.price}</p>
        </div>
      ))}

    </div>
  );
};
export default Task4CategoryProduct


//important
// let uniqueCategories = [
//   ...new Set(showDatas.map((e) => e.category))
// ];
// Execution order:
// 1. map() → extracts category names.
// 2. Set → removes duplicate categories.
// 3. ... → converts the Set back into an array.
// ["beauty", "beauty", "fragrances", "beauty", "groceries"]after set ["beauty", "fragrances", "groceries"]
// showDatas.filter((e) => e.category === category);
// Displays only the selected category.