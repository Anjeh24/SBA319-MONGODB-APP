//creating server 
const express = require('express');
const bodyParse = require('body-parser');//module to parse request and create req.body object for accessing via routes

const app = express();
const http = require('http');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/')

app.use(bodyParse.urlencoded({extended: true})); //middlewares to access req and res objects
app.use(bodyParse.json());
app.get('/', (req, res) => {
    res.json({'message': 'My first crud application'});
});

const PORT = process.env.PORT || 3000;


console.log(`app is lastening at: ${PORT}`);