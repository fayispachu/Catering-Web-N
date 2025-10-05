import { createContext, useState, useEffect } from "react";
import AxiosInstance from "../lib/axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null when not logged in
  const [savedItems, setSavedItems] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [notifications, setNotifications] = useState({
    email: true,
    whatsapp: true,
  });

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setSavedItems(parsedUser.savedItems || []);
      setBookings(parsedUser.bookings || []);
      setNotifications(
        parsedUser.notifications || { email: true, whatsapp: true }
      );
      fetchUserData(parsedUser._id);
    }
  }, []);

  // Fetch latest user data from backend
  const fetchUserData = async (userId) => {
    try {
      const res = await AxiosInstance.get(`/user/profile/${userId}`);
      if (res.data) {
        setUser(res.data);
        console.log(res.data, "fetched user data");

        setSavedItems(res.data.savedItems || []);
        setBookings(res.data.bookings || []);
        setNotifications(
          res.data.notifications || { email: true, whatsapp: true }
        );
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  // Register user
  const registerUser = async (userData) => {
    try {
      const res = await AxiosInstance.post("/user/register", userData);
      const newUser = res.data.user;
      setUser(newUser);
      setSavedItems(newUser.savedItems || []);
      setBookings(newUser.bookings || []);
      setNotifications(
        newUser.notifications || { email: true, whatsapp: true }
      );
      localStorage.setItem("user", JSON.stringify(newUser));
      return newUser; // caller can handle navigation
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err);
      throw err;
    }
  };

  // Login user
  const loginUser = async (email, password) => {
    try {
      const res = await AxiosInstance.post("/user/login", { email, password });
      if (res.status === 200) {
        const loggedInUser = res.data.user;
        setUser(loggedInUser);
        setSavedItems(loggedInUser.savedItems || []);
        setBookings(loggedInUser.bookings || []);
        setNotifications(
          loggedInUser.notifications || { email: true, whatsapp: true }
        );
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        return loggedInUser; // caller can navigate
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err);
      throw err;
    }
  };

  // Toggle attendance locally (can add backend patch if needed)
  const toggleAttendance = () => {
    setUser((prev) => ({ ...prev, attendance: !prev.attendance }));
  };

  // Add item to cart
  const addToCart = async (item) => {
    if (!user) return;
    try {
      const res = await AxiosInstance.post(
        `/user/profile/${user._id}/cart/add`,
        item
      );
      setSavedItems(res.data.savedItems);
    } catch (err) {
      console.error("Add to cart failed:", err);
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemName) => {
    if (!user) return;
    try {
      const res = await AxiosInstance.post(
        `/user/profile/${user._id}/cart/remove`,
        { itemName }
      );
      setSavedItems(res.data.savedItems);
    } catch (err) {
      console.error("Remove from cart failed:", err);
    }
  };

  // Add a booking
  const addBooking = async (bookingData) => {
    if (!user) return;
    try {
      const res = await AxiosInstance.post(
        `/user/profile/${user._id}/bookings`,
        bookingData
      );
      setBookings(res.data.bookings);
    } catch (err) {
      console.error("Add booking failed:", err);
    }
  };

  // Update notification preferences
  const updateNotifications = async (prefs) => {
    if (!user) return;
    try {
      const res = await AxiosInstance.put(
        `/user/profile/${user._id}/notifications`,
        prefs
      );
      setNotifications(res.data.notifications);
    } catch (err) {
      console.error("Update notifications failed:", err);
    }
  };

  // Logout
  const logoutUser = () => {
    setUser(null);
    setSavedItems([]);
    setBookings([]);
    setNotifications({ email: true, whatsapp: true });
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        savedItems,
        bookings,
        notifications,
        setUser,
        registerUser,
        loginUser,
        toggleAttendance,
        addToCart,
        removeFromCart,
        addBooking,
        updateNotifications,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
