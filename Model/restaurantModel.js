const mongoose = require("mongoose");

const restaurantSchema = new mongoose.schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    itemsarrray: {
        type: Array,
    }
})

const itemSchema = new mongoose.schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model(restaurantSchema,itemSchema)