const router = require('express').Router();
const { Transaction, Book, User, Cart} = require('../../models');
const withAuth = require('../../utils/auth');
router.post('/checkout', withAuth, async (req, res) => {
    try {
        const buyerId = req.session.user_id;
        const buyerEmail = req.session.email;
        const cart = await Cart.findOne({ where: { user_id: buyerId }, include: Book });
        const booksInCart = await cart.getBooks();
        for (const book of booksInCart) {
            const sellerId = book.user_id;
           const transaction = await Transaction.create({
                book_id: book.id,
                seller_id: sellerId,
                buyer_id: buyerId,
                buyer_email: buyerEmail,
                status: 'active',
                transaction_date: new Date(),
            });
        }
        res.status(200).json({ message: 'Checkout completed, and buyer emails posted to seller dashboards.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to complete checkout.' });
    }
});

  module.exports = router;
