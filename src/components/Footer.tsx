import { Link } from "react-router-dom";
import { HeartIcon } from "./Decorations";

export default function Footer() {
  return (
    <footer className="bg-[#5D4032] text-[#FBF4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F9E2DF] to-[#DC8B92] flex items-center justify-center border-2 border-[#DC8B92]/30">
                <span className="text-xl">🧁</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-[Playfair_Display]">
                  Little Miss Baker
                </h3>
                <p className="text-xs text-[#F9E2DF]/70 tracking-widest uppercase">
                  Baked with Care
                </p>
              </div>
            </div>
            <p className="text-[#FBF4F0]/60 text-sm leading-relaxed mb-4">
              Handcrafted baked goods made with love, organic ingredients, and
              a whole lot of sweetness. Every bite tells a story.
            </p>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "Pinterest"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#6E4C3B] hover:bg-[#DC8B92] flex items-center justify-center transition-colors text-sm"
                  title={social}
                >
                  {social === "Instagram"
                    ? "📸"
                    : social === "Facebook"
                    ? "👤"
                    : "📌"}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider font-[Quicksand]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/shop", label: "Menu" },
                { to: "/about", label: "Our Story" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#FBF4F0]/60 hover:text-[#F9E2DF] transition-colors text-sm flex items-center gap-2"
                  >
                    <HeartIcon className="w-2.5 h-2.5 text-[#DC8B92]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider font-[Quicksand]">
              Our Bakes
            </h4>
            <ul className="space-y-2.5">
              {["Cupcakes", "Cakes", "Cookies", "Rolls & Pastries", "Seasonal"].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      to={`/shop?category=${cat}`}
                      className="text-[#FBF4F0]/60 hover:text-[#F9E2DF] transition-colors text-sm flex items-center gap-2"
                    >
                      <HeartIcon className="w-2.5 h-2.5 text-[#DC8B92]" />
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider font-[Quicksand]">
              Visit Us
            </h4>
            <ul className="space-y-3 text-[#FBF4F0]/60 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>
                  42 Rosemary Lane
                  <br />
                  Blossom Town, BT 54321
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>(555) BAKE-123</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>hello@littlemissbaker.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Tue–Sun: 8AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#6E4C3B] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#FBF4F0]/40 text-xs flex items-center gap-1">
            © 2024 Little Miss Baker. Made with{" "}
            <HeartIcon className="w-3 h-3 text-[#DC8B92] inline" /> and lots of
            butter.
          </p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#FBF4F0]/40 hover:text-[#F9E2DF] transition-colors text-xs"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
