const mongoose = require('mongoose');

const Studentschema = mongoose.Schema({
    "Name":String,
    "Age":Number,
    "DOB":String,
    "Role":String,
    "Class":Number,
    "StudentID":String,
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Marks:[{
        "Subject":String,
        "Score":Number,
        "P/F":String
    }],
    Color:String
})

const StudentModel = new mongoose.model('Students',Studentschema);

module.exports = StudentModel;