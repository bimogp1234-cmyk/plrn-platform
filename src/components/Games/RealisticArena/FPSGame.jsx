import React, { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Stats, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import RealisticArena3D from "./RealisticArena3D";
import PlayerControls from "./PlayerControls";
import Target3D from "./Target3D";
import Explosion3D from "./Explosion3D";
import HUD from "./HUD";
import WeaponView from "./WeaponView";
import { useGameStore } from "./store";

/**
 * Main FPSGame component:
 * - renders Canvas + HUD
 * - spawns targets by level
 * - handles shooting (raycast)
 * - spawns Explosion3D on hits
 */

export default function FPSGame() {
  const [shooting, setShooting] = useState(false);

  const cameraRef = useRef();
  const { incScore, level, nextLevel, reset, score } = useGameStore();
  const [targets, setTargets] = useState([]); // {id, type, ref}
  const targetRefs = useRef({});
  const [explosions, setExplosions] = useState([]); // {id, pos}

  const levelConfig = {
    1: { count: 4, speed: 0.9 },
    2: { count: 6, speed: 1.3 },
    3: { count: 9, speed: 1.9 },
  };

  // helper: spawn targets
  const spawn = useCallback(() => {
    const cfg = levelConfig[level] || levelConfig[1];
    const types = [
      "rectangle",
      "diamond",
      "oval",
      "parallelogram",
      "circle",
      "cylinder",
    ];
    const arr = Array.from({ length: cfg.count }).map(() => {
      const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      const type = types[Math.floor(Math.random() * types.length)];
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 10;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y0 = -1;
      targetRefs.current[id] = React.createRef();
      return {
        id,
        type,
        startPos: [x, y0, z],
        ref: targetRefs.current[id],
        speed: cfg.speed,
        lifetime: 5 + Math.random() * 3,
      };
    });
    setTargets(arr);
  }, [level]);

  // on mount / level change spawn
  useEffect(() => {
    spawn();
    return () => {
      targetRefs.current = {};
    };
  }, [spawn]);

  // raycast shooting
  const raycaster = useRef(new THREE.Raycaster());
  const handleShoot = useCallback(() => {
    setShooting(true);
    setTimeout(() => setShooting(false), 150);
    const cam = cameraRef.current;
    if (!cam) return;
    const origin = cam.position.clone();
    const dir = new THREE.Vector3();
    cam.getWorldDirection(dir);
    raycaster.current.set(origin, dir);

    const meshes = [];
    const idMap = [];
    for (const t of targets) {
      const r = targetRefs.current[t.id];
      if (r && r.current && r.current.mesh) {
        meshes.push(r.current.mesh);
        idMap.push(t.id);
      }
    }

    const intersects = raycaster.current.intersectObjects(meshes, true);
    if (intersects.length > 0) {
      const first = intersects[0];
      let hitMesh = first.object;
      while (hitMesh && !meshes.includes(hitMesh)) hitMesh = hitMesh.parent;
      const idx = meshes.indexOf(hitMesh);
      const id = idMap[idx];
      // find target entry
      const target = targets.find((tt) => tt.id === id);
      if (!target) return;
      // spawn explosion at intersection point
      setExplosions((prev) => [
        ...prev,
        { id: `${Date.now()}-${Math.random()}`, pos: first.point.clone() },
      ]);
      // remove target
      setTargets((prev) => prev.filter((p) => p.id !== id));
      delete targetRefs.current[id];

      // sound and scoring
      try {
        new Audio("/assets/sound/pop.mp3").play();
      } catch {}
      // نتحقق من صحة الشكل بناءً على السؤال الحالي
      const { questions, currentQuestionIndex, incScore, nextQuestion } =
        useGameStore.getState();
      const currentQ = questions[currentQuestionIndex];
      if (target.type === currentQ.correct) {
        incScore(10);
        try {
          new Audio("/assets/sound/correct.mp3").play();
        } catch {}
        nextQuestion();
      } else {
        try {
          new Audio("/assets/sound/wrong.mp3").play();
        } catch {}
      }
    }
  }, [targets, incScore]);

  // Canvas camera setter
  function CameraSetter() {
    const { camera } = useThree();
    useEffect(() => {
      cameraRef.current = camera;
      camera.position.set(0, 1.6, 3.5);
    }, [camera]);
    return null;
  }

  // remove explosion after some time
  useEffect(() => {
    if (explosions.length === 0) return;
    const timers = explosions.map((ex) =>
      setTimeout(() => {
        setExplosions((prev) => prev.filter((p) => p.id !== ex.id));
      }, 600)
    );
    return () => timers.forEach((t) => clearTimeout(t));
  }, [explosions]);

  // advance level when all targets done
  useEffect(() => {
    if (targets.length === 0) {
      // small delay then next level or respawn
      const t = setTimeout(() => {
        if (level < 3) nextLevel();
        else spawn(); // repeat level 3
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [targets, level, nextLevel, spawn]);

  return (
    <div className="w-full h-screen relative">
      <HUD onShoot={handleShoot} />
      <div className="absolute inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 2, 6], fov: 70 }}>
          <CameraSetter />
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 10, 6]}
            intensity={0.9}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <RealisticArena3D />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.35}
            scale={12}
            blur={1.8}
          />
          <Environment preset="sunset" />
          <WeaponView shooting={shooting} />
          <PlayerControls />
          {targets.map((t) => (
            <Target3D
              key={t.id}
              ref={t.ref}
              id={t.id}
              type={t.type}
              startPos={t.startPos}
              velocity={t.speed}
              lifetime={t.lifetime}
              onDestroyed={(id, worldPos, hit) => {
                // cleanup when target times out
                setTargets((prev) => prev.filter((p) => p.id !== id));
                delete targetRefs.current[id];
              }}
            />
          ))}
          {explosions.map((ex) => (
            <Explosion3D
              key={ex.id}
              position={ex.pos.toArray()}
              onDone={() => {}}
            />
          ))}
          <Stats />
        </Canvas>
      </div>
    </div>
  );
}
