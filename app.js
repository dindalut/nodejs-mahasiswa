const express = require('express');
const app = express();
const morgan = require('morgan');
const bodParser = require('body-parser');

const mahasiswaRoutes = require('./routes/mahasiswa');

app.use(morgan('dev'));
app.use(bodParser.urlencoded({extended: false}));
app.use(bodParser.json());

app.use('/mahasiswa', mahasiswaRoutes);
app.use('/assets', express.static('assets'));

//handling error
app.use((req,res,next) => {
    const error = new Error('Tidak ditemukan');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;