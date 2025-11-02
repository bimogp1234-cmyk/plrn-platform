import React, { useRef } from "react";
import { Sky, Environment, ContactShadows, Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function RealisticArena3D() {
  const sun = useRef();

  // حركة خفيفة لضوء الشمس لإضافة واقعية
  useFrame((state) => {
    if (sun.current) {
      sun.current.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 10;
      sun.current.position.z = Math.cos(state.clock.elapsedTime * 0.2) * 10;
    }
  });

  return (
    <group>
      {/* ☁️ السماء الواقعية */}
      <Sky sunPosition={[100, 20, 100]} turbidity={8} rayleigh={2.5} mieCoefficient={0.01} mieDirectionalG={0.8} />

      {/* 🌫️ ضباب خفيف لعمق المشهد */}
      <fog attach="fog" args={["#a2caff", 8, 40]} />

      {/* 🌞 مصدر ضوء الشمس */}
      <directionalLight
        ref={sun}
        position={[10, 20, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <ambientLight intensity={0.6} />

      {/* 🧱 أرضية واقعية */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#000000ff"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* 🌫️ ظلال على الأرض */}
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.5}
        scale={40}
        blur={2}
        far={50}
      />

      {/* ✨ نجوم خفيفة في السماء */}
      <Stars radius={100} depth={50} count={3000} factor={4} fade />

      {/* 🟦 جدران شفافة (كحلبة تدريب) */}
      <group position={[0, 1.5, 0]}>
        <mesh rotation={[0, 0, 0]} position={[0, 0, -20]}>
          <planeGeometry args={[40, 10]} />
          <meshStandardMaterial color="#8ab6f9" opacity={0.15} transparent />
        </mesh>
        <mesh rotation={[0, Math.PI, 0]} position={[0, 0, 20]}>
          <planeGeometry args={[40, 10]} />
          <meshStandardMaterial color="#8ab6f9" opacity={0.15} transparent />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]} position={[20, 0, 0]}>
          <planeGeometry args={[40, 10]} />
          <meshStandardMaterial color="#8ab6f9" opacity={0.15} transparent />
        </mesh>
        <mesh rotation={[0, -Math.PI / 2, 0]} position={[-20, 0, 0]}>
          <planeGeometry args={[40, 10]} />
          <meshStandardMaterial color="#8ab6f9" opacity={0.15} transparent />
        </mesh>
      </group>

      {/* 💡 بيئة HDR لإضاءة ناعمة */}
      <Environment preset="sunset" />
    </group>
  );
}


