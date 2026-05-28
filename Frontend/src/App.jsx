import { Route, Routes } from "react-router-dom";
import Welcomepage from './pages/Welcomepage';
import Login from './pages/Login';
import Register from './pages/Registerpage';
import Teacherres from './pages/Registrations/teacherres';
import Studentres from './pages/Registrations/studentres';
import StudentWelcome from './pages/Student/StudentWelcome';
import TeacherWelcome from './pages/Teacher/teacherwelcome';
import Studentass from './pages/Student/Studentassesments';
import Studentchat from './pages/Student/Studentchat';
 import Studentclub from './pages/Student/Studentclubs';
 import Studentcourse from './pages/Student/Studentcourses';
 import Studenttt from './pages/Student/Studenttimetables';
 import Studentfees from './pages/Student/Studentfees';
  import Studentresults from './pages/Student/Studentresults';
 import Studentanon from './pages/Student/Studentannouncements';
import Studentlib from './pages/Student/Studentlib';
import Studentpro from './pages/Student/Studentprofile';
import Studentclubres from '../src/pages/Student/StudentClubstoregister';
import Clubroom from '../src/pages/Clubs/Clubroom'

const App = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Welcomepage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/register-teacher" element={<Teacherres/>}/>
      <Route path="/register-student" element={<Studentres/>}/>
      <Route path="/studentwelcome" element={<StudentWelcome/>}/>
      <Route path="/teacherwelcome" element={<TeacherWelcome/>}/>
       <Route path="/student/courses" element={<Studentcourse/>}/>
       <Route path="/student/timetables" element={<Studenttt/>}/>
      <Route path="/student/results" element={<Studentresults/>}/>
      <Route path="/student/assesments" element={<Studentass/>}/>
      <Route path="/student/fees" element={<Studentfees/>}/>
      <Route path="/student/clubs" element={<Studentclub/>}/>
      <Route path="/student/announcements" element={<Studentanon/>}/>
      <Route path="/student/chat" element={<Studentchat/>}/>
      <Route path="/student/library" element={<Studentlib/>}/> 
      <Route path="/student/profile" element={<Studentpro/>}/>
      <Route path="/student/clubstoregister" element={<Studentclubres/>}/>
      <Route path="/club/clubrrom" element={<Clubroom/>}/>
    </Routes>
  </div>;
};

export default App;
