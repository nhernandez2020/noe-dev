// Dependencies
const express = require("express");
const path = require("path");

// Initialize Express
const app = express();

// Port for server
const PORT = process.env.PORT || 4200;

// Route
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Set Static Folder to the current file path
app.use(express.static(__dirname));

// Start server
app.listen(PORT, () => {
  console.log("Server running on http://127.0.0.1:" + PORT);
});
