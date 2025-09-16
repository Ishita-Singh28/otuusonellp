const mongoose = require('mongoose')
const jobSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: Number, required: true },
    current_ctc: { type: Number, required: true },
    expected_ctc: { type: Number, required: true },
    position: { type: String, required: true },   
    message: { type: String, required: false }, 
    resume: { type: String, required: true }
},{
    timestamps: true  
});

module.exports = mongoose.model("Job", jobSchema)