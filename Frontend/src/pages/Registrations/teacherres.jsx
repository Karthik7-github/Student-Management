import React from "react";

const teacherres = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [subject, setSubject] = useState("");
  const [role, setRole] = uReState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/teacher/tregister", {
        method: "POST",
        headers: {
          "Connect-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Age: age,
          DOB: dob,
          Subject: subject,
          Role: role,
          Email: email,
          Password: password,
        }),
      });

      const data = res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    alert('Form Submitted');
  };

  return (
    <div>
      <div className="stuform teach">
        <h1>Lecturer (Adimin) Registraion Form</h1>
        <div className="stubox">
          <form onSubmit={Handlesubmit}>
            <div className="forml1">
              <div class="inputBox">
                <input
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
              <div class="inputBox">
                <input
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
              <div class="inputBox">
                <input
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
              <div class="inputBox">
                <input
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
              <div class="inputBox">
                <input
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
              <div class="inputBox">
                <input
                  required=""
                  type="text"
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
              <div class="inputBox">
                <input
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
              <button type="submit">
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text" type="submit">
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
