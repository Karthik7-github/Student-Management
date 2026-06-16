const mongoose = require('mongoose')

const ClubNotificationsSchema = mongoose.Schema({
    ClubID:String,
    EventName:String,
    Description:String,
    Time:String,
    Color:String
});

const ClubNotfModel = new mongoose.model("Club-Notifications",ClubNotificationsSchema);

module.exports = ClubNotfModel;