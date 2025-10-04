import React from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Users, Star } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function About() {
  // Hook to detect if stats section is in viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // 30% of the element visible
  });

  return (
    <div className="bg-neutral-100 min-h-screen py-20 px-6 md:px-16">
      {/* Heading */}
      <motion.h2
        className="kaushan-script-regular text-4xl md:text-5xl text-center text-yellow-800 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Our Services
      </motion.h2>

      {/* Service Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Tableware Service */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-4">
            <UtensilsCrossed size={50} className="text-[#d58936]" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            Premium Tableware
          </h3>
          <p className="text-gray-600">
            We provide elegant <strong>plates</strong>, <strong>spoons</strong>,{" "}
            <strong>bowls</strong> — all premium quality to make your event
            truly special.
          </p>
        </motion.div>

        {/* Catering Staff */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center mb-4">
            <Users size={50} className="text-[#d58936]" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            Professional Catering Staff
          </h3>
          <p className="text-gray-600">
            Our well-trained <strong>catering boys and girls</strong> deliver
            top-class service with a smile, ensuring your guests feel cared for.
          </p>
        </motion.div>

        {/* Food Quality */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <Star size={50} className="text-[#d58936]" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            Premium Food Experience
          </h3>
          <p className="text-gray-600">
            From traditional to modern cuisines, we serve{" "}
            <strong>premium dishes</strong> crafted with love, hygiene, and
            authentic taste.
          </p>
        </motion.div>
      </div>

      {/* STATS CARDS SECTION */}
      <div
        ref={ref} // attach the ref here
        className="w-full bg-neutral-100 py-16 flex flex-col md:flex-row items-center justify-around px-6 md:px-16 space-y-6 md:space-y-0 md:space-x-6"
      >
        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center w-full md:w-1/4"
        >
          <h2 className="text-4xl font-bold text-[#d58936]">
            {inView && <CountUp end={50} duration={2} />}+
          </h2>
          <p className="text-gray-600 mt-2">Members</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center w-full md:w-1/4"
        >
          <h2 className="text-4xl font-bold text-[#d58936]">
            {inView && <CountUp end={300} duration={2} />}+
          </h2>
          <p className="text-gray-600 mt-2">Happy Customers</p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center w-full md:w-1/4"
        >
          <h2 className="text-4xl font-bold text-[#d58936]">
            {inView && <CountUp end={80} duration={2} />}+
          </h2>
          <p className="text-gray-600 mt-2">Events Completed</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
