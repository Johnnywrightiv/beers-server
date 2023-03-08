const express = require('express');
const router = express.Router();

const beers = [
  { id: '1', name: 'IPA' },
  { id: '2', name: 'Stout' },
  { id: '3', name: 'Brown' },
  { id: '4', name: 'Pilsner' }
];

// Params Middleware to allow us to access req.beer in the various routes - D.R.Y.
router.param('beer', function(req, res, next, id) {
  req.beer = beers.find(beer => beer.id === id);

  next();
});

router.get('/', (req, res) => {
  // find beer by id (using Params Middleware)
  res.send('hello from beers!');
});

router.get('/:beer', (req, res) => {
  // find beer by id (using Params Middleware)
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

router.get('/:beer/reviews', (req, res) => {
  // find beer by id (using Params Middleware)
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

module.exports = router;