const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const aboutUsRoutes=require('./aboutUsRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/about', aboutUsRoutes);

module.exports = router;
