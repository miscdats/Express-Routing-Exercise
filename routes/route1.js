var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('route1', { title: 'AD320: IA7-Taupier Route 1' });
});

module.exports = router;
