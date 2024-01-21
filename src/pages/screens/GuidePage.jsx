import React from "react";
import { motion } from 'framer-motion'

function GuidePage({ togglePopup }) {
  const guidelines = [
    "Open to all students, irrespective of academic background or area of study. ",
    "Online registration is mandatory to participate. ",
    "Individual and group registrations are accepted. ",
    "Registration fee: ₹350 per participant. ",
    "Last date for registration: 4th April 2023. ",
    "Flexibility to switch or participate in multiple events. ",
    "College ID proof is required for participation. ",
    "No travel or dearness allowance will be provided by AURO University. ",
    "Event schedule may change due to unforeseen circumstances. ",
    "Participants must report 15 minutes before their event. ",
    "Certificates awarded to all participants. ",
    "Judges' decisions on winners are final. ",
    "Event disputes resolved by the event committee only. ",
    "Adhere to all guidelines and enjoy the event! ",
   
  ];
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.5 },
    }),
  };
  
  return (
    <div className="bg-grad">
      <button className="close-button" onClick={togglePopup}>
        X
      </button>
      <div className="popup-content dk-bg" style={{ height: "100%", width: "100%" }}>
      <h1 style={{ color: "white" }}>Guidelines</h1>
    <motion.ul
      initial="hidden"
      animate="visible"
      className="guidelines"
    >
      {guidelines.map((guideline, index) => (
        <motion.li
          custom={index}
          variants={listItemVariants}
          key={index}
        >
          {guideline}
        </motion.li>
      ))}
    </motion.ul>
  </div>
    </div>
  );
}

export default GuidePage;
