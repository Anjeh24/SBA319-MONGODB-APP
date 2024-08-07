import express from 'express';
const app = express();
const port = process.env.port || 3000;

app.use(express.json())

app.listen(3000, () => {
    console.log(`Sever is listening on port: ${port}`);
})