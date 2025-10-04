import React from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Users,
  Star,
  Coffee,
  Gift,
  ArrowBigRight,
  ArrowRight,
} from "lucide-react";

function Offering() {
  const offerings = [
    {
      icon: <UtensilsCrossed size={50} className="text-[#d58936]" />,
      title: "Premium Tableware",
      desc: "Elegant plates, spoons, bowls — all premium quality.",
      link: "/tableware",
    },
    {
      icon: <Users size={50} className="text-[#d58936]" />,
      title: "Catering Staff",
      desc: "Well-trained catering boys and girls providing excellent service.",
      link: "/staff",
    },
    {
      icon: <Star size={50} className="text-[#d58936]" />,
      title: "Delicious Foods",
      desc: "Traditional and modern dishes crafted with hygiene and love.",
      link: "/foods",
    },
    {
      icon: <Coffee size={50} className="text-[#d58936]" />,
      title: "Beverages",
      desc: "Premium drinks, teas, coffees, and juices for your guests.",
      link: "/beverage",
    },
    {
      icon: <Gift size={50} className="text-[#d58936]" />,
      title: "Event Essentials",
      desc: "Everything you need for a perfect event — luxury setup and service.",
      link: "/essentials",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-16">
      <motion.h2
        className="kaushan-script-regular text-4xl md:text-5xl text-center text-[#d58936] mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What We Offer
      </motion.h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto h-auto">
        {offerings.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg text-center cursor-pointer flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
              transition: { duration: 0.2 },
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div>
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ color: "#d58936", transition: { duration: 0.2 } }}
              >
                {item.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-2 text-gray-800"
                whileHover={{ color: "#d58936", transition: { duration: 0.2 } }}
              >
                {item.title}
              </motion.h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
            </div>

            {/* Button */}
            <motion.a
              href={item.link}
              className="bg-[#d58936] text-white font-semibold py-2 px-4 rounded-full mt-4 inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "#d58936" }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex flex-row items-center justify-center">
                Explore <ArrowRight />
              </span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Offering;
