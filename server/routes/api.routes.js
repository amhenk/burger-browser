const express = require('express');

const router = express.Router();

// api routes /api/ROUTE
router.use('/register', require('../controllers/register.controller'));
router.use('/login', require('../controllers/login.controller'));
router.use('/logout', require('../controllers/logout.controller'));
router.use('/user', require('../controllers/user.controller'));
router.use('/auth', require('../controllers/auth.controller'));
router.use('/yelp', require('../controllers/yelp.controller'));
router.use('/business', require('../controllers/business.controller'));

module.exports = router;
