import React, { useEffect, useState } from "react";
import { useGameStore } from "./store";

/**
 * HUD overlay (React DOM)
 * - shows level, score
 * - shows crosshair
 * - sets window.__FLOW_CURRENT_ANSWER (optional integration)
 */

export default function HUD({ onShoot }) {
  const { score, level } = useGameStore();
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const handler = () => setLocked(!!document.pointerLockElement);
    document.addEventListener("pointerlockchange", handler);
    return () => document.removeEventListener("pointerlockchange", handler);
  }, []);

  // shoot on mouse click when pointer locked
  useEffect(() => {
    const onMouseDown = (e) => {
      if (document.pointerLockElement) {
        onShoot && onShoot();
      } else {
        const canvas = document.querySelector("canvas");
        if (canvas) canvas.requestPointerLock();
      }
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, [onShoot]);

  return (
    <div className="pointer-events-none">
      {/* top-left */}
      <div className="fixed left-4 top-4 z-50 pointer-events-auto">
        <div className="bg-black/50 text-white px-3 py-2 rounded">
          <div className="text-xs">المستوى</div>
          <div className="text-lg font-bold">Level {level}</div>
          <div className="text-xs mt-1">الدرجات</div>
          <div className="text-lg font-bold text-emerald-300">{score}</div>
        </div>
      </div>
{/* السؤال الحالي */}
<div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 text-white px-6 py-3 rounded-lg shadow-lg max-w-2xl text-center text-lg">
  {useGameStore.getState().questions[useGameStore.getState().currentQuestionIndex].text}
</div>

      {/* crosshair */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div style={{ width: 24, height: 24 }} className="pointer-events-none">
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.2 4.2l2.8 2.8M16.9 16.9l2.8 2.8M4.2 19.8l2.8-2.8M16.9 7.1l2.8-2.8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </div>
      </div>

      {/* bottom center hint */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <div className="bg-black/50 text-white px-4 py-2 rounded">انقر لإطلاق. WASD للحركة. انقر لإقفَال المؤشر.</div>
      </div>
    </div>
  );
}


