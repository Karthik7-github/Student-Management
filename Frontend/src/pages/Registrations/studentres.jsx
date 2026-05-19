import React, { useState } from "react";

const studentres = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Handlesubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:5000/api/student/sregister',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Name:name,
        Age:age,
        DOB:dob,
        Class:grade,
        Role:role,
        Email:email,
        Password:password
      })
      });

      const data = await res.json();
      console.log(data);
    }catch(err){
      console.log(err)
    }
    alert('Form Submitted');
  };

  return (
    <div>
      <div className="stuform">
        <h1>Student Registraion Form</h1>
        <div className="stubox">
          <form onSubmit={Handlesubmit}>
            <div className="forml1">
              <div className="inputBox">
                <input
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span>Name :</span>
              </div>
              <div className="inputBox">
                <input
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e)=>{setAge(e.target.value)}}
                  required
                />
                <span>Age :</span>
              </div>
              <div className="inputBox">
                <input
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e)=>setDob(e.target.value)}
                  required
                />
                <span>DOB :</span>
              </div>
            </div>
            <div className="forml1">
              <div className="inputBox">
                <input
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e)=>{setGrade(e.target.value)}}
                  required
                />
                <span>Class :</span>
              </div>
              <div className="inputBox">
                <input
                  required=""
                  type="text"
                  placeholder="Write here as Student ..."
                  onChange={(e)=>{setRole(e.target.value)}}
                  required
                />
                <span>Role :</span>
              </div>
              <div className="inputBox">
                <input
                  required=""
                  type="text"
                  placeholder="Write here..."
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                />
                <span>Email :</span>
              </div>
            </div>
            <div className="forml1">
              <div className="inputBox">
                <input
                  required=""
                  type="password"
                  placeholder="Write here..."
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required
                />
                <span>Password :</span>
              </div>
              <button type="submit">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front text">
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

export default studentres;
