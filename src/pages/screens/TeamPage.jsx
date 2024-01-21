import React from "react";
import { motion } from 'framer-motion';

function TeamPage({ togglePopup }) {
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
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  

  return (
    <div className="bg-grad">
  <button className="close-button" onClick={togglePopup}>X</button>
  <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="popup-content dk-bg"
    style={{ height: "100%", width: "100%" }}
  >
    <h1>Team</h1>
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <motion.div key={index} variants={itemVariants} className="team-member">
          <div className="avatar-container">
            <img src={member.imageUrl} alt={member.name} className="avatar" />
          </div>
          <h2>{member.name}</h2>
          <h3 className="role">{member.role}</h3>
          <p>{member.about}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>

  );
}

export default TeamPage;
