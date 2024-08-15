const express = require('express');

const animalsRouter = express.Router();

const animals = ['Hedgehog', 'Giraffe', 'Lion', 'Octopus']


animalsRouter.get('/', (req, res) => {
    res.status(200).send(animals);
})

animalsRouter.get('/:id', (req, res) => {
    if (animals[req.params.id]) {
        res.status(200).send(animals[req.params.id]);
    } else {
        res.status(404).send('Animal not found');
    }
})


module.exports = animalsRouter;