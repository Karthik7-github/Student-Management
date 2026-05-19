const express = require('express');
const router = express.Router();
const Teachercontroller = require('../controllers/Teacher.controller');


router.post('/tregister',Teachercontroller.TeacherRegister);

module.exports = router;