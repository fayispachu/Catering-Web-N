import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#d58936]  text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Branding */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl font-bold">MyCatering</h1>
          <p className="mt-2 ">Delicious food delivered with love and care.</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                Menu
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                FAQ
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a
            href="#"
            className="p-3 bg-yellow-800 text-white rounded-full hover:bg-yellow-400 transition-all transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-3 bg-yellow-800 text-white rounded-full hover:bg-yellow-400 transition-all transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-3 bg-yellow-800 text-white rounded-full hover:bg-yellow-400 transition-all transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-3 bg-yellow-800 text-white rounded-full hover:bg-yellow-400 transition-all transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="text-center text-yellow-200 mt-8">
        &copy; {new Date().getFullYear()} MyCatering. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
