import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [userRole] = useState(localStorage.getItem("userRole"));
  const [userData, setUserData] = useState({
    name: "",
    age: "",
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

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(userData)); // Save updates
    alert("Profile Updated!");
    navigate("/profile"); // Redirect to Profile Page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Edit Profile</h2>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        type="number"
        name="age"
        value={userData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <br />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="New Password"
      />
      <br />
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={() => navigate("/profile")}>Cancel</button>
    </div>
  );
};

export default EditProfile;
