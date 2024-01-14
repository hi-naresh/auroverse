// TimelineAnimations.js
import { gsap } from "gsap";

export const setupMobileAnimations = (timeline, meshRef, myref, screenRefs) => {
  timeline
    .to(meshRef.current.scale, { x: 0.5, y: 0.5, z: 0.5 }, 0)
    .to(meshRef.current.position, { x: -1.5, y: 1.5, z: -1 }, 0)
    .to(meshRef.current.rotation, { y: 1.6 }, 0)
    .to(myref.current.rotation, { x: -1, z: 1.4, y: 0.9 }, 0)

    .to(screenRefs.screen3Ref.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
    .to(screenRefs.screen4Ref.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
    .to(screenRefs.screen2Ref.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
    .to(screenRefs.screen1Ref.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)

    .to(meshRef.current.position, { x: 0.05, y: 1, z: 0 }, 0.25)
    .to(meshRef.current.rotation, { y: 0 }, 0.25)
    .to(myref.current.rotation, { x: 0, z: 0, y: 0 }, 0.25)

    .to(meshRef.current.rotation, { y: 0.7 }, 0.5)
    .to(meshRef.current.position, { x: -0.15, y: 0.5, z: 0 }, 0.5)
    .to(meshRef.current.scale, { x: 0.7, y: 0.7, z: 0.7 }, 0.5)
    .to(myref.current.rotation, { x: 1, z: 1, y: -1.6 }, 0.5)

    .to(meshRef.current.rotation, { x: 1.4, y: 0.34, z: -0.9 }, 0.75)
    .to(meshRef.current.position, { y: 1.7 }, 0.75)
    .to(meshRef.current.scale, { x: 4, y: 4, z: 4 }, 0.75);
};

export const setupDesktopAnimations = (
  timeline,
  meshRef,
  myref,
  screenRefs
) => {
  // Add desktop-specific animations here
  // Example of desktop animations
  timeline
    .to(meshRef.current.scale, { x: 1, y: 1, z: 1 }, 0)
    .to(meshRef.current.position, { x: 0.2, y: 0.4, z: -1 }, 0)
    .to(meshRef.current.rotation, { y: 1.6 }, 0)
    .to(myref.current.rotation, { x: -1, z: 1.4, y: 0.9 }, 0)

    .to(screenRefs.screen3Ref.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
    .to(screenRefs.screen4Ref.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
    .to(screenRefs.screen2Ref.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
    .to(screenRefs.screen1Ref.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)

    .to(meshRef.current.position, { x: -1.7, z: 0 }, 0.25)
    .to(meshRef.current.rotation, { y: 0 }, 0.25)
    .to(myref.current.rotation, { x: 0, z: 0, y: 0 }, 0.25)

    .to(meshRef.current.rotation, { y: 0.7 }, 0.5)
    .to(meshRef.current.position, { x: -0.15, y: -2.5, z: 0 }, 0.5)
    .to(meshRef.current.scale, { x: 2.1, y: 2.1, z: 2.1 }, 0.5)
    .to(myref.current.rotation, { x: 1, z: 1, y: -1.6 }, 0.5)

    // .to(manRef.current.scale, { x: -1, y: -1, z: -1 }, 0.5)
    // .to(manRef.current.position, { x: 0, y: -120, z: -200 }, 0.5)

    .to(meshRef.current.rotation, { x: 1.4, y: 0.34, z: -0.9 }, 0.75)
    .to(meshRef.current.position, { y: 2.8 }, 0.75)
    .to(meshRef.current.scale, { x: 6.5, y: 6.5, z: 6.5 }, 0.75);
};
