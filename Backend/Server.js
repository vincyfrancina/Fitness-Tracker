require('dotenv').config();

const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes.js');
const express = require('express');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connection established ;)');

    } catch (error) {
        console.log(error);
        console.log('Couldn\'t establish connection :(');
    }
}

connectToDb();


app.listen(8000, function () {
    console.log(`Listening on port ${8000}...`);
});
