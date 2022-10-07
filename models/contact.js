let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNo: String,
    emailAddress: String,
    message: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('Contact', contactModel);