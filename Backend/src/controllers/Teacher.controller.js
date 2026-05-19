const Teachermodel = require('../models/Teacher.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function Register(req, res) {

    const { Name, Age, DOB, AdminID, Subject, Role, Email, Password, Timetable } = req.body;

    const isalreadyexists = await Teachermodel.findOne({
        Email
    });

    if (isalreadyexists) {
        res.status(409).json({
            "Message": "User Already Exists"
        })
    }


    const hash = await bcrypt.hash(Password, 10);

    const Teacher = await Teachermodel.create({
        Name, Age, DOB, AdminID, Subject, Role, Email, Password: hash, Timetable
    });

    const token = jwt.sign({
        id:Teacher._id,
        role:Teacher.role
    },process.env.JWT_SECRET);

    res.cookie("token",token);


    res.status(201).send({
        "Message": "Teacher Registered Successfully",
        "Teacher": Teacher
    });
}


module.exports = { Register };