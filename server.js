
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const connectToDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const transcriptionRoutes = require('./routes/transcriptRoutes');
const errorHandler = require('./middleware/errorHandler')
app.use(express.json())

connectToDB()




app.use('/api/auth', authRoutes)
app.use('/api/transcripts',  transcriptionRoutes)


app.use(errorHandler)

app.listen(PORT, () =>{
    console.log(`App is listening on PORT: ${PORT}`)
})