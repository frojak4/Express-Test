const express = require('express');

const app = express();


const animalsRouter = require('./animalsRouter.js');
app.use('/animals', animalsRouter);

const songsRouter = require('./songsRouter.js');
app.use('/songs', songsRouter);

app.get('/', (req, res) => {
    res.status(200).send("Main Page");
})





app.listen(3000);