import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { HeartIcon, SparkleIcon, BowIcon, FloatingHearts, SectionDivider } from "../components/Decorations";
import { useState } from "react";
import { useToast } from "../context/ToastContext";

export default function Home() {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const featuredProducts = products.slice(0, 4);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast("Welcome to our sweet family! 💌 Check your inbox.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF4F0]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <FloatingHearts />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#F9E2DF] text-[#B95A66] px-4 py-2 rounded-full text-sm font-medium mb-6 font-[Quicksand]">
                <SparkleIcon className="w-3.5 h-3.5" />
                Fresh from our oven to your heart
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#6E4C3B] leading-tight mb-6 font-[Playfair_Display]">
                Baked with{" "}
                <span className="text-[#DC8B92] font-[Great_Vibes] text-5xl sm:text-6xl lg:text-7xl">
                  care
                </span>
                ,
                <br />
                sprinkled with{" "}
                <span className="text-[#B95A66] font-[Great_Vibes] text-5xl sm:text-6xl lg:text-7xl">
                  love
                </span>
              </h1>

              <p className="text-[#6E4C3B]/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-[Quicksand]">
                Handcrafted treats made with organic ingredients, real butter,
                and a generous pinch of happiness. Every bite is a little hug.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link
                  to="/shop"
                  className="px-8 py-3.5 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-[Quicksand] flex items-center justify-center gap-2"
                >
                  <HeartIcon className="w-4 h-4" />
                  Order Now
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3.5 border-2 border-[#DC8B92]/40 text-[#6E4C3B] hover:bg-[#F9E2DF]/50 font-semibold rounded-full transition-all hover:scale-105 font-[Quicksand] text-center"
                >
                  Our Story
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-pink-200/50">
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#B95A66] font-[Quicksand]">
                    2K+
                  </p>
                  <p className="text-xs sm:text-sm text-[#6E4C3B]/50 font-[Quicksand]">
                    Happy Customers
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#B95A66] font-[Quicksand]">
                    50+
                  </p>
                  <p className="text-xs sm:text-sm text-[#6E4C3B]/50 font-[Quicksand]">
                    Sweet Recipes
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#B95A66] font-[Quicksand]">
                    4.9
                  </p>
                  <p className="text-xs sm:text-sm text-[#6E4C3B]/50 font-[Quicksand]">
                    ⭐ Rating
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Illustration in oval frame */}
            <div className="hidden lg:flex justify-center relative">
              {/* Bow on top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 text-[#DC8B92]">
                <BowIcon className="w-16 h-12" />
              </div>

              {/* Oval frame */}
              <div className="relative w-80 h-96">
                {/* Outer dashed border */}
                <div className="absolute inset-0 rounded-[50%] border-2 border-dashed border-[#DC8B92]/40" />
                {/* Inner solid border */}
                <div className="absolute inset-3 rounded-[50%] border-2 border-[#DC8B92]/60 bg-gradient-to-br from-[#F9E2DF]/50 to-[#F2CDC9]/30 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-[100px] block mb-2">🧁</span>
                    <p className="text-[#6E4C3B] font-[Great_Vibes] text-2xl">
                      Made with love
                    </p>
                  </div>
                </div>

                {/* Floating chips */}
                <div className="absolute -right-6 top-16 bg-white px-3 py-2 rounded-full shadow-lg border border-pink-100 text-xs font-medium text-[#6E4C3B] font-[Quicksand] animate-[float_4s_ease-in-out_infinite]">
                  🧈 100% real butter
                </div>
                <div className="absolute -left-6 bottom-20 bg-white px-3 py-2 rounded-full shadow-lg border border-pink-100 text-xs font-medium text-[#6E4C3B] font-[Quicksand] animate-[float_4s_ease-in-out_infinite_1s]">
                  🌿 No preservatives
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="bg-gradient-to-r from-[#DC8B92] to-[#CE717C] py-4 overflow-hidden">
        <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {[...Array(3)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-6 mx-6">
              {[
                "Cupcakes",
                "Cakes",
                "Cookies",
                "Cinnamon Rolls",
                "Tarts",
                "Brownies",
                "Macarons",
                "Croissants",
              ].map((item) => (
                <span
                  key={`${setIdx}-${item}`}
                  className="flex items-center gap-6 text-white font-medium font-[Quicksand] text-sm sm:text-base"
                >
                  <span>{item}</span>
                  <HeartIcon className="w-3 h-3 text-white/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Bakes */}
      <section className="py-16 sm:py-24 bg-[#FBF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionDivider />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
              Our{" "}
              <span className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl">
                Favourite
              </span>{" "}
              Bakes
            </h2>
            <p className="text-[#6E4C3B]/60 max-w-xl mx-auto font-[Quicksand]">
              Handpicked treats that our customers can't stop ordering. Made
              fresh every morning with lots of love.
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
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all hover:scale-105 font-[Quicksand] shadow-md"
            >
              View Full Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-[#F9E2DF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <div className="flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-[40px] border-2 border-dashed border-[#DC8B92]/40" />
                <div className="absolute inset-3 rounded-[36px] border-2 border-[#DC8B92]/50 bg-gradient-to-br from-[#FFFBF9] to-[#F9E2DF]/50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <span className="text-7xl block mb-3">👩‍🍳</span>
                    <p className="text-[#6E4C3B] font-[Great_Vibes] text-xl">
                      From our kitchen
                    </p>
                    <p className="text-[#6E4C3B]/60 text-sm font-[Quicksand]">
                      to your table
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div>
              <SectionDivider />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-4 font-[Playfair_Display] text-center lg:text-left">
                Our{" "}
                <span className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl">
                  Sweet
                </span>{" "}
                Story
              </h2>
              <p className="text-[#6E4C3B]/70 leading-relaxed mb-6 font-[Quicksand] text-center lg:text-left">
                What started as weekend baking experiments in a tiny kitchen has
                blossomed into a beloved neighborhood bakery. We believe that
                the best treats are made with patience, quality ingredients, and
                a whole lot of heart.
              </p>

              {/* Heart checklist */}
              <ul className="space-y-3 mb-8">
                {[
                  "Organic, locally-sourced ingredients",
                  "No artificial preservatives or colors",
                  "Baked fresh every single morning",
                  "Recipes passed down with love",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#6E4C3B]/80 font-[Quicksand]"
                  >
                    <HeartIcon className="w-4 h-4 text-[#DC8B92] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Signature */}
              <p className="text-[#DC8B92] font-[Great_Vibes] text-2xl mb-8 text-center lg:text-left">
                ~ Emma, Founder
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white/70 rounded-2xl">
                  <p className="text-xl font-bold text-[#B95A66] font-[Quicksand]">
                    5+
                  </p>
                  <p className="text-xs text-[#6E4C3B]/50">Years</p>
                </div>
                <div className="text-center p-3 bg-white/70 rounded-2xl">
                  <p className="text-xl font-bold text-[#B95A66] font-[Quicksand]">
                    50+
                  </p>
                  <p className="text-xs text-[#6E4C3B]/50">Recipes</p>
                </div>
                <div className="text-center p-3 bg-white/70 rounded-2xl">
                  <p className="text-xl font-bold text-[#B95A66] font-[Quicksand]">
                    100%
                  </p>
                  <p className="text-xs text-[#6E4C3B]/50">Love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 sm:py-24 bg-[#FBF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionDivider />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
              Sweet{" "}
              <span className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl">
                Words
              </span>{" "}
              from Our Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sophie L.",
                role: "Regular Customer",
                initial: "S",
                text: "The cupcakes are absolutely divine! My daughter's birthday party was a hit thanks to Little Miss Baker. The strawberry ones are to die for!",
                rating: 5,
              },
              {
                name: "James T.",
                role: "Cake Lover",
                initial: "J",
                text: "Ordered a celebration cake for my wife and she was in tears of joy. Not only beautiful but tastes like heaven. Will order again and again!",
                rating: 5,
              },
              {
                name: "Priya K.",
                role: "Weekend Regular",
                initial: "P",
                text: "I drive 30 minutes every Saturday just for their cinnamon rolls. Worth every mile! The whole place smells like a dream when you walk in.",
                rating: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-[#FFFBF9] p-6 sm:p-8 rounded-3xl shadow-sm border border-pink-100/50 hover:shadow-lg hover:shadow-pink-50 transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#DC8B92]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#6E4C3B]/70 mb-6 italic leading-relaxed font-[Quicksand]">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F9E2DF] to-[#DC8B92] flex items-center justify-center text-white font-bold text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#6E4C3B] text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-[#6E4C3B]/50">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#F9E2DF] to-[#F2CDC9] rounded-[32px] p-8 sm:p-12 text-center relative overflow-hidden border border-[#DC8B92]/20">
            <FloatingHearts />
            <div className="relative">
              <p className="text-[#DC8B92] font-[Great_Vibes] text-2xl mb-2">
                Stay sweet
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                Join Our Sweet Newsletter
              </h2>
              <p className="text-[#6E4C3B]/60 mb-6 font-[Quicksand] max-w-md mx-auto">
                Get first dibs on new flavors, seasonal specials, and exclusive
                discounts delivered to your inbox.
              </p>
              <form
                onSubmit={handleNewsletter}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-3 rounded-full border border-[#DC8B92]/30 bg-white/80 focus:bg-white focus:border-[#DC8B92] outline-none transition-all font-[Quicksand] text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-md font-[Quicksand] text-sm whitespace-nowrap"
                >
                  Subscribe 💌
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
