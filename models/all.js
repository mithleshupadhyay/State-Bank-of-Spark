const mongoose = require("mongoose");

// Define the schema for the Datab model
const databSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    payment: {
        type: String,
        required: true
    }
});

// Create the Datab model based on the schema
const Datab = mongoose.model("Datab", databSchema);

module.exports = Datab;
