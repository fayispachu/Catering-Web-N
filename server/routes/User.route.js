import express from "express";
import {
  createUser,
  loginUser,
  getUser,
  getAllUsers,
  updateUser,
  addItemToCart,
  removeItemFromCart,
  addBooking,
  updateNotifications,
} from "../controller/User.controller.js";

const UserRouter = express.Router();

// Auth
UserRouter.post("/register", createUser);
UserRouter.post("/login", loginUser);

// User info
UserRouter.get("/profile/:id", getUser);
UserRouter.get("/users", getAllUsers);

// Profile & Settings
UserRouter.put("/profile/:id", updateUser);
UserRouter.put("/profile/:id/notifications", updateNotifications);

// Cart / Saved Items
UserRouter.post("/profile/:id/cart/add", addItemToCart);
UserRouter.post("/profile/:id/cart/remove", removeItemFromCart);

// Bookings
UserRouter.post("/profile/:id/bookings", addBooking);

export default UserRouter;
