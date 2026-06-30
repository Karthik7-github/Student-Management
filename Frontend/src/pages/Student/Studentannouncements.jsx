import { useState } from "react";
import StudentLayout from "./StudentLayout";
import { useEffect } from "react";
import axios from "axios";

const Studentannouncements = () => {

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
    (c)=> String(c.Grade)===User.Class || c.Grade===0
  );

  return (
    <div>
      <StudentLayout>
        <div className="promenu">
          <div className="userprotitle">
            <h1 style={{ fontSize: "40px"}}>Announcements</h1>
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
      </StudentLayout>
    </div>
  );
};

export default Studentannouncements;
