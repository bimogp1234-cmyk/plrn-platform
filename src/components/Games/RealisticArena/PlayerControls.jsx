import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * PlayerControls handles:
 * - PointerLockControls for camera rotation
 * - Basic WASD movement (no gravity; constrained within arena radius)
 *
 * Usage: include inside Canvas.
 */

export default function PlayerControls({ speed = 4 }) {
  const controlsRef = useRef();
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  const move = useRef({ forward: 0, backward: 0, left: 0, right: 0 });
  const { camera } = useThree();

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === "KeyW") move.current.forward = 1;
      if (e.code === "KeyS") move.current.backward = 1;
      if (e.code === "KeyA") move.current.left = 1;
      if (e.code === "KeyD") move.current.right = 1;
    };
    const onKeyUp = (e) => {
      if (e.code === "KeyW") move.current.forward = 0;
      if (e.code === "KeyS") move.current.backward = 0;
      if (e.code === "KeyA") move.current.left = 0;
      if (e.code === "KeyD") move.current.right = 0;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    const ctrl = controlsRef.current;
    if (!ctrl) return;

    // compute input direction in local space
    direction.current.set(
      move.current.right - move.current.left,
      0,
      move.current.backward - move.current.forward
    );
    if (direction.current.lengthSq() > 0) direction.current.normalize();

    // get forward vector from camera rotation (y axis)
    const quat = camera.quaternion;
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(quat);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(quat);

    // desired velocity in world space
    velocity.current.set(0, 0, 0);
    velocity.current.add(forward.clone().multiplyScalar(-direction.current.z));
    velocity.current.add(right.clone().multiplyScalar(direction.current.x));
    velocity.current.normalize().multiplyScalar(speed * delta);

    // move camera position, but constrain to arena radius (approx)
    camera.position.add(velocity.current);

    const maxR = 14; // keep inside arena minus margin
    const dist = Math.hypot(camera.position.x, camera.position.z);
    if (dist > maxR) {
      // clamp back to circle
      camera.position.x *= (maxR / dist);
      camera.position.z *= (maxR / dist);
    }

    // keep camera height a bit above floor
    camera.position.y = 1.6;
  });

  return <PointerLockControls ref={controlsRef} />;
}

