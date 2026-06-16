import React from 'react'
import StudentLayout from './StudentLayout';

const Studentassesments = () => {

  const User = JSON.parse(localStorage.getItem("user"));
  
  return (
    <StudentLayout>
        <div className="stuass">
          <h1 style={{color:User.Color}}>Assessments</h1>
        </div>
    </StudentLayout>
  )
}

export default Studentassesments;