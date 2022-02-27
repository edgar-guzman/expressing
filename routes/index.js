const router = require('express').Router();
const extendRoute = require('./extenderRoute');
const bookRoute = require('./bookerRoute');

router.use('/', extendRoute);
router.use('/book', bookRoute);

module.exports = router;
