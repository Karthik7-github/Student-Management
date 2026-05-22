const express = require('express');
const router = express.Router();
const Teachercontroller = require('../controllers/Teacher.controller');


router.post('/tregister',Teachercontroller.TeacherRegister);

router.post('/login',Teachercontroller.Login);

router.post('/logout',Teachercontroller.Logout);

module.exports = router;