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

    const Color1 = ['#FF6B35', '#FFD166', '#00B8FF', '#10B981', '#A78BFA', '#FF006E', '#94A3B8', '#A3E635', '#7C3AED', '#E2E8F0', '#B21F1F'];

    const Color = Color1[Math.floor(Math.random() * Color1.length)];

    const Teacher = await Teachermodel.create({
        Name, Age, DOB, AdminID, Subject, Role, TeacherID, Email, Password: hash, Color, Timetable
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

async function Logout(req, res) {
    res.clearCookie("token")
    res.status(200).json({ message: "User logged out successfully" })
}

async function Editstudata(req, res) {
    try {
        const StudentID = req.params.id;

        const { Name, Age, DOB, Class } = req.body;

        const updatedStudent = await Studentmodel.findOneAndUpdate(
            { StudentID: StudentID },
            { Name, Age, DOB, Class },
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student updated successfully",
            data: updatedStudent
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { TeacherRegister, Login, Logout, Editstudata };