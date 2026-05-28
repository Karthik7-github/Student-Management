const mongoose = require('mongoose');

const ClubchatSchema = mongoose.Schema({
    ClubID:String,
    MemberName:String,
    Message:String,
    Color:String
})

const ClubchatModel = new mongoose.model('ClubChats',ClubchatSchema);

module.exports = ClubchatModel;