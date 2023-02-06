let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect to book model
let Book = require('../models/books');
//get route for the book list page --read operation
router.get('/',(req,res,next) =>{
    Book.find((err, bookList)=>{
        if(err){
            return console.error(err);
        }
        else{
            res.render('book', {title:'Book List', BookList: bookList});
        }
    });
});
module.exports = router;