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
})

const ClubModel = new mongoose.model('Clubs',ClubSchema);

module.exports = ClubModel;