import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { useState } from "react";
import { HeartIcon } from "./Decorations";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { totalItems } = useCart();
  const { user, logout, isLoggedIn } = useAuth();
  const { showToast } = useToast();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Menu" },
    { path: "/about", label: "Our Story" },
    { path: "/contact", label: "Contact" },
  ];

  const handleLogout = () => {
    logout();
    showToast("See you soon, sweetie! 💕", "info");
    setUserMenuOpen(false);
  };

  return (
    <>
      {/* Announcement Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#DC8B92] to-[#CE717C] text-white text-center py-2 text-xs sm:text-sm font-medium tracking-wide"
      >
        <span className="inline-flex items-center gap-2">
          <HeartIcon className="w-3 h-3" />
          Free delivery on orders over $35 ✨ Use code SWEET15 for 15% off
          <HeartIcon className="w-3 h-3" />
        </span>
      </motion.div>

      {/* Main Header */}
      <nav className="sticky top-0 z-50 bg-[#FFFBF9]/95 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#F9E2DF] to-[#DC8B92] flex items-center justify-center border-2 border-[#DC8B92]/30 shadow-sm group-hover:shadow-md"
              >
                <span className="text-lg sm:text-xl">🧁</span>
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#6E4C3B] font-[Playfair_Display] leading-tight">
                  Little Miss Baker
                </h1>
                <p className="text-[10px] text-[#DC8B92] tracking-widest uppercase font-[Quicksand]">
                  Baked with Care
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium font-[Quicksand] transition-colors relative py-1 ${
                    isActive(link.path)
                      ? "text-[#B95A66]"
                      : "text-[#6E4C3B]/70 hover:text-[#B95A66]"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#DC8B92] rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 rounded-full hover:bg-pink-50 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-[#6E4C3B] group-hover:text-[#B95A66] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-[#DC8B92] text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>

              {/* Auth Buttons */}
              {isLoggedIn ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#F9E2DF] to-[#DC8B92] flex items-center justify-center text-white font-bold text-sm border-2 border-[#DC8B92]/30 hover:shadow-md"
                  >
                    {user?.initial}
                  </motion.button>
                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-pink-100 py-2 z-50"
                      >
                        <div className="px-4 py-2 border-b border-pink-50">
                          <p className="font-medium text-[#6E4C3B] text-sm">
                            {user?.name}
                          </p>
                          <p className="text-xs text-[#6E4C3B]/50">
                            {user?.email}
                          </p>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-[#6E4C3B] hover:bg-pink-50 transition-colors"
                        >
                          Log out 💕
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="hidden sm:flex items-center gap-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-[#6E4C3B] hover:text-[#B95A66] transition-colors font-[Quicksand]"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="px-5 py-2 bg-[#DC8B92] hover:bg-[#B95A66] text-white text-sm font-medium rounded-full transition-all hover:shadow-md hover:scale-105 font-[Quicksand]"
                  >
                    Sign up
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#6E4C3B]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#FFFBF9] border-t border-pink-100 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium font-[Quicksand] transition-colors ${
                        isActive(link.path)
                          ? "bg-pink-50 text-[#B95A66]"
                          : "text-[#6E4C3B]/70 hover:bg-pink-50 hover:text-[#B95A66]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                {!isLoggedIn && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="pt-3 border-t border-pink-100 flex gap-2"
                  >
                    <Link
                      to="/login"
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-[#6E4C3B] border border-pink-200 rounded-full"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-white bg-[#DC8B92] rounded-full"
                    >
                      Sign up
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
