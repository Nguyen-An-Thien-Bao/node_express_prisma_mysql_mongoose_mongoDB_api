const mongoose = require('mongoose');

const drink = new mongoose.Schema({
    name: String,
    price: {
        type: Number,
        default: 0,
    },
});

const Drink = new mongoose.model('Drinks', drink);
module.exports = Drink;
