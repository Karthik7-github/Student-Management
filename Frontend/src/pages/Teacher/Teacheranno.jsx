import { useState } from "react";
import TeacherLayout from "./TeacherLayout";

const Teacheranno = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(0);
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/course/createannouncement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Title: title,
            Content: desc,
            Author: User.Name,
            Grade: grade,
          }),
        },
      );
      setDesc("");
      setGrade(0);
      setTitle("");
      const data = await res.json();
      console.log(data);
      alert("Anniuncement Created");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TeacherLayout>
      <form onSubmit={handleSubmit}>
        <div className="annobox7" style={{ "--user-color": User.Color }}>
          <h1>Announcments Box</h1>
          <div className="classtitle">
            <div className="labin">
              <label>
                <h2>Title : </h2>
              </label>
              <input
                value={title}
                type="text"
                placeholder="Enter the Title : "
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              />
            </div>
            <div className="labin">
              <label>
                <h2>Class : </h2>
              </label>
              <input
                value={grade}
                type="text"
                placeholder="Enter the Class : "
                onChange={(e) => {
                  setGrade(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <textarea
            value={desc}
            rows={15}
            cols={100}
            style={{ padding: "20px", border: `4px solid ${User.Color}` }}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>
    </TeacherLayout>
  );
};

export default Teacheranno;
