import React from "react";

function GuidePage({ togglePopup }) {
  return (
    <div className="bg-grad">
      <button className="close-button" onClick={togglePopup}>
        X
      </button>
      <div
        className="popup-content dk-bg"
        style={{ height: "100%", width: "100%" }}
      >
        <p style={{ color: "white" }}>Guidelines</p>

        <div className="guidelines">
          <ul>
            <li>
              Open to all students, irrespective of academic background or area
              of study.
            </li>
            <li>Online registration is mandatory to participate.</li>
            <li>Individual and group registrations are accepted.</li>
            <li>Registration fee: ₹350 per participant.</li>
            <li>Last date for registration: 4th April 2023.</li>
            <li>Flexibility to switch or participate in multiple events.</li>
            <li>College ID proof is required for participation.</li>
            <li>
              No travel or dearness allowance will be provided by AURO
              University.
            </li>
            <li>Event schedule may change due to unforeseen circumstances.</li>
            <li>Participants must report 15 minutes before their event.</li>
            <li>Certificates awarded to all participants.</li>
            <li>Judges' decisions on winners are final.</li>
            <li>Event disputes resolved by the event committee only.</li>
            <li>Adhere to all guidelines and enjoy the event!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GuidePage;
