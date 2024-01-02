
const express = require("express");
const cors = require("cors");

// Request listener
const app = express();
// use middleware to form contract for incoming JSON payloads only
app.use(express.json());


// use middleware for urlencoded payloads only
app.use(express.urlencoded({ extended: true }))

// use middleware for CORS policy - Cross Origin Resource Sharing
app.use(cors());

// Health check endpoint
app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Service is up and running"
    });
})

// routers

// Unknown or bad endpoints
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json(
        {
            error: {
                message: error.message,
                status: error.status,
        },
    });
});

// DB connection will go here

module.exports = app;