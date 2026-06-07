

const mongoose = require('mongoose');


const transcriptSchema = new mongoose.Schema({

    videoId :{
        type: String,
        required: true,
        unique: true,
        index: true
    },
    title:{
        type: String
    },
    segments:[
        {
            text: String,
            offset: Number, //start time in sec
            duration : Number
        }
    ],
    fullText:{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transcript', transcriptSchema)