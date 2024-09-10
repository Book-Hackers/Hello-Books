const router = require('express').Router();
const { Book, User, Cart } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name'],
        },
      ],
    });

    const books = bookData.map((book) => book.get({ plain: true }));
    res.render('homepage',
       { 
        books,
      logged_in: req.session.logged_in 
    }
  );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const bookData = await  Book.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name'],
        },
      ],
    });

    const book = bookData.get({ plain: true });

    res.render('book', {
      ...book,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Book }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/myOrders', withAuth, async (req, res) => {
  try {

    const bookData = await Book.findAll({
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
          },
        ],
      });

    const books = bookData.map((book) => book.get({ plain: true }));
    const activeBooks = books.filter(book => book.status  === 'active');
    const pendingBooks = books.filter(book => book.status  === 'pending');
    const soldBooks = books.filter(book => book.status === 'sold');
    if (!req.session.logged_in) {
      res.redirect('/login/');
      return;
    }
    console.log(req.session)
    res.render('myOrders', {
      activeBooks, 
      pendingBooks, 
      soldBooks,
      first_name: req.session.username,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cart', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
    });

    const user = userData.get({ plain: true });

    res.render('cart', {
      ...user,
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
})

module.exports = router;
