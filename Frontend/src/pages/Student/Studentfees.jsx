import React from "react";
import StudentLayout from "./StudentLayout";

const Studentfees = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  return (
    <StudentLayout>
      <div className="stufees">
        <h1 style={{ color: User.Color }}>Fees</h1>
      </div>
    </StudentLayout>
  );
};

export default Studentfees;
