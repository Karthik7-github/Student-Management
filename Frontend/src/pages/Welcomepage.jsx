import React from "react";
import { Link } from "react-router-dom";

const Welcomepage = () => {
  return (
    <div>
      <div className="welcomepage">
        <div className="welcomepic">
          
        </div>
        <div className="Welcomeheading">
          <h1>Welcome to Your College: Your Gateway to Academic Success.</h1>
        </div>
        <div className="welcomeloginbtn">
          <Link to="/Login">
            <div className="Login">
              <h2>Login</h2>
            </div>
          </Link>
          <Link to="/Register">
            <div className="Login register">
              <h2>Register</h2>
            </div>
          </Link>
        </div>
        <div className="registerhead">
          <h3>Please Register Before You Login In</h3>
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
