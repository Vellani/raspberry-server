const express = require('express');
const router = express.Router();
const {findIndex, setNewVoltage} = require('../controllers/index')

router.route('/').get(findIndex);
router.route('/loop').get(setNewVoltage);


module.exports = router;