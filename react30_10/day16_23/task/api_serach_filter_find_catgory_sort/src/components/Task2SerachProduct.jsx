import { useEffect, useState } from "react";

const Task2SerachProduct = () => {

  const [showDatas, setShowDatas] = useState([]);
  const [search, setSearch] = useState("");

  const fetchTheProduct = async () => {

    const res = await fetch("https://dummyjson.com/products?limit=30");

    const parseData = await res.json();

    setShowDatas(parseData.products);
  };

  useEffect(() => {
    fetchTheProduct();
  }, []);

  let searchProduct = showDatas.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Products</h2>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {searchProduct.length === 0 ? (
        <h3>No Products Found</h3>
      ) : (
        searchProduct.map((e) => (
          <div key={e.id}>
            <h3>{e.title}</h3>
            <p>Price: ${e.price}</p>
          </div>
        ))
      )}

    </div>
  );
};



export default Task2SerachProduct

// - roduct title: Apple iPhone
// - Search: apple
// - Result: Match found.
// toLowerCase() makes searching case-insensitive.

// includes() checks whether the search text exists in the product title