import { useEffect, useState } from "react";
import StudentLayout from "./StudentLayout";
import axios from "axios";

const Studenttimetables = () => {
  const [shedule, setShedule] = useState([]);
  const User = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getschedule")
      .then((res) => {
        setShedule(res.data.Timetable);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Subcolors = {
    'Structured Query Language':"#FF5722",
    'Database Management Systems':'#F69D39',
    'Computer Networks':'#6FCF97',
    'Operating Systems':'#E4D329',
    'Aritificial Intelligence':'#E0C375',
    'Compiler Design':'#4BB8FA'
  }

  const Filterschedule = shedule.filter((c) => c.Grade === User.Class);

  console.log(Filterschedule);

  return (
    <StudentLayout>
      <div className="promenu">
        <div className="userprotitle">
          <h1 style={{color:User.Color,marginTop:"20px",fontWeight:"bolder",fontSize:"40px"}}>Time Table</h1>
        </div>
        <div className="tt">
          <table>
            <thead>
              <tr>
                <th className="time">
                  <h1>TIME</h1>
                </th>
                <th className="subject">
                  <h1>SUBJECT</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {Filterschedule.length > 0 ? (
                Filterschedule.map((schedule, index) =>
                  schedule.Schedule.map((sub, i) => (
                    <tr key={`${index}-${i}`} className="trt1s1">
                      <td className="time1" style={{backgroundColor:`${Subcolors[sub.Subject]}`}}>{sub.Time}</td>
                      <td className="subject1" style={{backgroundColor:`${Subcolors[sub.Subject]}`}}>{sub.Subject}</td>
                    </tr>
                  )),
                )
              ) : (
                <h1 style={{margin:"100PX 0PX 0PX 300PX"}}>NO SHEDULE</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Studenttimetables;
