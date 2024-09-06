const router = require('express').Router();
const { Cart, User, Book } = require('../../models');
const withAuth = require('../../utils/auth');
// add to cart
router.post('/cart', withAuth, async (req, res) => {
    try {
      const cartData = await Cart.Create(req.body, {
        include: [
          {
            model: Book,
            attributes: ['title', 'author']
          },
          {
            model: User,
            attributes: ['first_name']
          }
        ]
      });
      console.log(cartData)

      const cart = cartData.get({ plain: true });

      res.render('cart', {
        ...cart,
        logged_in: req.sessionStore.logged_in
      })
    }catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;