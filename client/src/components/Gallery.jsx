import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import foodimage from "../assets/food.webp";

const images = [
  foodimage,
  foodimage,
  foodimage,
  foodimage,
  foodimage,
  foodimage,
  foodimage,
  foodimage,
  foodimage,
  foodimage,
  foodimage,
  foodimage,
];

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(4); // initially show 4 images

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, images.length));
  };

  return (
    <div id="gallery" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-12">
        <AnimatePresence>
          {images.slice(0, visibleCount).map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {visibleCount < images.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;

