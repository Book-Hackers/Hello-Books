const express = require('express');
const router = express.Router();
const {Book, Transaction, User} = require('../../models');
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
        const newTransaction = await Transaction.create({
            book_id: newBook.id,
            seller_id: req.session.user_id,
            buyer_id: null, 
            transaction_date: new Date(), 
            status: 'active', 
        });

        res.status(200).json({ newBook, newTransaction});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



router.get('/sellerpage', withAuth, async (req, res) => {
    console.log("Session username:", req.session.username);
    console.log("Session user_id:", req.session.user_id);
    try {
        const booksData = await Book.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: [{
                model: Transaction,
                where: { seller_id: req.session.user_id },
                attributes: ['status'], 
                required: false, 
            }],
        });

        const books = booksData.map((book) => book.get({ plain: true }));
        const activeBooks = books.filter(book => book.transactions && book.transactions[0].status === 'active');
        const pendingBooks = books.filter(book => book.transactions && book.transactions[0].status === 'pending');
        const soldBooks = books.filter(book => book.transactions && book.transactions[0].status === 'sold');

        res.render('sellerpage', {
            username: req.session.username,
            activeBooks, 
            pendingBooks, 
            soldBooks, 
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/postBook', (req, res) => {
    res.render('postBook', {
      username: req.session.username, 
    });
  });

router.put('/updateStatus/:id', (req, res) => {
    const bookId = req.params.id;
    const newStatus = req.body.status;
    Book.update({ status: newStatus }, {
      where: { id: bookId }
    })
    .then(() => {
      res.status(200).json({ status: newStatus });
    })
    .catch(err => {
      console.error('Error updating status:', err);
      res.status(500).send('Error updating status');
    });
  });


  router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    const newStatus = req.body.status;
    Book.destroy({
      where: { id: bookId }
    })
    .then(() => {
      res.status(200).json({ message: "Book Deleted" });
    })
    .catch(err => {
      console.error('Error Deleting Book:', err);
      res.status(500).send('Error Deleting Book');
    });
  });


module.exports = router;

