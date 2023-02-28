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
            res.render('book/list', {title:'Books', BookList: bookList});
        }
    });
});

//get method to get the route for displaying the add page - create operation
router.get('/add', (req,res,next)=>{
    res.render('book/add',{title:'Add Book'});
});
//Post method route for processing the add page - create operation
router.post('/add', (req,res,next)=>{
    let newBook = Book({
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "description":req.body.description,
        "Price":req.body.price
    });
    Book.create(newBook,(err,Book)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/booklist');
        }
    });
});
//get route for displaying the edit page - update operation
router.get('/edit/:id', (req,res,next)=>{
    let id = req.params.id;
    Book.findById(id,(err,bookToEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('book/edit', {title:'Edit Book', book: bookToEdit});
        }
    });
});
//post method route for processing the edit page - update operation
router.post('/edit/:id', (req,res,next)=>{
    let id = req.params.id;
    let updatedBook = Book({
        '_id' : id,
        'name' : req.body.name,
        'author' : req.body.author,
        'published' : req.body.published,
        'description' : req.body.description,
        'Price' : req.body.price,
    });
    Book.updateOne({_id:id},updatedBook,(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/booklist');
        }
    });
});
//get to perform deletion - delete operation
router.get('/delete/:id', (req,res,next)=>{
    let id = req.params.id;
    Book.remove({_id:id},(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/booklist');
        }
    });
});

module.exports = router;