import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("MongoDB already connected");
    return;
    console.log("headers");
    
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-reai-estate",
    });
    initialized = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
