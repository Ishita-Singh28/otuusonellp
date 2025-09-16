const mongoose = require('mongoose')
const portfolioScheam = new mongoose.Schema({
    heading: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    post_image: { type: String, required: true },
    frontend: { type: String, required: true },
    backend: { type: String, required: true },
    database: { type: String},
    cloud_server: { type: String }
})

module.exports = mongoose.model("Portfolio", portfolioScheam)