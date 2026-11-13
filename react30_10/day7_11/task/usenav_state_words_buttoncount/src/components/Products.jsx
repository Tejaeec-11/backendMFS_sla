
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const datas = [
    { ProductName: "lipstick", Price: 3205 },
    { ProductName: "eyelinear", Price: 3025 },
    { ProductName: "facewash", Price: 30250 },
    { ProductName: "kurties", Price: 3250 },
    { ProductName: "shampoo", Price: 250 }
  ];

  const copy = datas.find((e, i) => i == id);

  const back = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <div
          onClick={back}
          className="bg-red-400 text-white text-center mx-3 my-3 w-40 p-1 rounded-2xl"
        >
          Back ProductList
        </div>

        {copy && (
          <div className="mx-15">
            <h2>{copy.ProductName}</h2>
            <p>{copy.Price}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
//This displays the selected single product.