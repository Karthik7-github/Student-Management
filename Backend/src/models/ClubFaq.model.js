const mongoose = require('mongoose');

const ClubfaqSchema = mongoose.Schema({
    ClubID:String,
    MemberName:String,
    Question:String,
    Answer:String,
    Color:String
})

const ClubFaaqModel = new mongoose.model("ClubFAQS",ClubfaqSchema);

module.exports = ClubFaaqModel;