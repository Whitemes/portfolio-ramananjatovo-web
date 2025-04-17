"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBackground() {
  return (
    <Canvas
      // on fixe le canvas plein écran, derrière tout le reste
      className="fixed inset-0 w-full h-screen -z-10"
      // optionnel : anti‑aliasing, pixel ratio, etc.
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <ambientLight intensity={0.5} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </Canvas>
  );
}
