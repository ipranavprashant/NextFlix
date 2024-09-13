import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const conString = process.env.MONGODB_URL;

    if (!conString) {
      throw new Error(
        "Please define the MONGO_URL environment variable inside .env.local"
      );
    }

    console.log("Creating a new MongoDB connection...");
    cached.promise = mongoose
      .connect(conString, {
        autoIndex: true,
        // Optional: If using deprecated options, remove them as they are not needed in newer versions
      })
      .then((mongoose) => {
        console.log("MongoDB connection successful!");
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connection is established");
  } catch (e) {
    cached.promise = null;
    console.error("Error establishing MongoDB connection:", e);
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
