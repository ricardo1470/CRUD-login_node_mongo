const express = require('express');
const router = express.Router();

const { getinit, getabout } = require('../controllers/index');
const { getuser, getsignin, getsignup } = require('../controllers/users')

//index
router.get('/', getinit);

//about
router.get('/about', getabout);

//user
router.get('/users', getuser);
router.get('/users/signin/', getsignin);
router.get('/users/signup/', getsignup);

module.exports = router;