import TeacherLayout from "./TeacherLayout";
import { useState,useEffect } from "react";
import axios from 'axios'

const teacherwelcome = () => {
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

  assignments.filter(
    (c) => c.ID===User.TeacherID
  )

  const activeAssignments = assignments.filter(
    (a) => parseDate(a.Time) >= today,
  );

  console.log(activeAssignments);

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

  const [clubnot, setClubnot] = useState([]);

 

    useEffect(() => {
       axios.get("http://localhost:5000/api/course/getclubnots")
      .then((res) => setClubnot(res.data.Notification))
      .catch(console.log);
    }, [])
    
    

  return (
    <TeacherLayout>
      <div className="promenu" style={{marginTop:"20px"}}>
        <div className="activeassigns" style={{ "--user-color": User.Color }}>
          <h1 style={{ marginLeft: "20px" }}>Active : </h1>
          <div className="activebox123">
            {activeAssignments.length > 0 ? (
              activeAssignments.map((item, key) => {
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
              <h1>No Active Assignments</h1>
            )}
          </div>
        </div>
        <h1 style={{marginLeft:"20px"}}>Announcements</h1>
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
          <h2 className="sub-title" style={{color:"black",marginLeft:"40px"}}>Club Events</h2>
          <div className="cards-container">
            {clubnot.length > 0 ? (
              clubnot.map((nots, index) => (
                <div
                  key={index}
                  className="notboxwel"
                  style={{
                    background: `linear-gradient(135deg, ${nots.Color}, #1e293b)`,
                  marginLeft:"20px",marginTop:"10px", marginBottom:"20px"
                  }}
                >
                  <div>
                    <span>{nots.ClubID}</span>
                    <span style={{paddingLeft:"100px"}}>📅 {nots.Time}</span>
                  </div>
                  <h2>{nots.EventName}</h2>
                  <p>{nots.Description}</p>
                </div>
              ))
            ) : (
              <p style={{ color: "white" }}>No Active Events</p>
            )}
          </div>          
      </div>
    </TeacherLayout>
  );
};

export default teacherwelcome;
