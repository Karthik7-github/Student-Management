import TeacherLayout from "./TeacherLayout";
import { Link, Outlet } from "react-router-dom";

const TeacherCourses = () => {

  const User = JSON.parse(localStorage.getItem("user"));

  return (
    <TeacherLayout>
      <div className="courselayout">
        <div className="maincoursedraft" style={{"--user-color":User.Color}}>
          <div class="nav">
            <div class="container">
              <div class="btn">
                <Link to="home" style={{color:User.Color}}>Home</Link>
              </div>
              <div class="btn">
                <Link to="launch" style={{color:User.Color}}>Launch</Link>
              </div>
              <div class="btn">
                <Link to="remove" style={{color:User.Color}}>Remove</Link>
              </div>
              <div class="btn">
                <Link to="mine" style={{color:User.Color}}>Remove</Link>
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
