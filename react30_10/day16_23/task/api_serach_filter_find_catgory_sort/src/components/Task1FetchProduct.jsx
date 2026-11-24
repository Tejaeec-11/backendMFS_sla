import { useEffect, useState } from "react";

const Task1FetchProduct = () => {

  const [showDatas, setShowDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTheProduct = async () => {

    try {
      const res = await fetch("https://dummyjson.com/products?limit=10");

      const parseData = await res.json();

      setShowDatas(parseData.products);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTheProduct();
  }, []);

  return (
    <div>
      <h2>Fetch Products</h2>

      {loading ? (
        <div>
          {Array.from({ length: 5 }).map((e, i) => (
            <div className="skeleton" key={i}></div>
          ))}
        </div>
      ) : showDatas.length === 0 ? (
        <h3>No Products Found</h3>
      ) : (
        showDatas.map((e) => (
          <div className="product" key={e.id}>
            <h3>{e.title}</h3>
            <img src={e.thumbnail} alt={e.title} width="100" />
            <p>Price: ${e.price}</p>
          </div>
        ))
      )}

    </div>
  );
};

export default Task1FetchProduct;



// loading = true → initially loading.



// finally → loading becomes false after the request finishes.



// Array.from({ length: 5 }) → creates 5 skeleton boxes.



// showDatas.length === 0 → checks whether products are empty.