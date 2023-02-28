var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/contact', indexController.displayContactPage);

router.get('/services', indexController.displayServicesPage);

router.get('/products', indexController.displayProductsPage);
module.exports = router;
