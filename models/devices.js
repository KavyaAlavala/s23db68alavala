const { Double } = require("mongodb")
const mongoose = require("mongoose")
const devicesSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 50000
    }
});
module.exports = mongoose.model("devices", 
devicesSchema)