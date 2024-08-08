import mongoose from 'mongoose';
import { type } from 'os';

const todoListSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
},
    importance: {
        type: String,
        required: true
    }

});

const Todolist = mongoose.model('Todolist', todoListSchema);

export default Todolist;