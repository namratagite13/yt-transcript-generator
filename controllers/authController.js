



const User = require('../models/User')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

const registerUser = async(req, res) =>{
    
    try{
        //req body
    const {email, password} = req.body;

    //check both fields
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: 'Both fields are necessary.'
        })
    }


    //if user exists 
    const alreadyExist = await User.findOne({email})

    if(alreadyExist){
        return res.status(400).json({
            success: false,
            message: 'user already exist.'
        })
    }

    const newUser = new User({email, password})

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    //save to mongoDB
    await newUser.save();

    res.status(201).json({
        success: true,
        message: 'user registered successfully.'
    })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error:  error.message
        })
    }

}




const loginUser = async(req, res) =>{
    try{
        
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: 'Both fields are necessary.'
        })
    }

    const user = await User.findOne({email})
    if(!user){
        return res.status(401).json({
            success: false,
            message: "Invalid email or password"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
        return res.status(401).json({
            success: false,
            message: 'Invalid email or password'
        })
    }

    //generating jwt token 
    const token = JWT.sign({
        userId:user._id,
    }, process.env.ACCESS_KEY, {expiresIn: '7d'})

    res.status(200).json({
        success: true,
        message: 'User logged in successfully.',
        token: token,
        user:{
            id: user._id,
            email: user.email,
        }
    });
    }catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error:  error.message
        })
    }
}


const getProfile = async(req, res) =>{
    try{
        const user = await User.findById(req.params.id).select('-password');
        if(!user){
            return res.status(404).json({
            success: false,
            message: 'User profile not found.'
        })
        }
        res.status(200).json({
            success: true,
            user
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error:  error.message
        })
    }
}



module.exports = {registerUser, loginUser, getProfile}