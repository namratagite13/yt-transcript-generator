



const errorHandler = (err, req, res, next) =>{

    console.log(err.stack)

    const statusCode = err.statusCode || 500;
    const message = err.message || 'An unexpected error occurred.'

    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message
    })
    
}

module.exports = errorHandler;