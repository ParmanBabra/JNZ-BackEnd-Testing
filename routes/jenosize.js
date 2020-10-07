var express = require('express');
var router = express.Router();
var controller = require('../controllers/jenosizeController');

router.get('/places', controller.getSearchPlace);
router.get('/calculate', controller.getCalcutate);

module.exports = router;