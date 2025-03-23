import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("learner");
  const navigate = useNavigate();

  const handleRegister = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("password", password);
    localStorage.setItem("userRole", role);

    alert("Registration successful! Please log in.");
    navigate("/login"); // Redirect to login instead of dashboard
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <div className="auth-box">
        <label>Username:</label>
        <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Email:</label>
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Age:</label>
        <input type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />

        <label>Password:</label>
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label>Select Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="learner">Learner</option>
          <option value="instructor">Instructor</option>
        </select>

        <button onClick={handleRegister}>Register</button>
        <p>
          Already have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/login")}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
