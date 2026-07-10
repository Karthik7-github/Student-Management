import TeacherLayout from "./TeacherLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
const API = import.meta.env.VITE_API;

const Teacherclub = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [incharge, setIncharge] = useState("");
  const [leader, setLeader] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const Createclub = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/api/course/createclub`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ClubName: name,
          ClubCode: code,
          ClubID: id,
          TypeofClub: type,
          ClubIncharge: incharge,
          ClubLeader: leader,
          Link: link,
          Email: email,
          Description: desc,
        }),
      });
      const data = await res.json();
      console.log(data);
      setName("");
      setCode("");
      setType("");
      setIncharge("");
      setLeader("");
      setDesc("");
      setEmail("");
      setId("");
      setLink("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TeacherLayout>
      <div className="promenu" style={{"--user-color":User.Color}}>
        <div className="userprotitle">
          <h1
            style={{
              fontSize: "40px",
              marginTop: "20px",
              fontFamily: "cursive"
            }}
          >
            Register Clubs
          </h1>
        </div>
        <div className="allclubs">
          <Link to="/teacher/clubs/viewclubs">
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
       <form onSubmit={Createclub}>
        <div className="clubcreabox" style={{ "--user-color": User.Color }}>
          <h1>Create a Club</h1>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Club Name :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={name}
              placeholder="Enter Club Name : "
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Club Code :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={code}
              placeholder="Enter Club Code : "
              onChange={(e) => {
                setCode(e.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Club ID :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={id}
              placeholder="Enter Club ID : "
              onChange={(e) => {
                setId(e.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Club Type :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={type}
              placeholder="Enter Club Type : "
              onChange={(e) => {
                setType(e.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Club Incharge :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={incharge}
              placeholder="Enter Club Incharge : "
              onChange={(e) => {
                setIncharge(e.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Club Leader :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={leader}
              placeholder="Enter Club Leader : "
              onChange={(e) => {
                setLeader(e.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Club Link :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={link}
              placeholder="Enter Club Link : "
              onChange={(e) => {
                setLink(e.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Club Email :{" "}
              </h2>
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter Club Email : "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Club Description :{" "}
              </h2>
            </label>
            <textarea
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              rows={10}
              cols={80}
              style={{
                padding: "15px",
                fontSize: "20px",
                border: `3px solid ${User.Color}`,
              }}
              required
            ></textarea>
          </div>
          <button type="submit">Create Club</button>
        </div>
      </form>
      </div>
    </TeacherLayout>
  );
};

export default Teacherclub;
