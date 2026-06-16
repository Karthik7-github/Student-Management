import { useEffect, useState } from "react";
import axios from "axios";
import Studentlayout from './StudentLayout';

const Studentresults = () => {
  const [data, setData] = useState([]);

  const User = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getresult")
      .then((res) => {
        setData(res.data.Result);
      })
      .catch((err) => console.log(err));
  }, []);

  const getPercentage = (score) => score + "%";

  // safety
  if (!User) return <h2>No User Found</h2>;

  const student = data.find(
    (c) => c.UserID === User.StudentID
  );

  if (!student) return <h2>No Results Found</h2>;

  return (
    <Studentlayout>
      <div className="studentres">
      {student.Semesters.map((sem, index) => (
        <div className="table-container" key={index}>
          
          <h2 className="table-title">
            Results - Semester {sem.SemNumber}
          </h2>

          <table className="custom-table">
            <thead style={{ backgroundColor: User.Color }}>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Percentage</th>
              </tr>
            </thead>

            <tbody>
              {sem.Subjects.map((sub, i) => (
                <tr key={i}>
                  <td>{sub.Subject}</td>
                  <td>{sub.Score}</td>
                  <th>{getPercentage(sub.Score)}</th>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      ))}
    </div>
    </Studentlayout>
  );
};

export default Studentresults;