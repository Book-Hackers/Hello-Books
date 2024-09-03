const express = require('express');
const router = express.Router();
const { Book } = require('../../models/Book');
const withAuth = require('../../utils/auth'); 

// POST route to add a new book
router.post('/books', withAuth, async (req, res) => {
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
        res.status(500).json(err);
    }
});

module.exports = router;