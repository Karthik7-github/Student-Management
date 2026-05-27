import StudentLayout from "./StudentLayout";
import { useEffect, useState } from "react";
const Studentclubs = () => {
  useEffect(() => {
    const usercolor = JSON.parse(localStorage.getItem("user")).Color;
    document.documentElement.style.setProperty("--user-color", usercolor);
  }, []);

  const [msg, setMsg] = useState([]);

  useEffect(() => {
    setMsg(["Club 1"]);
  }, []);

  return (
    <StudentLayout>
      <div className="promenu">
        <div className="userprotitle">
          <h1 style={{ fontSize: "40px",marginTop:"20px"}}>Registered Clubs</h1>
        </div>
        <div className="allclubs">
          {/* <button>Register for Clubs</button> */}
          <button class="animated-button">
            <svg
              viewBox="0 0 24 24"
              class="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">Register Button</span>
            <span class="circle"></span>
            <svg
              viewBox="0 0 24 24"
              class="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
        <div className="clubs">
          <div className="clubslots">
            {msg.map((item, index) => (
              <div className="clubslot" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Studentclubs;
