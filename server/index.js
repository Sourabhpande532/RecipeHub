require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const PORT = process.env.PORT || 8001;

const corsOption = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors(corsOption));
app.use(morgan("dev"));

// APP ROUTES
app.use("/api", require("./routes/recipe"));

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to server routing library</h1>`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => console.error(error));

app.listen(PORT, () => {
  console.log(`The server running at http://localhost:${PORT}`);
});
