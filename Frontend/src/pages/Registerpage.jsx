import React from "react";
import { Link } from "react-router-dom";

function Registerpage() {
  return (
    <div>
      <div className="Registerpageselection">
         <h1 className="reshead">Registration form</h1>
        <div className="registerselectionbox">
          <Link to="/register-student">
            <div className="selection">
              <div className="sssbox s1">
                <i class="fa-solid fa-user-graduate"></i>
              </div>
              <div className="ssstext s1">
                <h1>Student</h1>
              </div>
            </div>
          </Link>
           <Link to="/register-teacher">
            <div className="selection">
               <div className="sssbox s2">
                <i class="fa-solid fa-person-chalkboard"></i>
              </div>
              <div className="ssstext s2">
                <h1>Lecturer [Admin]</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;
