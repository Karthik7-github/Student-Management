const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/Course.controller');


// Course 

router.post('/createcourse',CourseController.CreateCourse);

router.get('/getcourses',CourseController.Getcourss);

// Time Tables

router.post('/createschedule', CourseController.Createschedule);

router.get('/getschedule',CourseController.GetSchedule);

// Announcements

router.post('/createannouncement',CourseController.CreateAnnouncements);

router.get('/getannouncements',CourseController.GetAnnouncements);

//  Messages 

router.post('/createmsg',CourseController.CreateMessage);

router.get('/getmsgs',CourseController.GetMessages);

// Clubs

router.post('/createclub',CourseController.CreateClub);

router.get('/getclubs',CourseController.GetClubs);

router.put('/update/:id',CourseController.RegisterMember);

module.exports = router;