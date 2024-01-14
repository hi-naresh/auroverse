import React, { useState } from 'react'

function CollabPage({  togglePopup }) {
  return (
    <div className={`bg-grad`}>
      <div
        className="popup-content dk-bg "
        style={{ height: `100%`, width: `100%`}}
      >
        <button className="close-button" onClick={() => togglePopup()}>
          X
        </button>
        <p style={{ color: "white" }}>CollabPage</p>
      </div>
    </div>
  );
  }
  
  export default CollabPage;