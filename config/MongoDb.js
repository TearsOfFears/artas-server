import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://artas:artas@cluster123.l4ubczc.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
