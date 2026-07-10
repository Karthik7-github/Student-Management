import TeacherLayout from "./TeacherLayout";
import { useState, useEffect } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API;

const Teacherattendace = () => {
  const [shedule, setShedule] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/course/getattend`)
      .then((res) => {
        setShedule(res.data.Attendance);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getAttendanceColor = (present, total) => {
    const percentage = (present / total) * 100;

    if (percentage < 50) return "#FF3B30";
    if (percentage < 65) return "#FF9500";
    if (percentage < 75) return "#FFCC00";
    if (percentage < 85) return "#34C759";
    return "#0A84FF";
  };

  return (
    <TeacherLayout>
      <div className="promenu">
        <div className="userprotitle">
          <h1
            style={{
              marginTop: "20px",
              fontWeight: "bolder",
              fontSize: "40px",
            }}
          >
            Attendance
          </h1>
        </div>
        <div className="tt">
          <table>
            <thead>
              <tr>
                <th className="time">
                  <h1>No</h1>
                </th>
                <th className="time">
                  <h1>ID</h1>
                </th>
                <th className="subject" style={{ width: "400px" }}>
                  <h1>Name</h1>
                </th>
                <th className="time">
                  <h2>Percentage</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {shedule.length > 0 ? (
                shedule.map((schedule, index) => {
                  const percentage = (
                    (schedule.Present / schedule.Total) *
                    100
                  ).toFixed(1);
                  const color = getAttendanceColor(
                    schedule.Present,
                    schedule.Total,
                  );

                  return (
                    <tr key={index} className="trt1s1">
                      <td className="time1" style={{ backgroundColor: color }}>
                        {index + 1}
                      </td>

                      <td className="time1" style={{backgroundColor:color}}>{schedule.ID}</td>

                      <td
                        className="subject1"
                        style={{
                          backgroundColor: color,
                          width: "400px",
                        }}
                      >
                        {schedule.Name}
                      </td>

                      <td
                        className="time1"
                        style={{
                          backgroundColor: color,
                        }}
                      >
                        {percentage}%
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h1 style={{ margin: "100PX 0PX 0PX 300PX", color: "white" }}>
                  NO SCHEDULE AVAILABLE
                </h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default Teacherattendace;
