import { useState, useEffect } from "react";
import StudentLayout from "./StudentLayout";
import axios from "axios";
const API = import.meta.env.VITE_API;

const Studentfees = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  const [item, setitem] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/course/getfees`)
      .then((res) => {
        setitem(res.data.Receipt);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteritems = item.filter((c) => c.MemberID === User.StudentID);

  console.log(filteritems);

  return (
    <StudentLayout>
      <div className="stufees">
        <h1 style={{ marginTop: "20px" }}>Fees</h1>
        <table>
          <thead style={{ "--user-color": User.Color }}>
            <th>No</th>
            <th>Transcation ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Accountant</th>
          </thead>
          <tbody>
            {filteritems.map((item, key) => {
              return (
                <tr key={key} style={{ backgroundColor: item.Color }}>
                  <td>{key + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.Amount}</td>
                  <td>{item.Date}</td>
                  <td>{item.Receiptent}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StudentLayout>
  );
};

export default Studentfees;
