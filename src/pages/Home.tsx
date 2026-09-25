import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { HeartIcon, SparkleIcon, BowIcon, FloatingHearts, SectionDivider } from "../components/Decorations";
import { useState } from "react";
import { useToast } from "../context/ToastContext";
import { ScrollReveal, AnimatedText, useCounter, Parallax } from "../utils/animations";

export default function Home() {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const featuredProducts = products.slice(0, 4);

  // Counter animations
  const customers = useCounter(2000, 2);
  const recipes = useCounter(50, 2);
  const rating = useCounter(49, 2);

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
        
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-[#F9E2DF] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-morph-blob"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#F2CDC9] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-morph-blob"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-[#F9E2DF] text-[#B95A66] px-4 py-2 rounded-full text-sm font-medium mb-6 font-[Quicksand]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <SparkleIcon className="w-3.5 h-3.5" />
                </motion.span>
                Fresh from our oven to your heart
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#6E4C3B] leading-tight mb-6 font-[Playfair_Display]">
                <AnimatedText text="Baked with" className="inline" />
                <br />
                <motion.span
                  className="text-[#DC8B92] font-[Great_Vibes] text-5xl sm:text-6xl lg:text-7xl inline-block"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                >
                  care
                </motion.span>
                ,
                <br />
                sprinkled with{" "}
                <motion.span
                  className="text-[#B95A66] font-[Great_Vibes] text-5xl sm:text-6xl lg:text-7xl inline-block"
                  initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                >
                  love
                </motion.span>
              </h1>

              <motion.p
                className="text-[#6E4C3B]/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-[Quicksand]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Handcrafted treats made with organic ingredients, real butter,
                and a generous pinch of happiness. Every bite is a little hug.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/shop"
                    className="px-8 py-3.5 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all hover:shadow-xl font-[Quicksand] flex items-center justify-center gap-2 animate-glow"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <HeartIcon className="w-4 h-4" />
                    </motion.span>
                    Order Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="px-8 py-3.5 border-2 border-[#DC8B92]/40 text-[#6E4C3B] hover:bg-[#F9E2DF]/50 font-semibold rounded-full transition-all font-[Quicksand] text-center"
                  >
                    Our Story
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats with counter animation */}
              <motion.div
                className="grid grid-cols-3 gap-6 pt-8 border-t border-pink-200/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="text-center lg:text-left">
                  <p ref={customers.ref} className="text-2xl sm:text-3xl font-bold text-[#B95A66] font-[Quicksand]">
                    {customers.count}+
                  </p>
                  <p className="text-xs sm:text-sm text-[#6E4C3B]/50 font-[Quicksand]">
                    Happy Customers
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p ref={recipes.ref} className="text-2xl sm:text-3xl font-bold text-[#B95A66] font-[Quicksand]">
                    {recipes.count}+
                  </p>
                  <p className="text-xs sm:text-sm text-[#6E4C3B]/50 font-[Quicksand]">
                    Sweet Recipes
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p ref={rating.ref} className="text-2xl sm:text-3xl font-bold text-[#B95A66] font-[Quicksand]">
                    {(rating.count / 10).toFixed(1)}
                  </p>
                  <p className="text-xs sm:text-sm text-[#6E4C3B]/50 font-[Quicksand]">
                    ⭐ Rating
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Illustration in oval frame */}
            <motion.div
              className="hidden lg:flex justify-center relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Bow on top */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 text-[#DC8B92]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <BowIcon className="w-16 h-12" />
              </motion.div>

              {/* Oval frame */}
              <motion.div
                className="relative w-80 h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Outer dashed border */}
                <motion.div
                  className="absolute inset-0 rounded-[50%] border-2 border-dashed border-[#DC8B92]/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner solid border */}
                <motion.div
                  className="absolute inset-3 rounded-[50%] border-2 border-[#DC8B92]/60 bg-gradient-to-br from-[#F9E2DF]/50 to-[#F2CDC9]/30 flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <motion.div
                    className="text-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.span
                      className="text-[100px] block mb-2"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      🧁
                    </motion.span>
                    <p className="text-[#6E4C3B] font-[Great_Vibes] text-2xl">
                      Made with love
                    </p>
                  </motion.div>
                </motion.div>

                {/* Floating chips */}
                <motion.div
                  className="absolute -right-6 top-16 bg-white px-3 py-2 rounded-full shadow-lg border border-pink-100 text-xs font-medium text-[#6E4C3B] font-[Quicksand]"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  🧈 100% real butter
                </motion.div>
                <motion.div
                  className="absolute -left-6 bottom-20 bg-white px-3 py-2 rounded-full shadow-lg border border-pink-100 text-xs font-medium text-[#6E4C3B] font-[Quicksand]"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  🌿 No preservatives
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="bg-gradient-to-r from-[#DC8B92] to-[#CE717C] py-4 overflow-hidden">
        <motion.div
          className="flex animate-scroll whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
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
              ].map((item, idx) => (
                <motion.span
                  key={`${setIdx}-${item}`}
                  className="flex items-center gap-6 text-white font-medium font-[Quicksand] text-sm sm:text-base"
                  whileHover={{ scale: 1.1 }}
                >
                  <span>{item}</span>
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.1 }}
                  >
                    <HeartIcon className="w-3 h-3 text-white/60" />
                  </motion.span>
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Featured Bakes */}
      <section className="py-16 sm:py-24 bg-[#FBF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionDivider />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                Our{" "}
                <motion.span
                  className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl inline-block"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Favourite
                </motion.span>{" "}
                Bakes
              </h2>
              <p className="text-[#6E4C3B]/60 max-w-xl mx-auto font-[Quicksand]">
                Handpicked treats that our customers can't stop ordering. Made
                fresh every morning with lots of love.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }
                  }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all font-[Quicksand] shadow-md"
                >
                  View Full Menu
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-[#F9E2DF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <ScrollReveal>
              <div className="flex justify-center">
                <Parallax offset={30}>
                  <motion.div
                    className="relative w-72 h-72 sm:w-80 sm:h-80"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-[40px] border-2 border-dashed border-[#DC8B92]/40"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                    <div className="absolute inset-3 rounded-[36px] border-2 border-[#DC8B92]/50 bg-gradient-to-br from-[#FFFBF9] to-[#F9E2DF]/50 flex items-center justify-center">
                      <motion.div
                        className="text-center p-6"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <motion.span
                          className="text-7xl block mb-3"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 5, repeat: Infinity }}
                        >
                          👩‍🍳
                        </motion.span>
                        <p className="text-[#6E4C3B] font-[Great_Vibes] text-xl">
                          From our kitchen
                        </p>
                        <p className="text-[#6E4C3B]/60 text-sm font-[Quicksand]">
                          to your table
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </Parallax>
              </div>
            </ScrollReveal>

            {/* Story Text */}
            <ScrollReveal delay={0.2}>
              <div>
                <SectionDivider />
                <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-4 font-[Playfair_Display] text-center lg:text-left">
                  Our{" "}
                  <motion.span
                    className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl inline-block"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Sweet
                  </motion.span>{" "}
                  Story
                </h2>
                <p className="text-[#6E4C3B]/70 leading-relaxed mb-6 font-[Quicksand] text-center lg:text-left">
                  What started as weekend baking experiments in a tiny kitchen has
                  blossomed into a beloved neighborhood bakery. We believe that
                  the best treats are made with patience, quality ingredients, and
                  a whole lot of heart.
                </p>

                {/* Heart checklist */}
                <motion.ul
                  className="space-y-3 mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {[
                    "Organic, locally-sourced ingredients",
                    "No artificial preservatives or colors",
                    "Baked fresh every single morning",
                    "Recipes passed down with love",
                  ].map((item, idx) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-[#6E4C3B]/80 font-[Quicksand]"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      >
                        <HeartIcon className="w-4 h-4 text-[#DC8B92] flex-shrink-0" />
                      </motion.span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Signature */}
                <motion.p
                  className="text-[#DC8B92] font-[Great_Vibes] text-2xl mb-8 text-center lg:text-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  ~ Emma, Founder
                </motion.p>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {[
                    { value: "5+", label: "Years" },
                    { value: "50+", label: "Recipes" },
                    { value: "100%", label: "Love" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-3 bg-white/70 rounded-2xl"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <p className="text-xl font-bold text-[#B95A66] font-[Quicksand]">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[#6E4C3B]/50">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 sm:py-24 bg-[#FBF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionDivider />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                Sweet{" "}
                <motion.span
                  className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl inline-block"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Words
                </motion.span>{" "}
                from Our Customers
              </h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
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
            ].map((review, idx) => (
              <motion.div
                key={review.name}
                className="bg-[#FFFBF9] p-6 sm:p-8 rounded-3xl shadow-sm border border-pink-100/50"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="flex mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-[#DC8B92]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </motion.div>
                <p className="text-[#6E4C3B]/70 mb-6 italic leading-relaxed font-[Quicksand]">
                  "{review.text}"
                </p>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F9E2DF] to-[#DC8B92] flex items-center justify-center text-white font-bold text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#6E4C3B] text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-[#6E4C3B]/50">{review.role}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-[#F9E2DF] to-[#F2CDC9] rounded-[32px] p-8 sm:p-12 text-center relative overflow-hidden border border-[#DC8B92]/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <FloatingHearts />
              <div className="relative">
                <motion.p
                  className="text-[#DC8B92] font-[Great_Vibes] text-2xl mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Stay sweet
                </motion.p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                  Join Our Sweet Newsletter
                </h2>
                <p className="text-[#6E4C3B]/60 mb-6 font-[Quicksand] max-w-md mx-auto">
                  Get first dibs on new flavors, seasonal specials, and exclusive
                  discounts delivered to your inbox.
                </p>
                <motion.form
                  onSubmit={handleNewsletter}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-5 py-3 rounded-full border border-[#DC8B92]/30 bg-white/80 focus:bg-white focus:border-[#DC8B92] outline-none transition-all font-[Quicksand] text-sm"
                  />
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all shadow-md font-[Quicksand] text-sm whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe 💌
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
