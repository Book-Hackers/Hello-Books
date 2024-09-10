const router = require('express').Router();
const { Transaction, User, Book } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/add', withAuth, async (req, res) => {
    try {
      console.log("Request body: ", req.body);  
      const { bookId, sellerId } = req.body;
      const buyerId = req.session.user_id; 
      const buyerEmail = req.session.email;
  
      if (!bookId || !sellerId) {
        return res.status(400).json({ error: 'Missing bookId or sellerId' });
      }
  
      const transaction = await Transaction.create({
        book_id: bookId,
        seller_id: sellerId,
        buyer_id: buyerId,
        buyer_email: buyerEmail,
        status: 'pending',
        transaction_date: new Date(),
      });
  
      res.status(200).json({ message: 'Book added to cart and seller notified.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add book to cart.' });
    }
  });

module.exports = router;