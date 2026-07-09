import React from 'react'
import Teacherproheader from './Teacherproheader';
import TeacherLayout from './TeacherLayout';

const Teacherinfo = () => {
  const User = JSON.parse(localStorage.getItem("user"));

  return (
    <TeacherLayout>
      <Teacherproheader/>
      <div className="promenu">
      <div className="userprotitle">
        <h1>Profile</h1>
      </div>
      <div className="data">
        <h1 style={{color:User.Color}}>Name : </h1>
        <h2>{User.Name}</h2>
      </div>
      <div className="data">
        <h1 style={{color:User.Color}}>Age : </h1>
        <h2>{User.Age}</h2>
      </div>
      <div className="data">
        <h1 style={{color:User.Color}}>DOB : </h1>
        <h2>{User.DOB}</h2>
      </div>
      <div className="data">
        <h1 style={{color:User.Color}}>Role : </h1>
        <h2>{User.Role}</h2>
      </div>
      <div className="data">
        <h1 style={{color:User.Color}}>Subject : </h1>
        <h2>{User.Subject}</h2>
      </div>
      <div className="data">
        <h1 style={{color:User.Color}}>TeacherID : </h1>
        <h2>{User.TeacherID}</h2>
      </div>
      <div className="data">
        <h1 style={{color:User.Color}}>Email : </h1>
        <h2>{User.Email}</h2>
      </div>
     </div>
    </TeacherLayout>
  )
}

export default Teacherinfo;