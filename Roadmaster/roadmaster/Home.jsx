import { useNavigate } from "react-router-dom";
import "./Home.css"; // Ensure this CSS file exists

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Road Master</h1>
      <p>Learn driving and connect with professional instructors.</p>

      <div className="buttons-container">
        <button onClick={() => navigate("/login")} className="home-button">Login</button>
        <button onClick={() => navigate("/register")} className="home-button">Register</button>
      </div>
    </div>
  );
};

export default Home;
