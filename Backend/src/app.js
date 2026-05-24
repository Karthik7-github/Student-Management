const express = require('express');
const app = express();
const cors = require('cors');
const TeacherRoutes = require('./routes/Teacher.routes');
const StudentRoutes = require('./routes/Student.routes');
const CoureRoutes = require('./routes/Courses.routes');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/api/teacher',TeacherRoutes);
app.use('/api/student',StudentRoutes);
app.use('/api/course',CoureRoutes);

module.exports = app;
