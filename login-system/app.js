const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Define routes
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
