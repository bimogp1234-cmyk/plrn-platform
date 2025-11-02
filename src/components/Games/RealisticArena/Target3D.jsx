import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Target3D
 * - represents a moving 3D target shaped like a flowchart symbol
 * - built from primitives: box (process), diamond (rotated octa), cylinder (database), ellipse (scaled torus or cylinder)
 *
 * props:
 *  - id, type ('rectangle','diamond','oval','parallelogram','circle','cylinder')
 *  - startPos: [x,y,z]
 *  - velocity: number
 *  - onDestroyed(id, worldPos, hitBool)
 */

function DiamondGeometry() {
  // create a diamond-like shape using OctahedronGeometry scaled on y
  return <octahedronGeometry args={[0.5, 0]} />;
}

const Target3D = forwardRef(function Target3D(props, ref) {
  const { id, type = "rectangle", startPos = [0, -1, 0], velocity = 0.6, lifetime = 7, onDestroyed } = props;
  const mesh = useRef();
  const tRef = useRef(0);
  const seed = Math.random() * 10;
  useImperativeHandle(ref, () => ({ mesh: mesh.current, id }), [mesh]);

  useFrame((state, delta) => {
    tRef.current += delta;
    const t = tRef.current;
    // vertical motion: move bottom to top across lifetime
    const normalized = t / lifetime; // 0..1
    const y = startPos[1] + normalized * (7); // travel up
    // horizontal oscillation
    const x = startPos[0] + Math.sin(seed + t * 1.6) * 0.8;
    const z = startPos[2] + Math.cos(seed * 0.7 + t * 0.9) * 0.4;
    if (mesh.current) {
      mesh.current.position.set(x, y, z);
      mesh.current.rotation.y += 0.01 * velocity;
    }
    if (t > lifetime) {
      // timed out => call onDestroyed (not hit)
      if (onDestroyed) {
        const pos = mesh.current.getWorldPosition(new THREE.Vector3());
        onDestroyed(id, pos, false);
      }
    }
  });

  // Choose geometry and material by type
  const commonMat = { metalness: 0.2, roughness: 0.4 };
  let geometry = <boxGeometry args={[1.2, 0.7, 0.2]} />;
  let materialColor = "#60a5fa";

  if (type === "rectangle") {
    geometry = <boxGeometry args={[1.2, 0.7, 0.2]} />;
    materialColor = "#60a5fa";
  } else if (type === "diamond") {
    geometry = <octahedronGeometry args={[0.7, 0]} />;
    materialColor = "#f97316";
  } else if (type === "oval") {
    geometry = <cylinderGeometry args={[0.6, 0.6, 0.4, 32]} />;
    materialColor = "#34d399";
  } else if (type === "parallelogram") {
    // skewed box: box then rotate to give parallelogram illusion
    geometry = <boxGeometry args={[1.2, 0.7, 0.2]} />;
    materialColor = "#a78bfa";
  } else if (type === "circle") {
    geometry = <torusGeometry args={[0.5, 0.12, 16, 60]} />;
    materialColor = "#f472b6";
  } else if (type === "cylinder") {
    geometry = <cylinderGeometry args={[0.5, 0.5, 1.0, 32]} />;
    materialColor = "#facc15";
  }

  return (
    <group>
      <mesh ref={mesh} castShadow>
        {geometry}
        <meshStandardMaterial color={materialColor} {...commonMat} />
      </mesh>
    </group>
  );
});

export default Target3D;

