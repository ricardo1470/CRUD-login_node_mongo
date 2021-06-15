const express = require('express');
const router = express.Router();

const { getinit, getabout } = require('../controllers/index');

//index
router.get('/', getinit);

//about
router.get('/about', getabout);

module.exports = router;