import TeacherLayout from "./TeacherLayout";
import { NavLink, Outlet } from "react-router-dom";

const TeacherCourses = () => {

  const User = JSON.parse(localStorage.getItem("user"));

  return (
    <TeacherLayout>
      <div className="courselayout">
        <div className="maincoursedraft" style={{"--user-color":User.Color}}>
          <div class="nav">
            <div class="container">
              <div className="btn" style={{"--user-color":User.Color}}>
                <NavLink className="clink" to="home">Home</NavLink>
              </div>
              <div className="btn">
                <NavLink className="clink" to="launch">Launch</NavLink>
              </div>
              <div className="btn">
                <NavLink className="clink" to="remove">Remove</NavLink>
              </div>
              <div className="btn">
                <NavLink className="clink" to="mine">My_Store</NavLink>
              </div>
              <svg
                class="outline"
                overflow="visible"
                width="400"
                height="60"
                viewBox="0 0 400 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  class="rect"
                  pathLength="100"
                  x="0"
                  y="0"
                  width="400"
                  height="60"
                  fill="transparent"
                  stroke-width="5"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
        <div className="coursedrafts">
          <Outlet />
        </div>
      </div>
    </TeacherLayout>
  );
};

export default TeacherCourses;
