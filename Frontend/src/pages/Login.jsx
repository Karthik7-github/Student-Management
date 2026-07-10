import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/teacher/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        alert(data.Message || "Error");
        return;
      }

      localStorage.setItem("user",JSON.stringify(data.User));

      if (data.User.Role == "Student") {
        navigate("/studentwelcome", { state: { user: data.User } });
      } else {
        navigate("/teacherwelcome", { state: { user: data.User } });
      }

      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="Loginpage">
          <div className="Loginbox">
            <h1>Login</h1>
            <div className="brutalist-container styleinput">
              <input
                value={email}
                placeholder="TYPE EMAIL..."
                className="brutalist-input smooth-type"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <label className="brutalist-label">Email : </label>
            </div>
            <div className="brutalist-container styleinput">
              <input
                value={password}
                placeholder="TYPE PASSWORD..."
                className="brutalist-input smooth-type"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <label className="brutalist-label">Password : </label>
            </div>
            <button className="button" type="submit">
              <span>Submit</span>
            </button>
            <h4 style={{color:"white"}}>Don't have an account  <Link to='/register' style={{color:"blue",textDecoration:"underline"}}> Register</Link></h4>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
