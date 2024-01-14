import React from "react";
// Live Trading Simulation: This event is a mock trading competition where participants get a chance to test their trading skills in real-time scenarios with a simulated currency. It’s an engaging way to understand market dynamics and apply trading strategies.

// Photo Encryption Challenge: In this event, participants dive into the world of cryptography by decoding hidden messages within images. It’s a test of one’s ability to uncover and interpret encrypted information using various cryptographic techniques.

// Aqua Rocket Contest: This is a creative and hands-on event where participants design and launch water rockets. The goal is to achieve the farthest flight, combining knowledge of physics with innovative design.

// Escape Room Adventure: This event is an immersive puzzle-solving experience where teams navigate through a series of rooms, deciphering clues and completing tasks to "escape" within a set time frame. It emphasizes teamwork, problem-solving, and quick thinking.


const events = [
  {
    title: 'Escape Room Adventure',
    image: "/assets/images/3.jpg",
    venue: 'Auditorium, AURO University',
    time: '10:00 AM - 1:00 PM',
    fees: '₹200',
    description: 'An immersive puzzle-solving adventure emphasizing teamwork and quick thinking.'
  },
  {
    title: 'Live Trading Simulation',
    image: "/assets/images/1.jpeg", 
    venue: 'Finance Lab, AURO University',
    time: '2:00 PM - 5:00 PM',
    fees: '₹150',
    description: 'A mock trading competition to test real-time trading skills with a simulated currency.'
  },
  {
    title: 'Photo Encryption Challenge',
    image:"/assets/images/2.jpg",
    venue: 'Computer Lab, AURO University',
    time: '11:00 AM - 12:30 PM',
    fees: '₹100',
    description: 'Decode hidden messages in images using cryptographic techniques.'
  },
  {
    title: 'Aqua Rocket Contest',
    image: "/assets/images/4r.jpeg",
    venue: 'University Grounds, AURO University',
    time: '3:00 PM - 6:00 PM',
    fees: '₹150',
    description: 'Design and launch water rockets to achieve the farthest flight.'
  }
];

function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div className="event-card-front">
          <div className="event-card-circle"/>
          <h3 className="event-card-header">{event.title}</h3>
          <img src={event.image} alt={event.title} />
        </div>
        <div className="event-card-back">
          <ul>
            <li>Venue: {event.venue}</li>
            <li>Time: {event.time}</li>
            <li>Fees: {event.fees}</li>
          </ul>
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}

function EventPage({ togglePopup }) {
  return (
    <div className={`bg-grad`}>
      <div className="popup-content dk-bg " style={{ height: `100%`, width: `100%` }}>
        <p style={{ color: "white" }}>Events</p>
        <div className="events-container">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
      <button className="close-button" onClick={() => togglePopup()}>
        X
      </button>
    </div>
  );
}

export default EventPage;
