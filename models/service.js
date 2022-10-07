let mongoose = require('mongoose');

// create a model class
let serviceModel = mongoose.Schema({
    name: String,
    service: String,
    description: String
},
{
    collection: "service"
});

module.exports = mongoose.model('Service', serviceModel);