


const JWT = require('jsonwebtoken');

const authMiddleware = async (req, res, next) =>{

    //We use square brackets [] instead of parentheses () because req.headers is an object, not a function.
    const authHeader = req.headers['authorization']

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({
            success: false,
            message: 'Access denied. Missing or invalid token format.'
        })
    }

    const token = authHeader.split(' ')[1]

    JWT.verify(token, process.env.ACCESS_KEY, (err, user) =>{
        if(err){
            return res.status(401).json({
            success: false,
            message: 'Access denied. Unauthorized user'
            })
        }
        req.user = user
        next()
    })

}

module.exports = { authMiddleware }



































































// () Parentheses = "Run this action/function."
// [] Square Brackets = "Find this specific item inside this collection/object."
// {} Curly Braces = "Build a brand new object."