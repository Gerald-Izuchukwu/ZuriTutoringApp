/**
 * 1. Create a connection fuction for mongodb
 * 2. start a local mongodb server connection
 * 3
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { mongo_URI} = process.env;

// creating a connection function
// const connectDB = () => {
//     mongoose.connect(mongo_URI, {
//         useNewUrlParser = true,
//         useCreateIndex = true,
//         useUnifiedTopology = true,
//         useFindAndModify = false
//     })
//     .then(()=>{
//         console.log("MongoDB connected")

//         // seed data
//     })
//     .catch((err)=>{
//         console.error(err.message)

//         // exit connecton with failure
//         process.exit(1);
//     })
// }

// USING ASYNC MONGOOSE CONNECTION
const connectDB = async ()=>{
    try {
        await mongoose.connect(mongo_URI, {
            useNewUrlParser  : true,
            useCreateIndex : true,
            useUnifiedTopology : true,
            useFindAndModify : false
        });

        console.log('MongoDB connected...')
    } catch (error) {
        console.error(error.message)

        // exit with failure
        process.exit(1)
        
    }
}

module.exports= connectDB