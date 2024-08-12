const express = require("express");
const app = express();
const port = 3000;

// Middleware to handle JSON bodies
app.use(express.json());

// Define a simple API endpoint
app.get("/api", (req, res) => {
  res.send({ message: "Hello from the Node.js backend!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
