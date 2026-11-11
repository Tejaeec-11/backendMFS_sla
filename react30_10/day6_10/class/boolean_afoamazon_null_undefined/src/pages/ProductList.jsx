
import { useParams } from 'react-router-dom'

const ProductList = () => {

  const afoProduct = [
    { ProductName: "lipstick", price: 200 },
    { ProductName: "eyelinear", price: 100 },
    { ProductName: "eyeshadow", price: 300 },
    { ProductName: "nailpolish", price: 800 },
    { ProductName: "powder", price: 800 }
  ]

  const { id } = useParams()

  const listProduct = afoProduct.find((e, i) => i == id)

  return (
    <>
      {listProduct ? (
        <>
          <h2>{listProduct.ProductName}</h2>
          <p>{listProduct.price}</p>
        </>
      ) : (
        <h2>Product Not Found</h2>
      )}
    </>
  )
}

export default ProductList
//1-product and productlsit 
//arrayof object (product ,product list page use amazon )
//use params 
// nav
//create afo and price it 
//mapp ,find 
// url pass whwn button press http://localhost:5173/product/0
//http://localhost:5173/product/1
//http://localhost:5173/product/2
//http://localhost:5173/product/3
