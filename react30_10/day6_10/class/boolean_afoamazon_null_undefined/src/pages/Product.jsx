
import { useNavigate } from "react-router-dom"

const Product = () => {

  const navigate = useNavigate()

  const uCanPress = (productid) => {
    navigate(`/product/${productid}`)
  }

  const afoProduct = [
    { ProductName: "lipstick", price: 200 },
    { ProductName: "eyelinear", price: 100 },
    { ProductName: "eyeshadow", price: 300 },
    { ProductName: "nailpolish", price: 800 },
    { ProductName: "powder", price: 800 }
  ]

  return (
    <div className="bg-gray-400 flex justify-evenly items-center h-100">

      {afoProduct.map((e, i) => (
        <div key={i} className="bg-gray-900 text-white rounded w-50 h-50 rounded-2xl p-4 flex flex-col gap-10">
          <h2>{e.ProductName}</h2>
          <p>{e.price}</p>

          <button
            onClick={() => uCanPress(i)}
            className="bg-red-400 text-white text-center p-1 rounded"
          >
            Buy Now
          </button>
        </div>
      ))}

    </div>
  )
}

export default Product
