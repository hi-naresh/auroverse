import React, { useState, useEffect, useRef } from 'react';

function AnimatedStats({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  useEffect(() => {
    if (isVisible && count < target) {
      const duration = 2000; // Duration in ms
      const stepTime = duration / target;
      const timer = setInterval(() => {
        setCount((prevCount) => (prevCount < target ? prevCount + 1 : prevCount));
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, target, count]);

  return (
    <div className="stat-block" ref={ref}>
      <span className="stat-number">{count}+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Section5() {
  return (
    <div style={{ height: '100vh', scrollSnapAlign: 'start', position: 'relative' }}>
      <div className="section5">
        <div className="stats-section">
          <AnimatedStats target={4} label="Events" />
          <AnimatedStats target={9} label="Sponsors" />
          <AnimatedStats target={1800} label="Participants" />
        </div>
        <h1>Reach Us</h1>
        <div className="section5-content">
          <p>
            AUROVERSE, hosted by AURO University, is a dynamic tech fest celebrating creativity, innovation, and passion. It is a melting pot of activities ranging from immersive escape rooms, live trading simulations, to creative contests like Aqua Rocket and Photo Encryption, ensuring there's something for every tech enthusiast.
          </p>
          <div className="contact-info">
            <p><b>Address</b>: Earthspace, Hazira Rd, Bhatpore, Surat, Gujarat 394510</p>
            <p><b>Email</b>: auroverse@reach.in</p>
            <p><b>Phone</b>: 0261 7778777</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Section5;
