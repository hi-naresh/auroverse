import React, { useCallback, useMemo, useRef, useState } from "react";
import { Html } from "@react-three/drei";
import EventPage from "../pages/screens/EventPage";
import TeamPage from "../pages/screens/TeamPage";
import GuidePage from "../pages/screens/GuidePage";
import CollabPage from "../pages/screens/CollabPage";
import Model from "./Model";

export default function Experience() {
  const meshRef = useRef();
  const screen1Ref = useRef();
  const screen2Ref = useRef();
  const screen3Ref = useRef();
  const screen4Ref = useRef();
  const screenRefs = useMemo(() => ({ screen1Ref, screen2Ref, screen3Ref, screen4Ref }), []);
  const [currentPage, setCurrentPage] = useState(null);

  const openPage = useCallback((pageName) => {
    window.open(pageName, "_self");
  }, []);
  const getPageComponent = useMemo(() => {
    switch (currentPage) {
      case "EventPage":
        return <EventPage isOpen={true} togglePopup={() => setCurrentPage(null)} />;
      case "TeamPage":
        return <TeamPage isOpen={true} togglePopup={() => setCurrentPage(null)} />;
      case "GuidePage":
        return <GuidePage isOpen={true} togglePopup={() => setCurrentPage(null)} />;
      case "CollabPage":
        return <CollabPage isOpen={true} togglePopup={() => setCurrentPage(null)} />;
      default:
        return null;
    }
  }, [currentPage]);

  return (
    <group>
      <Model meshRef={meshRef} screenRefs={screenRefs} openPage={openPage} />
      <Html fullscreen>
        <div
          className="screen-container"
          style={{
            height: window.innerHeight,
            width: window.innerWidth,
            position: "relative center",
            pointerEvents: "none",
          }}
        >
          {getPageComponent}
        </div>
      </Html>
    </group>
  );
}
