const mongoose = require('mongoose');

const TTimetableschema = mongoose.Schema({
    ID:String,
    Schedule:[
        {
            Time:{
                type:String
            }
           ,Subject:{
            type:String
           }
           ,Class:{
            type:Number
           }
        }
    ]
})

const TeacherTableModel = mongoose.model("TeacherTimeTable",TTimetableschema);

module.exports = TeacherTableModel;