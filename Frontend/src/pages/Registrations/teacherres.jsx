import { useState } from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API;

const teacherres = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [subject, setSubject] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("hide");

 const Handlesubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`${API}/api/teacher/tregister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name.toUpperCase(),
        Age: age,
        DOB: dob,
        Subject: subject,
        Role: role,
        TeacherID: id,
        Email: email,
        Password: password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.Message || "Error");
      return;
    }

    console.log("Success:", data);

    setName("");
    setAge("");
    setDob("");
    setEmail("");
    setId("");
    setPassword("");
    setRole("");
    setSubject("");

    setShow("show");

  } catch (err) {
    console.log(err);
    alert("Network Error");
  }
};

  return (
    <div>
      <div className="stuform teach">
        <div className={`alert ${show}`}>
          <div className="alertcard">
            <i
              class="fa-solid fa-heart"
              style={{ fontSize: "30px", color: "#fbca1f" }}
            ></i>
            <h1 style={{ color: "#fbca1f" }}>Registration Successfully</h1>
            <Link to="/Login">
              <button>Login Now</button>
            </Link>
          </div>
        </div>
        <h1>Lecturer (Adimin) Registraion Form</h1>
        <div className="stubox">
          <form onSubmit={Handlesubmit}>
            <div className="forml1">
              <div className="inputBox">
                <input
                  value={name}
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
                <span>Name :</span>
              </div>
              <div className="inputBox">
                <input
                  value={age}
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  required
                />
                <span>Age :</span>
              </div>
              <div className="inputBox">
                <input
                  value={dob}
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  required
                />
                <span>DOB :</span>
              </div>
            </div>
            <div className="forml1">
              <div className="inputBox">
                <input
                  value={subject}
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  required
                />
                <span>Subject :</span>
              </div>
              <div className="inputBox">
                <input
                  value={role}
                  required=""
                  type="text"
                  placeholder="Write here as Student ..."
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  required
                />
                <span>Role :</span>
              </div>
              <div className="inputBox">
                <input
                  value={email}
                  required=""
                  type="email"
                  placeholder="Write Lecturer here..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <span>Email :</span>
              </div>
            </div>
            <div className="forml1">
              <div className="inputBox">
                <input
                  value={password}
                  required=""
                  type="password"
                  placeholder="Write here..."
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <span>Password :</span>
              </div>
              <div className="inputBox">
                <input
                  value={id}
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  required
                />
                <span>ID :</span>
              </div>
              <button type="submit">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front text" type="submit">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default teacherres;
