import React from "react";
import { Link } from "react-router-dom";

const Welcomepage = () => {
  return (
    <div>
      <div className="welcomepage">
        <div className="welcomepic">
          
        </div>
        <div className="Welcomeheading">
          <h1>Welcome to Your School: Your Gateway to Academic Success.</h1>
        </div>
        <div className="welcomeloginbtn">
          <Link to="/Login">
            <div className="Login">
              <h2>Login</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
