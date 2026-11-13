
import { useNavigate } from "react-router-dom";

const ProductListing = () => {

  const navigate = useNavigate();

  const datas = [
    { ProductName: "lipstick", Price: 3205 },
    { ProductName: "eyelinear", Price: 3025 },
    { ProductName: "facewash", Price: 30250 },
    { ProductName: "kurties", Price: 3250 },
    { ProductName: "shampoo", Price: 250 }
  ];

  const handleBuy = (userid) => {
    navigate(`/productsingle/${userid}`);
  };

  return (
    <div className="p-10 flex gap-25 justify-center items-center h-100">
      {datas.map((e, i) => (
        <div key={i} className="shadow border rounded-4xl p-2 w-50 text-center">
          <h3>{e.ProductName}</h3>
          <p>{e.Price}</p>

          <button
            onClick={() => handleBuy(i)}
            className="bg-red-400 text-white text-center rounded border-0 p-1 w-30 my-2"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;

//Product Listing + useNavigate + useParams
