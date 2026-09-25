import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <span className="text-6xl mb-4 block">😢</span>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/shop"
            className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-medium"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-amber-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-amber-700 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-amber-800 font-medium">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl flex items-center justify-center shadow-inner">
              <span className="text-[120px] sm:text-[160px] lg:text-[200px]">
                {product.image}
              </span>
            </div>
            {product.badge && (
              <span
                className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold ${
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
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
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
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm border border-amber-100"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-amber-800">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center border border-amber-200 rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-amber-50 transition-colors text-amber-700 font-medium"
                >
                  −
                </button>
                <span className="px-6 py-3 font-semibold text-gray-800 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-amber-50 transition-colors text-amber-700 font-medium"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 px-8 py-3 rounded-full font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-lg ${
                  added
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-amber-600 hover:bg-amber-700"
                }`}
              >
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
            </div>

            {/* Extra Info */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-amber-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>🚚</span>
                <span>Free delivery over $30</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>📦</span>
                <span>Same-day pickup</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>🌾</span>
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>💝</span>
                <span>Gift wrapping available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-950 mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
