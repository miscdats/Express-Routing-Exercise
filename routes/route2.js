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
  for (c in colors.colors) {
    if (colors.colors[c].color == req.params.aColor) {
      res.json(colors.colors[c]);
    }
  }
});

module.exports = router;
