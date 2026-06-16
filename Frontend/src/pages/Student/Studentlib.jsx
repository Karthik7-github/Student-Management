import StudentLayout from "./StudentLayout";
import { Link } from "react-router-dom";

const Studentlib = () => {

  const User = JSON.parse(localStorage.getItem("user"));

  return (
    <StudentLayout>
      <div className="promenu">
        <div className="userprotitle">
          <h1 style={{fontSize:"40px",color:User.Color}}>Digital Library</h1>
        </div>
        <div className="librow">
          <Link to="https://www.ibm.com/docs/en/ssw_ibm_i_71/sqlp/rbafy.pdf" className="course" target="parent" style={{"--user-color":User.Color}}>
            <div className="coursebox cbox1">
              <div className="circle">
                <h1>SQL</h1>
              </div>
              <h1>Structured Query Language</h1>
            </div>
          </Link>
          <Link to="https://media.geeksforgeeks.org/courses/syllabus/5723a07ce6db1b2e7fe33b5db5f0d606.pdf" className="course" target="parent">
            <div className="coursebox cbox2">
              <div className="circle">
                <h1>DBMS</h1>
              </div>
              <h1>Database Management Systems</h1>
            </div>
          </Link>
          <Link to="https://ncert.nic.in/textbook/pdf/lecs110.pdf" className="course" target="parent">
            <div className="coursebox cbox3">
              <div className="circle">
                <h1>CN</h1>
              </div>
              <h1>Computer Networks</h1>
            </div>
          </Link>
        </div>
        <div className="librow">
          <Link to="https://sriindu.ac.in/wp-content/uploads/2023/10/R20CSE2202-OPERATING-SYSTEMS.pdf" className="course" target="parent">
            <div className="coursebox cbox4">
              <div className="circle">
                <h1>OS</h1>
              </div>
              <h1>Operating Systems</h1>
            </div>
          </Link>
          <Link to="https://people.engr.tamu.edu/guni/csce625/slides/AI.pdf" className="course" target="parent">
            <div className="coursebox cbox5">
              <div className="circle">
                <h1>AI</h1>
              </div>
              <h1>Aritificial Intelligence</h1>
            </div>
          </Link>
          <Link to="https://mrcet.com/downloads/digital_notes/CSE/III%20Year/COMPILER%20DESIGN%20NOTES.pdf" className="course" target="parent">
            <div className="coursebox cbox6">
              <div className="circle">
                <h1>CD</h1>
              </div>
              <h1>Compiler Design</h1>
            </div>
          </Link>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Studentlib;
