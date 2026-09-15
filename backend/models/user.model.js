import mongoose from "mongoose";

// Define user schema
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
    },

    mobile: {
      type: String,
      required: true,
    },

    // Define user roles
    role: {
      type: String,
      enum: ["user", "owner", "deliveryBoy"],
      required: true,
    },
  },

  // track user create time
  { timestamps: true },
);

// Create User model
const User = mongoose.model("User", userSchema);

export default User;