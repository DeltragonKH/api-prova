const express = require('express');
const contentService = require('../services/contentService');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const {text} = req.body;
        const Deck = serviceDeck.createDeck(text);
        res.json(Deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
    
})

router.get('/Deck', async(req, res) =>{
    try{
        const Deck = await serviceDeck.getDeck();
        res.json(Deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;
