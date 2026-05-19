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
    "AdminID":{
        type:String,
        unique:true,
        required:true
    },
    "Subject":String,
    "Role":{
        type:String,
        required:true
    },
    "Email":{
        type:String,
        required:true,
        unique:true
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


const TeacherModel = mongoose.model('Teachers',Teacherschema);

module.exports = TeacherModel;

