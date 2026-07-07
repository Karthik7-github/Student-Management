import TeacherLayout from "./TeacherLayout";
import { Link } from "react-router-dom";

const Teacherass = () => {

  const User = JSON.parse(localStorage.getItem("user"));

  return (
    <TeacherLayout>
      <div className="promenu">
        <div className="userprotitle" style={{"--user-color":User.Color}}>
          <h1
            style={{
              fontSize: "40px",
              marginTop: "20px",
              fontFamily: "cursive",
            }}
          >
            Assignments
          </h1>
        </div>
        <div className="allclubs" style={{"--user-color":User.Color}}>
          <Link to="/student/clubstoregister">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">All Assignments</span>
              <span class="circle"></span>
              <svg
                viewBox="0 0 24 24"
                class="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className="mainass" style={{"--user-color":User.Color}}>
          <div className="launchins">
            <div className="firsthalf">
              <label>
                <h3>Subject Name : </h3>
              </label>
              <input
                type="text"
                placeholder="Enter the Subject Name "
                required
              />
            </div>
            <div className="firsthalf">
              <label>
                <h3>Subject Code : </h3>
              </label>
              <input
                type="text"
                placeholder="Enter the Subject Code "
                required
              />
            </div>
          </div>
          <div className="launchins">
            <div className="firsthalf">
              <label>
                <h3>Subject Name : </h3>
              </label>
              <input
                type="text"
                placeholder="Enter the Subject Name "
                required
              />
            </div>
            <div className="firsthalf">
              <label>
                <h3>Subject Code : </h3>
              </label>
              <input
                type="text"
                placeholder="Enter the Subject Code "
                required
              />
            </div>
          </div>
          <div className="launchins">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default Teacherass;
