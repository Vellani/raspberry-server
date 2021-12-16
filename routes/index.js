const express = require('express');
const router = express.Router();
const {findIndex, startLooping} = require('../controllers/index')

router.route('/').get(findIndex);
router.route('/loop').get(startLooping);


module.exports = router;