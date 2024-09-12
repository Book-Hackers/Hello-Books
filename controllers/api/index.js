const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const transactionRoutes = require('./transactionRoutes');
const cartRoutes = require('./cartRoutes');
const checkoutRoutes=require('./checkoutRoutes');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);

router.use('/cart', cartRoutes);

router.use('/transaction', transactionRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;
