import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Clubhome = () => {
  const Club = JSON.parse(localStorage.getItem("Club"));
  const User = JSON.parse(localStorage.getItem("user"));

  const [refresh, setRefresh] = useState(false);

  const username = User?.StudentID;

  const handlesubmit = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/course/leave/${id}`, {
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

  if (!Club) return <h1>No Club Data</h1>;

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
    <div className="clubhome">
      <h2 style={{ color: Club.Color }}>
        CLUB INCHARGE :{" "}
        <span style={{ color: "black" }}>{Club.ClubIncharge}</span>
      </h2>

      <h2 style={{ color: Club.Color }}>
        CLUB LEADER : <span style={{ color: "black" }}>{Club.ClubLeader}</span>
      </h2>

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
              <div className="notbox" key={index} style={{backgroundColor:nots.Color}}>
                <h1 style={{fontFamily:"-moz-initial",letterSpacing:"0.5px"}}>{nots.EventName}</h1>
                <br />
                <h3 style={{fontFamily:"cursive",paddingLeft:"50px"}}>{nots.Description}</h3>
              </div>
            );
          })
        ) : (
          <h1 style={{color:"white",marginLeft:"350px"}}>No Active Events</h1>
        )}
      </div>
      <div className="leftclub" style={{ "--user-color": Club.Color }}>
        <Link to="/student/clubs">
          <button
            className="animated-button"
            onClick={() => handlesubmit(Club._id)}
          >
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>

            <span className="text">Leave Club</span>

            <span className="circle"></span>

            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Clubhome;
