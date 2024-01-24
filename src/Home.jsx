import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Environment,
    Scroll,
    ScrollControls,
    useProgress,
  } from "@react-three/drei";
import HeroSection from "./pages/home/HeroSection";
import Section2 from "./pages/home/Section2";
import Section3 from "./pages/home/Section3";
import Section4 from "./pages/home/Section4";
import Section5 from "./pages/home/Section5";
import Experience from "./components/Experience";

function Home({openPage}) {  
  return (
    <div className="container" style={{ height: "100%" }}>
      <Suspense fallback={<ProgressLoader />}>
        <Canvas pixelRatio={window.devicePixelRatio <= 2 ? window.devicePixelRatio : 2}>
          <Environment background files="/assets/dark_bg.hdr" blur={0.25} />
          <ScrollControls pages={5} damping={0.1}>
            <Experience openPage={openPage} />
            <Scroll html>
              <Overlay />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </div>
  );
}

function ProgressLoader() {
  const { progress } = useProgress();
  const circumference = 2 * Math.PI * 75;
  const offset = circumference - (progress / 100) * circumference;

  const [showLoaded, setShowLoaded] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setShowLoaded(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  const loaderStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const loaderTextStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "1rem",
    color: "#fff",
  };

  const loaderCircleStyle = {
    fill: "transparent",
    stroke: progress === 100 ? "#154abd" : "#1e5ebd",
    strokeWidth: 10,
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    transition: "stroke 1s ease-in-out",
  };

  const loaderPercentageStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    fill: "#fff",
    dominantBaseline: "middle",
    textAnchor: "middle",
  };

  return (
    <div className="loading" style={loaderStyle}>
      <svg viewBox="0 0 150 150" width="150" height="150">
        <circle cx="75" cy="75" r="65" style={loaderCircleStyle} />
        <text x="75" y="75" style={loaderPercentageStyle}>
          {`${Math.round(progress)}%`}
        </text>
      </svg>
      <div style={loaderTextStyle}>
        {progress === 100 && showLoaded ? "" : ""}
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="container" >
      <section>
        <HeroSection />
      </section>
      <section>
        <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
      <section>
        <Section4 />
      </section>
      <section>
        <Section5 />
      </section>
    </div>
  );
}

export default Home;
