import TeacherLayout from "./TeacherLayout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Teacherviewclub = () => {
  const Club = JSON.parse(localStorage.getItem("Club"));

  const [clubnot, setClubnot] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getclubnots")
      .then((res) => setClubnot(res.data.Notification))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(clubnot);

  const FilteredNots = clubnot.filter((c) => c.ClubID == Club.ClubID);

  return (
    <TeacherLayout>
      <div className="Clubnavbar">
        <div className="firstline">
          <div
            className="clubnavbar1"
            style={{ backgroundColor: Club.Color, color: "black" }}
          >
            <h1>{Club.ClubName}</h1>
            <div className="secline">
              <h2>{Club.ClubCode}</h2>
              <h2>{Club.ClubID}</h2>
              <h2>{Club.TypeofClub}</h2>
              <h3>{Club.Email}</h3>
              <h3>Members : {Club.Members.length}</h3>
            </div>
          </div>
          <div className="clubnavbar2">
            <Link to="/teacher/clubs/viewclubs">
              <div
                className="backbtn"
                style={{
                  backgroundColor: Club.Color,
                  color: "black",
                  "--club-color": Club.Color,
                }}
              >
                <button>
                  <span class="text">Go Back</span>
                  <span>Thanks!</span>
                </button>
              </div>
            </Link>
            <div className="circle" style={{ backgroundColor: Club.Color }}>
              <div className="subcircle" style={{ color: Club.Color }}>
                {Club.ClubCode}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clubviewbox123">
        <div className="description">
          <h1 style={{ color: Club.Color }}>Description :</h1>
          <h2>{Club.Description}</h2>
        </div>

        <div className="clubevents">
          <h1 style={{ color: Club.Color }}>Events :</h1>
          {Club.Events && Club.Events.length > 0 ? (
            Club.Events.map((event, index) => (
              <h2 key={index} style={{ color: Club.Colortwo }}>
                {event.EventName}
              </h2>
            ))
          ) : (
            <h2 style={{ color: Club.Colortwo }}>No Events Available</h2>
          )}
        </div>

        <div className="clubevents">
          <h1 style={{ color: Club.Color }}>Awards :</h1>
          {Club.Awards && Club.Awards.length > 0 ? (
            Club.Awards.map((award, index) => (
              <h2 key={index} style={{ color: Club.Colorthree }}>
                {award.AwardName}
              </h2>
            ))
          ) : (
            <h2 style={{ color: Club.Colorthree }}>No Awards Available</h2>
          )}
        </div>
        <div className="clubnots" style={{ "--club-color": Club.Color }}>
          <h1>
            <h5
              style={{
                backgroundColor: "black",
                color: "whitesmoke",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Active Events
            </h5>
          </h1>
          {FilteredNots.length > 0 ? (
            FilteredNots.map((nots, index) => {
              return (
                <div
                  className="notbox"
                  key={index}
                  style={{ backgroundColor: nots.Color }}
                >
                  <h1
                    style={{
                      fontFamily: "-moz-initial",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {nots.EventName}
                  </h1>
                  <br />
                  <h3 style={{ fontFamily: "cursive", paddingLeft: "50px" }}>
                    {nots.Description}
                  </h3>
                </div>
              );
            })
          ) : (
            <h1 style={{ color: "white", marginLeft: "350px" }}>
              No Active Events
            </h1>
          )}
        </div>
        </div>
    </TeacherLayout>
  );
};

export default Teacherviewclub;
