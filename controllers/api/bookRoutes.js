const express = require('express');
const router = express.Router();
const {Book} = require('../../models');
const withAuth = require('../../utils/auth'); 

// POST route to add a new book
router.post('/', async (req, res) => {
    console.log("POST /api/books called");
    console.log(req.body);
    try {
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            isbn: req.body.isbn,
            condition: req.body.condition,
            price: req.body.price,
            user_id: req.session.user_id, 
        });
        res.status(200).json(newBook);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/test', async (req, res) => {
    console.log('GET /api/test route hit');
    res.json({ message: 'Test route works' });
});

module.exports = router;