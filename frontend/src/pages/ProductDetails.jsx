import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/api/products`);
      const found = res.data.find((p) => p._id === id);
      setProduct(found);
    } catch (err) {
      console.error("Error loading product", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const existing = JSON.parse(localStorage.getItem("cart")) || [];
    const updated = [...existing, product];
    localStorage.setItem("cart", JSON.stringify(updated));
    navigate("/cart");
  };

  if (!product) return <p className="text-center p-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <img
        src={product.image || "/default-product.jpg"}
        alt={product.name}
        className="w-full h-80 object-cover rounded shadow"
        onError={(e) => (e.target.src = "/default-product.jpg")}
      />
      <div>
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-500 mb-1">{product.category}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl text-blue-600 font-bold mb-6">₹{product.price}</p>
        <button
          onClick={addToCart}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

