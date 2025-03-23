import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Ensure this CSS file is linked

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("learner");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedRole = localStorage.getItem("userRole");

    if (username === storedUsername && password === storedPassword && role === storedRole) {
      navigate("/dashboard");
    } else {
      alert("Invalid login credentials!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <div className="auth-box">
        <label>Username:</label>
        <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password:</label>
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label>Select Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="learner">Learner</option>
          <option value="instructor">Instructor</option>
        </select>

        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
