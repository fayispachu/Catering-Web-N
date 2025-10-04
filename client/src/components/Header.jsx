import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // modern icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#d58936] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo / Brand */}
        <motion.h1
          className="kaushan-script-regular text-2xl md:text-3xl tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nisam Catering
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-amber-300 transition-colors">
            Home
          </a>
          <a href="#menu" className="hover:text-amber-300 transition-colors">
            Menu
          </a>
          <a href="#about" className="hover:text-amber-300 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-amber-300 transition-colors">
            Contact
          </a>
        </nav>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-white text-[#d58936] font-semibold py-2 px-6 rounded-full transition-all duration-300">
            Book Now
          </button>
          {/* 1 */}
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
          className="md:hidden bg-yellow-900 flex flex-col items-center space-y-6 py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="#home"
            onClick={toggleMenu}
            className="hover:text-amber-300 text-lg"
          >
            Home
          </a>
          <a
            href="#menu"
            onClick={toggleMenu}
            className="hover:text-amber-300 text-lg"
          >
            Menu
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="hover:text-amber-300 text-lg"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-amber-300 text-lg"
          >
            Contact
          </a>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300">
            Book Now
          </button>
        </motion.nav>
      )}
    </header>
  );
}

export default Header;
