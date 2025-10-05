import React, { useContext } from "react";
import {
  FaHeart,
  FaTrashAlt,
  FaPlus,
  FaCalendarAlt,
  FaWhatsapp,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function UserProfile() {
  const navigate = useNavigate();
  const {
    user,
    savedItems,
    bookings,
    toggleAttendance,
    removeFromCart,
    addBooking,
    logoutUser,
  } = useContext(UserContext);

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  const generateWhatsAppLink = (items) => {
    if (items.length === 0) return "#";

    let message = `Hello! My name is ${user.name}.\nI would like to book the following items:\n`;
    items.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} \n`;
    });

    const phone = "9744850680"; // Replace with your number
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="bg-white w-[100%] pt-24 md:pt-24 p-8 md:p-12 space-y-10">
        {/* User Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-6">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-red-500"
              />
            ) : (
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-red-500 text-white text-4xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-1">
                {user.name}
              </h2>
              <p className="text-gray-600 mb-1 text-lg">{user.email}</p>
              <p className="text-sm text-gray-500 capitalize">
                Role: {user.role}
              </p>
              <p className="text-sm text-gray-500">
                Attendance:{" "}
                <span
                  className={`font-bold ${
                    user.attendance ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {user.attendance ? "Present" : "Absent"}
                </span>
                <button
                  onClick={toggleAttendance}
                  className="ml-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                >
                  Toggle
                </button>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() => navigate("/edit-profile")}
              className="bg-red-600 text-white px-4 py-1 md:px-5 md:py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2 text-sm md:text-base"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-600 text-white px-4 py-1 md:px-5 md:py-2 rounded-lg hover:bg-gray-700 transition flex items-center gap-2 text-sm md:text-base"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Saved Items */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            Your Items
          </h3>
          {savedItems.length === 0 ? (
            <p className="text-gray-500">No saved items yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {savedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-gray-500 text-sm">
                      ${item.price || item.quantity || 1}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-xs"
                  >
                    <FaTrashAlt /> Remove
                  </button>
                </div>
              ))}
            </div>
          )}
          {savedItems.length > 0 && (
            <div className="mt-4 text-center">
              <a
                href={generateWhatsAppLink(savedItems)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition font-semibold"
              >
                <FaWhatsapp /> Book via WhatsApp
              </a>
            </div>
          )}
        </div>

        <hr className="border-gray-200" />

        {/* Bookings */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-red-500" /> Your Bookings
          </h3>
          {bookings.length === 0 ? (
            <p className="text-gray-500">No bookings yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {bookings.map((b, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  <div>
                    <h4 className="font-semibold text-lg">{b.event}</h4>
                    <p className="text-gray-500 text-sm">
                      Date: {new Date(b.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-500 text-sm">Guests: {b.guests}</p>
                  </div>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-xs">
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() =>
              addBooking({
                event: "New Event",
                date: new Date(),
                guests: 1,
                items: [],
              })
            }
            className="mt-4 flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition font-semibold"
          >
            <FaPlus /> Make New Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
