const mongoose = require("mongoose");

// Define the schema for the Transaction model
const transactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: String,
    comment: String
});

// Create the Transaction model based on the schema
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;