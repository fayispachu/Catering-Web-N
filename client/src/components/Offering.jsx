import React from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Users,
  Star,
  Coffee,
  Gift,
  ArrowRight,
} from "lucide-react";

function Offering() {
  const offerings = [
    {
      icon: <UtensilsCrossed size={50} className="text-red-600" />,
      title: "Premium Tableware",
      desc: "Elegant plates, spoons, and bowls — crafted for luxury service.",
      link: "/tableware",
    },
    {
      icon: <Users size={50} className="text-red-600" />,
      title: "Catering Staff",
      desc: "Polite and professional staff ensuring smooth service.",
      link: "/staff",
    },
    {
      icon: <Star size={50} className="text-red-600" />,
      title: "Delicious Foods",
      desc: "A perfect blend of traditional and modern flavors.",
      link: "/foods",
    },
    {
      icon: <Coffee size={50} className="text-red-600" />,
      title: "Beverages",
      desc: "Refreshing drinks, mocktails, and premium coffee service.",
      link: "/beverage",
    },
    {
      icon: <Gift size={50} className="text-red-600" />,
      title: "Event Essentials",
      desc: "Complete setup for luxury and memorable experiences.",
      link: "/essentials",
    },
  ];

  return (
    <div className="bg-white overflow-hidden py-20 px-6 md:px-16 text-gray-800">
      {/* HEADING */}
      <motion.h2
        className="kaushan-script-regular text-4xl md:text-5xl text-center text-red-600 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What We Offer
      </motion.h2>

      {/* OFFERING GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {offerings.map((item, index) => (
          <motion.div
            key={index}
            className="bg-red-50 p-6 rounded-2xl shadow-md hover:shadow-xl text-center flex flex-col justify-between transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-red-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>

            {/* Button */}
            <motion.a
              href={item.link}
              className="bg-red-600 text-white font-medium py-2 px-4 rounded-full mt-6 inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-all duration-200"
              whileHover={{ scale: 1.08 }}
            >
              Explore <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Offering;
