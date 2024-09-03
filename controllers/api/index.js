const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
console.log("API routes loaded");
router.use('/users', userRoutes);
router.use('/books', bookRoutes);

module.exports = router;
