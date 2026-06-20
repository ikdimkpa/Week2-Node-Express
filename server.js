// Import modules
const express = require("express");
require("dotenv").config();

// Create Express app
const app = express();

// Get port from environment variables
const PORT = process.env.PORT || 5000;


// Middleware: Logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


// Middleware: JSON parsing
app.use(express.json());


// Serve static files from public folder
app.use(express.static("public"));


// Routes

// GET /
app.get("/", (req, res) => {
    res.send("My Week 2 API!");
});


// POST /user
app.post("/user", (req, res) => {

    const { name, email } = req.body;


    // Check missing data
    if (!name || !email) {
        return res.status(404).json({
            error: "Missing user data"
        });
    }


    res.json({
        message: `Hello, ${name}!`
    });
});


// GET /user/:id
app.get("/user/:id", (req, res) => {

    const { id } = req.params;

    res.send(`User ${id} profile`);
});


// Unknown routes error handler
app.use((req, res) => {

    res.status(404).json({
        error: "Route not found"
    });

});


// Start server
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
