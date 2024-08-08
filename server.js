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
            message: 'List retrieved', //working. When I check database and collections, I see todo-list
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

//creating post 

app.post('/create-todolist', async (req, res) => {
    const enterTodo = req.body
    try {
        const result = await Todolist.create(enterTodo)
        res.send({
            success: true,
            message: "List item created",
            data: result
        })
    }catch (err) {
      res.send({
        success: false,
        message: "Failed to create request",
        data: result
      })
    }
})


app.listen(3000, () => {
    console.log(`Sever is listening on port: ${port}`);
})