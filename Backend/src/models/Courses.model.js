const mongoose = require('mongoose');

const Courseschema = mongoose.Schema({
    Name: String,
    Code: String,
    Color: String,
    Link: String,
    Class:Number
});

const Coursemodel = mongoose.model('Courses', Courseschema);

module.exports = Coursemodel;