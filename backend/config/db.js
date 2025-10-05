import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(Process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (erorr){
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

