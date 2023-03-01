// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

router.get('/favbooks', (req, res, next) => {
  res.render('content/favbooks', {
    title: 'Favourite Books',
    books: ''
   });
});

module.exports = router;
