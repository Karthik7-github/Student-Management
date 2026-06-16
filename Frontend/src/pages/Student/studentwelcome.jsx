import StudentLayout from "./StudentLayout";

const Studentwelcome = () => {
  const userData = localStorage.getItem("user");
  const User = userData ? JSON.parse(userData) : null;

  if (!User) {
    return <h1>No user data Please Login</h1>;
  }

  return (
    <StudentLayout>
      <div className="studentwelcomepage">
        <div className="welcomehead">
          <h1>Welcome {User.Name} . . .</h1>
        </div>
        <div className="imps">
          <div className="attendancebox">
            <div class="card-6" aria-hidden="true">
              <div class="card-6__holo">
                <div class="card-6__layer card-6__layer--back">69%</div>
                <div class="card-6__layer card-6__layer--mid">69%</div>
                <div class="card-6__layer card-6__layer--front">69%</div>
              </div>
            </div>
            <h1 style={{color:User.Color}}>Attendace</h1>
          </div>

          <div className="imptools"></div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Studentwelcome;
