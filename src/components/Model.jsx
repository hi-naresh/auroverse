import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import {
  useGLTF,
  useEnvironment,
  useAnimations,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  useScroll,
  useVideoTexture,
} from "@react-three/drei";
import { useControls } from "leva";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame, useThree } from "@react-three/fiber";
import { setupDesktopAnimations, setupMobileAnimations } from "./Timeline";
import ManRef from "./Man";

// import { extend } from "@react-three/fiber";
// import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
// import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader";
// import * as THREE from "three";
// import { Vector2 } from "three";

// extend({ EffectComposer, RenderPass, UnrealBloomPass, ShaderPass });

gsap.registerPlugin(ScrollTrigger);

export default function Model({ openPage }) {
  const meshRef = useRef();
  const myref = useRef();
  const manRef = useRef();
  const screen1Ref = useRef();
  const screen2Ref = useRef();
  const screen3Ref = useRef();
  const screen4Ref = useRef();
  const screenRefs = { screen1Ref, screen2Ref, screen3Ref, screen4Ref };

  const { nodes, materials, animations } = useGLTF("/models/model.glb");
  const { actions } = useAnimations(animations, meshRef);
  const ManTexture = useEnvironment({ files: "/assets/texture.hdr" });
  const sTexture1 = "/assets/event.mp4";
  const sTexture2 = "/assets/guide.mp4";
  const sTexture3 = "/assets/collab.mp4";
  const sTexture4 = "/assets/team.mp4";

  const tweak = useControls({
    roughness: { value: 0.01, min: 0, max: 1 },
    metalness: { value: 0.92, min: 0, max: 1 },
  });

  useEffect(() => {
    actions.pointing.play();
  }, [actions]);

  const scroll = useScroll();
  const tl = useRef();

  const { camera } = useThree();
  camera.fov = 28;
  const isMobile = window.innerWidth <= 480;

  useFrame((state, delta) => {
    if (scroll && scroll.offset) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 0.2, ease: "easeIn " },
      paused: true,
    });

    if (isMobile) {
      setupMobileAnimations(tl.current, meshRef, myref, screenRefs);
    } else {
      setupDesktopAnimations(tl.current, meshRef, myref, manRef, screenRefs);
    }
  }, []);

  const handleInteraction = (ref, interactionType, scale) => {
    const obj = ref.current;
    if (obj) {
      obj.scale.set(scale.x, scale.y, scale.z);
      if (interactionType === "click") {
        openPage(obj.name);
      }
    }
  };

  return (
    <group>
      <group ref={myref} dispose={null}>
        {/* Man Model */}
        <group
          ref={meshRef}
          position={isMobile ? [-2.3, -1.2, -1.7] : [-4, -2.3, -1.7]}
          rotation={[0, 3.2, 0]}
          scale={isMobile ? 2 : 2.5}
        >
          <ManRef manTexture={ManTexture} tweak={tweak} />
          {/* Screen Elements */}
          <group>
            <mesh
              name="Screen1"
              ref={screen1Ref}
              onClick={() => openPage("EventPage")}
              onPointerOver={() =>
                handleInteraction(screen1Ref, "hover", {
                  x: 1.64,
                  y: 0.75,
                  z: 0.96,
                })
              }
              onPointerOut={() =>
                handleInteraction(screen1Ref, "hover", {
                  x: 1.54,
                  y: 0.65,
                  z: 0.85,
                })
              }
              geometry={nodes.Screen1.geometry}
              material={materials["avaturn_glasses_1_material.003"]}
              position={[1.6, 2.97, 3.07]}
              rotation={[-Math.PI / 2, 0, 0.4]}
              scale={[0, 0, 0]}
            >
              <VideoMaterial url={sTexture1} />
            </mesh>
            <mesh
              name="Screen3"
              ref={screen3Ref}
              onClick={() => openPage("CollabPage")}
              onPointerOver={() =>
                handleInteraction(screen3Ref, "hover", {
                  x: 1.64,
                  y: 0.75,
                  z: 0.96,
                })
              }
              onPointerOut={() =>
                handleInteraction(screen3Ref, "hover", {
                  x: 1.54,
                  y: 0.65,
                  z: 0.85,
                })
              }
              geometry={nodes.Screen3.geometry}
              material={materials["avaturn_glasses_1_material.003"]}
              position={[1.6, 1.13, 3.07]}
              rotation={[-Math.PI / 2, 0, 0.4]}
              scale={[0, 0, 0]}
            >
              <VideoMaterial url={sTexture3} />
            </mesh>
            <mesh
              name="Screen2"
              ref={screen2Ref}
              onClick={() => openPage("GuidePage")}
              onPointerOver={() =>
                handleInteraction(screen2Ref, "hover", {
                  x: 1.64,
                  y: 0.75,
                  z: 0.96,
                })
              }
              onPointerOut={() =>
                handleInteraction(screen2Ref, "hover", {
                  x: 1.54,
                  y: 0.65,
                  z: 0.85,
                })
              }
              geometry={nodes.Screen2.geometry}
              material={materials["avaturn_glasses_1_material.003"]}
              position={[-1.54, 2.97, 3.07]}
              rotation={[-Math.PI / 2, 0, -0.41]}
              scale={[0, 0, 0]}
            >
              <VideoMaterial url={sTexture2} />
            </mesh>
            <mesh
              name="screen4"
              ref={screen4Ref}
              onClick={() => openPage("TeamPage")}
              onPointerOver={() =>
                handleInteraction(screen4Ref, "hover", {
                  x: 1.64,
                  y: 0.75,
                  z: 0.96,
                })
              }
              onPointerOut={() =>
                handleInteraction(screen4Ref, "hover", {
                  x: 1.54,
                  y: 0.65,
                  z: 0.85,
                })
              }
              geometry={nodes.Screen4.geometry}
              material={materials["avaturn_glasses_1_material.003"]}
              position={[-1.54, 1.13, 3.07]}
              rotation={[-Math.PI / 2, 0, -0.41]}
              scale={[0, 0, 0]}
            >
              <VideoMaterial url={sTexture4} />
            </mesh>
          </group>
          <group
            name="base"
            position={[0.03, -0.55, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.71}
          >
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials["Laminate floor"]}
            >
              <MeshTransmissionMaterial
                roughness={0.1}
                metalness={0.8}
                envMap={ManTexture}
                color="rgb(150,220,180)"
                resolution={128}
                thickness={0.1}
                anisotropy={2}
                temporalDistortion={0.1}
                distortion={5}
              />
            </mesh>
            <mesh
              name="Ellipse_1"
              geometry={nodes.Ellipse_1.geometry}
              material={materials["Special Metallic Car Paint"]}
            >
              <MeshTransmissionMaterial
                roughness={0.4}
                metalness={0.2}
                envMap={ManTexture}
                color="rgb(30,180,190)"
                resolution={128}
                thickness={0.35}
                anisotropy={1}
                temporalDistortion={0.1}
                distortion={0.45}
              />
            </mesh>
          </group>
        </group>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={1000}
          near={0.01}
          fov={30}
          position={[-8.59, 1.9, -9.8]}
          rotation={[Math.PI, -0.71, Math.PI]}
        />
      </group>
    </group>
  );
}
function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return <meshBasicMaterial map={texture} transparent toneMapped={true} />;
}

useGLTF.preload("/models/model.glb");
