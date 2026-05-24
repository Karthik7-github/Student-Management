const CourseModel = require('../models/Courses.model');

async function CreateCourse(req, res) {

    const { Name, Code, Color, Link, Class } = req.body;

    const Course = await CourseModel.create({
        Name, Code, Color, Link, Class
    });

    res.status(201).json({
        'Message': "Course Created",
        Course: Course
    });
}

async function Getcourss(req, res) {
    const Courses = await CourseModel.find();

    res.status(200).json({
        'Message': "Get All Courses",
        Course: Courses
    })
}

module.exports = { CreateCourse, Getcourss };