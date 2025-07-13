import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image || "/default-product.jpg"}
          alt={product.name}
          className="w-full h-48 object-cover"
          onError={(e) => (e.target.src = "/default-product.jpg")}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
          <div className="mt-2 text-blue-600 font-bold">₹{product.price}</div>
        </div>
      </Link>
    </div>
  );
}

