const mongoose = require("mongoose")
var vitaminsList = ["A", "C", "D", "E", "K", "B"];
const costumeSchema = mongoose.Schema({
    color: {
        type: String,
        required: [true, "color is required"]
    },
    weight: {
        type: Number,
        max: [100, "weight should be less than 100"],
        min: [0, "weight should be greater than 0"]
    },
    vitamins: {
        type: String,
        minlength: 4,
        maxlength: 10
    }
})
module.exports = mongoose.model("vegetable", costumeSchema)