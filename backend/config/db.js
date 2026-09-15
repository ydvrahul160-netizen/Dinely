// Import Mongoose for MongoDB database connection
import mongoose from "mongoose";

// Create function to connect with MongoDB
const connectDb = async () => {
  try {
    // Connect to MongoDB using the URL from environment variables
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("DB connected");
  } catch (error) {
    // Handle database connection errors
    console.log("DB connection error", error.message);
  }
};

// Export database connection function
export default connectDb;