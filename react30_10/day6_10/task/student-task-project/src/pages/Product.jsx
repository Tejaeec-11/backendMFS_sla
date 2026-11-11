
function Product() {
  let product = {
    id: "P101",
    name: "Galaxy S24",
    price: 20000,
    brand: "Samsung",
    category: "Electronics"
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-blue-700">
        {product.name}
      </h2>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Product ID: {product.id}</p>
      <h3 className="text-xl font-bold text-green-700">
        ₹{product.price * 0.9}
      </h3>
      <p className="line-through text-gray-500">
        Original price: ₹{product.price}
      </p>
    </div>
  );
}

export default Product;
