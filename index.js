const express = require('express')
const path = require("path")
const cors = require("cors")
const dotenv = require("dotenv")
const admintRouter = require('./router/admin');
const requimentRouter = require('./router/requirment')
const jobtRouter = require('./router/job');
const portfoliotRouter = require('./router/portfolio');


const fileUpload = require("express-fileupload")
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dpdb9d0il',
  api_key: '946235952118446',
  api_secret: 'OB3z5djEL2gbDyNIw5paRgi8ZMc'
});


dotenv.config()
const app = express()

// connect to db
require(`./db/db`)


app.use(express.json())
app.use(fileUpload({
  useTempFiles: true
}))

const buildPath = path.join(__dirname, 'client', 'build')
app.use(express.static(buildPath))

// Load Routes
// app.use('/api/v1');

app.use(cors())
app.use('/api/v1', admintRouter)
app.use('/api/v1', requimentRouter)
app.use('/api/v1', jobtRouter)
app.use('/api/v1', portfoliotRouter)






// for client side routing
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', "index.html"));
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
})


