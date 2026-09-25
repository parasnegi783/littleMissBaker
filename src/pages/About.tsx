import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20 sm:pt-24">
      {/* Hero */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-amber-600 uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-amber-950 mb-6 leading-tight">
                From Our Kitchen
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  to Your Table
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Sweet Crumbs started in 2018 as a small home bakery, born from a
                passion for creating authentic, wholesome baked goods. What
                began as weekend experiments in our family kitchen has grown
                into a beloved neighborhood bakery.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every morning at 4 AM, our bakers begin their craft — kneading
                dough, folding butter, and creating the aromas that fill our
                street with warmth. We believe in slow fermentation, organic
                ingredients, and the magic that happens when you give bread the
                time it deserves.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <span className="text-[100px] block mb-4">👩‍🍳</span>
                  <p className="text-amber-800 font-medium text-lg">
                    Baking with love since 2018
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="font-bold text-gray-800">Award Winning</p>
                    <p className="text-sm text-gray-500">
                      Best Local Bakery 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              What makes Sweet Crumbs special isn't just what we bake — it's how
              and why we bake it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Sustainability First",
                description:
                  "We source locally, use organic ingredients, and minimize waste. Our packaging is eco-friendly and our food scraps go to local farms.",
              },
              {
                icon: "❤️",
                title: "Made with Love",
                description:
                  "Every item is handcrafted by our passionate team. No shortcuts, no preservatives, no artificial flavors — just pure baking love.",
              },
              {
                icon: "🤝",
                title: "Community Focus",
                description:
                  "We're proud to support local farmers, donate to food banks, and sponsor community events. Your purchase makes a difference.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-amber-50 to-white border border-amber-100 hover:shadow-lg transition-shadow"
              >
                <span className="text-5xl mb-6 block">{value.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The talented bakers behind your favorite treats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Maria Santos",
                role: "Head Baker & Founder",
                emoji: "👩‍🍳",
                desc: "Trained in Paris, Maria brings 15 years of artisan baking experience.",
              },
              {
                name: "Tom Baker",
                role: "Pastry Chef",
                emoji: "👨‍🍳",
                desc: "Our cake wizard who turns every celebration into something magical.",
              },
              {
                name: "Lisa Chen",
                role: "Bread Specialist",
                emoji: "🧑‍🍳",
                desc: "Sourdough enthusiast and fermentation nerd. Our breads are her pride.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="text-center bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">{member.emoji}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {member.name}
                </h3>
                <p className="text-amber-600 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-4">
              Our Journey
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2018",
                title: "The Beginning",
                desc: "Started baking from home, selling at local farmers markets on weekends.",
              },
              {
                year: "2019",
                title: "First Storefront",
                desc: "Opened our first shop on Baker Street with just 3 employees.",
              },
              {
                year: "2021",
                title: "Growing the Family",
                desc: "Expanded our team and launched our online ordering system.",
              },
              {
                year: "2023",
                title: "Award Recognition",
                desc: "Won 'Best Local Bakery' and expanded our menu to 50+ items.",
              },
              {
                year: "2024",
                title: "Going Digital",
                desc: "Launched our e-commerce platform to serve customers beyond our neighborhood.",
              },
            ].map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {index < 4 && (
                    <div className="w-0.5 flex-1 bg-amber-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm text-amber-600 font-medium">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Come Visit Us!
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our bakery. Stop by for a fresh coffee
            and something delicious.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="px-8 py-3 bg-white text-amber-700 font-bold rounded-full hover:bg-amber-50 transition-all hover:scale-105 shadow-lg"
            >
              Order Online
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
