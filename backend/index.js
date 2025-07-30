// Import the Express framework to build the web server
const express = require("express");

// Import CORS middleware to allow cross-origin requests (e.g. frontend on a different port)
const cors = require("cors");

// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the route handlers for /tasks endpoints
const taskRoutes = require('./routes/tasks');

// Create an instance of the Express application
const app = express();

// Set the port from environment variable or use 4000 by default
const PORT = process.env.PORT || 4000;

// Enable CORS so the frontend (on a different origin) can make requests to this backend
app.use(cors());

// Enable parsing of JSON request bodies (so req.body works with JSON data)
app.use(express.json());

// Mount the taskRoutes module to handle all routes that start with "/tasks"
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => res.send('API running'));


// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
});
