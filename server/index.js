import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import run from './database/databaseConnection.js';
dotenv.config();

const app = express();
const PORT = 8000;
app.use(cors());



// middleware

// import routes

app.use(bodyParser.json());


//test route
app.get('/', (req, res) => {
    res.send('Hello World');
});


//server listening and connecting to database

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    run();
});

