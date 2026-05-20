const Studentmodel = require('../models/Student.model');
const Teachermodel = require('../models/Teacher.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function StudentRegister(req, res) {

    const { Name, Age, DOB, Role, Class, StudentID, Email, Password, Marks } = req.body;

    const isstudentexists = await Studentmodel.findOne({
        Email
    });

    const isteacherexists = await Teachermodel.findOne({
        Email
    });

    if (isstudentexists || isteacherexists) {
        return res.status(409).json({
            'Message': "User Already Exists"
        })
    }

    const hash = await bcrypt.hash(Password, 10);

    const Student = await Studentmodel.create({
        Name, Age, DOB, Role, Class, StudentID, Email, Password: hash, Marks
    });

    const token = jwt.sign({ id: Student._id, role: Student.Role }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        "Message": "Student Registered",
        "Student": Student
    })
}

module.exports = { StudentRegister };

