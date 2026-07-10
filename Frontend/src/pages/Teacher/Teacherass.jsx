import { useState } from "react";
import TeacherLayout from "./TeacherLayout";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API;

const Teacherass = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(null);
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const handlesubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await fetch(`${API}/api/course/createassignment`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          Class:grade,
          Assigned:User.Name,
          ID:User.ID,
          Title:title,
          Desc:desc,
          Time:date
        }),
      });

      const data = await res.json;
      console.log(data);
      setDate("");
      setDesc("");
      setGrade(null);
      setTitle("");

      if(res.ok){
              alert("Assignment Created");
      }else{
        alert("Message",res.err);
      }
      
    }catch(err){
      console.log(err);
    }
  }

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
            Assignments
          </h1>
        </div>
        <div className="allclubs" style={{ "--user-color": User.Color }}>
          <Link to="/teacher/assesments/allanounce">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">All Assignments</span>
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
        <div className="mainass" style={{ "--user-color": User.Color }}>
          <form onSubmit={handlesubmit}>
            <div className="launchins">
              <div className="firsthalf">
                <label>
                  <h3>Title : </h3>
                </label>
                <input
                  type="text"
                  value={title}
                  placeholder="Enter the Title of Assignment  "
                  onChange={(res)=>{setTitle(res.target.value)}}
                  required
                />
              </div>
              <div className="firsthalf">
                <label>
                  <h3>Class : </h3>
                </label>
                <input
                  type="text"
                  value={grade}
                  placeholder="Enter the  Sem "
                  onChange={(res)=>{setGrade(res.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="launchins">
              <div className="firsthalf">
                <label>
                  <h3>Description : </h3>
                </label>
                <input
                  type="text"
                  value={desc}
                  placeholder="Enter the Desc"
                  onChange={(res)=>{setDesc(res.target.value)}}
                  required
                />
              </div>
              <div className="firsthalf">
                <label>
                  <h3>Time : </h3>
                </label>
                <input
                  type="text"
                  value={date}
                  placeholder="Enter the Assignment Date "
                  onChange={(res)=>{setDate(res.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="launchins">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default Teacherass;
