const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/Course.controller');

router.post('/createcourse',CourseController.CreateCourse);

router.get('/getcourses',CourseController.Getcourss);

module.exports = router;