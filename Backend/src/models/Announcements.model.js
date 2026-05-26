const mongoose = require('mongoose');

const AnnouncementsSchema = mongoose.Schema({
    Title: String,
    Content: String,
    Author: String,
    Grade:Number,
    Color:String
})

const AnnouncementsModel = new mongoose.model('Announcements',AnnouncementsSchema);

module.exports = AnnouncementsModel;