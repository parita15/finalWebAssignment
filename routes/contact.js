let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Contact = require('../models/contact');

/* POST Route for the Service List page - READ OPeration */
router.post("/send", function(req, res){
    var newID = req.body.ID;
    res.redirect("/action")
  });

module.exports = router;

