require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// FIX CORS (VERY IMPORTANT)
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// DB CONNECT
connectDB();

// ROUTES
const applicationRoutes = require("./routes/applicationRoutes");
app.use("/api/applications", applicationRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Saudi Visa Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});