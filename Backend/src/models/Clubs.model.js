const mongoose = require('mongoose');

const ClubSchema = mongoose.Schema({
    ClubName:String,
    ClubCode:String,
    ClubID:String,
    TypeofClub:String,
    ClubIncharge:String,
    ClubLeader:String,
    Link:String,
    Email:String,
    Description:String,
    Members:[{
        MemberName:String
    }],
    Color:String,
    NotificationView:{
        type:Boolean,
        default:false
    }
})

const ClubModel = new mongoose.model('Clubs',ClubSchema);

module.exports = ClubModel;