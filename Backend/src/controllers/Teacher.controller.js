const Teachermodel = require('../models/Teacher.model');
const Studentmodel = require('../models/Student.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function TeacherRegister(req, res) {

    const { Name, Age, DOB, AdminID, Subject, Role, TeacherID, Email, Password, Timetable } = req.body;

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

    const Teacher = await Teachermodel.create({
        Name, Age, DOB, AdminID, Subject, Role, TeacherID, Email, Password: hash, Timetable
    });

    const token = jwt.sign({
        id: Teacher._id,
        role: Teacher.Role
    }, process.env.JWT_SECRET);

    res.cookie("token", token);


    res.status(201).send({
        "Message": "Teacher Registered Successfully",
        "Teacher": Teacher
    });
}

async function Login(req, res) {
    const { Email, Password } = req.body;

    try {

        const student = await Studentmodel.findOne({ Email });
        const admin = await Teachermodel.findOne({ Email });

        let user;

        if (student) {
            user = student;
        } else if (admin) {
            user = admin;
        } else {
            return res.status(409).json({
                Message: 'Email is Not Registered Please Go And Register'
            });
        }

        if (!user) {
            return res.status(409).json({
                Message: 'Email is Not Registered Please Go And Register'
            });
        }

        const isPassword = await bcrypt.compare(Password, user.Password);

        if (!isPassword) {
            return res.status(404).json({
                Message: 'Invalid Credentials'
            });
        }

        const token = jwt.sign(
            { id: user._id, Role: user.Role },
            process.env.JWT_SECRET
        );

        res.cookie('token', token);

        res.status(200).json({
            Message: "Logged In Successfully",
            User: user
        });

    } catch (error) {
        res.status(500).json({
            Message: "Server Error",
            Error: error.message
        });
    }
}


module.exports = { TeacherRegister, Login };