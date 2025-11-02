import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Simple 3D explosion: a glowing expanding sphere that fades.
 * Props:
 *  - position: THREE.Vector3 or [x,y,z]
 *  - onDone callback
 */

export default function Explosion3D({ position = [0,0,0], duration = 0.45, onDone }) {
  const mesh = useRef();
  const t = useRef(0);

  useEffect(() => {
    t.current = 0;
  }, []);

  useFrame((state, delta) => {
    t.current += delta;
    const p = mesh.current;
    if (!p) return;
    const progress = Math.min(1, t.current / duration);
    p.scale.setScalar(0.6 + progress * 3.0);
    p.material.opacity = 1 - progress;
    p.material.emissiveIntensity = 2.5 * (1 - progress);
    if (progress >= 1) {
      onDone && onDone();
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial emissive="#e03400ff" emissiveIntensity={2.0} transparent opacity={1.0} />
    </mesh>
  );
}
