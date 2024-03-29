
const express = require("express");
const cors = require("cors");
const userRouter = require("../router/userRouter");
const {connect} = require('../db/db')

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
app.use("/users", userRouter);
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

// Put at end so it only gets called first run through and closes when app is shutdown
connect();
module.exports = app;