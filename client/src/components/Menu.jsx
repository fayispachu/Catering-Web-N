import React, { useState } from "react";
import { motion } from "framer-motion";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starter");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const categories = [
    "Starter",
    "Main Course",
    "Drinks",
    "Offers",
    "Our Special",
  ];

  const menuItems = {
    Starter: [
      {
        name: "Paneer",
        desc: "Delicious paneer starter with spices.",
        price: "$90",
        img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Sweet Potato",
        desc: "Crispy sweet potato fries.",
        price: "$80",
        img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Sabudana Tikki",
        desc: "Light and crispy tikki.",
        price: "$70",
        img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Pizza",
        desc: "Cheesy delight with toppings.",
        price: "$120",
        img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Bacon",
        desc: "Crispy bacon strips.",
        price: "$110",
        img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=200&q=80",
      },
    ],
    // Add other categories here...
  };

  const totalItems = menuItems[activeCategory]?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = menuItems[activeCategory]?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-red-500 text-white overflow-hidden relative">
      <h2 className="kaushan-script-regular text-4xl md:text-5xl text-center mb-10">
        Catering Menu
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-200 ${
              activeCategory === cat
                ? "bg-white text-red-500 border-white"
                : "border-white text-white hover:bg-white hover:text-red-500"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Menu Items */}
      <motion.div
        key={activeCategory + currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {currentItems?.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between gap-4 p-4 border-b border-dotted border-white transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            </div>
            <span className="text-white font-bold">{item.price}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-3">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-white text-red-500 disabled:opacity-50 hover:bg-white/80 transition-colors"
          >
            Prev
          </button>
          <span className="px-3 py-2">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-white text-red-500 disabled:opacity-50 hover:bg-white/80 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
