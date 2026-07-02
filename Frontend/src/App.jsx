import { Route, Routes } from "react-router-dom";
import Welcomepage from "./pages/Welcomepage";
import Login from "./pages/Login";
import Register from "./pages/Registerpage";
import Teacherres from "./pages/Registrations/teacherres";
import Studentres from "./pages/Registrations/studentres";
import StudentWelcome from "./pages/Student/StudentWelcome";
import TeacherWelcome from "./pages/Teacher/teacherwelcome";
import Studentass from "./pages/Student/Studentassesments";
import Studentchat from "./pages/Student/Studentchat";
import Studentclub from "./pages/Student/Studentclubs";
import Studentcourse from "./pages/Student/Studentcourses";
import Studenttt from "./pages/Student/Studenttimetables";
import Studentfees from "./pages/Student/Studentfees";
import Studentresults from "./pages/Student/Studentresults";
import Studentanon from "./pages/Student/Studentannouncements";
import Studentlib from "./pages/Student/Studentlib";
import Studentpro from "./pages/Student/Studentprofile";
import Studentclubres from "../src/pages/Student/StudentClubstoregister";
import Clubroom from "../src/pages/Clubs/Clubroom";
import Clubchat from "../src/pages/Clubs/ClubChat";
import Clubmembers from "../src/pages/Clubs/Clubmembers";
import Clubhome from "./pages/Clubs/Clubhome";
import Clubfaq from "./pages/Clubs/Clubfaq";
import Studentedit from "./pages/components/StudentEditingpage";

//Teachers

import TeacherLib from "./pages/Teacher/Teacherlbrary";
import TeacherCourses from "./pages/Teacher/TeacherCourses";
import TeacherTt from "./pages/Teacher/TeacherTimetable";
import Coursehome from "./pages/Teacher/Courses/Coursehome";
import Courselaunch from "./pages/Teacher/Courses/Courselaunch";
import Courseremove from "./pages/Teacher/Courses/Courseremove";
import Coursemine from './pages/Teacher/Courses/Couresemin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/register-teacher" element={<Teacherres />} />
        <Route path="/register-student" element={<Studentres />} />
        <Route path="/studentwelcome" element={<StudentWelcome />} />
        <Route path="/teacherwelcome" element={<TeacherWelcome />} />
        <Route path="/student/courses" element={<Studentcourse />} />
        <Route path="/student/timetables" element={<Studenttt />} />
        <Route path="/student/results" element={<Studentresults />} />
        <Route path="/student/assesments" element={<Studentass />} />
        <Route path="/student/fees" element={<Studentfees />} />
        <Route path="/student/clubs" element={<Studentclub />} />
        <Route path="/student/announcements" element={<Studentanon />} />
        <Route path="/student/chat" element={<Studentchat />} />
        <Route path="/student/library" element={<Studentlib />} />
        <Route path="/student/profile" element={<Studentpro />} />
        <Route path="/student/clubstoregister" element={<Studentclubres />} />
        <Route path="/student/edit" element={<Studentedit />} />
        <Route path="/club" element={<Clubroom />}>
          <Route index element={<Clubhome />} />
          <Route path="home" element={<Clubhome />} />
          <Route path="chat" element={<Clubchat />} />
          <Route path="mems" element={<Clubmembers />} />
          <Route path="faq" element={<Clubfaq />} />
        </Route>
        <Route path="/teacher/courses" element={<TeacherCourses />}>
          <Route index element={<Coursehome />} />
          <Route path="home" element={<Coursehome />} />
          <Route path="launch" element={<Courselaunch />} />
          <Route path="remove" element={<Courseremove />} />
          <Route path="mine" element={<Coursemine />} />
        </Route>
        <Route path="/teacher/library" element={<TeacherLib />} />
        <Route path="/teacher/timetables" element={<TeacherTt />} />
      </Routes>
    </div>
  );
};

export default App;
