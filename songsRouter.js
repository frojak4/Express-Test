const express = require('express');
const songsRouter = express.Router();

const songs = [
    {
        name: 'i scream this in the mirror before i interact with anyone',
        artist: 'JPEGMAFIA',
        length: '1:48'
    },
    {
        name: '360',
        artist: 'Charli XCX',
        length: '2:13'
    },
    {
        name: 'Pink Diamond',
        artist: 'Rina Sawayama',
        length: '2:29'
    },
    {
        name: 'Dealer',
        artist: 'Lana Del Rey',
        length: '4:33'
    },
    {
        name: 'After Hours',
        artist: 'The Weeknd',
        length: '6:01'
    },
    {
        name: 'Dead To Me',
        artist: 'Kali Uchis',
        length: '3:20'
    },
    {
        name: 'Bury a Friend',
        artist: 'Billie Eilish',
        length: '3:13'
    },
    {
        name: 'GOODMORNINGTOKYO!',
        artist: 'TOKYO’S REVENGE',
        length: '2:08'
    },
    {
        name: 'Money Machine',
        artist: '100 gecs',
        length: '2:26'
    },
    {
        name: 'TKN',
        artist: 'ROSALÍA & Travis Scott',
        length: '2:09'
    },
    {
        name: 'Space Cadet',
        artist: 'Metro Boomin & Gunna',
        length: '3:24'
    }
]

songsRouter.get('/', (req, res) => {
    res.status(200).send(songs);
})

songsRouter.get('/:id', (req, res) => {
    if (songs[req.params.id]){
        res.status(200).send(songs[req.params.id]);
    } else {
        res.status(404).send('Song not found');
    }
})

songsRouter.get('/:id/name', (req, res) => {
    if (songs[req.params.id]){
        res.status(200).send(songs[req.params.id].name);
    } else {
        res.status(404).send('Song not found');
    }
})

songsRouter.get('/:id/artist', (req, res) => {
    if (songs[req.params.id]){
        res.status(200).send(songs[req.params.id].artist);
    } else {
        res.status(404).send('Song not found');
    }
})

songsRouter.get('/:id/length', (req, res) => {
    if (songs[req.params.id]){
        res.status(200).send(songs[req.params.id].length);
    } else {
        res.status(404).send('Song not found');
    }
})


module.exports = songsRouter;

