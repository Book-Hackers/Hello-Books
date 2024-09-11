const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const transactionRoutes = require('./transactionRoutes');
const cartRoutes = require('./cartRoutes')

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
<<<<<<< message
router.use('/cart', cartRoutes);
=======
router.use('/transaction', transactionRoutes);
>>>>>>> dev

module.exports = router;
