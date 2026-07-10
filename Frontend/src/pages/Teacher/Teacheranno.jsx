import { useState } from "react";
import TeacherLayout from "./TeacherLayout";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API;

const Teacheranno = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(null);
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${API}/api/course/createannouncement`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Title: title,
            Content: desc,
            Author: User.Name,
            Grade: grade,
          }),
        },
      );
      setDesc("");
      setGrade(0);
      setTitle("");
      const data = await res.json();
      console.log(data);
      alert("Anniuncement Created");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TeacherLayout>
      <div className="promenu">
        <div className="userprotitle" style={{ "--user-color": User.Color }}>
          <h1
            style={{
              fontSize: "40px",
              marginTop: "20px",
              fontFamily: "cursive",
            }}
          >
            Announcements
          </h1>
        </div>
        <div className="allclubs" style={{ "--user-color": User.Color }}>
          <Link to="/teacher/announcements/view">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">View Announcements</span>
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
        <form onSubmit={handleSubmit}>
        <div className="annobox7" style={{ "--user-color": User.Color,marginTop:"0px" }}>
          <div className="classtitle">
            <div className="labin">
              <label>
                <h2>Title : </h2>
              </label>
              <input
                value={title}
                type="text"
                placeholder="Enter the Title : "
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              />
            </div>
            <div className="labin">
              <label>
                <h2>Class : </h2>
              </label>
              <input
                value={grade}
                type="text"
                placeholder="Enter the Class : "
                onChange={(e) => {
                  setGrade(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <textarea
            value={desc}
            rows={10}
            cols={100}
            style={{ padding: "20px", border: `4px solid ${User.Color}` }}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </TeacherLayout>
  );
};

export default Teacheranno;
