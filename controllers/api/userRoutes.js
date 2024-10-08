const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Cart, Book, CartItem } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {

    console.log(req.body.email);

    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData);



    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.email = userData.email;
      req.session.logged_in = true;    
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/cart/add', async (req, res) => {
  console.log("ADD BOOK TO CART")
  console.log(req.body)
  console.log(req.session.user_id)
  try {
    let cart = await Cart.findOne({ where: { user_id: req.session.user_id }});
    console.log(cart)
    if (!cart) {
      cart = await Cart.create({ user_id: req.session.user_id });
    }

    await CartItem.create({ cart_id: cart.id, book_id: req.body.book_id })

    res.status(200).json({ message: "Book added to cart successfully!"})
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Unable to add book to cart. You must be logged in to add a book to your cart. If you already have this book in your cart, you cannot add it twice."})

  }
});

router.delete('/cart/remove/:id', async (req, res) => {

  try {
    let cart = await Cart.findOne({ where: { user_id: req.session.user_id }});
    console.log(cart)
    if (!cart) {
      return res.status(404).json({ message: "cart not found"});
    }

   let cartItem = await CartItem.findOne({ where: { cart_id: cart.id, book_id: req.params.id }})

    await cartItem.destroy();
   
    res.status(200).json({ message: "Book deleted to cart successfully!"})

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "error in deleting product"})
  }
});


router.delete('/cart/remove/', async (req, res) => {

  try {
    let cart = await Cart.findOne({ where: { user_id: req.session.user_id }});
    console.log(cart)
    if (!cart) {
      return res.status(404).json({ message: "cart not found"});
    }

   let cartItems = await CartItem.findAll({where: { cart_id: cart.id }})
   console.log("cartItems:", cartItems)
   
    // console.log('cart items separate', cartItem)
    for (let cartItem of cartItems) {
      await cartItem.destroy();

    }
   
    res.status(200).json({ message: "Book deleted to cart successfully!"})

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "error in deleting product"})
  }
});



router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
