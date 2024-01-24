import React, { useRef } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function ManRef({ manTexture, tweak }) {
  const manRef = useRef();
  const { nodes, materials } = useGLTF("/models/model.glb");
  
  return (
    <group
      ref={manRef}
      name="Armature002"
      position={[0, 2, -4.15]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0}
    >
      <primitive object={nodes.mixamorigHips} />
      <skinnedMesh
        name="Cube002"
        geometry={nodes.Cube002.geometry}
        material={materials["Simple Crystal"]}
        skeleton={nodes.Cube002.skeleton}
      >
        <MeshTransmissionMaterial
          {...tweak}
          envMap={manTexture}
          color="rgb(150,180,170)"
          resolution={128}
          thickness={0.1}
          anisotropy={2}
          temporalDistortion={0.1}
          distortion={5}
        >
          {/* <EffectComposer>
            <Bloom
              luminanceThreshold={0.1}
              luminanceSmoothing={0.5}
              intensity={2}
            />
          </EffectComposer> */}
        </MeshTransmissionMaterial>
      </skinnedMesh>
    </group>
  );
}

useGLTF.preload("/models/model.glb");
