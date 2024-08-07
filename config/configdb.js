import mongoose from "mongoose";
import dotenv from 'dotenv';

const mongodbConnect = async () => {
    await mongoose.connect(process.env.ATLAS_URI) //credits, code with zihad
    .then((res) => {
        console.log('Successfully connected to mongo database');
    })
}

export default mongodbConnect;