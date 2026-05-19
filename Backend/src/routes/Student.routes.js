const express = require('express');
const router = express.Router();
const Studentcontroller = require('../controllers/Student.controller');

router.post('/sregister',Studentcontroller.StudentRegister);

module.exports = router;