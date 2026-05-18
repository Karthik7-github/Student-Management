import { Route, Routes } from "react-router-dom";
import Welcomepage from './pages/Welcomepage';
import Login from './pages/Login';

const App = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Welcomepage/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
  </div>;
};

export default App;
