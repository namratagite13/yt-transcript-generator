

require('dotenv').config()
const mongoose = require('mongoose');


const connectionToDB = async(req, res) =>{

    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB connected successfully.')

    }catch(error){
        console.log('Error Connecting MongoDB', error.message);
        process.exit(1)
    }

}

module.exports = connectionToDB