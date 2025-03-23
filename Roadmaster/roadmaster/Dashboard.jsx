import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userRole] = useState(localStorage.getItem("userRole"));

  useEffect(() => {
    if (!userRole) {
      navigate("/login"); // Redirect if no role is found
    }
  }, [userRole, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {userRole === "learner" ? "LearnerProfile" : "InstructorProfile"}!</h2>

      <div className="dashboard-buttons">
        {userRole === "learner" ? (
          <>
            <div className="dashboard-box" onClick={() => navigate("/profile")}>View Profile</div>
            <div className="dashboard-box" onClick={() => navigate("/bookings")}>View Bookings</div>
            <div className="dashboard-box" onClick={() => navigate("/learning-material")}>View Learning Material</div>
            <div className="dashboard-box" onClick={() => navigate("/quiz")}>Take Quiz</div>
            <div className="dashboard-box" onClick={() => navigate("/book-instructor")}>Book Instructor</div>
          </>
        ) : userRole === "instructor" ? (
          <>
            <div className="dashboard-box" onClick={() => navigate("/profile")}>View Profile</div>
            <div className="dashboard-box" onClick={() => navigate("/manage-lessons")}>Manage Lessons</div>
            <div className="dashboard-box" onClick={() => navigate("/booking-requests")}>Booking Requests</div>
            <div className="dashboard-box" onClick={() => navigate("/availability")}>Set Availability Schedule</div>
            <div className="dashboard-box" onClick={() => navigate("/ratings")}>View Ratings</div>
            <div className="dashboard-box" onClick={() => navigate("/earnings")}>View Earnings</div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
