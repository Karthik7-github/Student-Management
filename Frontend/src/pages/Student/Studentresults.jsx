import { useEffect, useState } from "react";
import axios from "axios";
import Studentlayout from "./StudentLayout";
const API = import.meta.env.VITE_API;

const Studentresults = () => {
  const [data, setData] = useState([]);

  const User = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`${API}/api/course/getresult`)
      .then((res) => {
        setData(res.data.Result);
      })
      .catch((err) => console.log(err));
  }, []);

  const student = data.filter((c) => c.UserID === User.StudentID);

  console.log(student);

  return (
    <Studentlayout>
      <div className="studentres">
        <h1 style={{ marginTop: "20px" }}>Results</h1>
        {student.length > 0 ? (
          student.map((sem, key) => {
            return (
              <div style={{marginTop:"20px"}}>
                <h1>Semster {sem.Sem}</h1>
              <table className="custom-table" key={key} style={{width:"700px", marginTop:"10px"}}>
                <thead style={{ backgroundColor: User.Color }}>
                  <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {sem.Subjects.map((sub, i) => (
                    <tr key={i} style={{width:"300px"}}>
                      <td>{sub.Name}</td>
                      <td>{sub.Score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              
            );
          })
        ) : (
          <h1>No results</h1>
        )}
      </div>
    </Studentlayout>
  );
};

export default Studentresults;
