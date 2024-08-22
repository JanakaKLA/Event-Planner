const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const app = express();

// 1. Middlewares
app.use(cors());
app.use(express.json());

// 2. Route
app.use('/api/auth', authRouter);


// 3. Mongo db connection
mongoose
    .connect('mongodb+srv://kodijanaka77:aspire@cluster0.tg1boxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((error) =>console.error('Failed to connect to MOngoDB:',error));


    // 4. Global Error Handler
app.use((err, req,res, next) => {
    err.statuCode = err.statuCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message:err.message,
    });
});



// 5. Server
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`App runing on ${PORT}`);
});
