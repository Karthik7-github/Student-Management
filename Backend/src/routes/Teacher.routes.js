const express = require('express');
const router = express.Router();
const Teacher = require('../controllers/Teacher.controller');


router.post('/register',Teacher.Register);


module.exports = router;