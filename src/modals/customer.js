const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    { timestamps: true },
);

const Customer = new mongoose.model('Customer', customerSchema);

module.exports = Customer;
