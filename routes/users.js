let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let User = require('../models/users');

let userController = require('../controllers/users');

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', userController.userCheck);




module.exports = router;