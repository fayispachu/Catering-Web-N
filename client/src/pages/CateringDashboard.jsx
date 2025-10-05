import React from "react";
import { FaBell, FaSearch, FaUserEdit, FaClipboardList } from "react-icons/fa";

function CateringDashboard() {
  const overviewData = [
    { title: "Total Staffs", value: "25", change: "+2%" },
    { title: "Active Staffs", value: "18", change: "+5%" },
    { title: "Pending Tasks", value: "7", change: "-1%" },
    { title: "Completed Tasks", value: "152", change: "+10%" },
  ];

  const staffList = [
    {
      name: "John Doe",
      role: "Delivery",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Jane Smith",
      role: "Chef",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Waiter",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      name: "Emily Davis",
      role: "Delivery",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-red-600 text-white p-6 flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-6 kaushan-script-regular">Canopus</h1>
        {[
          "Dashboard",
          "Orders",
          "Staffs",
          "Inventory",
          "Schedules",
          "Support",
          "Settings",
          "Logout",
        ].map((item) => (
          <button
            key={item}
            className="text-left p-3 rounded-xl hover:bg-red-700 transition font-medium"
          >
            {item}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search staff..."
              className="w-full p-3 pl-10 rounded-xl shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <FaBell className="text-gray-600 text-2xl" />
            <div className="flex items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-red-600"
              />
              <span className="font-semibold">Restaurant Tondura</span>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {overviewData.map((data) => (
            <div
              key={data.title}
              className="bg-white p-6 rounded-3xl shadow-lg border border-red-100"
            >
              <h4 className="text-gray-500 mb-2">{data.title}</h4>
              <p className="text-3xl font-bold mb-1">{data.value}</p>
              <span
                className={`text-sm font-medium ${
                  data.change.includes("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {data.change}
              </span>
            </div>
          ))}
        </div>

        {/* Staff List */}
        <div className="bg-white p-6 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Staff List</h3>
          <div className="flex flex-col gap-4">
            {staffList.map((staff, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-red-50 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-14 h-14 rounded-full border-2 border-red-600"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{staff.name}</h4>
                    <p className="text-gray-500">{staff.role}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
                    <FaUserEdit /> Work
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white text-red-600 border border-red-600 rounded-xl hover:bg-red-100 transition">
                    <FaClipboardList /> Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CateringDashboard;
