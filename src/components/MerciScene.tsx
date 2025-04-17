"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";

export default function MerciScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Background stars */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />

          {/* Message in 3D space */}
          <Text3D />

          {/* Controls */}
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

import { Text } from "@react-three/drei";

function Text3D() {
  return (
    <Text
      position={[0, 0, 0]}
      fontSize={0.5}
      color="#00BFFF"
      anchorX="center"
      anchorY="middle"
    >
      Merci pour votre message ! 🚀
    </Text>
  );
}
