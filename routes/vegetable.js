var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vegetable', { title: 'Search Results Vegetable' });
});

module.exports = router;
