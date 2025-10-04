import React from "react";
import { motion } from "framer-motion";
import About from "../components/About";

// Single imported image
import homeimage from "../assets/homeimage.jpg";
import Offering from "../components/Offering";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="w-full min-h-[100vh]  flex flex-col md:flex-row items-center justify-center px-6 md:px-16 overflow-hidden pt-24">
        {/* LEFT SIDE — Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left space-y-6">
          <motion.h1
            className="kaushan-script-regular text-4xl md:text-6xl text-gray-800"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Book <span className="text-[#d58936]">Nisam Catering</span> for your
            Dream Event.
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-md"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            We provide premium catering services including high-quality plates,
            spoons, bowls, catering staff (boys & girls), and a wide range of
            delicious foods — all with a luxury experience.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#d58936] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Book Now
          </motion.button>
        </div>

        {/* RIGHT SIDE — Static Star-Shaped Image Layout */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative mt-10 md:mt-0">
          {/* Center Stack: Top, Center, Bottom */}
          <div className="flex flex-col items-center">
            {/* Top Image */}
            <img
              src={homeimage}
              alt="Catering Top"
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl shadow-md border-4 border-white mb-4"
            />

            {/* Center Image */}
            <img
              src={homeimage}
              alt="Catering Center"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg z-10 border-4 border-white mb-4"
            />

            {/* Bottom Image */}
            <img
              src={homeimage}
              alt="Catering Bottom"
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl shadow-md border-4 border-white"
            />
          </div>

          {/* Left Image */}
          <img
            src={homeimage}
            alt="Catering Left"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 object-cover rounded-xl shadow-md border-4 border-white"
          />

          {/* Right Image */}
          <img
            src={homeimage}
            alt="Catering Right"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 object-cover rounded-xl shadow-md border-4 border-white"
          />
        </div>
      </div>

      <About />
      <Offering />
      <Menu />
      <Footer />
    </>
  );
}

export default Home;
