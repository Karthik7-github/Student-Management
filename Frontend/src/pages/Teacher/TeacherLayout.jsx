import React from 'react'
import TeacherDashboard from './teacherdashboard';

const TeacherLayout = ({ children }) => {
 
  return (
    <div className="layout">
      <div className="sidebar">
        <TeacherDashboard/>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};
export default TeacherLayout;