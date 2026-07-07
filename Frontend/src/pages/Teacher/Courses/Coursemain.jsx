import { useEffect, useState } from "react";
import axios from "axios";

const Coursemain = () => {

    const [lib, setLib] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getcourses")
      .then((res) => {
        const courses = res.data.Course;
        const shuffled = [...courses];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        setLib(shuffled);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sem1 = lib.filter(
    (c)=> c.Class===1
  )

const sem2 = lib.filter(
    (c)=> c.Class===2
  )

    const sem3 = lib.filter(
    (c)=> c.Class===3
  )

    const sem4 = lib.filter(
    (c)=> c.Class===4
  )

    const sem5 = lib.filter(
    (c)=> c.Class===5
  )

    const sem6 = lib.filter(
    (c)=> c.Class===6
  )

    const sem7 = lib.filter(
    (c)=> c.Class===7
  )

    const sem8 = lib.filter(
    (c)=> c.Class===8
  )


  return (
    <div className="coursemain77">
      <h1 style={{color:"gold"}}>Courses</h1>
      <h2 style={{ paddingLeft: "30px" }}>Sem - 1 : {sem1.length}</h2>
      <h2 style={{ paddingLeft: "30px" }}>Sem - 2 : {sem2.length}</h2>
      <h2 style={{ paddingLeft: "30px" }}>Sem - 3 : {sem3.length}</h2>
      <h2 style={{ paddingLeft: "30px" }}>Sem - 4 : {sem4.length}</h2>
      <h2 style={{ paddingLeft: "30px" }}>Sem - 5 : {sem5.length}</h2>
      <h2 style={{ paddingLeft: "30px" }}>Sem - 6 : {sem6.length}</h2>
      <h2 style={{ paddingLeft: "30px" }}>Sem - 7 : {sem7.length}</h2>
      <h2 style={{ paddingLeft: "30px" }}>Sem - 8 : {sem8.length}</h2>
      <h1>Total Courses : {lib.length}</h1>
    </div>
  );
};

export default Coursemain;
