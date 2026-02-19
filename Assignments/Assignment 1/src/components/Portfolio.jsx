import React from "react";
import ProfileCard from "./ProfileCard";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";

function Portfolio({ profilePic, name, age, value, onBack }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      {/* 🔹 Portfolio Info */}
      <h1>Portfolio</h1>

      <img
        src={profilePic}
        alt="Profile"
        style={{ borderRadius: "50%", width: "100px" }}
      />

      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Value: {value}</p>

      <hr />

      {/* 🔹 Team Cards */}
      <h2>Team Members</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <ProfileCard
          name="Rohit"
          role="Frontend Developer"
          image={profile1}
        />

        <ProfileCard
          name="Priya"
          role="Backend Developer"
          image={profile2}
        />

        <ProfileCard
          name="Aman"
          role="UI/UX Designer"
          image={profile1}
        />
      </div>

      <br />

      <button onClick={onBack}>Back to Dashboard</button>
    </div>
  );
}

export default Portfolio;
