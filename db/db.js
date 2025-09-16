const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://ankitotusone:vxM8PMSpoBbqtjme@otusone.ixwyubp.mongodb.net/OTUSONE', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database")
    })
    .catch((err) => {
        console.log(err)
    })