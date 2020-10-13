const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require('mongoose');

// Load env
dotenv.config({ path: "./process.env" });

// Connect to database
mongoose.connect('mongodb+srv://HBTghost:HBTghost_141269@cluster0.w40mn.mongodb.net/lottery?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to Database'));

// Create express app
const app = express();

// Dev logging
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

// Lazy load routes
app.use("/api/genDateStrings", require("./routes/genDateStrings.js"))
app.use("/api/result", require("./routes/result.js"));
app.use("/lotteries", require("./server/routes/lotteries.js"));

// Handle production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

// Choose port
const port = process.env.PORT || 7070;

// Listen
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
})
