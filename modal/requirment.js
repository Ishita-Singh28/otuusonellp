const mongoose = require('mongoose')
const requimentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    plan: { type: String, required: false },
    message: { type: String, required: true }
})

module.exports = mongoose.model("Requirment", requimentSchema)