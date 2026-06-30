import { Link } from "react-router-dom";
import StudentLayout from "../Student/StudentLayout";
import { useEffect, useState } from "react";

const StudentEditingpage = () => {
 

  const User = JSON.parse(localStorage.getItem("user"));

const [name, setName] = useState(User?.Name || "");
const [age, setAge] = useState(User?.Age || "");
const [dob, setDob] = useState(User?.DOB || "");
const [classes, setClasses] = useState(User?.Class || "");
const [id, setId] = useState(User?.StudentID || "");

const updateStudent = async () => {
  
  try {
    const res = await fetch(
      `http://localhost:5000/api/teacher/stuedit/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Name: name,
          Age: age,
          DOB: dob,
          Class: classes
        })
      }
    );

    const data = await res.json();

    console.log(data);

    // ✅ UPDATE localStorage after success
    if (res.ok) {
      const updatedUser = {
        ...User,
        Name: name,
        Age: age,
        DOB: dob,
        Class: classes
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      console.log("LocalStorage Updated ✅");
    }

  } catch (err) {
    console.log(err);
  }
};



  return (
    <StudentLayout>
      <div>
        <div className="topbackedit" style={{ "--user-color": User.Color }}>
          <h1
            style={{
              color: User.Color,
              marginLeft: "20px",
              paddingTop: "20px",
            }}
          >
            Edit Information
          </h1>
          <div className="editblock">
            <h2
              style={{
                color: User.Color,
                marginLeft: "20px",
                paddingTop: "20px",
              }}
            >
              Name :{" "}
            </h2>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="editblock">
            <h2
              style={{
                color: User.Color,
                marginLeft: "20px",
                paddingTop: "20px",
              }}
            >
              Age :{" "}
            </h2>
            <input
              type="text"
              value={age}
              name="age"
              id="age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="editblock">
            <h2
              style={{
                color: User.Color,
                marginLeft: "20px",
                paddingTop: "20px",
              }}
            >
              DOB :{" "}
            </h2>
            <input
              type="text"
              value={dob}
              name="dob"
              id="dob"
              onChange={(e) => {
                setDob(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="editblock">
            <h2
              style={{
                color: User.Color,
                marginLeft: "20px",
                paddingTop: "20px",
              }}
            >
              Class :{" "}
            </h2>
            <input
              type="text"
              value={classes}
              name="name"
              id="name"
              onChange={(e) => {
                setClasses(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="editblock">
            <h2
              style={{
                color: User.Color,
                marginLeft: "20px",
                paddingTop: "20px",
              }}
            >
              Student ID :{" "}
            </h2>
            <input
              type="text"
              value={id}
              name="name"
              id="name"
              onChange={(e) => {
                setId(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="btssavenext">
            <button
              className="btnsave"
              style={{ marginLeft: "20px", paddingTop: "20px" }}
              onClick={updateStudent}
            >
              <h2>Save</h2>
            </button>
            <Link to="/student/profile">
              <button
                className="btnsave"
                style={{ marginLeft: "20px", paddingTop: "20px" }}
              >
                <h2>Back</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentEditingpage;
