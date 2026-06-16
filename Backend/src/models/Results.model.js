const mongoose = require("mongoose");

const ResultsSchema = new mongoose.Schema({
  UserID: String,
  Semesters: [
    {
      SemNumber: Number, 
      Subjects: [
        {
          Subject: String,
          Score: Number,
          Grade: String,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Results", ResultsSchema);