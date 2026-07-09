import StudentLayout from "./StudentLayout";
import { useState, useEffect } from "react";
import axios from "axios";

const Studentwelcome = () => {
  const userData = localStorage.getItem("user");
  const User = userData ? JSON.parse(userData) : null;

  const [clubnot, setClubnot] = useState([]);
  const [club, setClub] = useState([]);
  const [announcement, setAnnouncement] = useState([]);
  const [shedule, setShedule] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  const [attend, setAttend] = useState([]);
  const [value, setValue] = useState(0);

  if (!User) {
    return <h1>No user data Please Login</h1>;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getclubnots")
      .then((res) => setClubnot(res.data.Notification))
      .catch(console.log);

    axios
      .get("http://localhost:5000/api/course/getclubs")
      .then((res) => setClub(res.data.Club))
      .catch(console.log);

    axios
      .get("http://localhost:5000/api/course/getannouncements")
      .then((res) => setAnnouncement(res.data.Announcements))
      .catch(console.log);

    axios
      .get("http://localhost:5000/api/course/getschedule")
      .then((res) => setShedule(res.data.Timetable))
      .catch(console.log);

    axios
      .get("http://localhost:5000/api/course/getattend")
      .then((res) => setAttend(res.data.Attendance))
      .catch(console.log);
  }, []);

  // 🔥 PARSE TIME
  const parseTime = (timeRange) => {
    const start = timeRange.split("-")[0];

    let hours = parseInt(start);
    if (start.includes("PM") && hours !== 12) hours += 12;
    if (start.includes("AM") && hours === 12) hours = 0;

    const d = new Date();
    d.setHours(hours, 0, 0, 0);
    return d;
  };

  const filteredclubs = club.filter((c) =>
    c.Members?.some((m) => m.MemberName === User.Name),
  );

  const clubIds = filteredclubs.map((c) => c.ClubID);
  const filterclubnots = clubnot.filter((n) => clubIds.includes(n.ClubID));

  const filterannouncements = announcement.filter(
    (c) => c.Grade === User.Class || c.Grade === 0,
  );

  const Filterschedule = shedule.filter((s) => s.Grade === User.Class);
  const allClasses = Filterschedule.flatMap((s) => s.Schedule || []);

  const upcomingClasses = allClasses
    .filter((sub) => parseTime(sub.Time) >= currentTime)
    .sort((a, b) => parseTime(a.Time) - parseTime(b.Time))
    .slice(0, 3);

  const currentClass = allClasses.find((sub) => {
    const [start, end] = sub.Time.split("-");
    return currentTime >= parseTime(start) && currentTime < parseTime(end);
  });

  const studentAttend = attend.find((c) => c.ID === User.StudentID);

  const target = studentAttend
    ? (studentAttend.Present / studentAttend.Total) * 100
    : 0;

  useEffect(() => {
    let startTime = null;
    const duration = 2000;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);
      const current = ease * target;

      setValue(current);

      if (progress < 1) requestAnimationFrame(animate);
    };

    if (target > 0) requestAnimationFrame(animate);
  }, [target]);

  // 🔥 SVG meter
  const radius = 90;
  const circumference = Math.PI * radius;
  const progress = value / 100;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <StudentLayout>
      {" "}
      <div className="studentwelcomepage">
        {" "}
        <div className="welcomehead">
          <h1 style={{ color: User.Color }}>Welcome {User.Name} . . .</h1>{" "}
        </div>
        <div className="imps">
          {/* ATTENDANCE */}
          <div className="attendancebox">
            <div className="card-6">
              <div
                className="card-6__holo"
                style={{ "--user-color": User.Color }}
              >
                <div className="card-6__layer">{Math.round(target)}%</div>
              </div>
            </div>
            <h1 style={{ color: User.Color }}>Attendance</h1>
          </div>

          <div className="imptools">
            <div className="card" style={{ "--user-color": User.Color }}>
              <p className="card-title">Upcoming Classes</p>

              <div className="small-desc">
                {currentClass && (
                  <div style={{ color: "lime" }}>
                    🔴 Ongoing: {currentClass.Subject}
                  </div>
                )}

                {upcomingClasses.length > 0 ? (
                  upcomingClasses.map((sub, i) => (
                    <div key={i} className="change">
                      ⏰ {sub.Time} — 📘 {sub.Subject}
                    </div>
                  ))
                ) : (
                  <span>NO SCHEDULE</span>
                )}
              </div>

              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: "50px",
                position: "relative",
              }}
            >
              <svg width="220" height="120">
                <path
                  d="M 10 100 A 90 90 0 0 1 210 100"
                  fill="none"
                  stroke="#ddd"
                  strokeWidth="15"
                />

                <path
                  d="M 10 100 A 90 90 0 0 1 210 100"
                  fill="none"
                  stroke="lime"
                  strokeWidth="15"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{
                    transition: "stroke-dashoffset 0.5s ease-out",
                  }}
                />
              </svg>

              <div
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {studentAttend
                  ? `${studentAttend.Present}/${studentAttend.Total}`
                  : "0/0"}
              </div>
            </div>
          </div>
        </div>
        <div className="welcomenots" style={{ "--user-color": User.Color }}>
          <h1 className="section-title">Updates</h1>

          <h2 className="sub-title">Club Events</h2>
          <div className="cards-container">
            {filterclubnots.length > 0 ? (
              filterclubnots.map((nots, index) => (
                <div
                  key={index}
                  className="notboxwel"
                  style={{
                    background: `linear-gradient(135deg, ${nots.Color}, #1e293b)`,
                  }}
                >
                  <div>
                    <span>{nots.ClubID}</span>
                    <span style={{ paddingLeft: "100px" }}>📅 {nots.Time}</span>
                  </div>
                  <h2>{nots.EventName}</h2>
                  <p>{nots.Description}</p>
                </div>
              ))
            ) : (
              <p style={{ color: "white" }}>No Active Events</p>
            )}
          </div>

          <h2 className="sub-title">Announcements</h2>
          <div className="cards-container">
            {filterannouncements.length > 0 ? (
              filterannouncements.map((ann, index) => (
                <div
                  key={index}
                  className="announcement-card"
                  style={{
                    background: `linear-gradient(135deg, ${ann.Color}, #1e293b)`,
                  }}
                >
                  <h3>{ann.Title}</h3>
                  <p>{ann.Content}</p>
                  <span>— {ann.Author}</span>
                </div>
              ))
            ) : (
              <p style={{ color: "white" }}>No Announcements</p>
            )}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Studentwelcome;
