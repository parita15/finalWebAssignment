let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Service = require('../models/service');

/* GET Route for the Service List page - READ OPeration */
router.get('/', (req, res, next) => {
    Service.find((err, serviceList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);
            // console.log(serviceList)  
            res.render('service', {title: 'Service List', ServiceList: serviceList})        
        }
    });
});

module.exports = router;

