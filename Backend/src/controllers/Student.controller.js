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

    const Color1 = [
        '#FF3CAC', // neon pink
        '#784BA0', // rich purple
        '#2B86C5', // bright blue
        '#00F5D4', // aqua neon
        '#F15BB5', // candy pink
        '#FEE440', // glowing yellow
        '#00BBF9', // sky neon blue
        '#9B5DE5', // electric violet
        '#00F260', // neon green
        '#FF9F1C', // bright orange
        '#FF4D6D', // hot red pink
        '#3A86FF', // strong blue
        '#8338EC', // deep neon purple
        '#06D6A0', // mint neon
        '#FFBE0B'  // golden glow
    ];

    

    const Color = Color1[Math.floor(Math.random() * Color1.length)];

    const Student = await Studentmodel.create({
        Name, Age, DOB, Role, Class, StudentID, Email, Password: hash, Marks, Color
    });

    const token = jwt.sign({ id: Student._id, role: Student.Role }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        "Message": "Student Registered",
        "Student": Student
    })
}

module.exports = { StudentRegister };

