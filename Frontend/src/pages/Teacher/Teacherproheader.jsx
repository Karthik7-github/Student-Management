import React from "react";

const Teacherproheader = () => {
    const User = JSON.parse(localStorage.getItem("user")) || {};

  return (
     <div
      className="stumainhead"
      style={{ backgroundColor: User?.Color || "white" }}
    >
      
    </div>
  )
}

export default Teacherproheader;