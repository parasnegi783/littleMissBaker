import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🧁</span>
              <div>
                <h3 className="text-xl font-bold text-white">Sweet Crumbs</h3>
                <p className="text-xs text-amber-400 tracking-widest uppercase">
                  Artisan Bakery
                </p>
              </div>
            </div>
            <p className="text-amber-300/70 text-sm leading-relaxed">
              Handcrafted baked goods made with love, organic ingredients, and
              time-honored techniques since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/shop", label: "Shop" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-amber-300/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2">
              {["Breads", "Cakes", "Pastries", "Cookies", "Seasonal"].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      to={`/shop?category=${cat}`}
                      className="text-amber-300/70 hover:text-white transition-colors text-sm"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Visit Us
            </h4>
            <ul className="space-y-3 text-amber-300/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>
                  123 Baker Street
                  <br />
                  Sweet Town, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>hello@sweetcrumbs.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Tue–Sun: 7AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-amber-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-amber-400/60 text-xs">
            © 2024 Sweet Crumbs Bakery. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Instagram", "Facebook", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-amber-400/60 hover:text-white transition-colors text-xs"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
