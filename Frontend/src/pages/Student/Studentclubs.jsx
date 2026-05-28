import StudentLayout from "./StudentLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Studentclubs = () => {
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
    c.Members?.some((m) => m.MemberName === username),
  );

  const handleclub = async (club)=>{
    console.log(club.Color2)
    localStorage.setItem("Club",JSON.stringify(club));
  }

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
            Registered Clubs
          </h1>
        </div>
        <div className="allclubs">
          <Link to="/student/clubstoregister">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">Register Clubs</span>
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
        <div className="clubs">
          <div className="clubslots">
            {filteredclubs.map((Club, index) => (
              <div
                className="clubslot"
                key={index}
                style={{
                  backgroundColor: Club.Color,
                  "--club-color": Club.Color,
                }}
              >
                <div className="clubname">{Club.ClubName}</div>
                <div className="clublogobox">
                  <div className="clublogo" style={{ color: Club.Color }}>
                    {Club.ClubCode}
                  </div>
                </div>
                <div className="clubcode">
                  <h3>
                    {Club.ClubID} [ {Club.TypeofClub} ]
                  </h3>
                </div>
                <div className="clubmems">
                  <div className="clubmem">
                    <h2>Club Incharge :</h2>
                    <h3>{Club.ClubIncharge}</h3>
                  </div>
                  <div className="clubmem">
                    <h2>Club Leader :</h2>
                    <h3>{Club.ClubLeader}</h3>
                  </div>
                  <div className="clubmem">
                    <h2>Members :</h2>
                    <h3> {Club.Members.length}</h3>
                  </div>
                  <Link to="/club">
                    <button className="primary-button" onClick={()=>handleclub(Club)}>
                      <h4 style={{ fontWeight: "bolder" }}>ENTER</h4>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Studentclubs;


