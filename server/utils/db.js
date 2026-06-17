import mongoose from "mongoose";


const connectDB = async () => {
  try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB Connected ✅");
} catch (error) {
  console.log("Failed to Connect MongoDB ❌");
  console.error(error.message);
}
};

export default connectDB;
