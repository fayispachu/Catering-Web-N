import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 overflow-hidden transition-colors duration-300 shadow-md ${
        scrolled ? "bg-white text-red-500" : "bg-red-500 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <motion.h1
          className="kaushan-script-regular text-2xl md:text-3xl tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Canopus Company
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {["home", "menu", "about", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`transition-colors ${
                scrolled
                  ? "hover:text-amber-500 text-red-500"
                  : "hover:text-amber-300 text-white"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        {/* Desktop Book Now */}
        <div className="hidden md:block">
           <Link to={"/login"}>
            {" "}
            <button
              className={`font-semibold py-2 px-6 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white text-red-500 hover:bg-gray-100"
              }`}
            >
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <X size={28} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          className={`md:hidden flex flex-col items-center space-y-6 py-6 transition-colors duration-300 ${
            scrolled ? "bg-white text-red-500" : "bg-red-500 text-white"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["home", "menu", "about", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={toggleMenu}
              className={`text-lg transition-colors ${
                scrolled
                  ? "hover:text-amber-500 text-red-500"
                  : "hover:text-amber-300 text-white"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <Link to={"/login"}>
            {" "}
            <button
              className={`font-semibold py-2 px-6 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white text-red-500 hover:bg-gray-100"
              }`}
            >
              Book Now
            </button>
          </Link>
        </motion.nav>
      )}
    </header>
  );
}

export default Header;
