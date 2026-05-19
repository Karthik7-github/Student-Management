const Studentmodel = require('../models/Student.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function StudentRegister(req, res) {

    const { Name, Age, DOB, Role, Class, Email, Password, Marks } = req.body;

    const isalreadyexists = await Studentmodel.findOne({
        Email
    });

    if(isalreadyexists){
        return res.status(409).json({
            'Message':"User Already Exists"
        })
    }

    const hash = await bcrypt.hash(Password,10);

    const Student = await Studentmodel.create({
        Name, Age, DOB, Role, Class, Email, Password:hash, Marks
    });

    const token = jwt.sign({id:Student._id,role:Student.Role},process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(201).json({
        "Message":"Student Registered",
        "Student":Student
    })
}

module.exports = { StudentRegister };

