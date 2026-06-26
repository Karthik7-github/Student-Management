import StudentLayout from "./StudentLayout";
import { useState, useEffect } from "react";
import axios from "axios";

const Studentwelcome = () => {
  const userData = localStorage.getItem("user");
  const User = userData ? JSON.parse(userData) : null;
  const [clubnot, setClubnot] = useState([]);
  const [club, setClub] = useState([]);

  if (!User) {
    return <h1>No user data Please Login</h1>;
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getclubnots")
      .then((res) => setClubnot(res.data.Notification))
      .catch((err) => {
        console.log(err);
      });
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

  const username = User.Name;

  const filteredclubs = club.filter((c) =>
    c.Members?.some((m) => m.MemberName === username),
  );

  console.log(filteredclubs);

  const clubIds = filteredclubs.map((c) => c.ClubID);

  const filterclubnots = clubnot.filter((n) => clubIds.includes(n.ClubID));

  console.log(filterclubnots);

  const [announcement, setAnnouncement] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getannouncements")
      .then((res) => {
        setAnnouncement(res.data.Announcements);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterannouncements = announcement.filter(
    (c) => c.Grade === User.Class || c.Grade === 0,
  );

  return (
    <StudentLayout>
      <div className="studentwelcomepage">
        <div className="welcomehead">
          <h1 style={{ color: User.Color }}>Welcome {User.Name} . . .</h1>
        </div>
        <div className="imps">
          <div className="attendancebox">
            <div class="card-6" aria-hidden="true">
              <div class="card-6__holo" style={{ "--user-color": User.Color }}>
                <div class="card-6__layer card-6__layer--back">75%</div>
                <div class="card-6__layer card-6__layer--mid">75%</div>
                <div class="card-6__layer card-6__layer--front">75%</div>
              </div>
            </div>
            <h1 style={{ color: User.Color }}>Attendace</h1>
          </div>
          <div className="imptools"></div>
        </div>
        <div className="welcomenots" style={{ "--user-color": User.Color }}>
          <h1 className="section-title">Updates</h1>

          {/* EVENTS */}
          <h2 className="sub-title">Club Events</h2>
          <div className="cards-container">
            {filterclubnots.length > 0 ? (
              filterclubnots.map((nots, index) => (
                <div
                  className="notboxwel"
                  key={index}
                  style={{ background: `linear-gradient(135deg, ${nots.Color}, #1e293b)`}}
                >
                  <div className="not-header">
                    <span className="club-id">{nots.ClubID}</span>
                    <span className="event-time">📅 {nots.Time}</span>
                  </div>

                  <h2 className="event-name">{nots.EventName}</h2>
                  <p className="event-desc">{nots.Description}</p>
                </div>
              ))
            ) : (
              <p className="no-events">No Active Events</p>
            )}
          </div>

          {/* ANNOUNCEMENTS */}
          <h2 className="sub-title">Announcements</h2>
          <div className="cards-container">
            {filterannouncements.length > 0 ? (
              filterannouncements.map((ann, index) => (
                <div
                  className="announcement-card"
                  key={index}
                  style={{ "--ann-color": ann.Color }}
                >
                  <h3>{ann.Title}</h3>
                  <p>{ann.Content}</p>
                  <span className="author">— {ann.Author}</span>
                </div>
              ))
            ) : (
              <p className="no-events">No Announcements</p>
            )}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Studentwelcome;
