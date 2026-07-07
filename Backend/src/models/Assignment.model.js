const mongoose = require('mongoose');

const AssignmentSchema = mongoose.Schema({
    Class:Number,
    Assigned:String,
    ID:String,
    Title:String,
    Desc:String,
    Time:String,
    Color:String
});

const AssignmentModel = new mongoose.model("Assignments",AssignmentSchema);

module.exports = AssignmentModel;