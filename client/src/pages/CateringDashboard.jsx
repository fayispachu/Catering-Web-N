import React, { useState, useEffect } from "react";
import {
  FaBell,
  FaSearch,
  FaUserEdit,
  FaClipboardList,
  FaCheck,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const currentUser = {
  name: "Jane Smith",
  role: "Staff",
};

function CateringDashboard() {
  const [overviewData] = useState([
    { title: "Total Staffs", value: "25", change: "+2%" },
    { title: "Active Staffs", value: "18", change: "+5%" },
    { title: "Pending Tasks", value: "7", change: "-1%" },
    { title: "Completed Tasks", value: "152", change: "+10%" },
  ]);

  const [staffList] = useState([
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
  ]);

  const [attendance, setAttendance] = useState({});
  const [workList, setWorkList] = useState([
    {
      id: 1,
      title: "Prepare Appetizers",
      assignedTo: "John Doe",
      status: "Pending",
    },
    {
      id: 2,
      title: "Check Inventory",
      assignedTo: "Jane Smith",
      status: "Pending",
    },
  ]);

  const [newWork, setNewWork] = useState({ title: "", assignedTo: "" });
  const [activeSidebar, setActiveSidebar] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false); // toggle state

  useEffect(() => {
    const readyStaff = staffList.find((s) => attendance[s.name]);
    setNewWork((prev) => ({
      ...prev,
      assignedTo: readyStaff ? readyStaff.name : "",
    }));
  }, [attendance, staffList]);

  const handleReadyToWork = (name) => {
    setAttendance({ ...attendance, [name]: !attendance[name] });
  };

  const handleAddWork = () => {
    if (!newWork.title.trim() || !newWork.assignedTo) return;
    setWorkList([
      ...workList,
      { id: Date.now(), ...newWork, status: "Pending" },
    ]);
    setNewWork({ ...newWork, title: "" });
  };

  const handleCompleteWork = (id) => {
    setWorkList(
      workList.map((w) => (w.id === id ? { ...w, status: "Completed" } : w))
    );
  };

  const sidebarItems =
    currentUser.role === "Admin"
      ? [
          "Dashboard",
          "Orders",
          "Staffs",
          "Inventory",
          "Schedules",
          "Works",
          "Support",
          "Settings",
          "Logout",
        ]
      : ["Dashboard", "Schedules", "Works", "Support", "Logout"];

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside
        className={`
          bg-red-600 min-h-[100vh] h-full text-white p-6 flex flex-col gap-6
          md:w-64 md:flex-shrink-0 md:relative
          fixed top-0 left-0  w-64 z-50 transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex justify-between items-center md:block">
          <h1 className="text-3xl font-bold mb-6 kaushan-script-regular">
            Canopus
          </h1>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        {sidebarItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              setActiveSidebar(item);
              setSidebarOpen(false);
            }}
            className={`text-left p-3 rounded-xl font-medium transition ${
              activeSidebar === item
                ? "bg-red-700 shadow-lg"
                : "hover:bg-red-700"
            }`}
          >
            {item}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-0">
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-start mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl text-red-600"
          >
            <FaBars />
          </button>
        </div>

        {/* Navbar */}
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
              <span className="font-semibold">{currentUser.name}</span>
            </div>
          </div>
        </div>

        {/* Dashboard Overview */}
        {activeSidebar === "Dashboard" && (
          <>
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
                      data.change.includes("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {data.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Staff Attendance */}
            <div className="bg-white p-6 mb-6 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Staff Attendance</h3>
              <div className="flex flex-col gap-2">
                {staffList.map((staff) => (
                  <div
                    key={staff.name}
                    className={`flex items-center justify-between p-4 rounded-2xl transition ${
                      attendance[staff.name] ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-14 h-14 rounded-full"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{staff.name}</h4>
                        <p className="text-gray-500">{staff.role}</p>
                      </div>
                    </div>
                    <div>
                      {currentUser.role === "Admin" ? (
                        <div className="flex gap-2">
                          <button className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700">
                            <FaUserEdit /> Work
                          </button>
                          <button className="flex items-center gap-2 px-3 py-2 bg-white text-red-600 border border-red-600 rounded-xl hover:bg-red-100">
                            <FaClipboardList /> Details
                          </button>
                        </div>
                      ) : staff.name === currentUser.name ? (
                        <button
                          onClick={() => handleReadyToWork(staff.name)}
                          className={`px-4 py-2 rounded-xl font-semibold text-white ${
                            attendance[staff.name]
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-red-500 hover:bg-red-600"
                          }`}
                        >
                          {attendance[staff.name]
                            ? "Ready to Work"
                            : "Mark Attendance"}
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Work Management */}
        {activeSidebar === "Works" && (
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Work Management</h3>

            {currentUser.role === "Admin" && (
              <div className="flex gap-4 mb-4 flex-wrap">
                <input
                  type="text"
                  placeholder="Work title"
                  value={newWork.title}
                  onChange={(e) =>
                    setNewWork({ ...newWork, title: e.target.value })
                  }
                  className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <select
                  value={newWork.assignedTo}
                  onChange={(e) =>
                    setNewWork({ ...newWork, assignedTo: e.target.value })
                  }
                  className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  {staffList
                    .filter((s) => attendance[s.name])
                    .map((staff) => (
                      <option key={staff.name} value={staff.name}>
                        {staff.name}
                      </option>
                    ))}
                </select>
                <button
                  onClick={handleAddWork}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
                >
                  Add
                </button>
              </div>
            )}

            <div className="flex flex-col gap-4">
              {workList.map((work) => (
                <div
                  key={work.id}
                  className="flex items-center justify-between p-4 rounded-2xl shadow bg-red-50"
                >
                  <div>
                    <h4 className="text-lg font-semibold">{work.title}</h4>
                    <p className="text-gray-500">
                      Assigned to: {work.assignedTo} | Status: {work.status}
                    </p>
                  </div>
                  <div>
                    {(currentUser.role === "Admin" ||
                      work.assignedTo === currentUser.name) &&
                      work.status === "Pending" && (
                        <button
                          onClick={() => handleCompleteWork(work.id)}
                          className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
                        >
                          <FaCheck /> Complete
                        </button>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CateringDashboard;
