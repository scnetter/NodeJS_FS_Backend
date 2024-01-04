require("dotenv").config();
const mongoose = require('mongoose');

const connect = async () => {
    // connect used to accept a call back but no longer does
    await mongoose.connect(process.env.mongo);
};

mongoose.connection.on('connected', () => console.log(`mongoDb connected - ${process.env.mongo}`));
mongoose.connection.on('disconnected', () => console.log('mongooseDb disconnected'));
mongoose.connection.on('disconnecting', () => console.log('mongoDb disconnecting'));

module.exports = { connect }