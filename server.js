import express from 'express';
import dotenv from 'dotenv';
import mongodbConnect from './config/configdb.js';

dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.use(express.json())

mongodbConnect();

app.listen(3000, () => {
    console.log(`Sever is listening on port: ${port}`);
})