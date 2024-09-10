const router = require('express').Router();
const { Cart, User, Book } = require('../../models');
const withAuth = require('../../utils/auth');
// add to cart
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


module.exports = router;