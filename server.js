/**
 * create express server
 * connect to MongoDDB
 * Initialize express
 * Intialize express middleware
 * create a simple get request route
 * Inject our route
 * Listen to our app connection
 */

const express = require('express')
const connectDB = require('./db')
require('dotenv').config(); //allows us to use the port stored in .env
const { PORT } = process.env;


// connext to the dB
connectDB();

// initialize middleware
const app = express()

// initialize middleware
app.use(express.json({extended:false}))

// createing a basic express route
app.get('/', (req, res)=>{
    return res.json({message : "welcome to tutoring app"})
});

// creating port
const port = process.env.PORT || PORT;

// listen to connection
app.listen(port, ()=>{
    console.log(`app running on  ${PORT}`)
})


