const mongoose = require("mongoose");

const ResultsSchema = new mongoose.Schema({
  UserID: {
    type: String, 
    required: true
  },
  Sem: {
    type: Number,
    required: true
  },
  Subjects: [
    {
      Name: {
        type: String,
        required: true
      },
      Score: {
        type: Number,
        required: true,
        min: 0
      },
      Total: {
        type: Number,
        required: true,
        min: 0
      }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Results", ResultsSchema);