import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeartIcon, SectionDivider } from "../components/Decorations";
import { ScrollReveal } from "../utils/animations";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FBF4F0] pt-8 sm:pt-12">
      {/* Hero */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionDivider />
              <span className="inline-block text-sm font-medium text-[#DC8B92] uppercase tracking-wider mb-4 font-[Quicksand]">
                Our Story
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-[#6E4C3B] mb-6 leading-tight font-[Playfair_Display]">
                From Our Kitchen
                <br />
                <motion.span
                  className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-6xl inline-block"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                >
                  to Your Heart
                </motion.span>
              </h1>
              <motion.p
                className="text-[#6E4C3B]/70 text-lg leading-relaxed mb-6 font-[Quicksand]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Little Miss Baker started in 2019 as a tiny home kitchen
                experiment — just Emma, her grandmother's recipes, and a dream
                of sharing joy through baking.
              </motion.p>
              <motion.p
                className="text-[#6E4C3B]/70 text-lg leading-relaxed font-[Quicksand]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                What began as weekend treats for neighbors has blossomed into a
                beloved bakery where every item is handcrafted with organic
                ingredients, real butter, and an unreasonable amount of love.
              </motion.p>
            </motion.div>
            <ScrollReveal>
              <div className="flex justify-center">
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
                        Baking since 2019
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-[#F9E2DF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionDivider />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                What We{" "}
                <motion.span
                  className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl inline-block"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Believe
                </motion.span>
              </h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                icon: "🌱",
                title: "Real Ingredients",
                desc: "Organic flour, real butter, free-range eggs. No shortcuts, no preservatives, no artificial anything.",
              },
              {
                icon: "💕",
                title: "Made with Love",
                desc: "Every item is handcrafted by our small team. We put our hearts into every batch because you deserve the best.",
              },
              {
                icon: "🌍",
                title: "Kind to the Planet",
                desc: "Eco-friendly packaging, local sourcing, and zero food waste. We believe sweetness shouldn't cost the earth.",
              },
            ].map((value) => (
              <motion.div
                key={value.title}
                className="text-center p-8 rounded-3xl bg-[#FFFBF9] border border-pink-100/50"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.span
                  className="text-5xl mb-6 block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {value.icon}
                </motion.span>
                <h3 className="text-xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                  {value.title}
                </h3>
                <p className="text-[#6E4C3B]/60 leading-relaxed font-[Quicksand]">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 bg-[#FBF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionDivider />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                Meet the{" "}
                <motion.span
                  className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl inline-block"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Bakers
                </motion.span>
              </h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
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
                name: "Emma Rose",
                role: "Founder & Head Baker",
                emoji: "👩‍🍳",
                desc: "Trained in Paris, fueled by passion. Emma's sourdough starter is older than most of our customers!",
              },
              {
                name: "Oliver Sweet",
                role: "Pastry Artist",
                emoji: "👨‍🍳",
                desc: "Our cake decorator extraordinaire. If it's beautiful AND delicious, Oliver probably made it.",
              },
              {
                name: "Lily Chen",
                role: "Cookie Specialist",
                emoji: "🧑‍🍳",
                desc: "Cookie scientist and flavor innovator. She's the genius behind our seasonal specials.",
              },
            ].map((member) => (
              <motion.div
                key={member.name}
                className="text-center bg-[#FFFBF9] p-6 rounded-3xl shadow-sm border border-pink-100/50"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#F9E2DF] to-[#DC8B92]/50 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <motion.span
                    className="text-3xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {member.emoji}
                  </motion.span>
                </motion.div>
                <h3 className="font-bold text-[#6E4C3B] font-[Playfair_Display]">
                  {member.name}
                </h3>
                <p className="text-[#DC8B92] text-sm font-medium mb-2 font-[Quicksand]">
                  {member.role}
                </p>
                <p className="text-[#6E4C3B]/50 text-sm font-[Quicksand]">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#DC8B92] to-[#CE717C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-[Great_Vibes] text-2xl text-white/80 mb-2">
              Come say hello!
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[Playfair_Display]">
              Visit Our Bakery
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto font-[Quicksand]">
              We'd love to welcome you. Stop by for a fresh coffee and something
              sweet — we promise you'll leave with a smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/shop"
                  className="px-8 py-3 bg-white text-[#B95A66] font-bold rounded-full hover:bg-[#F9E2DF] transition-all shadow-lg font-[Quicksand]"
                >
                  Order Online
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all font-[Quicksand]"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
