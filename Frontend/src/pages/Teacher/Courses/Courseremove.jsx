import { useState } from "react";

const Courseremove = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  const [code, setCode] = useState("");
  const [grade, setGrade] = useState(0);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/course/removecourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Code: code,
          Class: grade,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Course not found or deletion failed");
        return;
      }

      alert("Course Deleted Successfully..!!!");
      setCode("");
      setGrade("");
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="coursehome" style={{ "--user-color": User.Color }}>
      <h1>Remove a Course</h1>
      <form onSubmit={handlesubmit}>
        <div className="launchins">
          <div className="firsthalf">
            <label>
              <h3>Subject Code : </h3>
            </label>
            <input
              value={code}
              type="text"
              placeholder="Enter the Subject Code "
              onChange={(res) => {
                setCode(res.target.value);
              }}
              required
            />
          </div>
          <div className="firsthalf">
            <label>
              <h3>Subject Class : </h3>
            </label>
            <input
              value={grade}
              type="text"
              placeholder="Enter the Subject Grade "
              onChange={(res) => {
                setGrade(res.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="launchins">
          <button type="submit">Button</button>
        </div>
      </form>
    </div>
  );
};

export default Courseremove;
