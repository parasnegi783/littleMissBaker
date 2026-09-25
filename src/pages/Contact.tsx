import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-amber-950 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question, special order request, or just want to say hello?
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Location */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 text-sm">
                    123 Baker Street
                    <br />
                    Sweet Town, ST 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600 text-sm">(555) 123-4567</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Mon–Sat: 7AM – 6PM
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-600 text-sm">
                    hello@sweetcrumbs.com
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    We reply within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🕐</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Opening Hours
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Tuesday – Friday: 7AM – 6PM</p>
                    <p>Saturday: 8AM – 5PM</p>
                    <p>Sunday: 8AM – 3PM</p>
                    <p className="text-amber-600 font-medium">
                      Monday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4 block">✅</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Question</option>
                        <option value="custom">Custom Order</option>
                        <option value="catering">Catering</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Do you accept custom cake orders?",
                    a: "Yes! We love creating custom cakes for special occasions. Please contact us at least 48 hours in advance with your requirements.",
                  },
                  {
                    q: "Do you offer delivery?",
                    a: "We offer same-day delivery for orders placed before 10 AM. Free delivery on orders over $30 within our delivery zone.",
                  },
                  {
                    q: "Are your products nut-free?",
                    a: "While we offer some nut-free options, our bakery does process nuts. Please inform us of any allergies when ordering.",
                  },
                  {
                    q: "Can I place a bulk/catering order?",
                    a: "Absolutely! We cater events of all sizes. Contact us for a custom quote based on your needs.",
                  },
                ].map((faq) => (
                  <div
                    key={faq.q}
                    className="border-b border-amber-100 pb-4 last:border-0 last:pb-0"
                  >
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
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
