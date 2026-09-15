// Import required packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Load environment variables from .env file
dotenv.config();

// Import database connection function
import connectDb from "./config/db.js";

// Import routes
import authRouter from "./routes/auth.routes.js";



// Create Express application
const app = express();

// Set server port from environment variable
// Use 5000 as fallback if PORT is not defined
const port = process.env.PORT || 5000;

// ---------------------------------------- Middleware --------------------------------------------

// Allow frontend to communicate with backend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// Parse JSON data from requests
app.use(express.json());

// Read cookies from incoming requests
app.use(cookieParser());

// ------------------------------------------- Routes ----------------------------------------------
// Authentication routes
app.use("/api/auth", authRouter);


// ----------------------------------------- Start Server ------------------------------------------
// Start the server
app.listen(port, () => {
  console.log(`Server started at ${port}`);

  // Connect application to MongoDB
  connectDb();
});
