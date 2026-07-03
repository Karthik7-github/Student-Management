const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/Course.controller');


// Course 

router.post('/createcourse',CourseController.CreateCourse);

router.get('/getcourses',CourseController.Getcourss);

router.post('/removecourse',CourseController.Removecourse);

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

router.put('/leave/:id', CourseController.LeftClub);

// Club Chats

router.post('/createclubmsg',CourseController.CreateClubmsg);

router.get('/getclubmsgs',CourseController.GetClubchats);

// Club FAQS

router.post('/createclubfaq',CourseController.CreateClubFaqs);

router.get('/getclubfaq',CourseController.GetClubFaqs);

// User Results

router.post("/createresult", CourseController.CreateResult);

router.get("/getresult", CourseController.GetResult);

// Club Notifications

router.post("/createclubnots",CourseController.CreateClubnot);

router.get("/getclubnots",CourseController.GetClubNots);

//Attendance

router.post("/postattend",CourseController.PostAttendance);

router.get('/getattend',CourseController.GetAttendance);

module.exports = router;