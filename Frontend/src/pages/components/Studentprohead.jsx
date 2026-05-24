import { Link } from "react-router-dom";

const Studentproheader = () => {
  const User = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div
      className="stumainhead"
      style={{ backgroundColor: User?.Color || "white" }}
    >
      <Link to="/student/edit">
        <div className="editbutton">
          <button>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Studentproheader;