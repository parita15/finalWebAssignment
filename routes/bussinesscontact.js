let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let bussinessContactController = require('../controllers/contactlist');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the business contact List page - READ Operation */
router.get('/', bussinessContactController.displayContactList);

/* GET Route for displaying the contact Add page - CREATE Operation */
router.get('/add', requireAuth, bussinessContactController.displayAddPage);

/* POST Route for adding the contact page - CREATE Operation */
router.post('/add', requireAuth, bussinessContactController.processAddPage);

/* GET Route for displaying the contact edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, bussinessContactController.displayEditPage);

/* POST Route for editing the contact page - UPDATE Operation */
router.post('/edit/:id', requireAuth, bussinessContactController.processEditPage);

/* GET Route for deleting the contact page- DELETE Operation */
router.get('/delete/:id', requireAuth, bussinessContactController.performDelete);

module.exports = router;