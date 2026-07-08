import { useState } from "react";
import StudentLayout from "./StudentLayout";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Studentcompletedass = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getassignments")
      .then((res) => setAssignments(res.data.Assignment))
      .catch((err) => console.error(err));
  }, []);

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const today = new Date();

  assignments.filter((c) => c.Class === User.Class);

  const activeAssignments = assignments.filter(
    (a) => parseDate(a.Time) >= today,
  );

  console.log(activeAssignments);

  const inactiveAssignments = assignments.filter(
    (a) => parseDate(a.Time) < today,
  );

  console.log(inactiveAssignments);

  return (
    <div>
      <StudentLayout>
        <div className="promenu">
          <div className="userprotitle" style={{ "--user-color": User.Color }}>
            <h1
              style={{
                fontSize: "40px",
                marginTop: "20px",
                fontFamily: "cursive",
              }}
            >
               Assignments
            </h1>
          </div>
          <div className="allclubs" style={{ "--user-color": User.Color }}>
            <Link to="/student/assesments">
              <button class="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  class="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text">Active</span>
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
          <div className="activeassigns" style={{ "--user-color": User.Color }}>
            <h1 style={{ marginLeft: "20px" }}>Completed : </h1>
            <div className="activebox123">
              {inactiveAssignments.length > 0 ? (
                inactiveAssignments.map((item, key) => {
                  return (
                    <div
                      className="notboxwel"
                      style={{ marginTop: "10px", backgroundColor: item.Color }}
                      key={key}
                    >
                      <div>
                        <span></span>
                        <span style={{ paddingLeft: "100px" }}>
                          📅 {item.Time}
                        </span>
                      </div>
                      <h1>{item.Title}</h1>
                      <h2>Class : {item.Class}</h2>
                      <h3>{item.Desc}</h3>
                    </div>
                  );
                })
              ) : (
                <h1>No Completed Assignments</h1>
              )}
            </div>
            <h1 style={{ marginLeft: "20px" }}> Total Completed Assignments: {inactiveAssignments.length}</h1>
          </div>
        </div>
      </StudentLayout>
    </div>
  );
};

export default Studentcompletedass;
