import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import { SectionDivider } from "../components/Decorations";

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
        <div className="text-center mb-10">
          <SectionDivider />
          <h1 className="text-3xl sm:text-5xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
            Our{" "}
            <span className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-6xl">
              Sweet
            </span>{" "}
            Menu
          </h1>
          <p className="text-[#6E4C3B]/60 max-w-xl mx-auto font-[Quicksand]">
            Browse our collection of handcrafted treats, made fresh daily with
            love and the finest ingredients.
          </p>
        </div>

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
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
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-5 py-3 rounded-full border border-pink-200 focus:border-[#DC8B92] outline-none transition-all bg-[#FFFBF9] text-[#6E4C3B] font-[Quicksand] text-sm"
          >
            <option value="default">Sort by: Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all font-[Quicksand] ${
                activeCategory === category
                  ? "bg-[#DC8B92] text-white shadow-md"
                  : "bg-[#FFFBF9] text-[#6E4C3B]/70 border border-pink-200 hover:border-[#DC8B92] hover:text-[#B95A66]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-[#6E4C3B]/50 mb-6 font-[Quicksand]">
          Showing {filteredProducts.length} treat
          {filteredProducts.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-xl font-semibold text-[#6E4C3B] mb-2 font-[Quicksand]">
              No treats found
            </h3>
            <p className="text-[#6E4C3B]/50 font-[Quicksand]">
              Try adjusting your search or filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
                setSearchParams({});
              }}
              className="mt-4 px-6 py-2 bg-[#F9E2DF] text-[#B95A66] rounded-full hover:bg-[#F2CDC9] transition-colors font-medium font-[Quicksand]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
