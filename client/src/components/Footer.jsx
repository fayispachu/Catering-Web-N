import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-red-600 overflow-hidden text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold kaushan-script-regular ">
            Canopus Catering
          </h1>
          <p className="mt-2 text-gray-200">
            Premium catering for weddings, parties, and special events.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">
                Menu
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-1">
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">
                FAQ
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a
            href="#"
            className="p-3 bg-white text-red-600 rounded-full hover:bg-yellow-400 hover:text-white transition-all transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-3 bg-white text-red-600 rounded-full hover:bg-yellow-400 hover:text-white transition-all transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-3 bg-white text-red-600 rounded-full hover:bg-yellow-400 hover:text-white transition-all transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-3 bg-white text-red-600 rounded-full hover:bg-yellow-400 hover:text-white transition-all transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-200 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Canopus Catering. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
