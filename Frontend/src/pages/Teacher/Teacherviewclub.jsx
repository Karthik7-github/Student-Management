import TeacherLayout from './TeacherLayout';
import { Link } from 'react-router-dom';

const Teacherviewclub = () => {

    const Club = JSON.parse(localStorage.getItem("Club"));

  return (
    <TeacherLayout>
        <div className="Clubnavbar">
      <div className="firstline">
        <div
          className="clubnavbar1"
          style={{ backgroundColor: Club.Color, color: "black" }}
        >
          <h1>{Club.ClubName}</h1>
          <div className="secline">
            <h2>{Club.ClubCode}</h2>
            <h2>{Club.ClubID}</h2>
            <h2>{Club.TypeofClub}</h2>
            <h3>{Club.Email}</h3>
            <h3>Members : {Club.Members.length}</h3>
          </div>
        </div>
        <div className="clubnavbar2">
          <Link to="/teacher/clubs/viewclubs">
            <div
              className="backbtn"
              style={{
                backgroundColor: Club.Color,
                color: "black",
                "--club-color": Club.Color,
              }}
            >
              <button>
                <span class="text">Go Back</span>
                <span>Thanks!</span>
              </button>
            </div>
          </Link>
          <div className="circle" style={{ backgroundColor: Club.Color }}>
            <div className="subcircle" style={{ color: Club.Color }}>
              {Club.ClubCode}
            </div>
          </div>
        </div>
      </div>
    </div>
    </TeacherLayout>
  )
}

export default Teacherviewclub;