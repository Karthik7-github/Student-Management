import { Route, Routes } from "react-router-dom";
import Welcomepage from './pages/Welcomepage';
import Login from './pages/Login';
import Register from './pages/Registerpage';
import Teacherres from './pages/Registrations/teacherres';
import Studentres from './pages/Registrations/studentres';

const App = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Welcomepage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/register-teacher" element={<Teacherres/>}/>
      <Route path="/register-student" element={<Studentres/>}/>
    </Routes>
  </div>;
};

export default App;
