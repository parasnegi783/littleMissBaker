import { Link } from "react-router-dom";
import { HeartIcon, SectionDivider } from "../components/Decorations";
import { PageTransition } from "../components/PageTransition";
import { AnimatedSection } from "../components/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";
import { AnimatedHeading } from "../components/AnimatedText";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { MagneticButton } from "../components/MagneticButton";
import { FloatingElements } from "../components/FloatingElements";
import { GradientText } from "../components/TextReveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FBF4F0] pt-8 sm:pt-12">
        {/* Hero */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <FloatingElements />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection>
                  <SectionDivider />
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <span className="inline-block text-sm font-medium text-[#DC8B92] uppercase tracking-wider mb-4 font-[Quicksand]">
                    Our Story
                  </span>
                </AnimatedSection>
                <AnimatedHeading delay={0.2}>
                  <h1 className="text-3xl sm:text-5xl font-bold text-[#6E4C3B] mb-6 leading-tight font-[Playfair_Display]">
                    From Our Kitchen
                    <br />
                    <GradientText className="font-[Great_Vibes] text-4xl sm:text-6xl">
                      to Your Heart
                    </GradientText>
                  </h1>
                </AnimatedHeading>
                <AnimatedSection delay={0.3}>
                  <p className="text-[#6E4C3B]/70 text-lg leading-relaxed mb-6 font-[Quicksand]">
                    Little Miss Baker started in 2019 as a tiny home kitchen
                    experiment — just Emma, her grandmother's recipes, and a dream
                    of sharing joy through baking.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <p className="text-[#6E4C3B]/70 text-lg leading-relaxed font-[Quicksand]">
                    What began as weekend treats for neighbors has blossomed into a
                    beloved bakery where every item is handcrafted with organic
                    ingredients, real butter, and an unreasonable amount of love.
                  </p>
                </AnimatedSection>
              </div>
              <AnimatedSection direction="right" delay={0.3}>
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-72 h-72 sm:w-80 sm:h-80"
                  >
                    <div className="absolute inset-0 rounded-[40px] border-2 border-dashed border-[#DC8B92]/40" />
                    <div className="absolute inset-3 rounded-[36px] border-2 border-[#DC8B92]/50 bg-gradient-to-br from-[#FFFBF9] to-[#F9E2DF]/50 flex items-center justify-center">
                      <div className="text-center p-6">
                        <motion.span
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="text-7xl block mb-3"
                        >
                          👩‍🍳
                        </motion.span>
                        <p className="text-[#6E4C3B] font-[Great_Vibes] text-xl">
                          Baking since 2019
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20 bg-[#F9E2DF]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AnimatedSection>
                <SectionDivider />
              </AnimatedSection>
              <AnimatedHeading delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                  What We{" "}
                  <span className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl">
                    Believe
                  </span>
                </h2>
              </AnimatedHeading>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.2}>
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
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-8 rounded-3xl bg-[#FFFBF9] border border-pink-100/50 hover:shadow-lg hover:shadow-pink-50 transition-shadow"
                  >
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-5xl mb-6 block"
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
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 sm:py-20 bg-[#FBF4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AnimatedSection>
                <SectionDivider />
              </AnimatedSection>
              <AnimatedHeading delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                  Meet the{" "}
                  <span className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-5xl">
                    Bakers
                  </span>
                </h2>
              </AnimatedHeading>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.2}>
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
                <StaggerItem key={member.name}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="text-center bg-[#FFFBF9] p-6 rounded-3xl shadow-sm border border-pink-100/50 hover:shadow-md transition-shadow"
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#F9E2DF] to-[#DC8B92]/50 rounded-full flex items-center justify-center"
                    >
                      <span className="text-3xl">{member.emoji}</span>
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
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#DC8B92] to-[#CE717C] relative overflow-hidden">
          <FloatingElements />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <AnimatedSection delay={0.1}>
              <p className="font-[Great_Vibes] text-2xl text-white/80 mb-2">
                Come say hello!
              </p>
            </AnimatedSection>
            <AnimatedHeading delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[Playfair_Display]">
                Visit Our Bakery
              </h2>
            </AnimatedHeading>
            <AnimatedSection delay={0.3}>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto font-[Quicksand]">
                We'd love to welcome you. Stop by for a fresh coffee and something
                sweet — we promise you'll leave with a smile.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Link
                    to="/shop"
                    className="px-8 py-3 bg-white text-[#B95A66] font-bold rounded-full hover:bg-[#F9E2DF] transition-all shadow-lg font-[Quicksand]"
                  >
                    Order Online
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all font-[Quicksand]"
                  >
                    Get in Touch
                  </Link>
                </MagneticButton>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
