import { useState } from "react";
const API = import.meta.env.VITE_API;

const Courselaunch = () => {

  const User = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState("")
  const [code, setCode] = useState("");
  const [grade, setGrade] = useState(null);
  const [link, setLink] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/course/createcourse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name:name,
          Code:code,
          Link:link,
          Class:grade
        }),
      });

      const data = await res.json();
      console.log(data);

      setCode("");
      setGrade(0);
      setLink("");
      setName("");
      alert("Course Added Successfully..!!!");
    } catch (err) {
      console.log(err);
      alert("Error : ",err);
    }
  };

  return (
    <div className="coursehome" style={{ "--user-color": User.Color }}>
      <h1>Launch a Course</h1>
      <form onSubmit={handlesubmit}>
      <div className="launchins">
        <div className="firsthalf">
          <label>
            <h3>Subject Name : </h3>
          </label>
          <input value={name} type="text" placeholder="Enter the Subject Name " onChange={(res)=>{setName(res.target.value)}} required/>
        </div>
        <div className="firsthalf">
          <label>
            <h3>Subject Code : </h3>
          </label>
          <input value={code} type="text" placeholder="Enter the Subject Code " onChange={(res)=>{setCode(res.target.value)}} required/>
        </div>
      </div>
      <div className="launchins">
        <div className="firsthalf">
          <label>
            <h3>Subject Sem : </h3>
          </label>
          <input value={grade} type="text" placeholder="Enter the Sem No : " onChange={(res)=>{setGrade(res.target.value)}} required/>
        </div>
        <div className="firsthalf">
          <label>
            <h3>Subject Link : </h3>
          </label>
          <input value={link} type="text" placeholder="Enter the Subject Code " onChange={(res)=>{setLink(res.target.value)}} required/>
        </div>
      </div>
      <div className="launchins">
        <button type="submit">Button</button>
      </div>
      </form>
    </div>
  );
};

export default Courselaunch;