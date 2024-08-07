import mongoose from 'mongoose';

const todoListSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
},
necessity: Boolean

});

const Todolist = mongoose.model('Todolist', todoListSchema);

export default Todolist;