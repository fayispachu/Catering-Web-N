import React, { useState, useContext } from "react";
import homeImage from "../assets/homeimage.jpg";
import UserContext from "../context/UserContext";

const beverages = [
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk",
    image: homeImage,
  },
  { name: "Green Tea", desc: "Refreshing and healthy", image: homeImage },
  { name: "Lemonade", desc: "Freshly squeezed lemons", image: homeImage },
  { name: "Smoothie", desc: "Fruit blended with yogurt", image: homeImage },
  { name: "Espresso", desc: "Strong and bold coffee", image: homeImage },
  { name: "Iced Coffee", desc: "Cold and refreshing", image: homeImage },
];

function Beverages() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { user, addToCart, removeFromCart, savedItems } =
    useContext(UserContext);

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

  const handleAdd = (item) => {
    if (!user) return alert("Please login to add items!");
    if (savedItems.some((saved) => saved.name === item.name))
      return alert("Item already in cart!");
    addToCart({ ...item, quantity: 1 });
  };

  const sendWhatsApp = () => {
    if (!user) return alert("Please login to order via WhatsApp!");
    const message =
      `Hello! My name is ${user.name}.\nI would like to order the following items:\n` +
      savedItems.map((item) => `${item.name} x ${item.quantity}`).join("%0A");
    const phoneNumber = "YOUR_PHONE_NUMBER";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="p-4 pt-24">
      <h2 className="kaushan-script-regular text-4xl md:text-5xl text-center text-yellow-800 mb-10">
        Our Beverages
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col text-center p-2"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 object-cover mb-2"
            />
            <h3 className="text-md font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-xs mb-2">{item.desc}</p>

            <button
              onClick={() => handleAdd(item)}
              disabled={savedItems.some((saved) => saved.name === item.name)}
              className={`mt-1 px-2 py-1 rounded text-xs w-full
                ${
                  savedItems.some((saved) => saved.name === item.name)
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
            >
              {savedItems.some((saved) => saved.name === item.name)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {savedItems.length > 0 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={sendWhatsApp}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Order via WhatsApp
          </button>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-3">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-3 py-2">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Beverages;
