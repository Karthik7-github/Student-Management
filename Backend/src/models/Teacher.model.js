const mongoose = require('mongoose');

const Teacherschema = mongoose.Schema({
    "Name" : {
        type:String,
        required:true
    },
    "Age" : {
        type:Number,
        required:true
    },
    "DOB" :{
        type:String,
        required:true
    },
    "Subject":String,
    "Role":{
        type:String,
        required:true
    },
    "TeacherID":String,
    "Email":{
        type:String,
        required:true
    },
    "Password":{
        type:String,
        required:true,
    },
    "Timetable" : [{
        "Time":String,
        "Grade":String
    }]
});


const TeacherModel = new mongoose.model('Teachers',Teacherschema);

module.exports = TeacherModel;

