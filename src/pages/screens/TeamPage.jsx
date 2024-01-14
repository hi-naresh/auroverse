import React from "react";

function TeamPage({ togglePopup }) {
  // Dummy data for team members
  const teamMembers = [
    {
      name: "Naresh Jhawar",
      role: "Lead Developer",
      about:
        "Naresh is an innovative software developer with a passion for creating cutting-edge applications.",
      imageUrl: "/assets/images/NJ.jpg",
    },
    {
      name: "Jashank Desai",
      role: "Lead Operations",
      about:
        "Jashank oversees the operational aspects with a focus on efficiency and strategic planning.",
      imageUrl: "/assets/images/JD.png",
    },
  ];

  return (
    <div className="bg-grad">
      <button className="close-button" onClick={togglePopup}>
        X
      </button>
      <div
        className="popup-content dk-bg"
        style={{ height: "100%", width: "100%" }}
      >
        <p>Meet the Team</p>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="avatar-container">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="avatar"
                />
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <h4>{member.about}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
