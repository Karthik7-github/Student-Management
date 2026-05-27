import StudentLayout from "../Student/StudentLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentClubstoregister = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const usercolor = JSON.parse(localStorage.getItem("user")).Color;
    document.documentElement.style.setProperty("--user-color", usercolor);
  }, []);

  const [club, setClub] = useState([]);

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

  const username = User.Name;

  const filteredclubs = club.filter((c) =>
    c.Members?.some((m) => m.MemberName != username),
  );

  return (
    <StudentLayout>
      <div className="promenu">
        <div className="userprotitle">
          <h1
            style={{
              fontSize: "40px",
              marginTop: "20px",
              fontFamily: "cursive",
            }}
          >
            Clubs
          </h1>
        </div>
        <div className="allclubs">
          <Link to="/student/clubs">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">Registered Clubs</span>
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
          <div class="radio-input">
            <input
              value="value-1"
              name="value-radio"
              id="value-1"
              type="radio"
            />
            <label for="value-1">Value 1</label>
            <input
              value="value-2"
              name="value-radio"
              id="value-2"
              type="radio"
            />
            <label for="value-2">Value 2</label>
            <input
              value="value-3"
              name="value-radio"
              id="value-3"
              type="radio"
            />
            <label for="value-3">Value 3</label>
          </div>
        </div>
        <div className="clubs">
          <div className="clubslots">
            {filteredclubs.map((Club, index) => (
              <div
                class="card"
                key={index}
                style={{ border: `2px solid ${Club.Color}` }}
              >
                <div class="image" style={{ backgroundColor: Club.Color }}>
                  <h1 style={{fontSize:"38px"}}>{Club.ClubName}</h1>
                </div>
                <div class="content">
                  <span class="title">
                    {Club.ClubCode} || {Club.ClubID}
                  </span>
                  <p class="desc">{Club.Description}</p>
                  <div className="resntntoclub">
                    <button className="primary-button" style={{"--club-color": Club.Color,}}>
                    <h4 style={{ fontWeight: "bolder" }}>REGISTER</h4>
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentClubstoregister;
