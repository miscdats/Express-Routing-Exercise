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
  var exists = false;
  for (no in colors.colors) {
    if (req.params.aColor == colors.colors[no].color)  {
      exists = true;
    }
  }
  if (exists == true) {
    for (c in colors.colors) {
      if (colors.colors[c].color == req.params.aColor) {
        res.json(colors.colors[c]);
      }
    }
  } else if (exists == false) {
    res.status(404)
      .send('idk');
  }
});

module.exports = router;
