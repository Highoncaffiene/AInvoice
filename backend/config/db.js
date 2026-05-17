import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://admin:123@cluster0.ben4zaz.mongodb.net/?appName=Cluster0')
  .then(() => {
    console.log("MongoDB connected successfully");
    })
}