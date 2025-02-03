const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// ogundelekm

// AQBkDR9zMBzWDzml

// mongodb+srv://ogundelekm:AQBkDR9zMBzWDzml@cluster0.qlkeg.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0
