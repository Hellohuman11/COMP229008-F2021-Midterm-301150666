/*
index.js
Seungkoo Kim
301150666
Midterm
 */

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
