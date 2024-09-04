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

router.get('/userPage', async (req, res) => {
    try {
        const booksData = await Book.findAll({
        });
        const books = booksData.map((book) => book.get({ plain: true }));

        res.render('userPage', {
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;