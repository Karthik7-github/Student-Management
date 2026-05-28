import { Link, useNavigate } from "react-router-dom";

const Studentdashboard = () => {
  const User = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const Handlelogout = async () => {
    const res = await fetch("http://localhost:5000/api/teacher/logout", {
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
        <Link to='/student/profile' className="profilelink">
          <div className="profilebox">
            <h1 style={{ color: User.Color }}>{User.Name[0]}</h1>
          </div>
        </Link>
        <Link to="/studentwelcome">
          <h1>{User?.Name}</h1>
        </Link>
      </div>
      <div
        className="userlinks"
        style={{
          backgroundColor: User?.Color,
          borderRight: `2px solid transparent`,
        }}
      >
        <Link to="/student/courses">
          <div
            className="link"
            style={{
              color: User.Color,
              borderBottom: `2px solid ${User.Color}`,
            }}
          >
            <h3>Courses</h3>
          </div>
        </Link>
        <Link to="/student/timetables">
          <div
            className="link"
            style={{
              color: User.Color,
              borderBottom: `2px solid ${User.Color}`,
            }}
          >
            <h3>Time Table</h3>
          </div>
        </Link>
        <Link to="/student/results">
          <div
            className="link"
            style={{
              color: User.Color,
              borderBottom: `2px solid ${User.Color}`,
            }}
          >
            <h3>Results</h3>
          </div>
        </Link>
        <Link to="/student/assesments">
          <div
            className="link"
            style={{
              color: User.Color,
              borderBottom: `2px solid ${User.Color}`,
            }}
          >
            <h3>Assesments</h3>
          </div>
        </Link>
        <Link to="/student/fees">
          <div
            className="link"
            style={{
              color: User.Color,
              borderBottom: `2px solid ${User.Color}`,
            }}
          >
            <h3>Fees</h3>
          </div>
        </Link>
        <Link to="/student/clubs">
          <div
            className="link"
            style={{
              color: User.Color,
              borderBottom: `2px solid ${User.Color}`,
            }}
          >
            <h3>Clubs</h3>
          </div>
        </Link>
        <Link to="/student/announcements">
          <div
            className="link"
            style={{
              color: User.Color,
              borderBottom: `2px solid ${User.Color}`,
            }}
          >
            <h3>Announcements</h3>
          </div>
        </Link>
        <Link to="/student/chat">
          <div
            className="link"
            style={{
              color: User.Color,
              borderBottom: `2px solid ${User.Color}`,
            }}
          >
            <h3>Chat</h3>
          </div>
        </Link>
        <Link to="/student/library">
          <div
            className="link"
            style={{
              color: User.Color,
              borderBottom: `2px solid ${User.Color}`,
            }}
          >
            <h3>Digital Library</h3>
          </div>
        </Link>
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

export default Studentdashboard;
