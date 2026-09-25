import { useState } from "react";
import { useToast } from "../context/ToastContext";
import { HeartIcon, SectionDivider } from "../components/Decorations";

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
    <div className="min-h-screen bg-[#FBF4F0] pt-8 sm:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionDivider />
          <h1 className="text-3xl sm:text-5xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
            Get in{" "}
            <span className="text-[#DC8B92] font-[Great_Vibes] text-4xl sm:text-6xl">
              Touch
            </span>
          </h1>
          <p className="text-[#6E4C3B]/60 text-lg max-w-2xl mx-auto font-[Quicksand]">
            Questions, custom orders, or just want to say hi? We'd love to hear
            from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
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
              <div
                key={info.title}
                className="bg-[#FFFBF9] p-5 rounded-2xl shadow-sm border border-pink-100/50 flex items-start gap-4"
              >
                <div className="w-11 h-11 bg-[#F9E2DF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">{info.icon}</span>
                </div>
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
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#FFFBF9] p-6 sm:p-8 rounded-3xl shadow-sm border border-pink-100/50">
              <h2 className="text-2xl font-bold text-[#6E4C3B] mb-6 font-[Playfair_Display]">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4 block">💌</span>
                  <h3 className="text-xl font-bold text-[#6E4C3B] mb-2 font-[Quicksand]">
                    Message Sent!
                  </h3>
                  <p className="text-[#6E4C3B]/50 font-[Quicksand]">
                    Thank you! We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
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
                    </div>
                    <div>
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
                    </div>
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-md font-[Quicksand]"
                  >
                    Send Message 💌
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div className="mt-6 bg-[#FFFBF9] p-6 sm:p-8 rounded-3xl shadow-sm border border-pink-100/50">
              <h2 className="text-xl font-bold text-[#6E4C3B] mb-6 font-[Playfair_Display]">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
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
                  <div
                    key={faq.q}
                    className="border-b border-pink-100 pb-4 last:border-0 last:pb-0"
                  >
                    <h3 className="font-semibold text-[#6E4C3B] text-sm mb-1 flex items-center gap-2 font-[Quicksand]">
                      <HeartIcon className="w-3 h-3 text-[#DC8B92]" />
                      {faq.q}
                    </h3>
                    <p className="text-[#6E4C3B]/60 text-sm font-[Quicksand] pl-5">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
