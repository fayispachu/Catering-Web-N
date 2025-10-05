import React from "react";
import { motion } from "framer-motion";

const ratings = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "Excellent service! The team was very professional and attentive. I would definitely recommend them to friends and family.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment:
      "Very good experience overall. Some small delays, but the staff handled everything gracefully.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 5,
    comment:
      "Highly recommend! The attention to detail was amazing, and the quality exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 4,
    name: "Bob Lee",
    rating: 3,
    comment:
      "It was okay. The service was decent but there were a few issues with timing and coordination.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: 5,
    name: "Maria Garcia",
    rating: 5,
    comment:
      "Loved it! Everything from start to finish was seamless. Great team and fantastic results.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

function Ratings() {
  return (
    <div className="overflow-hidden w-full py-16 bg-red-500">
      {/* Heading and Description */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          What Our Customers Say
        </h2>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
          We value our customers and always strive to provide the best service.
          Here's what some of our happy clients have to say about their
          experience with us.
        </p>
      </div>

      {/* Ratings Scroll */}
      <motion.div
        className="flex gap-8 px-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {ratings.concat(ratings).map((r) => (
          <div
            key={r.id + Math.random()}
            className="min-w-[320px] md:min-w-[360px] bg-white p-6 rounded-3xl shadow-lg flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={r.image}
                alt={r.name}
                className="w-14 h-14 rounded-full border-2 border-red-500"
              />
              <div>
                <h4 className="font-bold text-xl md:text-2xl">{r.name}</h4>
                <div className="flex gap-1 text-yellow-400 mt-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {r.comment}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Ratings;
