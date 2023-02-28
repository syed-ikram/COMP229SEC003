let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', {title: 'About'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact',{title: 'Contact'});
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('products', {title: 'Products'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', {title:'Services'})
}

