const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
require('dotenv').config();

const connection = mongoose.connect(process.env.mongouRL);

module.exports = {
    connection
}