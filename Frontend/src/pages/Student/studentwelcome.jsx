import React from "react";
import StudentLayout from "./StudentLayout";

const Studentwelcome = () => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  if (!user) {
    return <h1>No user data Please Login</h1>;
  }

  return (
    <StudentLayout>
      <div className="studentwelcomepage">
        
      </div>
    </StudentLayout>
  );
};

export default Studentwelcome;