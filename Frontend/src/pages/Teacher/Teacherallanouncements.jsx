import TeacherLayout from './TeacherLayout'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Teacherallanouncements = () => {

    const User = JSON.parse(localStorage.getItem("user"));
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
    (c)=> c.Grade===0
  );

  console.log(filterannouncements);

  return (
    <TeacherLayout>
         <div className="promenu">
        <div className="userprotitle" style={{ "--user-color": User.Color }}>
          <h1
            style={{
              fontSize: "40px",
              marginTop: "20px",
              fontFamily: "cursive",
            }}
          >
            Announcements
          </h1>
        </div>
        <div className="allclubs" style={{ "--user-color": User.Color }}>
          <Link to="/teacher/announcements">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">Create</span>
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
        {filterannouncements.length > 0 ? (
            filterannouncements.map((ann, index) => {
              return (
                <div className="announcements" key={index} style={{"--ann-color":ann.Color}}>
                  <h1>{ann.Title}</h1>
                  {ann.Content}
                  <h3>Messaged By : {ann.Author}</h3>
                </div>
              );
            })
          ) : (
            <h1 style={{margin:"100px 0px 0px 350px",color:"white"}}>No Announcements</h1>
          )}
      </div>
    </TeacherLayout>
  )
}

export default Teacherallanouncements