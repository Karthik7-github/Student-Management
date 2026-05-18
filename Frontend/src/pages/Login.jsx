import React from "react";

const Login = () => {
  return (
    <div>
      <div className="Loginpage">
        <div className="Loginbox">
          <h1>Login</h1>
          <div class="brutalist-container styleinput">
            <input
              placeholder="TYPE HERE"
              class="brutalist-input smooth-type"
              type="text"
            />
            <label class="brutalist-label">Email / Mobile No :</label>
          </div>
          <div class="brutalist-container styleinput">
            <input
              placeholder="TYPE HERE"
              class="brutalist-input smooth-type"
              type="text"
            />
            <label class="brutalist-label">Password : </label>
          </div>
          <button class="button">
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
