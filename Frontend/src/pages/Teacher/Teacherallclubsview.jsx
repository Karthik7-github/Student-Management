import TeacherLayout from "./TeacherLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Teacherallclubsview = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  const [selected, setSelected] = useState("All");
  const [club, setClub] = useState([]);

  useEffect(() => {
    const usercolor = JSON.parse(localStorage.getItem("user")).Color;
    document.documentElement.style.setProperty("--user-color", usercolor);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getclubs")
      .then((res) => {
        setClub(res.data.Club);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const username = User.StudentID;

  const filteredclubs = club.filter(
    (c) =>
      !c.Members?.some((m) => m.MemberName === username) &&
      (selected === "All" || c.TypeofClub === selected),
  );

  const handleview = (club) => {
    console.log("Clicked club:", club);
    localStorage.setItem("Club", JSON.stringify(club));
  };

  return (
    <TeacherLayout>
      <div className="promenu">
        <div className="userprotitle">
          <h1
            style={{
              fontSize: "40px",
              marginTop: "20px",
              fontFamily: "cursive",
              color: User.Color,
            }}
          >
            All Clubs
          </h1>
        </div>
        <div className="allclubs">
          <Link to="/teacher/clubs">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">Create Clubs</span>
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
        <div className="selectclubs">
          <div className="radio-input">
            <input
              value="All"
              name="value-radio"
              id="value-1"
              type="radio"
              onChange={(e) => {
                setSelected(e.target.value);
              }}
              defaultChecked
            />
            <label htmlFor="value-1">All</label>
            <input
              value="Tech"
              name="value-radio"
              id="value-2"
              type="radio"
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            />
            <label htmlFor="value-2">Tech</label>

            <input
              value="Sports"
              name="value-radio"
              id="value-3"
              type="radio"
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            />
            <label htmlFor="value-3">Sports</label>
            <input
              value="Music"
              name="value-radio"
              id="value-4"
              type="radio"
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            />
            <label htmlFor="value-4">Music</label>
            <input
              value="Gaming"
              name="value-radio"
              id="value-5"
              type="radio"
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            />
            <label htmlFor="value-5">Gaming</label>
            <input
              value="Arts"
              name="value-radio"
              id="value-6"
              type="radio"
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            />
            <label htmlFor="value-6">Arts</label>
          </div>
        </div>
        <div className="clubs">
          <div className="clubslots">
            {filteredclubs.map((Club, index) => (
              <div
                className="card"
                key={index}
                style={{
                  border: `2px solid ${Club.Color}`,
                  "--club-color": Club.Color,
                }}
              >
                <div className="image" style={{ backgroundColor: Club.Color }}>
                  <h1 style={{ fontSize: "38px" }}>{Club.ClubName}</h1>
                </div>
                <div className="content">
                  <span className="title">
                    {Club.ClubCode} || {Club.ClubID}
                  </span>
                  <p className="desc">{Club.Description}</p>
                  <div className="resntntoclub">
                    <Link to="/teacher/clubs/viewclubs/view">
                      <button
                        className="primary-button"
                        style={{ "--club-color": Club.Color }}
                        onClick={() => handleview(Club)}
                      >
                        Members : {Club.Members.length}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default Teacherallclubsview;
