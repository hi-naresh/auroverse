import React from 'react'

function CollabPage({  togglePopup }) {
  const sponsors = [
    { logo: "/assets/logos/UFO.png" },
    { logo: "/assets/logos/youth.png" },
    { logo: "/assets/logos/zex.png" },
    { logo: "/assets/logos/red.png" },
    { logo: "/assets/logos/vsz.png" },
    { logo: "/assets/logos/wyn.png" },
    { logo: "/assets/logos/ien.png" },
  ];
  
  const partners = [
    { logo: "/assets/logos/neomedia.png" },
    { logo: "/assets/logos/Udemy.png" },
    { logo: "/assets/logos/slo.png" },
    { logo: "/assets/logos/hyp.jpeg" },
    { logo: "/assets/logos/mar.png" },

  ];

  const knowledgePartners = [
    { logo: "/assets/logos/Taiwan.png" },
    { logo: "/assets/logos/grc.png" },
    { logo: "/assets/logos/erc.png" },
    { logo: "/assets/logos/nate.png" },
  ];

  return (
    <div className={`bg-grad`}>
      <div
        className="popup-content dk-bg "
        style={{ height: `100%`, width: `100%`}}
      >
        <button className="close-button" onClick={() => togglePopup()}>
          X
        </button>
        <div className="sponsors-section">
          <h1>Sponsors</h1>
          <div className="logos">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="logo-item">
                <img src={sponsor.logo} alt={sponsor.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="partners-section">
          <h2>Partners</h2>
          <div className="logos">
            {partners.map((partner, index) => (
              <div key={index} className="logo-item">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="partners-section">
          <h2>Knowledge Partners</h2>
          <div className="logos">
            {knowledgePartners.map((partner, index) => (
              <div key={index} className="logo-item">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  }
  
  export default CollabPage;