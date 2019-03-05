var express = require('express');
var router = express.Router();
var colors = require('../colors.json');

router.get('/', function(req, res, next) {
  res.render('route2', { title: 'AD320: IA7-Taupier Route 2' });
});

router.get('/all', function(req, res, next) {
  res.json(colors);
});

router.get('/:aColor', function(req, res, next) {
  for (key in colors[0]) {
    if (colors[0].color == ('aColor')) {
      res.send(req.params.aColor);
    }
  }
});

module.exports = router;
