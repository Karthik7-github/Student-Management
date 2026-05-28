import React from "react";
import { Link } from "react-router-dom";

const Clubdashboard = () => {
  const Club = JSON.parse(localStorage.getItem("Club"));

  return (
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
          <Link to="/student/clubs">
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
      <div className="secondline">
        <div class="nav">
          <div class="container" style={{"--club-color":Club.Color}}>
            <div class="btn"><Link style={{color:Club.Color}} to='home'>Home</Link></div>
            <div class="btn"><Link style={{color:Club.Color}} to='chat'>Chat</Link></div>
            <div class="btn"><Link style={{color:Club.Color}} to='mems'>Members</Link></div>
            <div class="btn"><Link style={{color:Club.Color}} to='faq'>FAQ</Link></div>
            <svg
              class="outline"
              overflow="visible"
              width="400"
              height="60"
              viewBox="0 0 400 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="rect"
                pathLength="100"
                x="0"
                y="0"
                width="400"
                height="60"
                fill="transparent"
                stroke-width="5"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubdashboard;
