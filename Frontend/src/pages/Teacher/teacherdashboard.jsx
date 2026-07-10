import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const API = import.meta.env.VITE_API;

const teacherdashboard = () => {

  const navigate = useNavigate();

  const User = JSON.parse(localStorage.getItem("user"));

  const Handlelogout = async () => {
    const res = await fetch(`${API}/api/teacher/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
    navigate("/");
    localStorage.removeItem("user");
    localStorage.removeItem("Club");
  };

  return (
    <div className="studentdash">
      <div
        className="userprofilepic"
        style={{
          borderRight: `2px solid ${User?.Color}`,
          backgroundColor: User.Color,
        }}
      >
        <Link to="/teacherwelcome" className="profilelink">
          <div className="profilebox">
            <h1 style={{ color: User.Color }}>{User.Name[0]}</h1>
          </div>
        </Link>
        <Link to="/teacher/info">
          <h1>
            {User?.Name}
            <i class="fa-solid fa-user"></i>
          </h1>
        </Link>
      </div>
      <div
        className="userlinks"
        style={{
          backgroundColor: User?.Color,
          borderRight: `2px solid transparent`,
          "--user-color":User.Color
        }}
      >
        <NavLink
          to="/teacher/courses/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h3>Courses</h3>
        </NavLink>
        <NavLink
          to="/teacher/timetables"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h3>Time Table</h3>
        </NavLink>
        <NavLink
          to="/teacher/assesments"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h3>Assesments</h3>
        </NavLink>
        <NavLink
          to="/teacher/fees"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h3>Fees</h3>
        </NavLink>
        <NavLink
          to="/teacher/clubs"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h3>Clubs</h3>
        </NavLink>
        <NavLink
          to="/teacher/announcements"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h3>Announcements</h3>
        </NavLink>
        <NavLink
          to="/teacher/chat"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h3>Chats</h3>
        </NavLink>
        <NavLink
          to="/teacher/attendance"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h3>Attendance</h3>
        </NavLink>
      </div>
      <div
        className="userfooter"
        style={{
          borderRight: `2px solid ${User?.Color}`,
          backgroundColor: User.Color,
        }}
      >
        <button style={{ color: User.Color }} onClick={Handlelogout}>
          <h2>Logout</h2>
        </button>
      </div>
    </div>
  );
};

export default teacherdashboard;
