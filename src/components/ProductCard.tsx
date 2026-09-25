import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { HeartIcon, SparkleIcon } from "./Decorations";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    addToCart(product);
    showToast(`${product.name} added to basket! 🧁`);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className="group bg-[#FFFBF9] rounded-3xl shadow-sm hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 overflow-hidden border border-pink-100/50"
    >
      {/* Image Area */}
      <div className="relative aspect-square bg-gradient-to-br from-[#F9E2DF]/50 to-[#F2CDC9]/30 flex items-center justify-center overflow-hidden">
        <motion.span
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ duration: 0.4 }}
          className="text-6xl sm:text-7xl"
        >
          {product.emoji}
        </motion.span>
        {product.tag && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold text-white ${product.tagColor || "bg-pink-500"}`}
          >
            {product.tag}
          </motion.span>
        )}
        {/* Decorative sparkles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <SparkleIcon className="absolute top-4 right-4 w-4 h-4 text-[#DC8B92]/30 group-hover:text-[#DC8B92]/60 transition-colors" />
        </motion.div>
        <HeartIcon className="absolute bottom-4 left-4 w-3 h-3 text-[#DC8B92]/20 group-hover:text-[#DC8B92]/50 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold text-[#6E4C3B] font-[Playfair_Display] mb-1.5 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-[#6E4C3B]/60 text-sm mb-3 line-clamp-2 font-[Quicksand] leading-relaxed">
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
                    ? "text-[#DC8B92]"
                    : "text-pink-100"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] text-[#6E4C3B]/40">
            ({product.reviews})
          </span>
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#B95A66] font-[Quicksand]">
            ${product.price.toFixed(2)}
          </span>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAdd}
            className="w-10 h-10 rounded-full bg-[#DC8B92] hover:bg-[#B95A66] text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg"
            title="Add to basket"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
