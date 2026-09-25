import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import { SectionDivider } from "../components/Decorations";
import { ScrollReveal } from "../utils/animations";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }
    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "rating":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case "name":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [activeCategory, sortBy, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All") setSearchParams({});
    else setSearchParams({ category });
  };

  return (
    <div className="min-h-screen bg-[#FBF4F0] pt-8 sm:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionDivider />
          <h1 className="text-3xl sm:text-5xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
            Our{" "}
            <motion.span
              className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-6xl inline-block"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              Sweet
            </motion.span>{" "}
            Menu
          </h1>
          <motion.p
            className="text-[#6E4C3B]/60 max-w-xl mx-auto font-[Quicksand]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Browse our collection of handcrafted treats, made fresh daily with
            love and the finest ingredients.
          </motion.p>
        </motion.div>

        {/* Search & Sort */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            className="relative flex-1"
            whileHover={{ scale: 1.02 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#6E4C3B]/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search our bakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-pink-200 focus:border-[#DC8B92] focus:ring-2 focus:ring-[#F9E2DF] outline-none transition-all bg-[#FFFBF9] font-[Quicksand] text-sm"
            />
          </motion.div>
          <motion.select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-5 py-3 rounded-full border border-pink-200 focus:border-[#DC8B92] outline-none transition-all bg-[#FFFBF9] text-[#6E4C3B] font-[Quicksand] text-sm"
            whileHover={{ scale: 1.02 }}
          >
            <option value="default">Sort by: Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name: A to Z</option>
          </motion.select>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap gap-2 sm:gap-3 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } }
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all font-[Quicksand] ${
                activeCategory === category
                  ? "bg-[#DC8B92] text-white shadow-md"
                  : "bg-[#FFFBF9] text-[#6E4C3B]/70 border border-pink-200 hover:border-[#DC8B92] hover:text-[#B95A66]"
              }`}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.p
          className="text-sm text-[#6E4C3B]/50 mb-6 font-[Quicksand]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Showing {filteredProducts.length} treat
          {filteredProducts.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </motion.p>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
                exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
                    },
                    exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.3 } }
                  }}
                  layout
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <motion.span
                className="text-6xl mb-4 block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔍
              </motion.span>
              <h3 className="text-xl font-semibold text-[#6E4C3B] mb-2 font-[Quicksand]">
                No treats found
              </h3>
              <p className="text-[#6E4C3B]/50 font-[Quicksand]">
                Try adjusting your search or filter.
              </p>
              <motion.button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                  setSearchParams({});
                }}
                className="mt-4 px-6 py-2 bg-[#F9E2DF] text-[#B95A66] rounded-full hover:bg-[#F2CDC9] transition-colors font-medium font-[Quicksand]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
