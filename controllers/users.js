let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { update } = require('../models/bussinesslist');

// create a reference to the model
let User = require('../models/users');

module.exports.userCheck = (req, res, next) => {
    console.log("=====check user called===")
}