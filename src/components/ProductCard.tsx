import { Link } from "react-router-dom";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-50 hover:border-amber-200">
      {/* Image Area */}
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
          <span className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform duration-300">
            {product.image}
          </span>
        </div>
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
              product.badge === "Bestseller"
                ? "bg-amber-500 text-white"
                : product.badge === "New"
                ? "bg-green-500 text-white"
                : product.badge === "Seasonal"
                ? "bg-orange-500 text-white"
                : "bg-rose-500 text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link
            to={`/product/${product.id}`}
            className="text-base sm:text-lg font-semibold text-gray-800 hover:text-amber-700 transition-colors line-clamp-1"
          >
            {product.name}
          </Link>
        </div>

        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "text-amber-400"
                    : "text-gray-200"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price + Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-amber-800">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
