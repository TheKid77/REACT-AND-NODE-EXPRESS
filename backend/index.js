const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Enable CORS for the React app
app.use(cors());

// Define a simple API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the Express server!" });
});

app.get("/api/2nd", (req, res) => {
  res.json({ message: "Hello from the 2nd API Endpoint!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
