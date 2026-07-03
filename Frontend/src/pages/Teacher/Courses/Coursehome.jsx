import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Coursehome = () => {

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


  return (
    <div className="coursehome">
      <h1>All Courses</h1>
      <div className="crow">
        {lib.map((item, index) => (
          <Link to={item.Link} target="parent">
          <div className="cbox" key={index} style={{"--cou-color":item.Color}}>
            <div className="coucir"><h1>{item.Code}</h1></div>
            <div className="couname"><h2>{item.Name}</h2></div>
            <div className="couclass"><h3>Class : {item.Class}</h3></div>
          </div>
          </Link>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Coursehome;
