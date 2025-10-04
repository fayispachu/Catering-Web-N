import React, { useState } from "react";
import homeImage from "../assets/homeimage.jpg";

const beverages = [
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    image: homeImage,
    price: "$4",
  },
  {
    name: "Green Tea",
    desc: "Refreshing and healthy",
    image: homeImage,
    price: "$3",
  },
  {
    name: "Lemonade",
    desc: "Freshly squeezed lemons",
    image: homeImage,
    price: "$2.5",
  },
  {
    name: "Smoothie",
    desc: "Fruit blended with yogurt",
    image: homeImage,
    price: "$5",
  },
  {
    name: "Espresso",
    desc: "Strong and bold coffee",
    image: homeImage,
    price: "$3.5",
  },
  {
    name: "Iced Coffee",
    desc: "Cold and refreshing",
    image: homeImage,
    price: "$4.5",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    image: homeImage,
    price: "$4",
  },
  {
    name: "Green Tea",
    desc: "Refreshing and healthy",
    image: homeImage,
    price: "$3",
  },
  {
    name: "Lemonade",
    desc: "Freshly squeezed lemons",
    image: homeImage,
    price: "$2.5",
  },
  {
    name: "Smoothie",
    desc: "Fruit blended with yogurt",
    image: homeImage,
    price: "$5",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    image: homeImage,
    price: "$4",
  },
  {
    name: "Green Tea",
    desc: "Refreshing and healthy",
    image: homeImage,
    price: "$3",
  },
  {
    name: "Lemonade",
    desc: "Freshly squeezed lemons",
    image: homeImage,
    price: "$2.5",
  },
  {
    name: "Smoothie",
    desc: "Fruit blended with yogurt",
    image: homeImage,
    price: "$5",
  },
  {
    name: "Espresso",
    desc: "Strong and bold coffee",
    image: homeImage,
    price: "$3.5",
  },
  {
    name: "Iced Coffee",
    desc: "Cold and refreshing",
    image: homeImage,
    price: "$4.5",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    image: homeImage,
    price: "$4",
  },
  {
    name: "Green Tea",
    desc: "Refreshing and healthy",
    image: homeImage,
    price: "$3",
  },
  {
    name: "Lemonade",
    desc: "Freshly squeezed lemons",
    image: homeImage,
    price: "$2.5",
  },
  {
    name: "Smoothie",
    desc: "Fruit blended with yogurt",
    image: homeImage,
    price: "$5",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    image: homeImage,
    price: "$4",
  },
  {
    name: "Green Tea",
    desc: "Refreshing and healthy",
    image: homeImage,
    price: "$3",
  },
  {
    name: "Lemonade",
    desc: "Freshly squeezed lemons",
    image: homeImage,
    price: "$2.5",
  },
  {
    name: "Smoothie",
    desc: "Fruit blended with yogurt",
    image: homeImage,
    price: "$5",
  },
  {
    name: "Espresso",
    desc: "Strong and bold coffee",
    image: homeImage,
    price: "$3.5",
  },
  {
    name: "Iced Coffee",
    desc: "Cold and refreshing",
    image: homeImage,
    price: "$4.5",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    image: homeImage,
    price: "$4",
  },
  {
    name: "Green Tea",
    desc: "Refreshing and healthy",
    image: homeImage,
    price: "$3",
  },
  {
    name: "Lemonade",
    desc: "Freshly squeezed lemons",
    image: homeImage,
    price: "$2.5",
  },
  {
    name: "Smoothie",
    desc: "Fruit blended with yogurt",
    image: homeImage,
    price: "$5",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    image: homeImage,
    price: "$4",
  },
  {
    name: "Green Tea",
    desc: "Refreshing and healthy",
    image: homeImage,
    price: "$3",
  },
  {
    name: "Lemonade",
    desc: "Freshly squeezed lemons",
    image: homeImage,
    price: "$2.5",
  },
  {
    name: "Smoothie",
    desc: "Fruit blended with yogurt",
    image: homeImage,
    price: "$5",
  },
  {
    name: "Espresso",
    desc: "Strong and bold coffee",
    image: homeImage,
    price: "$3.5",
  },
  {
    name: "Iced Coffee",
    desc: "Cold and refreshing",
    image: homeImage,
    price: "$4.5",
  },
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    image: homeImage,
    price: "$4",
  },
  {
    name: "Green Tea",
    desc: "Refreshing and healthy",
    image: homeImage,
    price: "$3",
  },
  {
    name: "Lemonade",
    desc: "Freshly squeezed lemons",
    image: homeImage,
    price: "$2.5",
  },
  {
    name: "Smoothie",
    desc: "Fruit blended with yogurt",
    image: homeImage,
    price: "$5",
  },
  // add more as needed
];

function Beverages() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(beverages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = beverages.slice(startIndex, startIndex + itemsPerPage);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  return (
    <div className="p-4 pt-24">
      {/* Heading */}
      <h2 className="kaushan-script-regular text-4xl md:text-5xl text-center text-yellow-800 mb-10">
        Our Beverages
      </h2>

      {/* Beverages Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 object-cover"
            />
            <div className="p-2 flex flex-col flex-1 justify-between">
              <h3 className="text-md font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-xs">{item.desc}</p>
              <p className="mt-1 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination with arrows */}
      <div className="flex justify-center mt-4 space-x-3">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-300 text-gray-700 disabled:opacity-50"
        >
          ←
        </button>
        <span className="px-2 py-1">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-300 text-gray-700 disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Beverages;
