const mongoose = require("mongoose");
const Transaction = require("./transaction");

// Define the customer schema
const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    balance: Number, // Customer's balance
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction" // Reference to the Transaction model
    }],
    avatar: String, // Customer's avatar
    contact: Number, // Customer's contact number
    about: String // Information about the customer
});

// Create the Customer model based on the schema
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
