// Import required packages
import express from "express";
import dotenv from "dotenv";

// Import database connection function
import connectDb from "./config/db.js";

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();

// Set server port from environment variable
// Use 5000 as fallback if PORT is not defined
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server started at ${port}`);

  // Connect application to MongoDB
  connectDb();
});