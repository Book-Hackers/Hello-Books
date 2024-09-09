const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const cartRoutes = require('./cartRoutes')

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/cart', cartRoutes);

module.exports = router;
