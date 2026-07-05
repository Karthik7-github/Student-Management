const mongoose = require('mongoose');

const FeesSchema = mongoose.Schema({
  MemberName: String,
  MemberID: String,
  Amount: Number,
  Date: {
    type: Date,
    default: Date.now
  },
  Receiptent: String,
  Color:String
});

const FeesModel = new mongoose.model("Fees",FeesSchema);

module.exports = FeesModel;