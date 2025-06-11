const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

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
).plugin(mongooseDelete, { overrideMethods: true });

const Customer = new mongoose.model('Customer', customerSchema);

module.exports = Customer;
