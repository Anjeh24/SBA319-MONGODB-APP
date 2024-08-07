import mongoose from "mongoose";
import dotenv from 'dotenv';

const mongodbConnect = async () => {
    await mongoose.connect(process.env.ATLAS_URI)
    .then((res) => {
        console.log('Successfully connected');
    })
}

export default mongodbConnect;