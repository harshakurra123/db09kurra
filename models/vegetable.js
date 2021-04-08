const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
color: String,
weight: Number,
vitamins: String
})
module.exports = mongoose.model("vegetable", costumeSchema)