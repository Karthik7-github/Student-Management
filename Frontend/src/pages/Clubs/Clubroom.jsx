import StudentLayout from '../Student/StudentLayout';
import Clubdashboard from './Clubdashboard';
import { Outlet } from "react-router-dom";

const Clubroom = () => {

  return (
    <div className="clublayout">
      <StudentLayout>
       <Clubdashboard/>
       <div className="clubmainmenu">
        <Outlet />
       </div>
    </StudentLayout>
    </div>
  )
}

export default Clubroom;