const mongoose = require('mongoose');

const ClubSchema = mongoose.Schema({
    ClubName:{
        type:String,
        unique:true
    },
    ClubCode:String,
    ClubID:{
        type:String,
        unique:true
    },
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
    Color2:String,
    Color3:String,
    NotificationView:{
        type:Boolean,
        default:false
    },
    Events:[{
        EventName:String
    }],
    Awards:[{
        AwardName:String
    }],
    Chat:[{
        Message:String,
        ID:String,
        Time:Date
    }]
})

const ClubModel = new mongoose.model('Clubs',ClubSchema);

module.exports = ClubModel;