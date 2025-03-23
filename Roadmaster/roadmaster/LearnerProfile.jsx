import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userRole] = useState(localStorage.getItem("userRole"));
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!userRole || userRole !== "learner") {
      navigate("/login"); // Redirect if not a learner
    } else {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      if (storedData) {
        setUserData(storedData);
      }
    }
  }, [userRole, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Learner Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Password:</strong> {userData.password ? "********" : "Not Set"}</p>

      <button onClick={() => navigate("/edit-profile")}>Edit Profile</button>
      <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
    </div>
  );
};

export default Profile;
