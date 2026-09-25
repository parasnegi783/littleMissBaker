import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const featuredProducts = products.filter(
    (p) => p.badge === "Bestseller" || p.badge === "Popular"
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://image.qwenlm.ai/generated-images/0e2e3bc3-4aa4-4f48-8ff7-4301e4c409e5/_result.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/90 via-amber-50/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="animate-pulse">🌾</span>
                Freshly baked every morning
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-amber-950 leading-tight mb-6">
                Baked with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  Love
                </span>
                <br />& Tradition
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Artisan breads, heavenly cakes, and irresistible pastries — all
                handcrafted with organic ingredients and decades of baking
                expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/shop"
                  className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-center"
                >
                  Shop Now →
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 border-2 border-amber-300 text-amber-800 hover:bg-amber-50 font-semibold rounded-full transition-all hover:scale-105 text-center"
                >
                  Our Story
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-amber-200/50">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-800">5+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Years of Baking</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-800">50+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Unique Recipes</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-800">10K+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center shadow-2xl">
                  <span className="text-[150px]">🎂</span>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <span className="text-4xl">⭐</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <span className="text-3xl">🌾</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌾",
                title: "Organic Ingredients",
                desc: "We source only the finest organic, locally-grown ingredients",
              },
              {
                icon: "👨‍🍳",
                title: "Master Bakers",
                desc: "Our team brings decades of artisan baking expertise",
              },
              {
                icon: "🕐",
                title: "Fresh Daily",
                desc: "Everything is baked fresh every single morning",
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                desc: "Same-day delivery available for orders before 10AM",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl hover:bg-amber-50 transition-colors group"
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                  {feature.icon}
                </span>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-4">
              Customer Favorites
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most loved creations, handpicked by our community of
              baking enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              View All Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                text: "The sourdough is absolutely incredible! Best I've ever had outside of San Francisco. My family won't eat any other bread now.",
                rating: 5,
              },
              {
                name: "James K.",
                text: "Ordered a birthday cake and it was not only beautiful but tasted amazing. Everyone at the party was asking where it came from!",
                rating: 5,
              },
              {
                name: "Emily R.",
                text: "Their croissants are to die for. Flaky, buttery perfection. I drive 30 minutes every weekend just to get them fresh.",
                rating: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-amber-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-amber-800">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Treat Yourself?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Order online for pickup or delivery. Fresh from our ovens to your
            door.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-700 font-bold rounded-full hover:bg-amber-50 transition-all hover:scale-105 shadow-lg"
          >
            Start Shopping 🛒
          </Link>
        </div>
      </section>
    </div>
  );
}
