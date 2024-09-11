const router = require('express').Router();
const { Transaction, Book} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/cart/add', withAuth, async (req, res) => {

  const { user_id, book_id } = req.body;

  try {
    const cart = await Cart.findOne({ where: { user_id }});
    
    await cart.addBook(book_id)

    res.status(200).json({ message: "Product added to cart successfully!"})
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "error in adding product"})
  }
});



router.post('/add', withAuth, async (req, res) => {
    try {
      console.log("Request body: ", req.body);  
      const { bookId, sellerId } = req.body;
      const buyerId = req.session.user_id; 
      const buyerEmail = req.session.email;
      const transaction = await Transaction.create({
        book_id: bookId,
        seller_id: sellerId,
        buyer_id: buyerId,
        buyer_email: buyerEmail,
        status: 'active',
        transaction_date: new Date(),
      });
      res.status(200).json({ message: 'Book added to cart and seller notified.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add book to cart.' });
    }
  });

module.exports = router;