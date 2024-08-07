import express from 'express';
import dotenv from 'dotenv';
import mongodbConnect from './config/configdb.js';
import Todolist from './models/todolist.js';

dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.use(express.json())

mongodbConnect();

app.get('/Todos', async(req, res) => {
    try {
        const result = await Todolist.find()
        res.send({
            success: true,
            message: 'List retrieved',
            data: result

        })
    }catch(error) {
        res.send({
            success: false,
            message: 'List not retrieved',
            data: result,
        });
    }
});

app.listen(3000, () => {
    console.log(`Sever is listening on port: ${port}`);
})