import React from "react";

const Clubmembers = () => {
  const Club = JSON.parse(localStorage.getItem("Club"));

  return (
    <div className="clubmainmemberslist">
      <table>
        <thead>
          <tr>
            <th className="time">
              <h1>Sr.No</h1>
            </th>
            <th className="subject">
              <h1>Member</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {Club.Members.length > 0 ? (
            Club.Members.map((event, index) => (
              <tr className="trt1s1" key={index}>
                <td className="time1" style={{ backgroundColor: Club.Color }}>
                  {index+1}
                </td>
                <td
                  className="subject1"
                  style={{ backgroundColor: Club.Color }}
                >
                  {event.MemberName}
                </td>
              </tr>
            ))
          ) : (
            <h4>No Events Available</h4>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Clubmembers;
