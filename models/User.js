


const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Please provide a email address'],
        unique: true,
        trim: true,
        lowercase: true
        
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6
    },
   
}, {timestamps: true}) //Automatically creates createdAt and updatedAt fields

module.exports = mongoose.model('User', UserSchema);