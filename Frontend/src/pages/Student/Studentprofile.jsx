import StudentLayout from './StudentLayout';
import Studentproheader from '../components/Studentprohead';

const Studentprofile = () => {

  const User = JSON.parse(localStorage.getItem("user"));

  return (
    <StudentLayout>
      <Studentproheader />
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
        <h1 style={{color:User.Color}}>Class : </h1>
        <h2>{User.Class}</h2>
      </div>
      <div className="data">
        <h1 style={{color:User.Color}}>StudentID : </h1>
        <h2>{User.StudentID}</h2>
      </div>
     </div>
    </StudentLayout>
  );
};

export default Studentprofile;