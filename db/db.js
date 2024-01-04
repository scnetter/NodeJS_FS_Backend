require("dotenv").config();
const mongoose = require('mongoose');

const connect = async () => {
    // connect used to accept a call back but no longer does
    await mongoose.connect(process.env.mongo);
};

module.exports = { connect }