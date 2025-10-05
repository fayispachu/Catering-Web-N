import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["Admin", "Staff"],
      default: "Staff",
    },
    attendance: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: "",
    },

    // 🛒 Saved Items / Cart
    savedItems: [
      {
        name: { type: String, required: true },
        desc: { type: String },
        image: { type: String },
      },
    ],

    // 📅 Bookings / Events
    bookings: [
      {
        event: { type: String, required: true },
        date: { type: Date, required: true },
        guests: { type: Number, default: 1 },
        items: [
          {
            name: String,
            desc: String,
          },
        ],
      },
    ],

    // 🔔 Optional Notification Preferences
    notifications: {
      email: { type: Boolean, default: true },
      whatsapp: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
