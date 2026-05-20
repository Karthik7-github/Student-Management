import React from "react";

const Login = () => {
  return (
    <div>
      <form>
      <div className="Loginpage">
        <div className="Loginbox">
          <h1>Login</h1>
          <div class="brutalist-container styleinput">
            <input
              placeholder="TYPE EMAIL..."
              class="brutalist-input smooth-type"
              type="email"
              required
            />
            <label class="brutalist-label">Email : </label>
          </div>
          <div class="brutalist-container styleinput">
            <input
              placeholder="TYPE PASSWORD..."
              class="brutalist-input smooth-type"
              type="password"
              required
            />
            <label class="brutalist-label">Password : </label>
          </div>
          <button class="button" type="submit">
            <span>Submit</span>
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Login;
