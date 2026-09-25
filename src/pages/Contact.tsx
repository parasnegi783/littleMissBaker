import { useState } from "react";
import { useToast } from "../context/ToastContext";
import { HeartIcon, SectionDivider } from "../components/Decorations";
import { PageTransition } from "../components/PageTransition";
import { AnimatedSection } from "../components/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../components/StaggerContainer";
import { AnimatedHeading } from "../components/AnimatedText";
import { GradientText } from "../components/TextReveal";
import { motion } from "framer-motion";

export default function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all required fields", "error");
      return;
    }
    setSubmitted(true);
    showToast("Message sent! We'll reply within 24 hours 💌");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FBF4F0] pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <AnimatedSection>
              <SectionDivider />
            </AnimatedSection>
            <AnimatedHeading delay={0.1}>
              <h1 className="text-3xl sm:text-5xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
                Get in{" "}
                <GradientText className="font-[Great_Vibes] text-4xl sm:text-6xl">
                  Touch
                </GradientText>
              </h1>
            </AnimatedHeading>
            <AnimatedSection delay={0.2}>
              <p className="text-[#6E4C3B]/60 text-lg max-w-2xl mx-auto font-[Quicksand]">
                Questions, custom orders, or just want to say hi? We'd love to hear
                from you!
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {[
                {
                  icon: "📍",
                  title: "Visit Us",
                  lines: ["42 Rosemary Lane", "Blossom Town, BT 54321"],
                },
                {
                  icon: "📞",
                  title: "Call Us",
                  lines: ["(555) BAKE-123", "Tue–Sun: 8AM – 6PM"],
                },
                {
                  icon: "✉️",
                  title: "Email Us",
                  lines: ["hello@littlemissbaker.com", "We reply within 24h"],
                },
                {
                  icon: "🕐",
                  title: "Opening Hours",
                  lines: [
                    "Tue–Fri: 8AM – 6PM",
                    "Sat: 8AM – 5PM",
                    "Sun: 8AM – 3PM",
                    "Mon: Closed 💤",
                  ],
                },
              ].map((info) => (
                <StaggerItem key={info.title}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#FFFBF9] p-5 rounded-2xl shadow-sm border border-pink-100/50 flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-11 h-11 bg-[#F9E2DF] rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-lg">{info.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-[#6E4C3B] text-sm mb-1 font-[Quicksand]">
                        {info.title}
                      </h3>
                      {info.lines.map((line, i) => (
                        <p
                          key={i}
                          className={`text-sm ${
                            line.includes("Closed")
                              ? "text-[#DC8B92] font-medium"
                              : "text-[#6E4C3B]/60"
                          } font-[Quicksand]`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Contact Form */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
              <div className="bg-[#FFFBF9] p-6 sm:p-8 rounded-3xl shadow-sm border border-pink-100/50">
                <h2 className="text-2xl font-bold text-[#6E4C3B] mb-6 font-[Playfair_Display]">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <motion.span
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl mb-4 block"
                    >
                      💌
                    </motion.span>
                    <h3 className="text-xl font-bold text-[#6E4C3B] mb-2 font-[Quicksand]">
                      Message Sent!
                    </h3>
                    <p className="text-[#6E4C3B]/50 font-[Quicksand]">
                      Thank you! We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-xs font-medium text-[#6E4C3B]/70 mb-1.5 font-[Quicksand]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#DC8B92] focus:ring-2 focus:ring-[#F9E2DF] outline-none transition-all bg-white font-[Quicksand] text-sm"
                          placeholder="Your name"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-xs font-medium text-[#6E4C3B]/70 mb-1.5 font-[Quicksand]">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#DC8B92] focus:ring-2 focus:ring-[#F9E2DF] outline-none transition-all bg-white font-[Quicksand] text-sm"
                          placeholder="hello@example.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-xs font-medium text-[#6E4C3B]/70 mb-1.5 font-[Quicksand]">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#DC8B92] outline-none transition-all bg-white font-[Quicksand] text-sm"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="custom">Custom Order</option>
                        <option value="catering">Catering</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-xs font-medium text-[#6E4C3B]/70 mb-1.5 font-[Quicksand]">
                        Message *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-[#DC8B92] focus:ring-2 focus:ring-[#F9E2DF] outline-none transition-all bg-white resize-none font-[Quicksand] text-sm"
                        placeholder="Tell us what's on your mind..."
                      />
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-8 py-3 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all shadow-md font-[Quicksand]"
                    >
                      Send Message 💌
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* FAQ */}
          <AnimatedSection delay={0.4}>
            <div className="mt-12 bg-[#FFFBF9] p-6 sm:p-8 rounded-3xl shadow-sm border border-pink-100/50">
              <h2 className="text-xl font-bold text-[#6E4C3B] mb-6 font-[Playfair_Display]">
                Frequently Asked Questions
              </h2>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {[
                  {
                    q: "Do you accept custom cake orders?",
                    a: "Yes! We love creating custom cakes. Please contact us at least 48 hours in advance.",
                  },
                  {
                    q: "Do you offer delivery?",
                    a: "Free delivery on orders over $35. Same-day delivery for orders placed before 10 AM.",
                  },
                  {
                    q: "Are your products nut-free?",
                    a: "We offer nut-free options but our kitchen does process nuts. Please inform us of allergies.",
                  },
                  {
                    q: "Can I place a catering order?",
                    a: "Absolutely! We cater events of all sizes. Contact us for a custom quote.",
                  },
                ].map((faq) => (
                  <StaggerItem key={faq.q}>
                    <div className="border-b border-pink-100 pb-4 last:border-0 last:pb-0">
                      <h3 className="font-semibold text-[#6E4C3B] text-sm mb-1 flex items-center gap-2 font-[Quicksand]">
                        <HeartIcon className="w-3 h-3 text-[#DC8B92]" />
                        {faq.q}
                      </h3>
                      <p className="text-[#6E4C3B]/60 text-sm font-[Quicksand] pl-5">
                        {faq.a}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}
