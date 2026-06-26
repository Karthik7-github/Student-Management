import React, { useEffect, useState } from "react";
import StudentLayout from "./StudentLayout";
import axios from "axios";

const Studentcourses = () => {
  const [course, setCourse] = useState([]);
  const User = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getcourses")
      .then((res) => setCourse(res.data.Course))
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const filteredCourses = course.filter(
    (c) => c.Class === User.Class
  );

  return (
    <StudentLayout>
      <div className="promenu" style={{backgroundColor:"black"}}>
        <div className="userprotitle" style={{marginTop:"20px"}}>
          <h1 style={{fontSize:"40px",fontWeight:"bolder"}}>Courses</h1>
        </div>

        {filteredCourses.length > 0 ? (
          filteredCourses.map((Course, index) => (
            <a
              href={Course.Link}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <div
                className="coursedata"
                style={{ backgroundColor: Course.Color,"--cou-color":Course.Color}}
              >
                <div className="blackline"></div>
                <h1>
                  [{Course.Code}] {Course.Name}
                </h1>
              </div>
            </a>
          ))
        ) : (
          <h1 style={{margin:"100px 0px 0px 350px",color:"white"}}>No Courses Found</h1>
        )}
      </div>
    </StudentLayout>
  );
};

export default Studentcourses;