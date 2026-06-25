import StudentLayout from "../Student/StudentLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentClubstoregister = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  const [selected, setSelected] = useState("All");
  const [club, setClub] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  const username = User.StudentID;

  const filteredclubs = club.filter(
    (c) =>
      !c.Members?.some((m) => m.MemberName === username) &&
      (selected === "All" || c.TypeofClub === selected),
  );

  const handleregister = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/course/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MemberName: username,
        }),
      });

      const data = await res.json();
      console.log(data);
      setRefresh((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StudentLayout>
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
                    <button
                      className="primary-button"
                      style={{ "--club-color": Club.Color }}
                      onClick={() => handleregister(Club._id)}
                    >
                      REGISTER
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
