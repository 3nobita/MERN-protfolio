require("dotenv").config(); // Load environment variables at the top

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; 

app.use(express.json());
app.use(cors());

if (!MONGO_URI) {
  console.error("MONGO_URI is missing in .env file");
  process.exit(1); // Stop the app if MongoDB URI is not found
}
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


// Routes
app.get("/", (req, res) => {
  res.send("MERN Backend Running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
