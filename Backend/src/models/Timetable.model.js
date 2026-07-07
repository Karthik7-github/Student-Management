const mongoose = require('mongoose');

const Timetableschema = mongoose.Schema({
    Grade:Number,
    Schedule:[
        {
            Time:{
                type:String
            }
           ,Subject:{
            type:String
           }
        }
    ]
})

const TableModel = mongoose.model("TimeTable",Timetableschema);

module.exports = TableModel;