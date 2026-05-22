import React from "react";
import Studentdashboard from "./StudentDashboard";

const StudentLayout = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Studentdashboard />
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default StudentLayout;