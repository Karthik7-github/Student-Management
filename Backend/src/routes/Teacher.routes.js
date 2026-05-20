const express = require('express');
const router = express.Router();
const Teachercontroller = require('../controllers/Teacher.controller');


router.post('/tregister',Teachercontroller.TeacherRegister);

router.post('/login',Teachercontroller.Login);

module.exports = router;