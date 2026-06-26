const mongoose = require('mongoose');

const AttendanceSchema = mongoose.Schema({
    ID:{
        type:String,
        unique:true
    },
    Present:Number,
    Total:Number
})

const AttendanceModel = mongoose.model("Attendance",AttendanceSchema);

module.exports = AttendanceModel;